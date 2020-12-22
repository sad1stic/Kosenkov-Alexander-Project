local computer = require("computer")
computer.beep(440, .1)
local component = require("component")
local reactors = {}
do
  local t = component.list("nc_fission_reactor")
  for address in pairs(t) do table.insert(reactors, component.proxy(address)) end
end
local event = require("event")
local term = require("term")
if term then term.clear() end
local controls, formatstring, header = {}, "", ""
do
  for i = 1, #reactors do
    controls[i] = {fuzzyenergyshutdown = false, fuzzyheatshutdown = false, shutdown = true}
  end
  header = string.format(string.format("%%-%ds   Fuel       Heat  Energy  Status", tostring(#reactors):len()), "#")
  formatstring = string.format("%%-0%dd   %%-7s  %%5.1f%%%%  %%5.1f%%%%  %%s", tostring(#reactors):len())
end
local low, high = 0.25, 0.5
if term then
  term.clear()
  print(header)
end
repeat
  local keypress = event.pull(0, "key_down")
  if keypress then
    print("Keypress detected! Shutting down all reactors.")
    for _, reactor in pairs(reactors) do
      reactor.deactivate()
    end
    os.exit()
  end
  if term then term.setCursor(1, 2) end
  for i = 1, #reactors do
    local reactor = reactors[i]
    local energylevel = reactor.getEnergyStored() / reactor.getMaxEnergyStored()
    local heatlevel = reactor.getHeatLevel() / reactor.getMaxHeatLevel()
    local newfuzzyenergyshutdown = controls[i].fuzzyenergyshutdown and (energylevel > low) or (energylevel > high)
    local newfuzzyheatshutdown = controls[i].fuzzyheatshutdown and (heatlevel > low) or (heatlevel > high)
    local newshutdown = newfuzzyenergyshutdown or newfuzzyheatshutdown
    if newshutdown then reactor.deactivate() else reactor.activate() end
    local fueltype = reactor.getFissionFuelName()
    local outoffuel = (fueltype == "No Fuel")
    if term then
      print(string.format(formatstring, i, reactor.getFissionFuelName(), heatlevel * 100, energylevel * 100, outoffuel and "Out of fuel!" or (newshutdown and "Off         " or "On          ")))
    end
    if outoffuel then
      computer.beep(440, .1)
    end
    controls[i].fuzzyenergyshutdown, controls[i].fuzzyheatshutdown, controls[i].shutdown = newfuzzyenergyshutdown, newfuzzyheatshutdown, newshutdown
  end
until false

"""A bot to list all members of a server."""
import csv
import time
 
from discord.ext import commands
from discord.ext.commands import Bot
 
# constants
PREFIX = "~"
TOKEN = "PUT YOUR BOTs TOKEN HERE"
 
bot = Bot(command_prefix=PREFIX)
 
 
@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')
 
 
@bot.event
async def on_command_error(error, ctx):
    if isinstance(error, commands.CommandNotFound):
        return
    else:
        print(error)
 
 
@bot.command(pass_context=True)
async def stat(ctx):
    """Returns a CSV file of all users on the server."""
    await bot.request_offline_members(ctx.message.server)
    before = time.time()
    nicknames = [m.display_name for m in ctx.message.server.members]
    with open('temp.csv', mode='w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, dialect='excel')
        for v in nicknames:
            writer.writerow([v])
    after = time.time()
    await bot.send_file(ctx.message.author, 'temp.csv', filename='stats.csv',
                        content="Here you go! Check your PM's. Generated in {:.4}ms.".format((after - before)*1000))
 
 
if __name__ == '__main__':
    bot.run(TOKEN)

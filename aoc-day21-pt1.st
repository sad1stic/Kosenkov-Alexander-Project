#!/usr/local/bin/gst -q
 
LookupTable extend [
    incAt: key [
        ^self at: key put: (self at: key ifAbsent: [0]) + 1.
    ]
]
 
String extend [
    splitString: str [
        | ret rs |
        ret := OrderedCollection new.
        rs  := self readStream.
        [ rs atEnd ] whileFalse: [ ret addLast: (rs upToAll: str) ].
        ^ret
    ]
]
 
Object subclass: Allergen [
    | name num_rule poss_ing |
 
    Allergen class >> add: a_name [
        ^(super new) init: a_name.
    ]
 
    init: a_name [
        name     := a_name.
        num_rule := 0.
        poss_ing := LookupTable new.
        ^self
    ]
 
    incRule [
        num_rule := num_rule + 1.
        ^self
    ]
 
    addPossible: ingArray [
        ingArray do: [ :i | poss_ing incAt: i ].
        ^self
    ]
 
    reducePossible [
        ^poss_ing := poss_ing select: [ :n | n = num_rule ].
    ]
 
    getPossible [
        ^poss_ing
    ]
 
    removePossible: ing [
        ^poss_ing removeKey: ing ifAbsent: [].
    ]
]
 
"
|  Mainline
"
ingreds   := LookupTable new.
allergens := LookupTable new.
 
stdin linesDo: [ :line |
    parts := line splitString: '(contains '.
 
    rule_ing := (parts first substrings).
    rule_ing do: [ :i | ingreds incAt: i ].
 
    (parts second subStrings: ', )') do: [ :rule_all |
        (allergens at: rule_all ifAbsentPut: [ Allergen add: rule_all ])
                   incRule; addPossible: rule_ing.
    ].
].
 
poss := Set new.
allergens do: [ :a | poss addAll: a reducePossible keys ].
 
" Assuming reducePossible leaves just the allergens (works for input)"
'Part 1: ' display.
((ingreds keys - poss) inject: 0 into: [:a :b | a + (ingreds at: b)]) displayNl.
 
" Part 2 "
allerg := allergens keys.
ans_key := LookupTable new.
[ allerg size > 0 ] whileTrue: [
    allerg do: [ :a |
        ings := (allergens at: a) getPossible.
        (ings size == 1) ifTrue: [
            i := ings keys anyOne.
            ans_key at: a put: i.
            poss remove: i.
            allerg remove: a.
            allerg do: [ :j | (allergens at: j) removePossible: i ].
        ]
    ]
].
 
'Part 2: ' display.
part2 := OrderedCollection new.
allergens keys sorted do: [ :a | part2 add: (ans_key at: a) ].
(String join: part2 separatedBy: ',') displayNl.

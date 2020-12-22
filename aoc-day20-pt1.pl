use strict;
use warnings;
 
$/ = '';
 
my @Rev_Map = map { oct("0b" . reverse(sprintf( "%010b", $_ ))) } (0 .. 1023);
 
my %Tiles;
 
while (<>) {
    my @lines = split( "\n" );
    chomp @lines;
 
    my ($num) = ((shift @lines) =~ m#Tile (\d+):#);
 
    my @tile = map { [ split( // ) ] } @lines;
 
    my ($ident, $rot1, $rot2, $rot3)   = (0,0,0,0);  # top, left, bottom, right
    foreach my $i (0 .. 9) {
        $ident  = ($ident << 1) | ($tile[0][$i] eq '#');
        $rot1   = ($rot1 << 1)  | ($tile[9-$i][0] eq '#');
        $rot2   = ($rot2 << 1)  | ($tile[9][9-$i] eq '#');
        $rot3   = ($rot3 << 1)  | ($tile[$i][9] eq '#');
    }
 
    my $flip  = $Rev_Map[ $ident ];
    my $flip1 = $Rev_Map[ $rot1  ];
    my $flip2 = $Rev_Map[ $rot2  ];
    my $flip3 = $Rev_Map[ $rot3  ];
 
    $Tiles{$num}{edge} = [ $ident, $rot1, $rot2, $rot3, $flip1, $flip, $flip3, $flip2 ];
    $Tiles{$num}{tile} = \@tile;
}
 
my @tlist = keys %Tiles;
 
my %Match;
foreach my $t1 (0 .. $#tlist) {
    foreach my $t2 ($t1 + 1 .. $#tlist) {
        foreach my $i (@{$Tiles{$tlist[$t1]}{edge}}) {
            if (grep { $i == $_ } @{$Tiles{$tlist[$t2]}{edge}}) {
                $Match{$tlist[$t1]}{$tlist[$t2]}++;
                $Match{$tlist[$t2]}{$tlist[$t1]}++;
            }
        }
    }
}
 
print "Corners:\n";
my $part1 = 1;
foreach my $k (keys %Match) {
    if (2 == keys %{$Match{$k}}) {
        print "$k\t", join( ',', keys %{$Match{$k}} ), "\n";
        $part1 *= $k;
    }
}
 
print "\nPart 1: $part1\n";

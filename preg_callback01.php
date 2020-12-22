<?php
 
    function replace_num_entity($ord)
    {
        $ord = $ord[1];
        if (preg_match('/^x([0-9a-f]+)$/i', $ord, $match))
        {
            $ord = hexdec($match[1]);
        }
        else
        {
            $ord = intval($ord);
        }
       
        $no_bytes = 0;
        $byte = array();
 
        if ($ord < 128)
        {
            return chr($ord);
        }
        elseif ($ord < 2048)
        {
            $no_bytes = 2;
        }
        elseif ($ord < 65536)
        {
            $no_bytes = 3;
        }
        elseif ($ord < 1114112)
        {
            $no_bytes = 4;
        }
        else
        {
            return;
        }
 
        switch($no_bytes)
        {
            case 2:
            {
                $prefix = array(31, 192);
                break;
            }
            case 3:
            {
                $prefix = array(15, 224);
                break;
            }
            case 4:
            {
                $prefix = array(7, 240);
            }
        }
 
        for ($i = 0; $i < $no_bytes; $i++)
        {
            $byte[$no_bytes - $i - 1] = (($ord & (63 * pow(2, 6 * $i))) / pow(2, 6 * $i)) & 63 | 128;
        }
 
        $byte[0] = ($byte[0] & $prefix[0]) | $prefix[1];
 
        $ret = '';
        for ($i = 0; $i < $no_bytes; $i++)
        {
            $ret .= chr($byte[$i]);
        }
 
        return $ret;
    }
 
    $test = 'This is a &#269;&#x5d0; test&#39;';
 
    echo $test . "<br />\n";
    echo preg_replace_callback('/&#([0-9a-fx]+);/mi', 'replace_num_entity', $test);
 
?>

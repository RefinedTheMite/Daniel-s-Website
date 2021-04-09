<?php /* CloudFilt.com */
function getUserIP43_CF() {
    $ipaddress = "";
    $keys = ["REMOTE_ADDR", "HTTP_CLIENT_IP", "HTTP_X_FORWARDED_FOR", "HTTP_X_FORWARDED", "HTTP_FORWARDED_FOR", "HTTP_FORWARDED"];

    foreach ($keys as $key) {
        if (isset($_SERVER[$key]) and
preg_match("/^(\d{1,3}\.){3}\d{1,3}$/", $_SERVER[$key]) === 1 and strpos($_SERVER[$key], "127.") !== 0 and strpos($_SERVER[$key],
"192.168.") !== 0 and strpos($_SERVER[$key], "10.") !== 0) {
            return $_SERVER[$key];
        }
    }
    return "UNKNOWN";
}
$ipCF43_CF = getUserIP43_CF(); 
if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {$link20_CF = "https";}
else{$link20_CF = "http"; }
$link20_CF .= "://"; 
$link20_CF .= $_SERVER['HTTP_HOST']; 
$link20_CF .= $_SERVER['REQUEST_URI']; 
$url_CF23 = "https://api12335.cloudfilt.com/phpcurl";
$data_CF23 = array("ip" => $ipCF43_CF, "KEY" => "3hq77ttzey0SiC60UfvV", "URL" => $link20_CF);
$options_CF23 = array("http" => array(
	"header" => "Content-Type: application/x-www-form-urlencoded\r\n",
	"method"  => "POST",
	"content" => http_build_query($data_CF23),
	"timeout" => 1
));
$context_CF23  = stream_context_create($options_CF23);
$server67_CF = file_get_contents($url_CF23, false, $context_CF23);
if ($server67_CF != "OK" and !empty($server67_CF)) { header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");header("Cache-Control: post-check=0, pre-check=0", false);header("Pragma: no-cache"); header("Location: https://cloudfilt.com/stop-$ipCF43_CF-EKBdHi8u07Pt8EBSRZrC");echo "<SCRIPT LANGUAGE='JavaScript'>document.location.href='https://cloudfilt.com/stop-".$ipCF43_CF."-EKBdHi8u07Pt8EBSRZrC'</SCRIPT>";die;}
?>

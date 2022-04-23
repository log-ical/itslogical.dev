<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap" rel="stylesheet"> 
<link rel="stylesheet" href="./.files.css">
<script src=".sorttable.js"></script>
    <title>log-ical</title>
    
  </head>
  <body>
    <div id="root"></div>
    <script src="https://kit.fontawesome.com/31e211b551.js" crossorigin="anonymous"></script>
  </body>
</html>

<center>
<div class="header"><pre class="logotext">_ __       __            _            __     __         <br>(_) /______/ /___  ____ _(_)________ _/ /____/ /__ _   __<br>/ / __/ ___/ / __ \/ __ `/ / ___/ __ `/ // __  / _ \ | / /<br>/ / /_(__  ) / /_/ / /_/ / / /__/ /_/ / // /_/ /  __/ |/ / <br>/_/\__/____/_/\____/\__, /_/\___/\__,_/_(_)__,_/\___/|___/  <br>                   /____/                                   <br></pre><div class="TopbarContainer"><div class="TopbarList"><a class="tab" id="" href="/" target="">Home</a><a class="tab" id="" href="/resources" target="">Resources</a> <a class="tab" id="" href="/builder/" target="">CS:S Server Builder</a> <a class="tab" id="active" href="/server/maps/.index.php" target="">FastDL</a> <a class="tab" id="" href="https://github.com/log-ical" target="_blank">Github</a> <a class="tab" id="" href="https://gamebanana.com/members/1731795" target="_blank">Gamebanana</a> </div></div></div>
</center>

<div class="content">


  <center>
  <h3>Files</h3>
    <table class="sortable">
      <thead>
        <tr>
        <th>Filename</th>&nbsp;&nbsp;
        <th>Size</th>&nbsp;&nbsp;
        <th>Date Modified</th>
        </tr>
      </thead>
      <tbody>

<?php
        $myDirectory=opendir(".");
      

        while($entryName=readdir($myDirectory)) {
        $dirArray[]=$entryName;
        }
      

        closedir($myDirectory);
      

        $indexCount=count($dirArray);
      

        sort($dirArray);
    



        for($index=0; $index < $indexCount; $index++) {
			
				$hide=".";

      if(substr("$dirArray[$index]", 0, 1) != $hide) {
            $name=$dirArray[$index];
            $namehref=$dirArray[$index];

            $size=number_format(filesize($dirArray[$index]));

            $modtime=date("M j Y g:i A", filemtime($dirArray[$index]));
            $timekey=date("YmdHis", filemtime($dirArray[$index]));

			if($name=="."){$name=". (Current Directory)"; $extn="&lt;System Dir&gt;";}
			if($name==".."){$name=".. (Parent Directory)"; $extn="&lt;System Dir&gt;";}
            
			echo "
            <tr class='$class'>
              <td><a href='./maps/$namehref' download>$name</a>&nbsp&nbsp</td>
              <td><a href='./maps/$namehref' download>$size</a>&nbsp&nbsp</td>
              <td sorttable_customkey='./$timekey'><a href='./maps/$namehref' download>$modtime</a></td>
            </tr>";

        }
      }
?>

      </tbody>
      </table>
    </center>
</div>



</body>
</html>

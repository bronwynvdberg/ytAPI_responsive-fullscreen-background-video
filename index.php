<?php
	//	To include the background video into your site, use the video.php file as an include or copy & paste the code into your file
	//	Dont forget to include style.css & script.js
	//	place all page content below the video container(id = video_bg) and wrap in div with id = v_page_content

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Responsive background video using Youtube API & javascript</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet">

		<link rel="stylesheet" href="style.css" />
		<style type="text/css">
			#above_fold{
				height: 100%;
			}
			#v_page_content{
					background: #3459864f;
			}
		</style>
	</head>
	<body>
		<?php include "video.php"; ?>
		<div id="v_page_content">
			<div id="above_fold"></div>
			<div id="below_fold"></div>
		</div>
		<script type="text/javascript" src="script.js"></script>
	</body>
</html>
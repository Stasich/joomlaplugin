<?php
defined('_JEXEC') or die('Restricted access');

$doc = JFactory::getDocument();
$doc->addStyleSheet ("http://xn--h1aaljkbdi.xn--p1ai/promo/css/stas.css");
$doc->addScriptDeclaration("
	$(document).ready(function() {
		$('.addtocart-button').click(function(){
			$('#overlay_stas').fadeIn(400,
				function(){
					$('#modal_stas')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 200);
				}
			);
		});
		$('#modal_close_stas, #overlay_stas').click( function(){
			$('#modal_stas')
				.animate({opacity: 0, top: '45%'}, 200,
					function(){
						$(this).css('display', 'none');
						$('#overlay_stas').fadeOut(400);
					}
				)
		})
	});
");

?>


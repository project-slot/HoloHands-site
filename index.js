var width = $(window).width()
window.onscroll = function () {
	if (width >= 1000) {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			$('#header').css('background', 'rgba(0,0,0,0)')
			$('#header').css('color', 'var(--text-primary)')
			$('#header').css('padding', '4vh 4vw')
			$('#navigation a').hover(
				function () {
					$(this).css('border-bottom', '2px var(--secondary)')
				},
				function () {
					$(this).css('border-bottom', '2px solid transparent')
				}
			)
		} else {
			$('#header').css('background', 'rgba(0, 0, 0, 0)')
			$('#header').css('color', 'var(--text-tertiary)')
			$('#header').css('padding', '4vh 4vw')
			$('#navigation a').hover(
				function () {
					$(this).css('border-bottom', '2px solid #fff')
				},
				function () {
					$(this).css('border-bottom', '2px solid transparent')
				}
			)
		}
	}
}

function magnify(imglink) {
	$('#img_here').css('background', `url('${imglink}') center center`)
	$('#magnify').css('display', 'flex')
	$('#magnify').addClass('animated fadeIn')
	setTimeout(function () {
		$('#magnify').removeClass('animated fadeIn')
	}, 800)
}

function closemagnify() {
	$('#magnify').addClass('animated fadeOut')
	setTimeout(function () {
		$('#magnify').css('display', 'none')
		$('#magnify').removeClass('animated fadeOut')
		$('#img_here').css('background', `url('') center center`)
	}, 800)
}

setTimeout(function () {
	$('#loading').addClass('animated fadeOut')
	setTimeout(function () {
		$('#loading').removeClass('animated fadeOut')
		$('#loading').css('display', 'none')
	}, 800)
}, 1650)

$(document).ready(function () {
	$('a').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault()
			var hash = this.hash
			$('body,html').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				1800,
				function () {
					window.location.hash = hash
				}
			)
		}
	})
})

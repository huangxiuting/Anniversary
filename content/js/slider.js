// 左右滑动
// ;(function () {
  // // 是否可以右滑
  // var toRight = true
  // // 是否可以左滑
  // var toLeft = false
  // // 单个元素的宽度
  // var itemWidth = $('.nav-list-item').width()
  // // 包裹元素层宽度
  // var containWidth = $('.nav-list').width()
  // // 文档宽度
  // var docWidth = $(document).width()
  // // 包裹元素距离左边的距离/可往左边滑动的距离
  // var containLeft = $('.nav-list').offset().left
  // // 可往右边滑动距离
  // var toRightFar = containWidth - containLeft - docWidth
  // // 移动数据
  // startX = 0
  // startY = 0
  // endX = 0
  // endY = 0

  // function setOffset () {
  //   containLeft = $('.nav-list').offset().left
  //   toRightFar = containWidth + containLeft - docWidth
  // }

  // function moveRight (len) {
  //   if ( toRightFar > Math.abs(len) ) {
  //     $('.nav-list').css({ left: (containLeft + len) + 'px' })
  //   } else if ( toRightFar < Math.abs(len) && toRightFar >= 0 ) {
  //     $('.nav-list').css({ left: (containLeft + len) + 'px' })
  //   }
  //   setOffset()
  // }

  // function moveLeft (len) {
  //   if ( Math.abs(containLeft) > len ) {
  //     $('.nav-list').css({ left: (containLeft + len) + 'px' })
  //   } else if ( Math.abs(containLeft) < len && Math.abs(containLeft) >= 0 ) {
  //     $('.nav-list').css({ left: 0 + 'px' })
  //   }
  //   setOffset()
  // }

//   $(".nav-list").on("touchstart", function(e) {
//     e.preventDefault()
//     startX = e.originalEvent.changedTouches[0].pageX
//     startY = e.originalEvent.changedTouches[0].pageY
// 　})

//   $(".nav-list").on("touchmove", function(e) {
//     e.preventDefault()
//     endX = e.originalEvent.changedTouches[0].pageX
//     endY = e.originalEvent.changedTouches[0].pageY
//     X = endX - startX
//     Y = endY - startY

//     if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
//       // 从左往右滑
//       moveLeft(X)
//     } else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
//       // 从右往左滑
//       moveRight(X)
//     }
//   })
  
// })()

;(function () {
    // 文档中轴位置
    var midDoc = Math.floor($(document).width() / 2)
    // 单个元素一半宽度
    var midSelfItem = Math.floor($('.nav-list-item').width() / 2)
    // 选择栏目的左边位置
    var targetLeftPosi = 0
    // 选择栏目的右边位置
    var targetRightPosi = $('.nav-list-item').width()
    // 点击的图标位置
    var targetPosi = 0
    // 移动低值
    var lowerPosi = Number(midDoc) - Number(midSelfItem)
    // 移动高值
    var hightPosi = Number(midDoc) + Number(midSelfItem)
    // 可从左往右移动距离
    var offsetLeft = $('.nav-list').offset().left
    // 可往右往左移动距离
    var offsetRight = $('.nav-list').width() - $(document).width()
    // 浮动距离，小于此距离则取整
    var staticLen = 20

    $('.nav-list-item').on('click', function (e) {
      // e.preventDefault()
      // location.href = e.target.getAttribute('data-item')
      $('.nav-list a').removeClass('current')
      e.target.setAttribute('class', 'nav-list-item current')
      // var targetUrl = e.target.getAttribute('data-item')
      // var iframe = document.createElement('iframe')
      // iframe.src = targetUrl
      // iframe.width = '100%'
      // iframe.height = '100%'
      // iframe.setAttribute('frameborder', "0")
      // $('#iframe-contain').empty().append(iframe)

      targetLeftPosi = e.originalEvent.pageX - e.originalEvent.offsetX
      targetRightPosi = Number(targetLeftPosi) + Number($('.nav-list-item').width())
      targetPosi = e.originalEvent.pageX
      move()
    })

    function move () {
      if (targetPosi < lowerPosi) {
        // 需要从左往右移动
        if (Math.abs(offsetLeft) < (hightPosi - targetRightPosi)) {
          $('.nav-list').css({ left: 0 + 'px' })
        } else {
          $('.nav-list').css({ left: (hightPosi - targetRightPosi) - Math.abs(offsetLeft) + 'px' })
        }
      } else if (targetPosi > hightPosi) {
        // 需从右往左移动
        if ( offsetRight < (targetLeftPosi - lowerPosi)) {
          $('.nav-list').css({ left: $(document).width() - $('.nav-list').width() + 'px' })
        } else {
          $('.nav-list').css({ left: offsetLeft - (targetLeftPosi - lowerPosi)  + 'px' })
        }
      }
      offsetLeft = $('.nav-list').offset().left
      offsetRight = $('.nav-list').width() - $(document).width() - Math.abs(offsetLeft)
    }
})()

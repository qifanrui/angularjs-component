var tableController = function ($element) {
  var ctrl = this;
  ctrl.width = 0;
  ctrl.isFiexd = false;
  console.log('1111');
  console.log(this.header);
  console.log(this.data);
  console.log(this.isShowCheckbox);

  ctrl.$onInit = function () {
    initTable();
  }

  ctrl.$onChanges = function () {
    console.log('onChanges')
  }

  ctrl.$onDestroy = function () {
    console.log('onDestroy')
  }

  ctrl.$postLink = function (e) {
    console.log('postLink', e)
  }

  ctrl.onScroll = function (e) {
    console.log(e);
  }

  /**
   * 初始化表格
   */
  var initTable = function () {
    calcTableWidth();
    initScrollFiexd();
    linkageScroll();
  }



  var linkageScroll = function () {
    var tableElement = $element.find('#table');
    var headElement = tableElement.find('#thead');
    tableElement.on('scroll', function (event) {
      if (ctrl.isFiexd) {
        console.log('ss')
        headElement.first().scrollLeft(event.currentTarget.scrollLeft);
      }
    })
  }

  /**
   * 表头固定
   * 当页面滚动到表格上一个兄弟元素顶部时，将表头与表格上一个兄弟元素固定到顶部
   */
  var initScrollFiexd = function () {
    var prevElement = $element.prev();
    var tableElement = $element.find('#table');
    var headElement = tableElement.find('#thead');
    var bodyElement = tableElement.find('#tbody');
    var prevHeight = prevElement.height();
    var prevOffsetTop = prevElement.offset().top;
    var headHeight = headElement.height();
    window.onscroll = function (e) {
      var scrollTop = this.document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > prevOffsetTop) {
        prevElement.addClass('fixed');
        headElement.addClass('fixed');
        headElement.css('top', prevHeight + 'px');
        bodyElement.css('margin-top', prevHeight + headHeight + 'px');
        ctrl.isFiexd = true;
      } else {
        prevElement.removeClass('fixed');
        headElement.removeClass('fixed');
        headElement.css('top', 0 + 'px');
        bodyElement.css('margin-top', 0 + 'px');
        ctrl.isFiexd = false;
      }
    }
  }

  /**
   * 计算table表格宽度 
   */
  var calcTableWidth = function () {
    var width = 0;
    for (var i in ctrl.header) {
      width += ctrl.header[i].style.width.replace('vw', '') >> 0;
    }
    ctrl.width = width;
  }
}
angular
  .module('tableModule', [])
  .component('visionTable', {
    templateUrl: 'table/table.html',
    bindings: {
      header: '<',
      data: '<',
      isShowCheckbox: '<'
    },
    controller: tableController
  });
$(function(){
  console.log('oadイベントが発生しました');
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});
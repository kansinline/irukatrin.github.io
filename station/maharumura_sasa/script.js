function openTab(event, tabName) {
  // すべてのタブを非表示
  let contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // すべてのボタンのアクティブクラスを削除
  let buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // 該当するタブを表示し、ボタンをアクティブに
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// 初期タブを表示
document.getElementsByClassName('tab-button')[0].click();

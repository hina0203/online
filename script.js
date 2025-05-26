// スムーズスクロール処理
document.getElementById('scrollToForm').addEventListener('click', function() {
  document.getElementById('contactFormSection').scrollIntoView({ behavior: 'smooth' });
});

// フォーム送信処理（ページ遷移なしの擬似処理）
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // 簡単なバリデーション
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = 'すべての必須項目を入力してください。';
    formMessage.style.color = '#ff6b6b'; // 赤っぽく
    return;
  }

  // ここで実際はAjax送信など行うが、今回は擬似送信

  formMessage.textContent = 'お問い合わせありがとうございます。3営業日以内にご連絡いたします。';
  formMessage.style.color = '#d4af37';

  // フォームをリセット
  this.reset();
});

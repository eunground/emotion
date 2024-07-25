function createBead() {
    // 입력 값 가져오기
    const imageInput = document.getElementById('imageUpload');
    const textInput = document.getElementById('textInput').value;
    const emotionSelect = document.getElementById('emotionSelect').value;
    
    // 파일 리더 사용하여 이미지 URL 생성
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageUrl = e.target.result;
        
        // 구슬 요소 생성
        const bead = document.createElement('div');
        bead.className = `bead emotion-${emotionSelect}`;
        
        const img = document.createElement('img');
        img.src = imageUrl;
        bead.appendChild(img);

        // 감정 텍스트 생성
        const emotion = document.createElement('p');
        emotion.textContent = emotionSelect;
        emotion.className = 'emotion-text';
        bead.appendChild(emotion);
        
        // 한 줄 글쓰기 텍스트 생성
        const text = document.createElement('p');
        text.textContent = textInput;
        text.className = 'text-content'; // 한 줄 글쓰기에 클래스 추가
        bead.appendChild(text);
        
        // 감정 구슬 컨테이너에 추가
        document.getElementById('emotionBeadsContainer').appendChild(bead);
    };
    
    // 이미지 파일 읽기
    if (imageInput.files[0]) {
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('이미지를 업로드해주세요.');
    }
}

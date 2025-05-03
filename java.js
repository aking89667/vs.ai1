function sendMessage() {
    const input = document.getElementById("chatInput").value;
    document.getElementById("chatOutput").innerText = "🤖 AI Response: " + input;
}

function generateImage() {
    const prompt = document.getElementById("imagePrompt").value;
    document.getElementById("imageResult").innerHTML = `<p>🖼️ Image based on: ${prompt}</p><img src='https://via.placeholder.com/400x200?text=${encodeURIComponent(prompt)}' alt='AI Image'>`;
}

document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('subscribeMsg').innerText = '✅ You have subscribed successfully!';
});

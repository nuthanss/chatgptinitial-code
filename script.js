async function chatgpt() {
  const token = "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";

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },

    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hi!" }],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      let res = data.choices[0].message.content;
      console.log(res)
    });
}

chatgpt();

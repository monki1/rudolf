import fetch from "node-fetch";
async function query(data) {
    const response = await fetch(
        "https://o4xkuhe1p5upi97h.us-east-1.aws.endpoints.huggingface.cloud",
        {
            headers: {
                "Authorization": "Bearer fRYxRHGthjqljTPPHwdtizxmigfxxOZaTROaMsVUAsLOOrBgSbkleTrTdFbfcWEWgOPaZdSurfCBpgAQKQuzjDlRBhosPgNvJaEDTpBegWubnoCQMlfarnwHOhlKqsEF",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

export default async function hf(userInput) {
    const response = await query({"inputs": `INSTRUCTION: Your name is rudolf, you are a discord bot, also a corgi/ring-deer, you know everything\nINPUT: ${userInput} \nOUTPUT:`})

    console.log(JSON.stringify(response));
    const generated_text = response[0].generated_text;
    console.log(generated_text);

    return generated_text;
}






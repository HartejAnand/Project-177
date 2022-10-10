let stories = [
    {
        "inputs": 4,
        "title": "Hint: Stronget bite force of any Dinosaur",
        "story": `<span class="rep_input">_</span> - <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span>`,
        "words": ["t", "r", "e", "x"]
    },
    {
        "inputs": 15,
        "title": "Hint: My favorite Dinosaur!",
        "story": `<span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span>`,
        "words": ["t", "h", "e", "r", "i", "z", "i", "n", "o", "s", "a", "u", "r", "u", "s"]
    },
    {
        "inputs": 4,
        "title": "Hint: tniH",
        "story": `<span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span> <span class="rep_input">_</span>.`,
        "words": ["h", "i", "n", "t"]
    }
]
$(document).ready(function () {
    displayStory();
})

$(function (){
    $(".input_field").keyup(function (){
        let id = $(this).attr("id");
        let input_number = id.split("_")[1]

        $(".rep_input").eq(input_number).html($(this).val());
    })
    $("next_story").click(function (){
        displayStory();
    })
})

function displayStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    $("#story_title").html(story.title)

    $("#bank_words").empty();
    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty();
    for (let i = 0; i < story.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i + 1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
}

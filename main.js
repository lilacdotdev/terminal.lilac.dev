// TODO: RESUME CASE

const terminal_in = document.getElementById('cmd-typing');
const text_response = document.getElementById('output');
const trace = document.getElementById('trace');

let prompt = "";

// ! DEBUG: Keydown on in textarea.
terminal_in.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        trace.innerHTML += "<span>terminal@<span class='title-name'>lilaccs.dev</span> > ";
        command(terminal_in.value.replace(/\s/g, ''));
    }
});

terminal_in.addEventListener("input", (e) => {
    text_response.innerHTML = terminal_in.value;
});


function command(cmd) {
    switch(cmd.toLowerCase()) {
        case 'help':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span style='color:#f9e2af'>Help Menu</span><br>" + 
            "<span style='color:#f9e2af'>help</span><span> - Commands! Lists all usable commands.</span><br>" +
            "<span style='color:#f9e2af'>whois</span><span> - Who am I? Displays a small bio of myself.</span><br>" +
            "<span style='color:#f9e2af'>projects</span><span> - Wanna see? Shows a short list of my projects with links!</span><br>" +
            "<span style='color:#f9e2af'>objective</span><span> - Take a Guess! Showcases a short message of what my aspirations are.</span><br>" +
            "<span style='color:#f9e2af'>contact</span><span> - Email me! Lists all my contacts (with links!)</span><br>" +
            "<span style='color:#f9e2af'>clear</span><span> - Now let me be clear. Clears all history!</span><br>" + 
            "<span style='color:#f9e2af'>dedication</span><span> - Dedicated to a certain someone... Prints a dedication!</span><br>";
            terminal_in.value = "";
            break;

        case 'whois':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span style='color:#f9e2af'>Who am I?</span><br>" +
            "<span>My (nick)name is <span style='color:#cba6f7'>Lilac</span>, and I'm a developer with an interest in just about everything.</span><br>" + 
            "<span>I yearn to learn more about how software works, and love to create things with my time.</span><br>" + 
            "<span>My passions include <span style='color:#cba6f7'>Game Development</span>, <span style='color:#cba6f7'>Software Design</span>, and <span style='color:#cba6f7'>Full-Stack Development</span>.</span><br>" + 
            "<span>My hobbies include <span style='color:#cba6f7'>Drawing/Painting</span>, <span style='color:#cba6f7'>Guitar</span>, <span style='color:#cba6f7'>Sewing</span>, and <span style='color:#cba6f7'>Writing</span>.</span><br>";
            terminal_in.value = "";
            break;

        case 'projects':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span style='color:#f9e2af'>Project List </span><span>[</span><span style='color:#a6e3a1'>March 2025</span><span>]</span><br>" + 
            "<span style='color:#f9e2af'>Personal Portfolio: </span><a href='https://lilaccs.dev'>lilaccs.dev</a><br>" + 
            "<span style='color:#f9e2af'>Platinum Crown: </span><a href='https://lilaccs.dev/devlog'>devlog</a><br>" +
            "<span style='color:#f9e2af'>Proxmox Home Lab: </span><a href='https://www.youtube.com/@lilacdotdev'>youtube</a><br>" +
            "<span style='color:#f9e2af'>Terminal Site: </span><a>You Are Here!</a><br>";
            terminal_in.value = "";
            break; 
            
        case 'objective':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span style='color:#f9e2af'>Objectives</span><br>" + 
            "<span>My goal is always to <span style='color:#cba6f7'>learn more</span>, trying to grow as a person and as a programmer.</span><br>" + 
            "<span>I love just sitting down and taking as much time as I need to make my <span style='color:#cba6f7'>dreams</span> and <span style='color:#cba6f7'>desires</span> come true.</span><br>" + 
            "<span>Currently, I'm trying to find employment to grow my reportoire of experience.</span><br>" +
            "<span>From <span style='color:#cba6f7'>IT</span> to <span style='color:#cba6f7'>Development</span>, I'll be happy long as I have a keyboard in my hands.</span><br>";
            terminal_in.value = "";
            break; 
        
        case 'contact':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span style='color:#f9e2af'>Contact Menu</span><br>" +
            "<span>Feel free to reach out!</span><br>" +
            "<span style='color:#f9e2af'>Email: </span><a style='color:#cad3f5' href='mailto:talk@lilaccs.dev'>talk@lilaccs.dev</a><br>" + 
            "<span style='color:#f9e2af'>Youtube: </span><a style='color:#cad3f5' href='https://www.youtube.com/@lilacdotdev'>@lilacdotdev</a><br>" + 
            "<span style='color:#f9e2af'>Github: </span><a style='color:#cad3f5' href='https://github.com/lilacdotdev'>@lilacdotdev</a><br>" +
            "<span style='color:#f9e2af'>Discord: </span><span>@lilacdotdev</span><br>";
            terminal_in.value = "";
            break;
        case 'clear':
            trace.innerHTML = "<span>terminal@<span class='title-name'>lilaccs.dev</span> > <span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span>Status: </span><span style='color:#a6e3a1'>Cleared</span><br>";
            terminal_in.value = "";
            break;
        case 'dedication':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span>This page and project is dedicated to </span><span style='color:#f38ba8'>Rosie</span><span>, for always believing in me.</span><br>" +
            "<span>I'll keep making you proud as I reach for the stars.</span><br>";
            terminal_in.value = "";
            break;
        case 'resume':
            trace.innerHTML += "<span style='color:#f9e2af'>" + terminal_in.value + "</span><br>" +
            "<span style='color:#f9e2af'>Resume: </span><a style='color:#cad3f5' href='*TODO*'>download</a><br>";
            break;
        case '':
            trace.innerHTML += "<br>";
            terminal_in.value = "";
            break;
        default:
            trace.innerHTML += "<span style='color:#f38ba8'>" + terminal_in.value + "</span><br>" + 
            "<span style='color:#f38ba8'>Error: This is not a valid command.<br>" +
            "Please type </span><span style='color:#f9e2af'>help</span><span style='color:#f38ba8'> for a list of commands.</span><br>";
            terminal_in.value = "";
            break;
    }
}
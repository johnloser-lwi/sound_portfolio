import videoList from "/js/video_info.js";

function buildVideoSection(link, title, description) {
    const section = document.createElement("section");
    section.setAttribute("class", "project-card");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("class", "project-video");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + link);
    iframe.setAttribute("title", title);
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.setAttribute("allowfullscreen", "");

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "project-title");
    h3.innerText = title;

    const p = document.createElement("p");
    p.setAttribute("class", "project-text");
    p.innerText = description;

    section.appendChild(iframe);
    section.appendChild(h3);
    section.appendChild(p);

    return section;
};

function generateProjects() {
    const videos = videoList();

    const projects = document.querySelector("div.projects");
    for (const video of videos) {
        projects.appendChild(
            buildVideoSection(video.link, video.title, video.description)
        );
    }
};

generateProjects();
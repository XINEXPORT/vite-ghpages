import { joeaguado,
        christinehoang,
 } from "../images/profileimg"

 import { FaLinkedin } from "react-icons/fa"
 import { FaInstagram } from "react-icons/fa"
 import { FaGithub } from "react-icons/fa"


import {
  turtle,
  hawk,
  cactus,
  beatle,
  armadillo,
  scorpion,
  horseshoe,
  mouse,
  hat,
  bat,
  boots,
  rabbit,
  skull,
  snake,
  tarantula,
  flower,
} from '../images/blogassets'


 export const AboutData = [
        {
        id: 2,
        name: "Christine Hoang",
        img: christinehoang,
        bio: "Christine Hoang is a versatile professional adept at juggling roles as a Full Stack Developer and Product Manager. With an eye for detail and commitment to quality, she ensures that every project meets the highest of industry standards. Known for her empathetic management style, Christine leads her teams with kindness and compassion, fostering a collaborative environment where all can thrive.",
      
        links: [
          {url:'https://www.linkedin.com/in/christine-hoang-profile', icon: FaLinkedin },
          {url:'https://github.com/XINEXPORT', icon: FaGithub },
    
        ]

      },
      {
        id: 1,
        name: "Joe Aguado",
        img: joeaguado,
        bio: "Combining his experience in the financial industry with his management roles in business administration, Joe Aguado brings an exciting business-focused approach to the Technology sector. Proficient in front and back-end development, Joe combines his skillsets to bridge the gap between business strategy and technology implementation.",

        links: [          
          { url: 'https://www.instagram.com/quickquickjoejoe/', icon: FaInstagram },
          {url:'https://www.linkedin.com/in/joeaguado/', icon: FaLinkedin },
          {url:'https://github.com/joeoverflowcode/', icon: FaGithub },

    
        ]
    },

 ]

export const CHLinks = [
    {url:'https://www.linkedin.com/in/christine-hoang-profile', icon: FaLinkedin },
    {url:'https://github.com/XINEXPORT', icon: FaGithub },

  ]




 export const BlogData = [

 {
  id: 1,
  title: "Learning ES|QL",
  photo : turtle,
  firstName : "Christine",
  lastName: "Hoang",
  date : "February 21, 2024",
  content: "I decided to attend the ES|QL meetup at Improving Dallas hosted by Elasticsearch. I’ve always been curious about Elasticsearch and wanted to know more about them. Afterall, the Dallas AI group spoke highly of the company and I recently met a DevMountain alumni that now works as the Principal Tech lead for them.  From the meetup, I learned that ES|QL is a brand-new query language made by Elasticsearch. Then I started thinking, what is Elasticsearch, really? And it seems like they provide Back-end as a Service, much like AWS, Azure, and Google. It’s like another cloud tool that enables scalable web architecture, but with a focus on their search queries and data management tools.  According to the presenter Sajit, ES|QL is a piped query language. This wrung a bell for as I am currently studying R and it also uses piping in its search query syntax. It uses some very familiar search statements, such as FROM, WHERE, and SORT along with some new terminology like KEEP, STATS BY, and EVAL.  Overall, the UI and the syntax seems simple enough to understand looking if a user is doing a basic search query. However, they’re might be a learning curve when someone wants to use the ENRICH statement, which is like a JOIN statement in SQL.  Basically, ENRICH can add data from a specific search index to an output query, which sounds a lot like a join. The thing is that you won’t be able to use ENRICH unless policies are established before running the query. That can be kinda time consuming and maybe a little disorganized, especially if someone is adding data from multiple data sources. That means I would need to make multiple policies and declare which policy to use for the enrichment.  I dunno, maybe it’s not hard at all and it’s just a new thing that I’m not familiar with. We shall see!  "
},
{
  id: 2,
  title: "Video Editing is Underrated",
  date: 'March, 4, 2024',
  firstName: "Christine",
  lastName: "Hoang",
  photo: hat,
  content: "A hidden skill I feel like most Millennials and Gen Z’rs are familiar yet no one talks about is video editing. Back in the early 2000s video editing was a rare commodity. You needed fast computing power, proprietary video editing tools, and expensive cameras to shoot the highest resolution.  Fast forward 20 years into the future, there are now apps and phones that can do the same amount of work with less money and time. I spent all day working on my art and music. Sometimes, my version of a break isn’t really a break at all, but being creative. Like mashing up various sources of artful medias I’ve made and sharing it to the world is fun to me. I rarely get to do it! I also needed to stop my Soundcloud subscription and YouTube is a free app.  I did the Math and decided to transfer all my songs to the tube. That meant that all my songs needed a photo, or a video tied to them. The only thing I could think of was screenshotting my coded art and adding it to my audio in Adobe Premier. Some of the photos and videos are low res. It’ll do for now.  We’re not aiming for perfect here, we’re striving for the minimum! One day ill look into high res video recording to replace these videos. For now, my songs are up and that’s all that matters."
},
{
  id: 3,
  title: "HackerRank, the Standard",
  firstName: "Christine",
  lastName: "Hoang",
  photo: armadillo,
  date: "March 3, 2024",
  content: "I've been building my HackerRank profile account in preparation for a potential interview I might have with JPMC. I applied to be a Quality Engineer, which I am qualified for the job...I just haven't QA in over a year. And I mean formally QA'd.  Generally, I feel like everyone is a QA no matter what job they perform in the tech sphere. The QAs though have a different set of tools and processes that most don't follow. I remember over a year ago, I learned all the QA tools, but since I haven’t used them in over a year, I forgot. It's so impossible to remember all these languages and tools, but it doesn't mean I dont know about them and how they work.  Anyway, I am getting off topic. So far, I have attained profile badges on my HackerRank, such as SQL and Problem Solving. I am working on getting my algos and data structures badge, but these challenges are very difficult. I’ve been trying to target the easy ones first. I’m pretty sure im going to have to solve them multiple times to get them engrained in my brain.  Maybe I can hit up some of my friends to get an idea of what coding challenges they will ask."
},
{
  id:4,
  title: "Web Audio Conference 24’", 
  firstName: "Christine",
  lastName: "Hoang",
  photo: cactus,
  date: "March 20, 2024",
  content: "This year, I was selected to perform at the Web Audio Conference in West Lafayatte, IN at Purdue University. I had a wonderful time and met a lot of like-minded souls that were just as nerdy as I am about web audio programming. I walked away with amazing memories and felt inspired at the capabilities of how the web can connect us all, not only in a “webby” way but also in a very humanistic way.  The best example of this humanistic connection to web and audio was a workshop I attended where we all played Terry Riley’s “In C” via a web application called Lute built by Loyola University. You would think as a programmer, we would all want the app to play in sync and build these complicated systems to avoid latency, but the host’s were insistent that we used our listening skills along with the Lute app. This meant pitch matching by ear. And honestly, I loved that! It’s a way for all of us to play together, but not neglect the skills that we already possess.  You can check out the app here…https://lute.luc.edu/InC/.  I also made some friends at the conference in which they were advocating me to make NFTs with my skills in p5js.  And when they told me this, I said, “HELL YEAH! WHY DIDN”T I THINK OF THAT!?”  This entire time, I have been approaching my coding and art as two separate lives when it really could be one. So, I feel inspired to code, not from a functional standpoint, but from a creative point of view….Art for art’s sake.  Just the idea that I can present my code as an NFT gallery at my studio makes me eager to keep programming.  Sometimes it takes meeting new people to approach problems from a different perspective. I’m happy I went to WAC 24’ as I got an opportunity to meet a community that believe technology can make us feel more human by having fun."
},
{
  id:5,
  title: "Women in AI",
  firstName: "Christine",
  lastName: "Hoang",
  photo: boots,
  date: "March 26, 2024",
  content: "upcoming soon"
}

 ]

 export const socialMediaData = [
{
  id: 1,
  name: "LinkedIn",
  url: "https://www.linkedin.com/company/texas-coding-club"
},
{
  id:2,
  name: "Instagram",
  url: "https://www.instagram.com/texascodingclub/"
}
 ]

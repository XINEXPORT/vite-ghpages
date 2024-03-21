import { joeaguado,
        christinehoang,
 } from "../images/profileimg"


 export const AboutData = [
        {
        id: 2,
        name: "Christine Hoang",
        img: christinehoang,
        bio: "Christine Hoang is a versatile professional adept at juggling roles as a Full Stack Developer and Product Manager. With an eye for detail and commitment to quality, she ensures that every project meets the highest of industry standards. Known for her empathetic management style, Christine leads her teams with kindness and compassion, fostering a collaborative environment where all can thrive."
      },
      {
        id: 1,
        name: "Joe Aguado",
        img: joeaguado,
        bio: "Combining his experience in the financial industry with his management roles in business administration, Joe Aguado brings an exciting business-focused approach to the Technology sector. Proficient in both front and back-end development, Joe combines his skillsets to bridge the gap between business strategy and technological implementation."
    },

 ]

 export const BlogData = [

 {
  "id": 1,
  "title": "Learning ES|QL",
  "photo" : " ",
  "writer" : "Christine Hoang",
  "date" : "2/21/24",
  "content": "I decided to attend the ES|QL meetup at Improving Dallas hosted by Elasticsearch. I’ve always been curious about Elasticsearch and wanted to know more about them. Afterall, the Dallas AI group spoke highly of the company and I recently met a DevMountain alumni that now works as the Principal Tech lead for them. From the meetup, I learned that ES|QL is a brand-new query language made by Elasticsearch. Then I started thinking, what is Elasticsearch, really? And it seems like they provide Back-end as a Service, much like AWS, Azure, and Google. It’s like another cloud tool that enables scalable web architecture, but with a focus on their search queries and data management tools. According to the presenter Sajit, ES|QL is a piped query language. This wrung a bell for as I am currently studying R and it also uses piping in its search query syntax. It uses some very familiar search statements, such as FROM, WHERE, and SORT along with some new terminology like KEEP, STATS BY, and EVAL. Overall, the UI and the syntax seems simple enough to understand looking if a user is doing a basic search query. However, they’re might be a learning curve when someone wants to use the ENRICH statement, which is like a JOIN statement in SQL. Basically, ENRICH can add data from a specific search index to an output query, which sounds a lot like a join. The thing is that you won’t be able to use ENRICH unless policies are established before running the query. That can be kinda time consuming and maybe a little disorganized, especially if someone is adding data from multiple data sources. That means I would need to make multiple policies and declare which policy to use for the enrichment. I dunno, maybe it’s not hard at all and it’s just a new thing that I’m not familiar with. We shall see!  "
},
 ]
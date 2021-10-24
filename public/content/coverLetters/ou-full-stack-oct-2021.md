I'm a full stack engineer, looking for new challenges. I've always been the "take it apart and see how it works" kind of guy; the "solve the sudoku in the paper" kind of guy. I love solving problems and figuring how to put things back together; taking those approaches and patterns elsewhere to different (but appropriate!) applications.

When I started at Aurora, nobody in the team was capable of starting scalable front end project but the business goal was to start phasing out our old VAADIN system. The project I started with Aurora three years ago has since grown into a scalable SPA, hosting all of Aurora's product suite.

Along the way, as our team started growing and we started treading each other's toes in the same monolith, I led the work to split the codebase up into micro-frontends. Each app became responsible for communicating with it's micro-service and "crossing the streams" became a new anti-pattern. This renewed our velocity, as well as cleaned up the deployment processes we had at the time and greatly reduced code smell in the form of relying on code without refactoring it into an explicitly shared area.

One of my favourite projects at Aurora was working on our wind farm valuation SaaS offering (Amun). The initial designs (while intended only to give us a clear focus moving forwards) ended up on display at the Aurora Spring Forum, one of the biggest energy industry events of the year.

Amun required some interesting data processing at the backend. Wind data typically follows a weibull distribution and we had multiple scraped wind data sources to display the varying distributions to users. During the process of building a wind farm, clients would have extensive "on site" wind studies performed which meant they would have wind parameters more accurate than the satellite data sets. We would then need to calibrate the data sets, shearing the wind data to make sure it matched their averages. This was all written in Python.

When I joined Aurora, I had no idea about energy markets or how the energy industry worked. I find learning about these contexts is a huge perk of working directly in an "industry agnostic" industry such as software.

I look forward to learning more about medical informatics and the requirements of users in a different industry.

---
title: Problems
description: problems
---

## Limited understanding

The primary focus of **wildflow** is **accelerating** **biodiversity** **research** towards a **comprehensive understanding of nature** (aka ecosystem intelligence augmentation). A lack of in-depth knowledge of nature’s complex ecosystem dynamics leads to poor decision-making.

- **Ecosystem services valuation**: challenging to quantify the benefits that ocean ecosystems provide, like water purification, climate regulation, food production, and coastal protection.
- **Environmental impact** assessments of industrial activities (like offshore energy extraction) are challenging.

Here’s a successful inspiring example of understanding nature well:

_**Wolves in Yellowstone:**_ _In the 1930s, Yellowstone lost its wolves, throwing the ecosystem out of balance. In 1995, scientists reintroduced them, sparking a remarkable chain reaction. By hunting elk, the wolves reduced overgrazing, allowing aspen forests, willow stands, and other vegetation to flourish. This created new microclimates, cooler and shadier, where streams began to flow again. Thriving in this rejuvenated environment, beavers built dams, reviving rivers that had been dry for several decades. The ripple effects extended beyond the waterways, creating new habitats and benefiting over 70 species, including bears and songbirds. This swift transformation is a powerful example of predator-prey dynamics and the potential for ecosystem restoration (more in_ [_Decade of the Wolf_](https://www.goodreads.com/en/book/show/284457)_)._

Similar inspiring stories about otters and urchins in Alaska, whales and krill, oyster populations, coral reefs, seagrass and mangroves exist. What if we (as humanity) could scale similar approaches 100x? At the moment, things could be faster and more efficient.

## Slow response

Ecosystem monitoring, protection of endangered species and their habitats, early detection and management of invasive species (lionfish), restoration efforts (seagrass, oyster reefs), and response to environmental threats (like harmful algae blooms) are not efficient enough at the moment.

_**Example:**_ _I’ve spent over a month in Mexico working with_ [_Pelagios Kakunja_](https://www.pelagioskakunja.org/) _- a shark conservation NGO. They protect whale sharks, hammerhead sharks and dozens of other species. They are amazing! They use multiple sensing solutions (acoustic tags, satellite tags, stereo BRUVs, remote sensing and more) to conduct research and protect these species by creating MPAs (marine protected areas)._

_They told me it takes_ _**at least five years to create one MPA**\_\_, they have all the data collected but, just the data analysis itself takes at least one year. Yet you need to iterate with the government very quickly and also climate changes (El Nino) so you need to create MPA in a different place._ _**Could the data analysis part be done in a month instead of years?**_ _Or in one day? Or in milliseconds? (what law of physics forbids it to be faster?)_

We must accelerate biodiversity research to speed up conservation and restoration efforts and help guide industrial activities.

The next two problems are critical to why we have limited understanding and slow response.

## Data fragmentation and accessibility

Crucial information about the ocean is scattered and siloed across different organisations. It’s not easily accessible and usable (different formats and systems). Businesses often collect data that remain underutilised or inaccessible to others who could benefit from it. This problem hinders research, conservation, and informed decision-making for industrial activities.

_“Petabytes of ocean data are under the control of government agencies, researchers and private companies, such as those in oil and shipping. This information must be made available – fast – to enable sustainable management of marine resources.”_ ([nature](https://www.nature.com/articles/d41586-020-01668-z))

_**Example:**_ _a_ [_PhD researcher_](https://www.dropbox.com/scl/fi/6s3tsdcw7eougu6ck8zvb/Mirta-Zupan-PhD-Thesis-Updated-Version.pdf?rlkey=snzs8qo28kb5xa15vxct56uv9&e=1&dl=0) _from the University of Ghent investigating the impact of offshore wind farms on the surrounding ecosystem. In particular, studying how the introduced artificial structures (wind turbines) are rapidly colonised by biofouling organisms, attracting higher trophic levels, and leading to the formation of the artificial reef effect. It took many months to access necessary observational data from three different organisations (commercial and academic). The next big challenge was to clean this data and transform it into one format appropriate for training ML models and analysis. Only then could they focus on doing the actual research._

It’s not that many conceptually different data types in biodiversity. Time-series geospatial biodiversity data (when, where, who, etc) is one of the most common. Imagine there’s a place with standardised data where you could train your model straightaway, not against just three datasets obtained over months, but against 100s and instantly.

## Data wrestling for ecologists

If you’re training an ML model, usually 80% of the time is spent on preparing the data. In AI research it’s done by dedicated engineers. In today's landscape, biodiversity researchers (wildlife biologists, data analysts, etc) must not only excel in understanding nature and addressing the biodiversity crisis but also master big data management. This includes building data pipelines, aggregating data from various sources, cleaning data, handling extensive big data operations and deploying novel models for multi-modal data formats.

_“We currently spend hours if not weeks in front of the screen trying to figure out what’s going on with the data, which translates to thousands and thousands of dollars”_ ([Sophie Locke](https://www.linkedin.com/in/sophielocke), lead researcher at [Blue Marine Foundation](https://www.bluemarinefoundation.com/))

_**Example:**_ _a biodiversity researcher in Mexico (proficient in R and marine biology expert) working for an NGO wants to run a simple ecological niche analysis (what conditions are best for sharks) against 30MB of their new shark observational data. They need to sample data from 100GB of environmental data (water temperature, salinity, chlorophyll levels, etc) from ESA Copernicus. Copernicus doesn’t allow downloading more than 2GB at once. You must select a bounding box and other parameters each time manually (unless you are not proficient with scripting languages). Even if you could download a 100GB dataset straightaway, with their 52 Mbps internet, it takes almost 4.5 hours. Once you download it, there are problems fitting this 100GB dataset into RAM (they have 16GB) when using R or even Python Pandas. It takes many days to perform this simple analysis._

_We downloaded the dataset from Copernicus into Google Cloud (simple Python script) in a matter of minutes (limited by Copernicus’s free quota egress). Then ingested this into Google BigQuery and performed a simple join against their shark observations. This took us 40 seconds and returned a 50MB file with shark observations and environmental conditions needed for ecological niche modelling._

What if they had cloud-based tools tailored for biodiversity to manage big data and run different analyses (like it’s already being done in BigTech, AI research, and Finance for a while)?

This applies to both: ecologists working in conservation and ecologists working for businesses running industrial activities.

## Business goal alignment problem

Businesses must **align their short-term goals with the long-term health of nature and humanity**. All of the above challenges apply to businesses.

In addition, **businesses** **lack transparent mechanisms** for monitoring, reporting, verifying biodiversity metrics, and evaluating and communicating biodiversity impact. E.g. it’s often unclear where to collect new data, what type of data is needed, where they should publish this data, and who could process it further and tell if they are doing the right thing.

Luckily we see regulatory frameworks like:

- CSRD: Corporate Sustainability Reporting Directive,
- TNFD: Taskforce on Nature-related Financial Disclosure,
- GRI: Global Reporting Initiative,
- SBTN: Science-Based Targets Network,
- UK Biodiversity Net Gain

starting to appear. Someone needs to help guide businesses.

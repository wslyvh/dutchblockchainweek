---
####################
### INSTRUCTIONS ###
####################
# This file is a template to create new events. In order to use it, duplicate
# the whole folder (/template) as a new folder (I.E. /my-event-name) inside of
# the /events folder, using for the folder name _only_:
# - lowercase letters
# - hyphens/dashes (-) instead of spaces
# - alphanumeric characters ('a' to 'z', '0' to '9')
# and edit the README.md file inside that new folder just created.
#
# The name of the folder will be used on the URL. Example:
# https://blockchainweek.berlin/my-event-name
#
# _Don't_ rename the new file (README.md), only edit its content.
# _Don't_ remove any text before the colons at the beginning of each line,
# only edit what is after the colon. Example:
# Don't remove the word nor colon on 'description:'
#
# Every line starting with a hash symbol (#) is a comment. It will be ignored
# and can be safely removed, including these instructions.
###############

###########
### SEO ###
###########
# The title of the page, displayed by the browser on the title of the window.
# Ideally this is the same as the name of the event.
title: Blockchain, disrupting FinTech?

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: This event will showcase various generations of FinTech companies and discuss how Blockchain technology is disrupting the financial industry (or not).

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Blockchain, disrupting FinTech?

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  - This event will showcase various generations of FinTech companies and discuss how Blockchain technology is disrupting the financial industry (or not).
  - We'll dive into several use cases in the financial industry and see how products and solutions can be different using blockchain technology. A comparison of the disruption in these cases before and after blockchain technology is made.
  - Finally, we will look into some specific solutions that are build here in the Netherlands.

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2019-06-03
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2019-06-03

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: 19:00
# Time when the event ends. Can be left empty.
endTime: 22:00

# The URL where to akquire the tickets. Can be left empty.
tickets:

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price:

# The name of the venue where the event will be held. Can be left empty.
venue: Coming soon!

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Amsterdam

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - panel
# - workshop
# Use _only_ one, and don't capitalize.
category: event

#################
### SPEAKERS ####
#################
# There _needs_ to be one hyphen before each entry.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove speakers as needed, but remember the hyphen before each entry.
speakers:
  -
    name: Jonathan Knegtel
    company: Blockdata
    companyURL: https://www.blockdata.tech/
    twitter: jpknegtel
    website: https://www.linkedin.com/in/jpknegtel/
    bio: Helping the world discover and understand blockchain adoption
  -
    name: Christophe Fonteneau
    company: Request Network
    companyURL: https://request.network/en/
    twitter: chfonteneau
    website: https://www.linkedin.com/in/fonteneau/
    bio: Integrating Invoicing and Payments processes for a broader Economy
### DON'T MAKE CHANGES BELOW THIS LINE! ###
---

<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>

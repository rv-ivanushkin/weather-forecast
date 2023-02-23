#### Here's what I've learned while develop an interactive component for fetching forecast by city’s name

1. I understand now, how to use api https://open-meteo.com/en/docs for fetching forecast, but most important was reverse engineering a component for searching city’s coordinates.

2. I used a hook for implementing fetching data, for example:
- useHorizontalScroll — funcional for horizontal scroll grid’s columns
- useHourlyForecast -  funcional for fetching hor’s data
- useCitySearch — for searching city by name wiht debounce
etc

3. I used css position and grid layout to develop an adaptive scrolling block. I have often encountered the problem of a large list and a fixed height. Now I know how to develop an adaptive block that does not need to specify or calculate the height or width.
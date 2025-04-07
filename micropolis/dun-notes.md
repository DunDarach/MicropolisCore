
micropolis/src/lib/TileView.svelte
-  webgpu / opengl fallback
    if webgpu is not available, opengl is used
- support of tileSets and tileLayers
    - tileLayer = Tile Image file
    - a tileLayer can contain several tileSets 
    - mopData = tileset to use for given cell why ? in /src/lib/MicropolisSimulator.ts, all cells have same tileset
        - In the meantime, quick implementation tilSet passed to uniforms with mopData[0] value
- support of space / rotate


- implement for gpu ctxGL.viewport(0, 0, canvasGL.width, canvasGL.height); ??


# Build webassembly
1) Install [emscriptem](https://emscripten.org/docs/getting_started/downloads.html)
2) setup shell : source "/Users/$USER$/emsdk/emsdk_env.sh"
3) sudo npm install -g typescript (need tsc)
4) sudo npm install -g @pnpm/exe@latest-10 (optimized package Manager)



micropolisengine: populationDensityMap MapByte2 98968 3000 
2.DVTEbDsv.js:22 micropolisengine: trafficDensityMap MapByte2 101984 3000 
2.DVTEbDsv.js:22 micropolisengine: pollutionDensityMap MapByte2 105000 3000 
2.DVTEbDsv.js:22 micropolisengine: landValueMap MapByte2 108016 3000 
2.DVTEbDsv.js:22 micropolisengine: crimeRateMap MapByte2 111032 3000 
2.DVTEbDsv.js:22 micropolisengine: terrainDensityMap MapByte4 114048 750 
2.DVTEbDsv.js:22 micropolisengine: powerGridMap MapByte1 121608 12000 
2.DVTEbDsv.js:22 micropolisengine: rateOfGrowthMap MapShort8 133624 390 
2.DVTEbDsv.js:22 micropolisengine: fireStationMap MapShort8 134028 390 
2.DVTEbDsv.js:22 micropolisengine: fireStationEffectMap MapShort8 134432 390 
2.DVTEbDsv.js:22 micropolisengine: policeStationMap MapShort8 134836 390 
2.DVTEbDsv.js:22 micropolisengine: policeStationEffectMap MapShort8 135240 390 
2.DVTEbDsv.js:22 micropolisengine: comRateMap MapShort8 135644 390 
---
layout: single
---

I am going through the worst process computer scientist can imagine - *C.elegans* worm annotation (okay, fixing printers might be even worse). 

Unfortunately, this work can't be fully automated and I have to use MaMuT and click each cell separately, sometimes twice. Rough estimation says I will end up with over 20 000 clicks. 

Despite the fact, I was extremely careful - saving the results to two different files and pushing them to github - I made a **crucial** mistake at the beginning. 

I have a dataset acquired from **lightsheet microscope**. 

/image/ 

It is blury in Z direction and to fix this problem the technique called deconvolution is used. In my case the deconvolved image is **cropped and scaled**.

I missed this fact and figured that out only after annotating ~70 time frames (took me about 4 days of constant clicking). In total I have more than 300 frames. 

There were 2 options at that point. start annotaiting initial data from scratch (sic!) or somehow transfer annotation from deconvolved images to initial data. 

Here we will look into second option. :) 

MaMuT produces the xml file with human-understandable layout. 

/code example/

```xml
<SpotsInFrame frame="0">
	<Spot ID="385" name="ID385" VISIBILITY="1" RADIUS="14.640999999999998" QUALITY="-1.0" SOURCE_ID="0" POSITION_T="0.0" POSITION_X="89.66794853251736" POSITION_Y="187.11229709079714" FRAME="0" POSITION_Z="127.85924589777197" />
	<Spot ID="451" name="ID451" VISIBILITY="1" RADIUS="16.105099999999997" QUALITY="-1.0" SOURCE_ID="0" POSITION_T="0.0" POSITION_X="175.98794818723283" POSITION_Y="49.73409663713011" FRAME="0" POSITION_Z="46.50503230376064" />
	<Spot ID="835" name="ID835" VISIBILITY="1" RADIUS="16.105099999999997" QUALITY="-1.0" SOURCE_ID="0" POSITION_T="0.0" POSITION_X="126.1228799289517" POSITION_Y="142.1771253500347" FRAME="0" POSITION_Z="71.98240878500181" />
</SpotsInFrame>
```


In my case, the positions were wrong. Took me a day to figure out the transformation but now I have a working plugin that can save your life if you have a week or even month of work done. 

/image plugin/

In the input window fill in the translation and scaling factors and wait for magic.

Keep in mind the plugin first applies scaling and after that translation.

Both values should be relatively easy to find out. To find translation vector, open image in Fiji, zoom it in and check the value in the left upper corner. 

/image/ 

To find out the scaling factor try to remember if you ever resaved your data or shrank the image. 

*I skipped rotation because I didn't use it.*

The resulting annotation is saved to the file *your-file-name*-fixed.xml. The code is available on GitHub. Have a look into [ImageJ Wiki](http://imagej.net/Installing_3rd_party_plugins) for installation instructions. 

The plugin also tries to save your bookmarks but I have never checked it properly.
 
*add bookmarks saver 

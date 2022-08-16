criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

1. create time blocks from 9-5
--must start with a container.
-- example code: 

<div class="container">
            <div class="row" style="background-color:yellow;">
                <div class="col-xs-12" style="background-color:aqua;">col-xs-12 inside a row</div>
            </div>

 <div>
        <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
      </div>
    </div> (-- for styling of column)


2. add timer to header area
-use the moment.js libary in order to enter time

--var time = moment().format("hh:mm:ss");
$("jumbotron").text(time);

moment()

3. create columns for each hour
4. each column must have different color, one for past, future, and present.
-- <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

5. must be able to enter event
--add event RESEARCH JQuery interactions
6. create a save button for each block
--Research Bootstrap-extend 
7. text must be able to save to local storage
8. whenever page is refressed saved event stays.



class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1); border:1px black";>12 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">1 a.m </div>
      </div>

      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">2 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">3 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">4 a.m 100%</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">5.am</div>
      </div>
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">6 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">7 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">8 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">9 a.m</div>
      </div>
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">10 a.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">11 a.m </div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">12 p.m </div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">1 p.m</div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">2 p.m </div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">3 p.m </div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">4 p.m </div>
      </div>
      
      <div>
        <div class="mh-100" style="width: 50px; height: 50px; background-color: rgba(0,0,255,0.1);">5 p.m </div>
      </div>

<div id="task" class="UntypedBox__Wrapper-sc-4e7tnk-0 guoFBE Floater-sc-vcx7dh-0 khmGRt help-tour-task-description"><div id="task_description" class="Tabs__Wrapper-sc-1wbc56k-0 kRDQfm LeftColumn__StyledTab-sc-1ldymr9-1"><div class="Tabs__Head-sc-1wbc56k-1 bmWoCA"><div data-test-id="tab" class="Tab__Wrapper-sc-1d03zop-0 jpGfqi"><div class="Tab__NameWrapper-sc-1d03zop-1 icEVbs"><p aria-level="2" role="heading" class="text__P-sc-1rm5cia-1 bpxvAV specificity-increaser text__BasicText-sc-1rm5cia-4 fNSOxE">Task 1</p></div></div><div class="UntypedBox__Wrapper-sc-4e7tnk-0 fesEaE Tabs__WidgetsWrapper-sc-1wbc56k-2 fGJxFp"><div data-help="task-variants-wrapper" class="UntypedBox__Wrapper-sc-4e7tnk-0 ekvrbw"></div></div></div><div class="Tabs__Body-sc-1wbc56k-3 geyIRl"><div class="UntypedBox__Wrapper-sc-4e7tnk-0 gnBbdH Floater-sc-vcx7dh-0 khmGRt TaskDescription__ThemedBox-sc-7m9k5q-0"><div class="TaskDescription__ContentContainer-sc-7m9k5q-6 hlglqI"><div id="standard_task_description" class="TaskDescription__StandardTaskDescription-sc-7m9k5q-3 crhSKM protected standard-task-description"><h2 class="mod-hidden">Task description</h2><div class="TaskDescription__TaskContentWrapper-sc-7m9k5q-2 kXuBGO task-description-content"><p>Your task is to implement a function which adds type validation to an object.</p>
<h3>Requirements</h3>
<p>Your function should receive an object as its only argument and return an object with the same properties, but with type validation added.
Types should be validated when:</p>
<ul>
<li>the function creates the object;</li>
<li>someone updates a property;</li>
<li>someone adds a property.</li>
</ul>
<p>The type validation should always be based on the last part of the property name. For example, the <code>age_int</code> property should always be an integer and throw an error when set to something else.</p>
<p>Here are possible types:</p>
<ul>
<li>string: for example, <code>"string type"</code></li>
<li>int: <code>12.00</code> and <code>12</code> are both integers</li>
<li>float: for example, <code>12.34</code></li>
<li>number: any int or float</li>
<li>bool: for example, <code>true</code></li>
</ul>
<h3>Assumptions</h3>
<ul>
<li>Types are optional and validation should be skipped if the type isn't specified.</li>
<li><code>_</code> always precedes the type name.</li>
</ul>
<h3>Hints</h3>
<ul>
<li>Your solution will be evaluated based on its correctness; performance and coding style will not be assessed.</li>
<li>Do not edit the default export.</li>
</ul>
<h3>Available tools/packages</h3>
<p>You can use:</p>
<ul>
<li>JavaScript <em>Node 14 / ES2020</em></li>
</ul>
<h3>Examples</h3>
<p>Your function (<code>typeCheck</code> here) should behave as shown below:</p>
<pre><code class="language-js">const obj = {
    age_int: 2,
    name_string: "Adam",
    job: null,
}
const validatingObject = typeCheck(obj)
validatingObject.age_int = 2.25 // Throws error
validatingObject.age_int = 2
validatingObject.job = "fireman"
validatingObject.address_string = 20 // Throws error

const obj_2 = {
    employed_bool: "true",
}
const validatingObject = typeCheck(obj_2) // Throws error
</code></pre></div></div></div></div></div></div><div id="test_cases_area" class="UntypedBox__Wrapper-sc-4e7tnk-0 ekvrbw"></div></div>

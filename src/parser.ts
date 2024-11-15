import { parse } from 'node-html-parser';
import { get } from 'https';

const doc = `
    <?xml version="1.0" encoding="utf-8"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    <style type="text/css">
    /* body */
    body {
  
    padding: 10%;
    }
    /* headings */
    h1 {
  
    font-size: 150%;
  
    font-weight: normal;
    }
    h2 {
  
    font-size: 130%;
  
    font-weight: normal;
  
    margin-top: 40px;
    }
    h3 {
  
    font-size: 110%;
  
    font-weight: normal;
  
    margin-top: 30px;
  
    color: #000099;
  
    background-color: #ffffff;
    }
    h4 {
  
    font-size: 100%;
  
    font-weight: bold;
  
    margin-bottom: 0px;
    }
    h5 {
  
    font-size: 100%;
  
    font-weight: bold;
  
    margin-bottom: 0px;
  
    color: #000099;
  
    background-color: #ffffff;
    }
    /* tables */
    table {
  
    border: 1px solid black;
  
    margin: 20px 0px 20px 0px;
    }
    caption {
  
    text-align: left;
  
    margin-bottom: 10px;
    }
    td, th {
  
    padding: 5px;
    }
    tr.alt {
  
    color: black;
  
    background-color: #dedede;
    }
    code.alt {
  
    color: 770000;
  
    background-color: #dedede;
    }
    table.functionIndex td{
  
    padding: 0px 30px 0px 5px;
    }
    /* lists */
    ul {
  
    list-style-type: none;
    }
    /* box highlighting */
    .boxhl {
  
    border: 1px dotted black;
  
    padding: 8px;
  
    color: #000000;
  
    background-color: #eeeeff;
    }
    /* box hl for calling conventions */
    .code {
  
    border: 1px solid black;
  
    padding: 20px;
  
    font-family: monospace;
  
    color: #770000;
  
    background-color: #ffffff;
    }
    /* code box */
    pre {
  
    color: #770000;
  
    background-color: #ffffff;
    }
    /* code syntax */
    code.s {
  
    margin-left: 40px;
  
    font-weight: normal;
  
    color: #770000;
  
    background-color: #ffffff;
    }
    /* code syntax in descriptive text */
    code {
  
    color: #000000;
  
    background-color: #ffffff;
    }
    /* optional parameters */
    span.op {
  
    font-style: italic;
  
    color: #666666;
  
    background-color: #ffffff;
    }
    /* message box examples */
    pre.msgbox {
  
    color: #777700;
  
    background-color: #ffffff;
  
    font-family: serif;
    }
    /* indentation and text alignment */
    .ind {
  
    margin-left: 40px;
    }
    .c {
  
    text-align: center;
    }
    .l {
  
    text-align: left;
    }
    /* links */
    .f {
  
    color: #3333cc;
  
    background-color: white;
    }
    a:link.f{
  
    text-decoration: none;
  
    color: #3333cc;
  
    background-color: white;
    }
    a:visited.f {
  
    text-decoration: none;
  
    color: #3333cc;
  
    background-color: white;
    }
    a:focus.f {
  
    text-decoration: underline;
  
    color: #0000ff;
  
    background-color: white;
    }
    a:hover.f {
  
    text-decoration: underline;
  
    color: #0000ff;
  
    background-color: white;
    }
    a:active.f {
  
    text-decoration: none;
  
    color: #ff0000;
  
    background-color: white;
    }
    a:link.cf{
  
    text-decoration: none;
  
    color: #3333cc;
  
    background-color: white;
    }
    a:visited.cf {
  
    text-decoration: none;
  
    color: #3333cc;
  
    background-color: white;
    }
    a:focus.cf {
  
    text-decoration: underline;
  
    color: #0000ff;
  
    background-color: white;
    }
    a:hover.cf {
  
    text-decoration: underline;
  
    color: #0000ff;
  
    background-color: white;
    }
    a:active.cf {
  
    text-decoration: none;
  
    color: #ff0000;
  
    background-color: white;
    }
    a:link img {
  
    border-style: none;
    }
    a:visited img {
  
    border-style: none;
    }
    </style>
  
    <title>OBSE Command Documentation</title>
  
    <meta name="keywords" content="OBSE, oblivion, script, extender, mod, modding" />
  
  </head>
  
  <body>
  
  <h1>xOBSE v0022.5.0 Command Documentation</h1>
  
  <p><a href="http://cs.elderscrolls.com/index.php?title=Category:Oblivion_Script_Extender">OBSE @ Oblivion Construction Set Wiki</a> - follow the links throughout this documentation to gain access to additional information on the official Oblivion Construction Set Wiki. Users are encouraged to add to the wiki.<br />
  <a href="https://github.com/llde/xOBSE">xOBSE @ GitHub</a> is is a community maintained up-to-date fork of Oblivion Script Extender (OBSE).
  
  <h2>Table of Contents</h2>
  
  <ul>
      <li><a href="#New_xOBSE_Features">New xOBSE Features</a></li>
    <li><a href="#New_Functions">New Features</a></li>
    <li><a href="#Function_Syntax_Format">Function Syntax Format</a></li>
    <li><a href="#Function_Calling_Conventions">Function Calling Conventions</a></li>
    <li><a href="#Qualities">Qualities</a></li>
    <li><a href="#Oblivion_Types">Types</a></li>
    <li><a href="#General_Functions">General Functions</a></li>
    <li><a href="#Cloning_Functions">Cloning Functions</a></li>
    <li><a href="#Flow_Control_Functions">Flow Control Functions</a></li>
    <li><a href="#Ref_Walking_Functions">Ref Walking Functions</a></li>
    <li><a href="#Console_Functions">Console Functions</a></li>
    <li><a href="#Input_Functions">Input Functions</a></li>
    <li><a href="#Math_Functions">Math Functions</a></li>
    <li><a href="#Trigonometry_Functions">Trig Functions</a></li>
    <li><a href="#Linear_Algebra_Functions">Linear Algebra Functions</a></li>
    <li><a href="#Bitwise_Manipulation_Functions">Bitwise Manipulation Functions</a></li>
    <li><a href="#Output_Functions">Output Functions</a></li>
    <li><a href="#Spam_Blocking_Functions">Spam-Blocking Functions</a></li>
    <li><a href="#Mod_Functions">Mod Functions</a></li>
    <li><a href="#Hotkey_Functions">Hotkey Functions</a></li>
    <li><a href="#File_Functions">File Functions</a></li>
    <li><a href="#UI_Functions">UI Functions</a></li>
    <li><a href="#Text_Input_Functions">Text Input Functions</a></li>
    <li><a href="#String_Variables">String Variables</a></li>
    <li><a href="#Format_Specifiers">Format Specifiers</a></li>
    <li><a href="#Array_Variables">Array Variables</a></li>
    <li><a href="#OBSE_Expressions">OBSE Expressions</a></li>
    <li><a href="#User_Defined_Functions">User-Defined Functions</a></li>
    <li><a href="#Events">Event Handlers</a></li>
    <li><a href="#Inventory_Reference">Inventory References</a></li>
    <li><a href="#Temporary_Functions">Temporary Functions</a></li>
    <li><a href="#Physics_Functions">Physics Functions</a></li>
    <li><a href="#Type_Codes">Type Codes</a></li>
    <li><a href="#Deprecated_Functions">Deprecated Functions</a></li>
  </ul>
  
  <h2><a id="New_xOBSE_Features">New xOBSE Features</a></h2>
  <p>Besides fixing some long standing bugs and adding new game versions (like the GOG version) to the launcher, xOBSE adds a couple of new functions (and deprecates some others):</p>
  <ul>
      <li><h3>xOBSE v0022.5</h3></li>
    <li><a href="#IsMiscItem">IsMiscItem</a></li>
      <li><h3>xOBSE v0022.4</h3></li>
    <li><a href="#SetAltControl2">SetAltControl2</a></li>
      <li>SetAltControl, GetAltControl and RefreshControlMap marked as deprecated</li>
      <li><h3>xOBSE v0022.3</h3></li>
      <li>Add experimental support for OnKeyEvent and OnControlEvent for Event Manager</li>
    <li><a href="#OnKeyEvent">OnKeyEvent</a></li>
    <li><a href="#OnControlEvent">OnControlEvent</a></li>
      <li><h3>xOBSE v0021.8</h3></li>
      <li><a href="#GetBaseAV3">GetBaseAV3(C)</a></li>
      <li>GetBaseAV2(C) functions are deprecated</li>
    <li><a href="#IsNaked">IsNaked</a></li>
      <li><h3>xOBSE v0021.5</h3></li>
    <li><a href="#EventHandlerExist">EventHandlerExist</a></li>
  </ul>
  
  
  <h2><a id="New_Functions">New Features in OBSE v0021</a></h2>
  
  <p>Being from 2013, the additions of OBSE v0021 aren't exactly new, but since the online documentation still links to the v0020 one, the changes of v0021 will remain listed here for now, for convenience.<br>
  OBSE v0021 introduces <a href="#Events">new event types</a>, support for <a href="#User_Defined_Events">user-defined events</a>, and includes the following new commands:</p><ul>
    <li><a href="#HasTail">HasTail</a></li>
    <li><a href="#GetLuckModifiedSkill">GetLuckModifiedSkill</a></li>
    <li><a href="#SetCellMusicType">SetCellMusicType</a></li>
    <li><a href="#GetSoundAttenuation">GetSoundAttenuation</a></li>
    <li><a href="#SetSoundAttenuation">SetSoundAttenuation</a></li>
    <li><a href="#GetStageIDs">GetStageIDs</a></li>
    <li><a href="#GetStageEntries">GetStageEntries</a></li>
    <li><a href="#SetStageText">SetStageText</a></li>
    <li><a href="#UnsetStageText">UnsetStageText</a></li>
    <li><a href="#SetStageDate">SetStageDate</a></li>
    <li><a href="#GetTailModelPath">GetTailModelPath</a></li>
    <li><a href="#UpdateContainerMenu">UpdateContainerMenu</a></li>
    <li><a href="#UpdateSpellPurchaseMenu">UpdateSpellPurchaseMenu</a></li>
    <li><a href="#LinkToDoor">LinkToDoor</a></li>
    <li><a href="#sv_ToUpper">sv_ToUpper</a></li>
    <li><a href="#sv_ToLower">sv_ToLower</a></li>
    <li><a href="#CopyRace">CopyRace</a></li>
    <li><a href="#SetCreatureType">SetCreatureType</a></li>
    <li><a href="#DispatchEvent">DispatchEvent</a></li>
    <li><a href="#GetGroundSurfaceMaterial">GetGroundSurfaceMaterial</a></li>
    <li><a href="#GetSkillSpecializationC">GetSkillSpecializationC</a></li>
    <li><a href="#SetSkillSpecializationC">SetSkillSpecializationC</a></li>
    <li><a href="#GetRequiredSkillExpC">GetRequiredSkillExpC</a></li>
    <li><a href="#GetAVSkillMasteryLevel">GetAVSkillMasteryLevel</a></li>
    <li><a href="#GetAVSkillMasteryLevelC">GetAVSkillMasteryLevelC</a></li>
    <li><a href="#GetFactions">GetFactions</a></li>
    <li><a href="#GetLowActors">GetLowActors</a></li>
    <li><a href="#GetLevCreatureTemplate">GetLevCreatureTemplate</a></li>
    <li><a href="#SetLevCreatureTemplate">SetLevCreatureTemplate</a></li>
    <li><a href="#GetActorSwimBreath">GetActorSwimBreath</a></li>
    <li><a href="#SetActorSwimBreath">SetActorSwimBreath</a></li>
    <li><a href="#GetActorMaxSwimBreath">GetActorMaxSwimBreath</a></li>
    <li><a href="#SetActorMaxSwimBreath">SetActorMaxSwimBreath</a></li>
    <li><a href="#OverrideActorSwimBreath">OverrideActorSwimBreath</a></li>
    <li><a href="#SetFlyCameraSpeedMult">SetFlyCameraSpeedMult</a></li>
  </ul>
  
  <h2><a id="Function_Syntax_Format">Function Syntax Format</a></h2>
  
  <pre class="code">(returnValueName:returnValueType)    reference.FunctionName    parameter1:type  parameter2:type</pre>
  
  <p><span class="op">optional</span> - optional parameters or references are in italics</p>
      <table>
          <caption>Vanilla parameter Types: designated after colon</caption>
          <tr>
              <th>float</th>
              <td>a positive or negative decimal number*</td>
              <td>3.1415</td>
          </tr>
          <tr class="alt">
              <th>short</th>
              <td>a positive or negative integer in range -32768 to 32767**</td>
              <td>100, -15765</td>
          </tr>
          <tr>
              <th>long</th>
              <td>a positive or negative integer in range -2147483648 to 2147483647***</td>
              <td>123987</td>
          </tr>
          <tr class="alt">
              <th>int</th>
              <td>an alias for short</td>
              <td>100, -15765</td>
          </tr>
          <tr>
              <th>ref</th>
              <td>a ref</td>
              <td>objectID</td>
          </tr>
          <tr class="alt">
              <th>chars</th>
              <td>a 4 character magic effect code</td>
              <td>FIDG, Z001</td>
          </tr>
          <tr>
              <th>string</th>
              <td>a set of characters in quotes</td>
              <td>"Uriel Septim"</td>
          </tr>
          <tr class="alt">
              <th>bool</th>
              <td>a short with only 2 values: 1 for true and 0 for false</td>
              <td>1, 0</td>
          </tr>
      </table>
      <p>*A float will not accurately display more than 7 digits.</p>
      <p>**Longer short/int variables don't actually get cut off, but some functions might behave unpredictable if the value doesn't match the parameter type.</p>
      <p>***In Oblivion, all ints are actually stored as floats, so they experience the same limitations as floats, and so cannot actually reach the ranges that a long should be able to reach. The largest integer you can reliably store in a long var is 16,777,216.</p>
      <p>Assinging a float value to an integer will cut them off, not round them (both 2.1 and 2.7 will become 2, while -1,5 will become -1). If a variable is a Global, then it will always be a float and therefore will not cut off the decimal values. Keep that in mind when using variables as parameter.</p>
      <table>
          <caption>Additional OBSE parameter types</caption>
          <tr>
              <th>formatString</th>
              <td>a string containing zero or more <a href="#Format_Specifiers">format specifiers</a> followed by up to twenty variables</td>
          </tr>
      <tr class="alt">
          <th>string_var</th>
          <td>a variable defined as a <a href="#String_Variables">string_var</a>, with a unique ID representing a string of characters</td>
      </tr>
      <tr>
          <th>array_var</th>
          <td>an <a href="#Array_Variables">array_var</a> variable, with a unique ID representing an array of keys and values</td>
      </tr>
      <tr class="alt">
          <th>array</th>
          <td>an array, not necessarily stored in a variable. (ex: <strong>someArr[1:4]</strong> is an array but not an array_var)</td>
      </tr>
      <tr>
          <th>arrayKey</th>
          <td>an array key (either a string, integer, or float)</td>
      </tr>
      <tr class="alt">
          <th>Array</th>
          <td>an array of type Array, with integer keys</td>
      </tr>
      <tr>
          <th>StringMap</th>
          <td>an array of type StringMap, with string keys</td>
      </tr>
      <tr class="alt">
          <th>Map</th>
          <td>an array of type Map, with floating point keys</td>
      </tr>
      <tr>
          <th>
              <em>expr</em>
          </th>
          <td>an OBSE <a href="#OBSE_Expressions">expression</a></td>
      </tr>
      <tr class="alt">
          <th>multi</th>
          <td>a value of any type float, short, string, or array, e.g. an array element or a function return value</td>
      </tr>
  </table>
  
  <h2><a id="Function_Calling_Conventions">Function Calling Conventions:</a></h2>
  
  <h3>By Reference or ObjectID</h3>
  
  <p class="code"><span class="op">reference.</span>FunctionName someParameters <span class="op">objectID:ref</span></p>
  
  <h4>Examples:</h4>
  
  <pre>	(health:int) <span class="op">reference.</span>GetObjectHealth <span class="op">objectID:ref</span>
    (oldEnchantment:ref) <span class="op">reference.</span>SetEnchantment nuEnchantment:ref <span class="op">objectID:ref</span></pre>
  
  <p>These functions can either be called on a reference or have an objectID passed in as an argument. The optional reference is there for the scripter's convenience. If the function is called on a reference, the objectID will be retrieved from the reference. If an objectID is passed in, it takes precedence over a calling reference.</p>
  
  <p>The following are equivalent:</p><pre>	ref.doSomething</pre>
  
  <p>and</p><pre>	base = ref.getBaseObject
    doSomething base</pre>
  
  <p>These functions always perform their operations on the base object.</p>
  
  <h3>By Reference Only</h3>
  
  <p class="code">reference.FunctionName someParameters</p>
  
  <h4>Examples:</h4>
  
  <pre>	(oldPoison:ref) reference.SetEquippedWeaponPoison nuPoison:ref</pre>
  
  <p>These functions <em>must</em> be called on a reference.</p>
  
  <h3>By ObjectID Only</h3>
  
  <p class="code">FunctionName someParamters objectID:ref</p>
  
  <h4>Examples:</h4>
  
  <pre>	(masterLevel:int) GetSpellMasteryLevel spell:ref	(effectCode:int) GetNthEffectItemCode magicItem:ref  whichEffect:int</pre>
  
  <p>These functions <em>must</em> have an ObjectID passed as an argument.</p>
  
  <h2><a id="Qualities">Qualities</a></h2>
  
  <p>Qualities are a set of related values and functions which apply to multiple Oblivion object types. For documentation purposes I have gathered the related values together. Any type which has a given quality has all of the values listed and all of the quality's functions may be applied to the type.</p><ul>
    <li><a href="#Actor">Actor</a></li>
    <li><a href="#Actor_Value_Functions">Actor Values</a></li>
    <li><a href="#Attacking">Attacking</a></li>
    <li><a href="#Audible">Audible</a></li>
    <li><a href="#Breakable">Breakable</a></li>
    <li><a href="#Class">Class</a></li>
    <li><a href="#Container">Container</a></li>
    <li><a href="#Description">Description</a></li>
    <li><a href="#Edible">Edible</a></li>
    <li><a href="#Enchantable">Enchantable</a></li>
    <li><a href="#Equippable">Equippable</a></li>
    <li><a href="#Inventory">Inventory</a></li>
    <li><a href="#Lockable">Lockable</a></li>
    <li><a href="#Magic">Magic</a></li>
    <li><a href="#Magic_Target">Magic Target</a></li>
    <li><a href="#Named">Named</a></li>
    <li><a href="#Ownable">Ownable</a></li>
    <li><a href="#Race">Race</a></li>
    <li><a href="#Scriptable">Scriptable</a></li>
    <li><a href="#Simple">Simple</a></li>
    <li><a href="#Wearable">Wearable</a></li>
  </ul>
  
  <h3><a id="Actor">Actor</a></h3>
  
  <p>Includes creatures and NPCs. All changes to actor flags such as Respawn and Low Level Processing are saved in the savegame.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsRefEssential" class="f" href="http://cs.elderscrolls.com/index.php?title=IsRefEssential">IsRefEssential</a> - returns whether the referenced actor is essential<br />
  <code class="s">(isEssential:bool) reference.IsRefEssential</code></p>
  
  <p><a id="SetRefEssential" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRefEssential">SetRefEssential</a> - sets the calling ref to be essential or not<br />
  <b>Note: </b>Although used on a reference, this function changes the Essential flag on the Base Object, thus affecting all references from that Base Object.<br />
  <code class="s">reference.SetRefEssential isEssential:bool</code></p>
  
  <p><a id="GetActorLightAmount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorLightAmount">GetActorLightAmount</a> - returns a float describing the amount of light falling on an actor, or 100 if the actor is not in high/medium-high process.<br />
  <b>Note: </b>The values appear to range from 0.00 for complete darkness to 100.00 for very bright light.<br />
  <b>Note: </b>Without EngineBugFixes, some creatures (like horses and trolls) will always report a light level of 0.<br />
  <code class="s">(lightAmount:float) reference.GetActorLightAmount</code></p>
  
  <p><a id="CanCorpseCheck" class="f" href="http://cs.elderscrolls.com/index.php?title=CanCorpseCheck">CanCorpseCheck</a> - returns 1 if the Can Corpse Check flag is set on the actor<br />
  <code class="s">(canCorpseCheck:bool) <span class="op">reference.</span>CanCorpseCheck <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetCanCorpseCheck" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCanCorpseCheck">SetCanCorpseCheck</a> - changes the Can Corpse Check flag on the actor<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetCanCorpseCheck flag:int <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetActorMinLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorMinLevel">GetActorMinLevel</a> - returns the minimum level of the actor if the PC Level Offset flag is set<br />
  <code class="s">(minLevel:int) <span class="op">reference.</span>GetActorMinLevel <span class="op">actor:ref</span></code><br />
  <code class="s">(minLevel:int) <span class="op">reference.</span>GetMinLevel <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetActorMaxLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorMaxLevel">GetActorMaxLevel</a> - returns the maximum level of the actor if the PC Level Offset flag is set<br />
  <code class="s">(maxLevel:int) <span class="op">reference.</span>GetActorMaxLevel <span class="op">actor:ref</span></code><br />
  <code class="s">(maxLevel:int) <span class="op">reference.</span>GetMaxLevel <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetNumFactions" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumFactions">GetNumFactions</a> - returns the number of factions to which the actor belongs<br />
  <code class="s">(numFactions:int) <span class="op">reference.</span>GetNumFactions <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetNthFaction" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthFaction">GetNthFaction</a> - returns the nth faction to which the actor belongs<br />
  <code class="s">(faction:ref) <span class="op">reference.</span>GetNthFaction  whichFaction:short <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetActorSoulLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorSoulLevel">GetActorSoulLevel</a> - returns the soul level of any actor. If an NPC it returns Grand, otherwise if a creature it returns the creature's soul level.<br />
  <code class="s">(<a href="#Soul_Level">soulLevel</a>:int) <span class="op">reference.</span>GetActorSoulLevel <span class="op">actor:ref</span></code></p>
  
  <p><a id="HasLowLevelProcessing" class="f" href="http://cs.elderscrolls.com/index.php?title=HasLowLevelProcessing">HasLowLevelProcessing</a> - returns 1 if the actor has low level processing enabled<br />
  <code class="s">(hasLowProc:bool) <span class="op">reference.</span>HasLowLevelProcessing <span class="op">actor:ref</span></code></p>
  
  <p><a id="HasNoPersuasion" class="f" href="http://cs.elderscrolls.com/index.php?title=HasNoPersuasion">HasNoPersuasion</a> - returns 1 if the No Persuasion flag is set on the actor<br />
  <code class="s">(hasNoPers:bool) <span class="op">reference.</span>HasNoPersuasion <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetNoPersuasion" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNoPersuasion">SetNoPersuasion</a> - changes the No Persuasion flag on the actor<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetNoPersuasion flag:int <span class="op">actor:ref</span></code></p>
  
  <p><a id="IsActorRespawning" class="f" href="http://cs.elderscrolls.com/index.php?title=IsActorRespawning">IsActorRespawning</a> - returns 1 if the Respawn flag is set on the actor<br />
  <code class="s">(respawns:bool) <span class="op">reference.</span>IsActorRespawning <span class="op">actor:ref</span></code></p>
  
  <p><a id="IsPCLevelOffset" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPCLevelOffset">IsPCLevelOffset</a> - returns 1 if the actor's level is calculated relative to the player's level<br />
  <code class="s">(isLevOffset:bool) <span class="op">reference.</span>IsPCLevelOffset <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetActorBaseLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorBaseLevel">GetActorBaseLevel</a> - returns the level of the base actor. In the editor, for creatures this is the "Level Offset" field; for NPCs it is the "Level" field. For either, the meaning of the return value depends on whether or not the PC Level Offset flag is set for the base actor.<br />
  <code class="s">(level:int) <span class="op">reference.</span>GetActorBaseLevel <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="IsSummonable" class="f" href="http://cs.elderscrolls.com/index.php?title=IsSummonable">IsSummonable</a> - returns 1 if the Summonable flag is set on the actor<br />
  <code class="s">(isSummonable:bool) <span class="op">reference.</span>IsSummonable <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetSummonable" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSummonable">SetSummonable</a> - changes the Summonable flag on the actor<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetSummonable flag:int <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetActorRespawns" class="f" href="http://cs.elderscrolls.com/index.php?title=SetActorRespawns">SetActorRespawns</a> - changes the Respawn flag on the actor<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetActorRespawns flag:int <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetFemale" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFemale">SetFemale</a> - changes the Female flag on the actor. Changes are saved but may not be immediately visible.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetFemale flag:int <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetLowLevelProcessing" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLowLevelProcessing">SetLowLevelProcessing</a> - turns low level processing on or off for the actor. Note that this sets the No Low Level Processing flag to the opposite of the passed value.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetLowLevelProcessing flag:int <span class="op">actor:ref</span></code></p>
  
  <p><a id="SetPCLevelOffset" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPCLevelOffset">SetPCLevelOffset</a> - changes the PC Level Offset flag on the actor, and optionally specifies the minimum andmaximum levels. If minLevel or maxLevel is omitted or passed as -1, the existing value will be retained.<br />
  <b>Note:</b> Changes to the min/max levels are not saved in the savegame.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetPCLevelOffset flag:int <span class="op">minLevel:int maxLevel:int actor:ref</span></code></p>
  
  <p><a id="GetNumPackages" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumPackages">GetNumPackages</a> - returns the number of AI packages in the actor's package list<br />
  <code class="s">(numPackages:int) <span class="op">reference.</span>GetNumPackages <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetNthPackage" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthPackage">GetNthPackage</a> - returns the Nth AI package in the NPC's package list, in the order in which they were added in the editor.<br />
  <code class="s">(package:ref) <span class="op">reference.</span>GetNthPackage whichPackage:short <span class="op">actor:ref</span></code></p>
  
  <p><a id="GetSpellEffectiveness" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellEffectiveness">GetSpellEffectiveness</a> - returns the actor's spell effectiveness based on the armor he or she has equipped as a floating point value from 0 to 1.0. The return value is always 1.0 for creatures and NPCs other than the player. When calledon the player, this command returns the player's base spell effectiveness as calculated by the game plus any script modifier applied by ModPCSpellEffectiveness.<br />
  <code class="s">(spellEffectiveness:float) reference.GetSpellEffectiveness</code></p>
  
  <p><a id="CanCastPower" class="f" href="http://cs.elderscrolls.com/index.php?title=CanCastPower">CanCastPower</a> - returns false if the calling actor has already used the specified greater power within the last 24 hours. This command does not check for the presence of the greater power in the actor's spellbook.<br />
  <code class="s">(CanCast:bool) ref.CanCastPower spell:ref</code></p>
  
  <p><a id="SetCanCastPower" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCanCastPower">SetCanCastPower</a> - indicates whether the calling actor can cast the specified greater power. Passing 1 allows the actor to cast the power even if he has already used it within the past 24 hours. Passing 0 disallows the actor from casting the spell for the next 24 hours, unless the actor has already cast the power, in which case the power will become usable as normal 24 hours after the last casting.<br />
  <code class="s">(nothing) ref.SetCanCastPower spell:ref allowCasting:bool</code></p>
  
  <p><a id="SetPowerTimer" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPowerTimer">SetPowerTimer</a> - sets the amount of time that must pass until the calling actor can cast the specified power. The time is a float representing the number of real-time seconds until the power becomes usable. When an actor uses a power, the game calculates the 24-hour timer as <strong>3600 / TimeScale 24</strong> where TimeScale is a global variable representing the number of game-time minutes which elapse per real-tme minute. The timer value passed to this function should similarly take TimeScale into account. Passing a value of zero or less will cause the power to become usable the very next frame.<br />
  <code class="s">(nothing) ref.SetPowerTimer spell:ref timer:float</code></p>
  
  <p><a id="GetUsedPowers" class="f" href="http://cs.elderscrolls.com/index.php?title=GetUsedPowers">GetUsedPowers</a> - returns an Array containing information about all greater powers which the calling actor has used. This includes powers cast by the actor within the last 24 hours as well as any powers flagged as used by SetCanCastPower and SetPowerTimer. The return value is an Array of StringMaps:<br />
  <span class="ind" style="font-family: monospace;">GetUsedPowers[n]["power"] := <strong>ref</strong></span> <span style="font-style: italic;">; the greater power</span><br />
  <span class="ind" style="font-family: monospace;">GetUsedPowers[n]["timer"] := <strong>float</strong></span> <span style="font-style: italic;">; number of real-time seconds until the power becomes usable again</span><br />
  <code class="s">(powers:Array) ref.GetUsedPowers</code></p>
  
  <p><a id="HasSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=HasSpell">HasSpell</a> - returns whether the actor has the specified spell<br />
  <b>Notes: </b>Before xOBSE 21.5 return always 0 on Creatures. <br />
  <code class="s">(hasSpell:bool) reference.HasSpell spell:ref</code></p>
  
  <p><a id="RemoveBaseSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveBaseSpell">RemoveBaseSpell</a> - the game's RemoveSpell removes a spell from a base actor but must be called on a reference. This command does the same thing as RemoveSpell but takes a base object as an argument, returning 1 if the spell was removed.<br />
  <code class="s">(bRemoved:bool) RemoveBaseSpell actor:ref</code></p>
  
  <p><a id="GetLeveledSpells" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLeveledSpells">GetLeveledSpells</a> - returns an Array containing all of the leveled spells in the base actor's spell list.<br />
  <code class="s">(spells:Array) <span class="op">reference.</span>GetLeveledSpells <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="GetActorPackages" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorPackages">GetActorPackages</a> - returns an Array containing the AI packages defined in the base actor's package list, in the order in which they are listed in the editor.<br />
  <code class="s">(packages:Array) <span class="op">reference.</span>GetActorPackages <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="GetCurrentPackage" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentPackage">GetCurrentPackage</a> - returns the actor ref's currently executing package<br />
  <code class="s">(package:ref) reference.GetCurrentPackage</code></p>
  
  <p><a id="GetCurrentPackageProcedure" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentPackageProcedure">GetCurrentPackageProcedure</a> - returns the name of the <a href="#Package_Procedures">AI procedure</a> currently being executed by the calling actor, or "NONE".<br />
  <code class="s">(procedure:string) reference.GetCurrentPackageProcedure</code></p>
  
  <p><a id="GetCurrentEditorPackage" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentEditorPackage">GetCurrentEditorPackage</a> - returns the actor ref's executing non-dynamic package<br />
  <code class="s">(package:ref) reference.GetCurrentEditorPackage</code></p>
  
  <p><a id="EquipItem2" class="f" href="http://cs.elderscrolls.com/index.php?title=EquipItem2">EquipItem2</a> - duplicates the behavior of the vanilla <code>EquipItem</code> command, but also causes the object's <code>OnEquip</code> script block to run if one exists<br />
  <code class="s">(nothing) ref.EquipItem2 item:ref lockEquip:bool</code></p>
  
  <p><a id="EquipItem2NS" class="f" href="http://cs.elderscrolls.com/index.php?title=EquipItem2NS">EquipItem2NS</a> - behaves identically to <code>EquipItem2</code>, but suppresses the UI message generated by that command<br />
  <code class="s">(nothing) ref.EquipItem2NS item:ref lockEquip:bool</code></p>
  
  <p><a id="GetSpecialAnims" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpecialAnims">GetSpecialAnims</a> - returns an Array containing the filenames of any special animations for the actor. Animations for creatures, and those in the SpecialAnims folder for NPCs, can be toggled on and off in the actor's animation list in the editor.<br />
  <code class="s">(anims:Array) <span class="op">reference.</span>GetSpecialAnims <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="ToggleSpecialAnim" class="f" href="http://cs.elderscrolls.com/index.php?title=ToggleSpecialAnim">ToggleSpecialAnim</a> - adds or removes an animation from the base actor's animation list. For creatures, the animations must appear in the creature's model folder; for NPCs they must be located in the Special Anims folder. Changes made using this command have no effect on the animations of reference's to the base actor which are currently in middle-high or high process.<br />
  <code class="s">(bSucceeded:bool) <span class="op">reference.</span>ToggleSpecialAnim animFileName:string toggleOn:bool <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="GetGroundSurfaceMaterial" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGroundSurfaceMaterial">GetGroundSurfaceMaterial</a> - returns the <a href="#Surface_Type">surface type</a> that the actor ref is currently standing on. Returns -1 if the ref is not in middle-high or high process.<br />
  <code class="s">(surfaceType:int) <span class="op">reference.</span>GetGroundSurfaceMaterial</code></p>
  
  <p><a id="GetFactions" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFactions">GetFactions</a> - returns an array containing the factions the calling ref or base actor is a member of.<br />
  <code class="s">(factions:Array) <span class="op">reference.</span>GetFactions <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="GetActorSwimBreath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorSwimBreath">GetActorSwimBreath</a> - returns the calling high process actor's swimming breath level in seconds.<br />
  <code class="s">(breathLevel:float) <span class="op">reference.</span>GetActorSwimBreath</code></p>
  
  <p><a id="SetActorSwimBreath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetActorSwimBreath">SetActorSwimBreath</a> - sets the calling high process actor's swimming breath level.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetActorSwimBreath newBreath:float</code></p>
  
  <p><a id="GetActorMaxSwimBreath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorMaxSwimBreath">GetActorMaxSwimBreath</a> - returns the calling high process actor's maximum swimming breath level  in seconds.<br />
  <code class="s">(breathLevel:float) <span class="op">reference.</span>GetActorMaxSwimBreath</code></p>
  
  <p><a id="SetActorMaxSwimBreath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetActorMaxSwimBreath">SetActorMaxSwimBreath</a> - sets the calling high process actor's maximum swimming breath level. Overrides are automatically cleared when the actor leaves the high process AI processing band.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetActorMaxSwimBreath newBreath:float</code></p>
  
  <p><a id="OverrideActorSwimBreath" class="f" href="http://cs.elderscrolls.com/index.php?title=OverrideActorSwimBreath">OverrideActorSwimBreath</a> - overrides the <a href="#Swim_Breath_State">swimming breath behaviour</a> of the calling high process actor. Overridden actors will revert to their normal behaviour when they leave the high process AI processing band.<br />
  <code class="s">(nothing) <span class="op">reference.</span>OverrideActorSwimBreath override:int</code></p>
  
  <h3><a id="Actor_Value_Functions">Actor Value Functions</a></h3>
  <p>Actor values are determined by several factors including the attributes defined for the base actor, several dynamic modifiers, and the effects of game settings. For a detailed description of how actor values are calculated see the <a href="http://cs.elderscrolls.com/index.php?title=Category:Actor_Values">wiki entry</a>. OBSE provides commands to retrieve and modify the modifiers applied to an actor value, retrieve the actor value as defined for a base actor, and retrieve the maximum value of an actor value.</p>
  <p><a id="GetAVMod" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAVMod">GetAVMod</a> - returns one of the calling actor's modifiers for the specified actor value. The modifier is specified as a string: "script" refers to the script (or "offset") modifier applied by the <strong>script</strong> versions of ModAV and ForceAV; "max" refers to the modifier applied by magic effects like feather, drain, and fortify; and "damage" refers to that applied by effects like damage and restore, and by the <strong>console</strong> version of ModAV/ForceAV as well as ModAV2.<br />
  <code class="s">(modifierValue:float) ref.GetAVMod actorValueName:string whichModifier:string</code><br />
  <code class="s">(modifierValue:float) ref.GetAVModC actorValueCode:int whichModifier:string</code></p>
  
  <p><a id="SetAVMod" class="f" href="http://cs.elderscrolls.com/index.php?title=SetAVMod">SetAVMod</a> - sets the value of one of the calling actor's modifiers for the specified actor value. The modifier is specified as a string: "script" refers to the script (or "offset") modifier applied by the <strong>script</strong> versions of ModAV and ForceAV; "max" refers to the modifier applied by magic effects like feather, drain, and fortify; and "damage" refers to that applied by effects like damage and restore, and by the <strong>console</strong> version of ModAV/ForceAV as well as ModAV2. To encourage compatibility between mods, prefer using ModAVMod over SetAVMod.<br />
  <code class="s">(nothing) ref.SetAVMod actorValueName:string whichModifier:string amount:float</code><br />
  <code class="s">(nothing) ref.SetAVModC actorValueCode:int whichModifier:string amount:float</code></p>
  
  <p><a id="ModAVMod" class="f" href="http://cs.elderscrolls.com/index.php?title=ModAVMod">ModAVMod</a> - modifies the value of one of the calling actor's modifiers for the specified actor value by the specified amount. The modifier is specified as a string: "script" refers to the script (or "offset") modifier applied by the <strong>script</strong> versions of ModAV and ForceAV; "max" refers to the modifier applied by magic effects like feather, drain, and fortify; and "damage" refers to that applied by effects like damage and restore, and by the <strong>console</strong> version of ModAV/ForceAV as well as ModAV2.<br />
  <code class="s">(nothing) ref.ModAVMod actorValueName:string whichModifier:string amount:float</code><br />
  <code class="s">(nothing) ref.ModAVModC actorValueCode:int whichModifier:string amount:float</code></p>
  
  <p><a id="GetMaxAV" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMaxAV">GetMaxAV</a> - returns the maximum possible value of the specified actor value for the calling actor.<br />
  <code class="s">(maxValue:float) ref.GetMaxAV actorValueName:string</code><br />
  <code class="s">(maxValue:float) ref.GetMaxAVC actorValueCode:int</code></p>
  
  <p><a id="GetAVForBaseActor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAVForBaseActor">GetAVForBaseActor</a> - returns the value of the specified actor value as defined for the base actor. If the second argument is omitted, the base object for the calling actor is used. Note that not all actor values are defined for base actors, in which case this command returns 0.<br />
  <code class="s">(value:int) <span class="op">ref.</span>GetAVForBaseActor actorValueName:string <span class="op">actorBase:ref</span></code><br />
  <code class="s">(value:int) <span class="op">ref.</span>GetAVForBaseActorC actorValueCode:int <span class="op">actorBase:ref</span></code></p>
  
  <p><a id="GetActorValueC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorValueC">GetActorValueC</a> - returns the actor value specified by the actor value code<br />
  <code class="s">(actorValue:int) reference.GetActorValueC <a href="#Actor_Value_Codes">actorValueCode</a>:int</code><br />
  <code class="s">(actorValue:int) reference.GetAVC <a href="#Actor_Value_Codes">actorValueCode</a>:int</code></p>
  
  <p><a id="ModActorValueC" class="f" href="http://cs.elderscrolls.com/index.php?title=ModActorValueC">ModActorValueC</a> - modifies the actor value without changing the base value. Acts like a spell: a negative number reduces the value which can be restored and a positive value restores values without exceeding the maximum of the stat.<br />
  <code class="s">(nothing) reference.ModActorValueC <a href="#Actor_Value_Codes">actorValueCode</a>:int value:int</code><br />
  <code class="s">(nothing) reference.ModAVC <a href="#Actor_Value_Codes">actorValueCode</a>:int value:int</code></p>
  
  <p><a id="SetActorValueC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetActorValueC">SetActorValueC</a> - sets the actor value specified by the actor value code<br />
  <code class="s">(nothing) reference.SetActorValueC <a href="#Actor_Value_Codes">actorValueCode</a>:int value:int</code><br />
  <code class="s">(nothing) reference.SetAVC <a href="#Actor_Value_Codes">actorValueCode</a>:int value:int</code></p>
  
  <p><a id="ModActorValue2" class="f" href="http://cs.elderscrolls.com/index.php?title=ModActorValue2">ModActorValue2</a> - modifies the current value without changing the base value. Acts like a spell: a negative number reduces the value which can be restored and a positive value restores values without exceeding the maximum of the stat.<br />
  <b>Note: </b>The value is an unrounded integer; ModAV2 StatName 3.9 would result in a 3 point change.<br />
  <b>Note: </b>Attempting to mod a positive-only stat like health and attributes to negative values will crash the game. (TODO: Verify)<br />
  <code class="s">(nothing) reference.ModActorValue2 actorValueName:string value:int</code><br />
  <code class="s">(nothing) reference.ModAV2 actorValueName:string value:int</code></p>
  
  <p><a id="GetLuckModifiedSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLuckModifiedSkill">GetLuckModifiedSkill</a> - the game applies a modifier to all skills based on an actor's luck attribute. This command takes an actual skill value and a luck attribute value and calculates the effective level of the skill after the luck modifier has been applied. The third parameter can be used to return an uncapped value - The result is capped at 100 by default.<br />
  <code class="s">(modifiedSkill:int) GetLuckModifiedSkill skillLevel:int luck:int <span class="op">capped:bool</span></code></p>
  
  <p><a id="GetAVSkillMasteryLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAVSkillMasteryLevel">GetAVSkillMasteryLevel</a> - returns the current mastery level of an actor's skill. The mastery level is an integer from 0 (Novice) to 4 (Master).<br />
  <code class="s">(masteryLevel:int) reference.GetAVSkillMasteryLevel skill:actorValue </code></p>
  
  <p><a id="GetAVSkillMasteryLevelC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAVSkillMasteryLevelC">GetAVSkillMasteryLevelC</a> - alternate version of GetAVSkillMasteryLevel taking an actor value for the skill.<br />
  <code class="s">(masteryLevel:int) reference.GetAVSkillMasteryLevelC skillCode:int </code></p>
  
  <h3><a id="Attacking">Attacking</a></h3>
  
  <p>Types with this quality are used for attacks.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Attack Damage</strong> (<span class="op">long</span>) - the base damage of the type; used in a forumla with the appropriate skill to determine damage actually done<br />
  <strong>Speed</strong> (<span class="op">float</span>) - the speed factor of the type; used in a forumla to determine the rate of attack<br />
  <strong>Ignores Resistance</strong> (<span class="op">bool</span>) - determines whether the type will ignore normal damage resistance.<br />
  </p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetAttackDamage" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAttackDamage">GetAttackDamage</a> - returns the base attack damage<br />
  <code class="s">(damage:int) <span class="op">reference.</span>GetAttackDamage <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetAttackDamage" class="f" href="http://cs.elderscrolls.com/index.php?title=SetAttackDamage">SetAttackDamage</a> - sets the base attack damage<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetAttackDamage nuDamage:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModAttackDamage" class="f" href="http://cs.elderscrolls.com/index.php?title=ModAttackDamage">ModAttackDamage</a> - modifies the base attack damage up or down<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModAttackDamage modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetWeaponSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeaponSpeed">GetWeaponSpeed</a> - returns the weapon speed<br />
  <code class="s">(speed:float) <span class="op">reference.</span>GetWeaponSpeed <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetWeaponSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeaponSpeed">SetWeaponSpeed</a> - sets the weapon speed<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetWeaponSpeed nuSpeed:float <span class="op">obejctID:ref</span></code></p>
  
  <p><a id="ModWeaponSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=ModWeaponSpeed">ModWeaponSpeed</a> - modifies the weapon speed up or down<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModWeaponSpeed modifyBy:float <span class="op">obejctID:ref</span></code></p>
  
  <p><a id="GetIgnoresResistance" class="f" href="http://cs.elderscrolls.com/index.php?title=GetIgnoresResistance">GetIgnoresResistance</a> - returns whether the object ignores normal damage resistance<br />
  <code class="s">(ignores:bool) <span class="op">reference.</span>GetIgnoresResistance <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetIgnoresResistance" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIgnoresResistance">SetIgnoresResistance</a> - sets whether the object ignores normal damage resistance<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIgnoresResistance shouldIgnore:bool <span class="op">objectID:ref</span></code></p>
  
  <h3><a id="Audible">Audible</a></h3>
  
  <p>Types with this quality have one or more sounds associated with them.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Open Sound</strong> (<span class="op">ref</span>) - the sound played upon opening. (Containers and Doors)<br />
  <strong>Close Sound</strong> (<span class="op">ref</span>) - the sound played upon closing. (Containers and Doors)<br />
  <strong>Loop Sound</strong> (<span class="op">ref</span>) - the looping sound associated with an object. (Doors, Lights, and Activators)<br />
  </p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetOpenSound" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOpenSound">GetOpenSound</a> - Returns the "open" sound<br />
  <code class="s">(sound:ref) <span class="op">reference.</span>GetOpenSound <span class="op">baseObject:ref</span></code></p>
  
  <p><a id="GetCloseSound" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCloseSound">GetCloseSound</a> - Returns the "close" sound<br />
  <code class="s">(sound:ref) <span class="op">reference.</span>GetCloseSound <span class="op">baseObject:ref</span></code></p>
  
  <p><a id="GetLoopSound" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLoopSound">GetLoopSound</a> - Returns the looping sound<br />
  <code class="s">(sound:ref) <span class="op">reference.</span>GetLoopSound <span class="op">baseObject:ref</span></code></p>
  
  <p><a id="SetOpenSound" class="f" href="http://cs.elderscrolls.com/index.php?title=SetOpenSound">SetOpenSound</a> - Sets the "open" sound<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetOpenSound sound:ref <span class="op">baseObject:ref</span></code></p>
  
  <p><a id="SetCloseSound" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCloseSound">SetCloseSound</a> - Sets the "close" sound<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetCloseSound sound:ref <span class="op">baseObject:ref</span></code></p>
  
  <p><a id="SetLoopSound" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLoopSound">SetLoopSound</a> - Sets the looping sound<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetLoopSound sound:ref <span class="op">baseObject:ref</span></code></p>
  
  <h3><a id="Breakable">Breakable</a></h3>
  
  <p>Types with this quality can be broken.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Health</strong> (<span class="op">long</span>) - the base health of the object. Cannot be negative.<br />
  <strong>Current Health</strong> (<span class="op">float</span>) - the current health of the object. The object is damaged when the current value is less than the base object value and is broken when the current health reaches 0. The effectiveness of the object may be decreased as damage increases.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetObjectHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=GetObjectHealth">GetObjectHealth</a> - returns the base object health<br />
  <code class="s">(health:int) <span class="op">reference.</span>GetObjectHealth <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetObjectHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=SetObjectHealth">SetObjectHealth</a> - sets the base object health<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetObjectHealth nuHealth:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModObjectHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=ModObjectHealth">ModObjectHealth</a>  - modifies the base object health up or down<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModObjectHealth modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetCurrentHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentHealth">GetCurrentHealth</a> - returns the current health of the calling reference<br />
  <code class="s">(health:float) reference.GetCurrentHealth</code></p>
  
  <p><a id="SetCurrentHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCurrentHealth">SetCurrentHealth</a> - sets the current health of the calling reference<br />
  <code class="s">(nothing) reference.SetCurrentHealth nuHealth:float</code></p>
  
  <p><a id="GetEquippedCurrentHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquippedCurrentHealth">GetEquippedCurrentHealth</a> -  gets the current health of the object in the specified equipment slot<br />
  <code class="s">(health:float) reference.GetEquippedCurrentHealth <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <p><a id="SetEquippedCurrentHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEquippedCurrentHealth">SetEquippedCurrentHealth</a> - sets the current health of the object in the specified equipment slot<br />
  <code class="s">(nothing) reference.SetEquippedCurrentHealth nuHealth:int <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <p><a id="ModEquippedCurrentHealth" class="f" href="http://cs.elderscrolls.com/index.php?title=ModEquippedCurrentHealth">ModEquippedCurrentHealth</a> - modifies the current health of the object in the specified equipment slot up or down <br />
  <code class="s">(nothing) reference.ModEquippedCurrentHealth modifyBy:float <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <h3><a id="Class">Class</a></h3>
  
  <p>Types with this quality have a player class.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Description">Description</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Attributes</strong> (<span class="op">short</span>) - the two attributes of the class<br />
  <strong>Skills</strong> (<span class="op">short</span>) - the five major skills of the class<br />
  <strong>Specialization</strong> (<span class="op">short</span>) - the specialization of the class<br />
  </p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetClass" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClass">GetClass</a> - returns the class of the NPC <br />
  <code class="s">(class:ref) <span class="op">reference.</span>GetClass <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetClassAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClassAttribute">GetClassAttribute</a> - returns the Nth attribute of the class. If called on a reference it will attempt to find the class from that referenced NPC and use that. If a class FormID is passed, that takes precedence.<br />
  <code class="s">(<a href="#Actor_Value_Codes">attribute</a>:int) <span class="op">reference.</span>GetClassAttribute whichAttribute:int <span class="op">class:ref</span></code></p>
  
  <p><a id="GetClassSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClassSkill">GetClassSkill</a> - returns the Nth skill of the class. If called on a reference it will attempt to find the class from that referenced NPC and use that. If a class FormID is passed, that takes precedence.<br />
  <code class="s">(<a href="#Actor_Value_Codes">skill</a>:int) <span class="op">reference.</span>GetClassSkill whichSkill:int <span class="op">class:ref</span></code></p>
  
  <p><a id="GetClassSpecialization" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClassSpecialization">GetClassSpecialization</a> - returns the class specialization. If called on a reference it will attempt to find the class from that referenced NPC and use that. If a class FormID is passed, that takes precedence.<br />
  <code class="s">(<a href="#Class_Specialization_Codes">specialization</a>:int) <span class="op">reference.</span>GetClassSpecialization <span class="op">class:ref</span></code></p>
  
  <p><a id="IsClassSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=IsClassSkill">IsClassSkill</a> - returns whether the passed skill is a skill of the class. If called on a reference it will attempt to find the class from that referenced NPC and use that. If a class FormID is passed, that takes precedence.<br />
  <code class="s">(isClassSkill:bool) <span class="op">reference.</span>IsClassSkill skill:string <span class="op">class:ref</span></code><br />
  <code class="s">(isClassSkill:bool) <span class="op">reference.</span>IsMajor skill:string <span class="op">class:ref</span></code></p>
  
  <p><a id="IsClassSkillC" class="f" href="http://cs.elderscrolls.com/index.php?title=IsClassSkill">IsClassSkillC</a> - alternate version of IsClassSkill taking a skill code instead of the name of a skill.<br />
  <code class="s">(isClassSkill:bool) <span class="op">reference.</span>IsClassSkillC <a href="#Actor_Value_Codes">skill</a>:int <span class="op">class:ref</span></code><br />
  <code class="s">(isClassSkill:bool) <span class="op">reference.</span>IsMajorC <a href="#Actor_Value_Codes">skill</a>:int <span class="op">class:ref</span></code></p>
  
  <p><a id="IsClassAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=IsClassAttribute">IsClassAttribute</a> - returns whether the passed attribute is an attribute of the class. If called on a reference it will attempt to find the class from that referenced NPC and use that. If a class FormID is passed, that takes precedence. (available in v0011)<br />
  <code class="s">(isClassAttribute:bool) <span class="op">reference.</span>IsClassAttribute <a href="#Actor_Value_Codes">attribute</a>:int <span class="op">class:ref</span></code></p>
  
  <p><a id="IsClassAttributeC" class="f" href="http://cs.elderscrolls.com/index.php?title=IsClassAttribute">IsClassAttributeC</a> - alternate version of <code>IsClassAttribute</code> taking an actor value code instead of the name of an actor value<br />
  <code class="s">(isClassAttribute:bool) <span class="op">reference.</span>IsClassAttributeC <a href="#Actor_Value_Codes">actorValueCode</a>:int <span class="op">class:ref</span></code></p>
  
  <p><a id="GetClassSkills" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClassSkills">GetClassSkills</a> - returns an Array containing the seven major skills associated with the class. If the parameter is omitted, the class of the calling NPC is used.<br />
  <code class="s">(skills:Array) <span class="op">reference.</span>GetClassSkills <span class="op">class:ref</span></code></p>
  
  <p><a id="SetClassSkills" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClassSkills">SetClassSkills</a> - accepts an Array of seven different skill codes and sets them as the class's major skills. If fewer or more than seven skills are found in the array or duplicate skills are found, the function will return zero with no changes made to the class. If the class argument is omitted, the calling NPC's class is used.<br />
  <code class="s">(bSkillsSet:bool) <span class="op">reference.</span>SetClassSkills skills:Array <span class="op">class:ref</span></code></p>
  
  <p><a id="SetClassSkills2" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClassSkills2">SetClassSkills2</a> - Identical to SetClassSkills, except it allows duplicate skills.<br />
  <code class="s">(bSkillsSet:bool) <span class="op">reference.</span>SetClassSkills2 skills:Array <span class="op">class:ref</span></code></p>
  
  <p><a id="SetClassSpecialization" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClassSpecialization">SetClassSpecialization</a> - sets the class specialization. If the class argument is omitted thecalling NPC's class is used.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetClassSpecialization <a href="#Class_Specialization_Codes">specialization</a>:int <span class="op">class:ref</span></code></p>
  
  <p><a id="SetClassAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClassAttribute">SetClassAttribute</a> - sets one of the two favored attributes for the class. Both class attributes must be unique. If the class argument is omitted the calling NPC's class is used.<br />
  <code class="s">(bAttributeSet:bool) <span class="op">reference.</span>SetClassAttribute which:int attribute:string <span class="op">class:ref</span></code></p>
  
  <p><a id="SetClassAttributeC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClassAttributeC">SetClassAttributeC</a> - as SetClassAttribute but takes an actor value code instead of an actor value string.<br />
  <code class="s">(bAttributeSet:bool) <span class="op">reference.</span>SetClassAttributeC which:int <a href="#Actor_Value_Codes">attribute</a>:int <span class="op">class:ref</span></code></p>
  
  <h3><a id="Container">Container</a></h3>
  
  <p>Something that holds inventory items.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetNumItems" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumItems">GetNumItems</a> - returns the number of different object types in the container or actor's inventory.<br />
  <b>Note: </b>This function can be used to check if a container is empty.<br />
  <b>Note: </b>Keep in mind that gold counts as an item.<br />
  <code class="s">(count:int) reference.GetNumItems</code></p>
  <p><a id="GetInventoryObject" class="f" href="http://cs.elderscrolls.com/index.php?title=GetInventoryObject">GetInventoryObject</a> - returns the objectID of the Nth item type in the container or actor's inventory<br />
  <b>Note: </b>For most use cases, this function is deprecated. If you need to find all objects in a certain container, check out <a href="#Inventory_Reference">Inventory References</a>.<br />
  <code class="s">(objectID:ref) reference.GetInventoryObject whichObject:int</code></p>
  
  <p><a id="IsContainer" class="f" href="http://cs.elderscrolls.com/index.php?title=IsContainer">IsContainer</a> - returns whether the reference or passed objectID is a container.<br />
  <b>Note: </b>Actors do not count as containers.<br />
  <code class="s">(isContainer:bool) <span class="op">reference.</span>IsContainer <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetContainerRespawns" class="f" href="http://cs.elderscrolls.com/index.php?title=GetContainerRespawns">GetContainerRespawns</a> - returns whether the container's contents repawn.<br />
  <code class="s">(respawns:bool) <span class="op">reference</span>.GetContainerRespawns <span class="op">objectID:ref</span></code><br />
  <code class="s">(respawns:bool) <span class="op">reference</span>.IsUnsafeRespawns <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetContainerRespawns" class="f" href="http://cs.elderscrolls.com/index.php?title=SetContainerRespawns">SetContainerRespawns</a> - sets whether the container's contents respawn.<br />
  <b>Note: </b>This change is not persisted in the save game.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetContainerRespawns respawns:bool <span class="op">objectID:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span>SetUnsafeContainer respawns:bool <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetItems" class="f" href="http://cs.elderscrolls.com/index.php?title=GetItems">GetItems</a> - returns an Array containing all of the items in a container's or actor's inventory. Up to 10 form types may be passed in to restrict the returned items to only include items matching those type(s).<br />
  <code class="s">(items:Array) reference.GetItems <span class="op">type1:int type2:int ... type10:int</span></code></p>
  
  <p><a id="GetBaseItems" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBaseItems">GetBaseItems</a> - returns an Array of StringMaps containing the items present in a base container or actor's inventory and the quantity of each. These are the items added to the base object in the editor and may include leveled items. Some, all, or none of the items may be present in the inventory of a specific reference to the base object. Each element of the returned Array is a StringMap with two elements:<br />
  <span class="ind" style="font-family: monospace;">"item"  : <strong>ref</strong></span> <span style="font-style: italic;">; the item</span><br />
  <span class="ind" style="font-family: monospace;">"count" : <strong>short</strong></span> <span style="font-style: italic;">; the quantity of this item</span><br />
  <code class="s">(items:Array) <span class="op">reference.</span>GetBaseItems <span class="op">baseContainer:ref</span></code></p>
  
  <p>Values are accessed like:</p><pre>	array_var baseItems
    let baseItems := someChestRef.GetBaseItems
    Print "First item: " + GetName baseItems[0][item] + " Quantity: " + ToString baseItems[0][count]</pre>
  
  <h3><a id="Description">Description</a></h3>
  
  <p>Types with this quality have descriptive text and include objects like books, skills, races, classes, and effect settings. Skills are unique in possessing five descriptions: one describing the skill and four associated with the text displayed when attaining a new rank in the skill.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Description</strong> (<span class="op">string</span>) - the text of the description</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetDescription" class="f" href="http://cs.elderscrolls.com/index.php?title=GetDecription">GetDescription</a> - returns the text of the description for the object. In the case of skills, an optional second parameter indicates the skill rank (0-3); if omitted, the skill's general description is returned.<br />
  <code class="s">(description:string) <span class="op">ref</span>.GetDescription <span class="op">object:ref skillrank:int</span></code></p>
  
  <p><a id="SetDescription" class="f" href="http://cs.elderscrolls.com/index.php?title=SetDescription">SetDescription</a> - modifies the text of a TESDescription (e.g. book, class, skill, skill level, etc). The modified description will be used for the remainder of the game session. To modify the text displayed when achieving a new level of mastery (Apprentice, Journeyman, etc) in a skill, pass the skill as the second argument and a skill level as the third, where skill level ranges from 0 (Apprentice) to 3 (Master)<br />
  <b>Note: </b>Calling <code>SetDescription</code> on a skill while omitting the optional skillLevel argument sets the general description of the skill as well as all 4 mastery levels. Currently there is no way to only set the general skill description.<br />
  <b>Note: </b>For books, setting a description longer than 65535 characters crashes the game when the book is opened in game. (TODO: Verify)<br />
  <code class="s">(success:bool) <span class="op">reference.</span>SetDescription description:string<span class="op"> form:ref</span><span class="op"> skillLevel:int</span></code></p>
  
  <h3><a id="Edible">Edible</a></h3>
  
  <p>Types with this quality may be considered food.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Is Food flag</strong> (<span class="op">bool</span>) - is the object considered to be food</p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsFood" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFood">IsFood</a> - returns whether the object is considered to be food<br />
  <code class="s">(isFood:bool) <span class="op">reference</span>.IsFood <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetIsFood" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsFood">SetIsFood</a> - sets whether the object is considered to be food<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetIsFood isFood:bool <span class="op">objectID:ref</span></code></p>
  
  <h3><a id="Enchantable">Enchantable</a></h3>
  
  <p>Types with this quality may be enchanted. A couple notes: Enchantments and the ranges of their effects need to be appropriate for the enchantable object's type. The Enchantment Type needs to match the object the enchantment applies to. Also, when adding an enchantment to an object, be sure that the object has a charge, or the enchantment cannot work. If the object was not previously enchanted, call SetObjectCharge to assign a charge to the object.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Enchantment</strong> (<span class="op">ref</span>) - the specific enchantment on the enchantable item<br />
  <strong>Charge</strong> (<span class="op">long</span>) - the maximum charge available on the enchantable item<br />
  <strong>Current Charge</strong> (<span class="op">float</span>) - the current charge of the enchantable item</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchantment">GetEnchantment</a> - returns the specific enchantment on the object<br />
  <code class="s">(enchantment:ref) <span class="op">reference.</span>GetEnchantment <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEnchantment">SetEnchantment</a> - sets the specific enchantment on the object and returns any previous enchantment<br />
  <b>Note: </b>For equipped armor and clothing, the new enchantment will only take affect after the actor unequips and re-equips the item.<br />
  <b>Note: </b>Changes to weapon enchantments occur immediately, but the shader will not update until the actor unequips and re-equips the weapon.<br />
  <b>Note: </b>Doesn't work on arrows.<br />
  <code class="s">(oldEnchantment:ref) <span class="op">reference.</span>SetEnchantment nuEnchantment:ref <span class="op">objectID:ref</span></code></p>
  
  <p><a id="RemoveEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveEnchantment">RemoveEnchantment</a> - removes the enchantment from the object and returns any previous enchantment<br />
  <code class="s">(oldEnchantment:ref) <span class="op">reference.</span>RemoveEnchantment <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetObjectCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=GetObjectCharge">GetObjectCharge</a> - returns the max charge of the object<br />
  <code class="s">(charge:int) <span class="op">reference.</span>GetObjectCharge <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetObjectCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=SetObjectCharge">SetObjectCharge</a> - sets the max charge of the object<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetObjectCharge nuCharge:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModObjectCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=ModObjectCharge">ModObjectCharge</a> - modifies the max charge of the object up or down<br />
  <code class="s">(nothing) <span class="op">reference</span>.ModObjectCharge modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetCurrentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentCharge">GetCurrentCharge</a> - returns the current charge of the calling reference<br />
  <code class="s">(charge:float) <span class="op">reference.</span>GetCurrentCharge</code></p>
  
  <p><a id="GetEquippedCurrentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquippedCurrentCharge">GetEquippedCurrentCharge</a> - returns the current charge of the object in the specified slot<br />
  <code class="s">(charge:float) reference.GetEquippedCurrentCharge <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <p><a id="SetEquippedCurrentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEquippedCurrentCharge">SetEquippedCurrentCharge</a> - sets the current charge of the object in the specified slot<br />
  <code class="s">(nothing) reference.SetEquippedCurrentCharge nuCharge:int <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <p><a id="ModEquippedCurrentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=ModEquippedCurrentCharge">ModEquippedCurrentCharge</a> - modifies the current charge of the object in the specified slot up or down<br />
  <code class="s">(nothing) reference.ModEquippedCurrentCharge modifyBy:float <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <p><a id="SetCurrentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCurrentCharge">SetCurrentCharge</a> - sets the current charge of the calling reference if it is less than or equal to the maximum charge<br />
  <code class="s">(nothing) reference.SetCurrentCharge newCharge:int</code></p>
  
  <p><a id="ModCurrentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=ModCurrentCharge">ModCurrentCharge</a> - modifies the current charge of the calling reference by the specified amount. Will not modify the charge past its maximum or below zero.<br />
  <code class="s">(nothing) reference.ModCurrentCharge modBy:int</code></p>
  
  <h3><a id="Equippable">Equippable</a></h3>
  
  <p>Types with this quality can be equipped by a character.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Slot</strong> (<span class="op">short</span>) - the equipment slot of the object</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetEquipmentSlot" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquipmentSlot">GetEquipmentSlot</a> - returns the equipment slot or slots taken by the object<br />
  <b>Note: </b>For multiple-slot items, use <code><a href="#GetBipedSlotMask">GetBipedSlotMask</a></code> to determine which slots are covered by the item.<br />
  <code class="s">(<a href="#Equipment_Slot_IDs">slot</a>:int) <span class="op">reference</span>.GetEquipentSlot <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetEquipmentSlot" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEquipmentSlot">SetEquipmentSlot</a> - sets the equipment slot or slots taken by the object.<br />
  <b>Note: </b>If you need to set a slot combination not covered by the possible values, use <a href="#SetBipedSlotMask"><code>SetBipedSlotMask</code></a> instead.<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetEquipmentSlot <a href="#Equipment_Slot_IDs">slot</a>:int <span class="op">objectID:ref</span></code></p>
  <p>See also: <a href="#GetEquippedObject">GetEquippedObject</a></p>
  
  <p><a id="EquipMe" class="f" href="http://cs.elderscrolls.com/index.php?title=EquipMe">EquipMe</a> - when called on an object in an actor's inventory, attempts to equip the object on the actor and runs the object's <code>OnEquip</code> script block if applicable. If called on an inventory reference with a count greater than one, equips only one unless the item is a stack of arrows, in which case the entire stack is equipped.<br />
  <b>Note: </b>This function will not work on non-playable items. (TODO: Verify. Also not on NPCs?)<br />
  <code class="s">(nothing) ref.EquipMe</code></p>
  
  <p><a id="UnequipMe" class="f" href="http://cs.elderscrolls.com/index.php?title=UnequipMe">UnequipMe</a> - when called on an object in an actor's inventory, attempts to unequip the object on the actor and runs the object's <code>OnUnequip</code> script block if applicable<br />
  <code class="s">(nothing) ref.UnequipMe</code></p>
  
  <h3><a id="Inventory">Inventory</a></h3>
  
  <p>Types with this quality are objects that can be either stored in an inventory or exist as a reference outside of an inventory.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Object</strong> (<span class="op">long</span>) - the base object id of a reference<br />
  <strong>Weapon Type</strong> (<span class="op">short</span>) - the type of weapon<br />
  <strong>Weight</strong> (<span class="op">float</span>) - the weight of one object of this type<br />
  <strong>Gold Value</strong> (<span class="op">long</span>) - the gold value of one object of this type. This value may not match the value displayed in the interface as that could include additional value from an enchantment.<br />
  <strong>Is Quest Item</strong> (<span class="op">bool</span>) - whether the type is a quest item. Quest items cannot be activated and cannot be dropped.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetBaseObject" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBaseObject">GetBaseObject</a> - returns the base object of the reference.<br />
  <b>Note: </b>If Ref is a base object already, then calling BaseObjectRef.GetBaseObject will halt the script (quest scripts will show as still running but won't execute any more). (TODO: Verify)<br />
  <code class="s">(objectID:ref) reference.GetBaseObject</code></p>
  
  <p><a id="GetObjectType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetObjectType">GetObjectType</a> - returns a type code for each type of object.<br />
  <code class="s">(<a href="#Form_Type_IDs">type</a>:int) <span class="op">reference.</span>GetObjectType <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsWeapon" class="f" href="http://cs.elderscrolls.com/index.php?title=IsWeapon">IsWeapon</a> - returns whether the object is a weapon.<br />
  <code class="s">(isWeapon:bool) <span class="op">reference.</span>IsWeapon <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsAmmo" class="f" href="http://cs.elderscrolls.com/index.php?title=IsAmmo">IsAmmo</a> - returns whether the object is ammunition.<br />
  <code class="s">(isAmmo:bool) <span class="op">reference.</span>IsAmmo <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsArmor" class="f" href="http://cs.elderscrolls.com/index.php?title=IsArmor">IsArmor</a> - returns whether the object is armor.<br />
  <code class="s">(isArmor:bool) <span class="op">reference.</span>IsArmor <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsBook" class="f" href="http://cs.elderscrolls.com/index.php?title=IsBook">IsBook</a> - returns whether the object is a book.<br />
  <code class="s">(isBook:bool) <span class="op">reference.</span>IsBook <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsClothing" class="f" href="http://cs.elderscrolls.com/index.php?title=IsClothing">IsClothing</a> - returns whether the object is clothing.<br />
  <code class="s">(isClothing:bool) <span class="op">reference.</span>IsClothing <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsIngredient" class="f" href="http://cs.elderscrolls.com/index.php?title=IsIngredient">IsIngredient</a> - returns whether the object is an ingredient.<br />
  <code class="s">(isIngredient:bool) <span class="op">reference.</span>IsIngredient <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsKey" class="f" href="http://cs.elderscrolls.com/index.php?title=IsKey">IsKey</a> - returns whether the object is a key.<br />
  <code class="s">(isKey:bool) <span class="op">reference.</span>IsKey <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsAlchemyItem" class="f" href="http://cs.elderscrolls.com/index.php?title=IsAlchemyItem">IsAlchemyItem</a> - returns whether the object is an alchemy item (potion).<br />
  <code class="s">(isAlchemyItem:bool) <span class="op">reference.</span>IsAlchemyItem <span class="op">objectID:ref</span></code><br />
  <code class="s">(isPotion:bool) <span class="op">reference.</span>IsPotion <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsApparatus" class="f" href="http://cs.elderscrolls.com/index.php?title=IsApparatus">IsApparatus</a> - returns whether the object is an alchemy apparatus.<br />
  <code class="s">(isApparatus:bool) <span class="op">reference.</span>IsApparatus <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsSoulGem" class="f" href="http://cs.elderscrolls.com/index.php?title=IsSoulGem">IsSoulGem</a> - returns whether the object is a soul gem.<br />
  <code class="s">(isSoulGem:bool) <span class="op">reference.</span>IsSoulGem <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsSigilStone" class="f" href="http://cs.elderscrolls.com/index.php?title=IsSigilStone">IsSigilStone</a> - returns whether the object is a sigil stone.<br />
  <code class="s">(isSigilStone:bool) <span class="op">reference.</span>IsSigilStone <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsMiscItem" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMiscItem">IsMiscItem</a> - returns whether the object is a miscellaneous item.<br />
  <code class="s">(isMiscItem:bool) <span class="op">reference.</span>IsMiscItem <span class="op">objectID:ref</span></code><br />
  <code class="s">(isMisc:bool) <span class="op">reference.</span>IsMisc <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsLight" class="f" href="http://cs.elderscrolls.com/index.php?title=IsLight">IsLight</a> - returns whether the object is a light source.<br />
  <code class="s">(isLight:bool) <span class="op">reference.</span>IsLight <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsFlora" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFlora">IsFlora</a> - returns 1 if the object is a harvestable plant.<br />
  <code class="s">(isFlora:bool) <span class="op">reference.</span>IsFlora <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetWeight" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeight">GetWeight</a> - returns the weight of the type.<br />
  <code class="s">(weight:float) <span class="op">reference</span>.GetWeight <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetWeight" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeight">SetWeight</a> - sets the weight of the type.<br />
  <b>Note: </b>If you change the weight of an item while the player has it in their inventory, their encumbrance won't be updated automatically. They have to pick up another item, or you can add/remove another item to force an update.<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetWeight nuWeight:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModWeight" class="f" href="http://cs.elderscrolls.com/index.php?title=ModWeight">ModWeight</a> - modifies the weight of the type up or down.<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModWeight modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetGoldValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGoldValue">GetGoldValue</a> - returns the base gold value of the type.<br />
  <code class="s">(goldValue:int) <span class="op">reference</span>.GetGoldValue <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetFullGoldValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFullGoldValue">GetFullGoldValue</a> - returns the full gold value of an item, including the value added by enchantments.<br />
  <code class="s">(goldValue:int) <span class="op">reference.</span>GetFullGoldValue <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetGoldValue" class="f" href="http://cs.elderscrolls.com/index.php?title=SetGoldValue">SetGoldValue</a> - sets the base gold value of the type.<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetGoldValue nuGoldValue:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModGoldValue" class="f" href="http://cs.elderscrolls.com/index.php?title=ModGoldValue">ModGoldValue</a> - modifies the base gold value of the type up or down.<br />
  <code class="s">(nothing) <span class="op">reference</span>.ModGoldValue modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsQuestItem" class="f" href="http://cs.elderscrolls.com/index.php?title=IsQuestItem">IsQuestItem</a> - returns whether the type is a quest item.<br />
  <code class="s">(isQuestItem:bool) <span class="op">reference</span>.IsQuestItem <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetQuestItem" class="f" href="http://cs.elderscrolls.com/index.php?title=SetQuestItem">SetQuestItem</a> - sets whether the type is a quest item.<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetQuestItem isQuestItem:bool <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetCurrentSoulLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCurrentSoulLevel">SetCurrentSoulLevel</a> - sets the current soul level of the calling soulgem reference.<br />
  <code class="s">(nothing) reference.SetCurrentSoulLevel newLevel:int</code></p>
  
  <h3><a id="Lockable">Lockable</a></h3>
  
  <p>Types with this quality can be locked.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetOpenKey" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOpenKey">GetOpenKey</a> - returns the key used to unlock the calling reference.<br />
  <b>Note: </b>The key reference is only set on one side of the door. If a reference isn't returned, then check its linked door with <code>GetLinkedDoor</code>. (TODO: Verify, request)<br />
  <code class="s">(key:ref) reference.GetOpenKey</code></p>
  
  <p><a id="SetOpenKey" class="f" href="http://cs.elderscrolls.com/index.php?title=SetOpenKey">SetOpenKey</a> - sets the key used to unlock the reference to the specified key.<br />
  <b>Note: </b>Normally, doors only have the key set on one side of the door. Setting the key on both sides of a linked door may produce odd results, so use with caution and check the other side of the door first with <code>GetLinkedDoor</code>.<br />
  <code class="s">(nothing) reference.SetOpenKey key:ref</code></p>
  
  <h3><a id="Magic">Magic</a></h3>
  
  <p>Types with this quality have a group of magical effects</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Magic Item Type</strong> (<span class="op">short</span>) - the type of magic item (Spell, Enchantment, AlchemyItem, Ingredient)<br />
  <strong>Effect Count</strong> (<span class="op">long</span>) - the number of magic effect items in the type<br />
  <strong>IsAutocalc</strong> (<span class="op">bool</span>) - whether the cost is autocalculated or set to a specific amount<br />
  <strong>EffectItem Code</strong> (<span class="op">long</span>) - the magic effect code for the effect item<br />
  <strong>EffectItem Magnitude</strong> (<span class="op">long</span>) - the magnitude of the magic effect item<br />
  <strong>EffectItem Area</strong> (<span class="op">long</span>) - the area affected by the magic effect item<br />
  <strong>EffectItem Duration</strong> <span class="op">long</span> - the time in seconds the magic effect lasts<br />
  <strong>EffectItem Range</strong> (<span class="op">short</span>) - the range of the effect (Self, Touch, Target)<br />
  <strong>EffectItem Actor Value</strong> (<span class="op">long</span>) - a code for the attribute or skill affected by the effect item<br />
  <strong>EffectItemScripted</strong> (<span class="op">bool</span>) - whether the effect item is a ScriptEffect (SEFF)<br />
  <strong>EffectItemScript</strong> (<span class="op">refID</span>) - the refID of the script used by the scripted effect item<br />
  <strong>EffectItemScriptVisualEffect</strong> (<span class="op">long</span>) - the magic effect code used for the visual effects of the scripted effect item<br />
  <strong>EffectItemScriptSchool</strong> (<span class="op">short</span>) - the magic school assigned to the scripted effect<br />
  <strong>EffectItemScriptIsHostile</strong> (<span class="op">bool</span>) - whether the scripted effect is hostile</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetMagicItemType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicItemType">GetMagicItemType</a> - returns the magic item type.<br />
  <code class="s">(<a href="#Magic_Item_Type">magicItemType</a>:int) GetMagicItemType magicItem:ref</code><br />
  <code class="s">(<a href="#Magic_Item_Type">magicItemType</a>:int) GetMIType magicItem:ref</code></p>
  
  <p><a id="GetMagicItemEffectCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicItemEffectCount">GetMagicItemEffectCount</a> -  returns the number of magic effect items.<br />
  <code class="s">(count:int) GetMagicItemEffectCount magicItem:ref</code><br />
  <code class="s">(count:int) GetMIEffectCount magicItem:ref</code></p>
  
  <p><a id="MagicItemHasEffect" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicItemHasEffect">MagicItemHasEffect</a> - returns whether the magic item has an effect item with the specifed effect. Uses the 4 letter codes for the magic effects listed in the CS. Uses an optional actor value name for use with effects like fortify skill and fortify attribute.<br />
  <code class="s">(hasEffect:bool) MagicItemHasEffect effect:chars magicItem:ref <span class="op">actorValue:chars</span></code><br />
  <code class="s">(hasEffect:bool) MagicHasEffect effect:chars magicItem:ref <span class="op">actorValue:chars</span></code></p>
  
  <p><a id="MagicItemHasEffectCode" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicItemHasEffectCode">MagicItemHasEffectCode</a> - returns whether the magic item has an effect item with the specified effect code. Uses a long value returned from <code>GetNthEffectItemCode</code> or <code>GetMagicEffectCode</code>. Uses an optional actor value code for use with effects like fortify skill and fortify attribute.<br />
  <code class="s">(hasEffect:bool) MagicItemHasEffectCode effectCode:int magicItem:ref <span class="op"><a href="#Actor_Value_Codes">actorValueCode:int</a></span></code><br />
  <code class="s">(hasEffect:bool) MagicHasEffectC effectCode:int magicItem:ref  <span class="op"><a href="#Actor_Value_Codes">actorValueCode:int</a></span></code></p>
  
  <p><a id="MagicItemHasEffectCount" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicItemHasEffectCount">MagicItemHasEffectCount</a> - returns the count of the specified effects on the magic item. Has an optional actorValue name for use with effects like fortify skill and fortify attribute.<br />
  <code class="s">(effectCount:int) MagicItemHasEffectCount effect:chars magicItem:ref actorValueName:chars</code></p>
  
  <p><a id="MagicItemHasEffectCountCode" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicItemHasEffectCountCode">MagicItemHasEffectCountCode</a> -  returns the count of effects with the specified effect code on the magic item. Uses a long value returned from <code>GetNthEffectItemCode</code> or <code>GetMagicEffectCode</code>. Has an optional actorValueCode for use with effects like fortify skill and fortify attribute.<br />
  <code class="s">(effectCount:int) MagicItemHasEffectCountCode effectCode:int magicItem:ref <span class="op"><a href="#Actor_Value_Codes">actorValueCode</a>:int</span></code><br />
  <code class="s">(effectCount:int) MagicItemHasEffectCountC effectCode:int magicItem:ref <span class="op"><a href="#Actor_Value_Codes">actorValueCode</a>:int</span></code></p>
  
  <p><a id="GetNthEffectItemCode" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemCode">GetNthEffectItemCode</a> - returns the magic effect code of the specified effect item.<br />
  <code class="s">(code:int) GetNthEffectItemCode magicItem:ref whichEffect:int</code><br />
  <code class="s">(code:int) GetNthEICode magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemMagnitude">GetNthEffectItemMagnitude</a> - returns the magnitude of the specified effect item.<br />
  <b>Note: </b>Some magic effects will return a negative magnitude, even if the magnitude is unmodified. Frost Damage is confimed to return a negative magnitude.<br />
  <code class="s">(magnitude:int) GetNthEffectItemMagnitude magicItem:ref whichEffect:int</code><br />
  <code class="s">(magnitude:int) GetNthEIMagnitude magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemMagnitude">SetNthEffectItemMagnitude</a> - sets the magnitude of the specified effect item.<br />
  <b>Note: </b>You can set the magnitude of a spell to a negative number. The spell will have the opposite effect. Results may vary depending on the spell effect and are not verified.<br />
  <b>Note: </b>Frost Damage is confirmed to heal when set to a reversed magnitude, but note that an unmodified Frost Damage magnitude returns a negative number from <code>GetNthEffectItemMagnitude</code>, so setting it to a negative value will still deal damage. To make a Frost Damage effect heal, you must set it to a positive magnitude. This is believed to be true for Fire Damage and Shock Damage as well) (TODO: Verify).<br />
  <code class="s">(nothing) SetNthEffectItemMagnitude nuMagnitude:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIMagnitude nuMagnitude:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="ModNthEffectItemMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=ModNthEffectItemMagnitude">ModNthEffectItemMagnitude</a> - modifies the magnitude of the specified effect item up or down.<br />
  <code class="s">(nothing) ModNthEffectItemMagnitude modifyBy:float magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) ModNthEIMagnitude modifyBy:float magicItem:ref whichEffect:int</code></p><p><a id="GetNthEffectItemArea" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemArea">GetNthEffectItemArea</a> - returns the area of the specified effect item.<br />
  <code class="s">(area:int) GetNthEffectItemArea magicItem:ref whichEffect:int</code><br />
  <code class="s">(area:int) GetNthEIArea magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemArea" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemArea">SetNthEffectItemArea</a> - sets the area of the specified effect item.<br />
  <code class="s">(nothing) SetNthEffectItemArea nuArea:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIArea nuArea:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="ModNthEffectItemArea" class="f" href="http://cs.elderscrolls.com/index.php?title=ModNthEffectItemArea">ModNthEffectItemArea</a> - modifies the effect area of the specified effect item up or down.<br />
  <code class="s">(nothing) ModNthEffectItemArea modifyBy:float magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) ModNthEIArea modifyBy:float magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemDuration">GetNthEffectItemDuration</a> - returns the duration of the specified effect item.<br />
  <code class="s">(duration:int) GetNthEffectItemDuration magicItem:ref whichEffect:int</code><br />
  <code class="s">(duration:int) GetNthEIDuration magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemDuration">SetNthEffectItemDuration</a> - sets the duration of the specified effect item.<br />
  <b>Note: </b>It is not recommended to set the duration to negative values. A normal spell has no effect, while a scripted spell will still run. If cast on the player, the spell icon(s) will briefly apear.<br />
  <code class="s">(nothing) SetNthEffectItemDuration nuDuration:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIDuration nuDuration:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="ModNthEffectItemDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=ModNthEffectItemDuration">ModNthEffectItemDuration</a> - modifies the duration of the specified effect item up or down.<br />
  <code class="s">(nothing) ModNthEffectItemDuration modifyBy:float magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) ModNthEIDuration modifyBy:float magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemRange" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemRange">GetNthEffectItemRange</a> - gets the range of the specified effect item.<br />
  <code class="s">(<a href="#Magic_Effect_Range">range</a>:int) GetNthEffectItemrange magicItem:ref whichEffect:int</code><br />
  <code class="s">(<a href="#Magic_Effect_Range">range</a>:int) GetNthEIRange magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemRange" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemRange">SetNthEffectItemRange</a> - sets the range of the specified effect item.<br />
  <b>Note: </b>If you set the range of a weapon enchantment item (which are always 1:Touch ranged in the CS) to 0:Self, the effect will apply as a Self-ranged effect, but will still be listed as 'On Strike' in the game UI. The effect will still only trigger on a successful hit with the weapon, and will not work as a constant effect.<br />
  <code class="s">(nothing) SetNthEffectItemRange <a href="#Magic_Effect_Range">nuRange</a>:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIRange <a href="#Magic_Effect_Range">nuRange</a>:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemActorValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemActorValue">GetNthEffectItemActorValue</a> - gets the actor value of the specified effect item.<br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValueCode</a>:int) GetNthEffectItemActorValue magicItem:ref whichEffect:int</code><br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValueCode</a>:int) GetNthEIAV magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemActorValue" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemActorValue">SetNthEffectItemActorValue</a> - sets the actor value of the specified effect item.<br />
  <code class="s">(nothing) SetNthEffectItemActorValue actorValue:string magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIAV actorValue:string magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemActorValueC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemActorValueC">SetNthEffectItemActorValueC</a> - sets the actor value of the specified effect item.<br />
  <code class="s">(nothing) SetNthEffectItemActorValueC <a href="#Actor_Value_Codes">nuActorValue</a>:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIAVC <a href="#Actor_Value_Codes">nuActorValue</a>:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="RemoveNthEffectItem" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveNthEffectItem">RemoveNthEffectItem</a> - removesthe specified effect item.<br />
  <b>Note: </b>If a hostile effect is removed from a Spell so that it does not have any left, the Spell will not automatically become non-hostile. Use <code>SetSpellHostile</code> to update the hostility.<br />
  <code class="s">(nothing) RemoveNthEffectItem magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) RemoveNthEffect magicItem:ref whichEffect:int</code></p>
  
  <p><a id="RemoveAllEffectItems" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveAllEffectItems">RemoveAllEffectItems</a> - removes all effect items from the magic item.<br />
  <b>Note: </b>If a hostile effect is removed from a Spell so that it does not have any left, the Spell will not automatically become non-hostile. Use <code>SetSpellHostile</code> to update the hostility.<br />
  <code class="s">(nothing) RemoveAllEffectItems magicItem:ref</code></p>
  
  <p><a id="CopyNthEffectItem" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyNthEffectItem">CopyNthEffectItem</a> - copies the specified effect item from one magic item to another.<br />
  <b>Note: </b>When copying a scripted effect, the script, hostility flag, and school will copy, but not the visuals. Copied scripted effects are completely independent of the original scripted effect. <br />
  <b>Note: </b>Adding a hostile effect to a Spell which previously had none will not make the Spell hostile. Use <code>SetSpellHostile</code> to update the hostility.<br />
  <b>Note: </b>Effects will be added to copied-to magic item, even if that effect is already on the magic item, possibly resulting in two (or more) of the same effects.<br />
  <code class="s">(index:int) CopyNthEffectItem fromObjectID:ref toObjectID:ref whichEffect:int</code></p>
  
  <p><a id="CopyAllEffectItems" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyAllEffectItems">CopyAllEffectItems</a> - copies all effect items from one magic item to another.<br />
  <b>Note: </b>When copying a scripted effect, the script, hostility flag, and school will copy, but not the visuals. Copied scripted effects are completely independent of the original scripted effect. <br />
  <b>Note: </b>Adding a hostile effect to a Spell which previously had none will not make the Spell hostile. Use <code>SetSpellHostile</code> to update the hostility.<br />
  <b>Note: </b>Effects will be added to copied-to magic item, even if that effect is already on the magic item, possibly resulting in two (or more) of the same effects.<br />
  <code class="s">(nothing) CopyAllEffectItems fromObjectID:ref toObjectId:ref</code></p>
  
  <p><a id="AddEffectItem" class="f" href="http://cs.elderscrolls.com/index.php?title=AddEffectItem">AddEffectItem</a> - adds a basic, empty EffectItem of the specified MagicEffect to the magic item.<br />
  <b>Note: </b>Adding a hostile effect to a Spell which previously had none will not make the Spell hostile. Use <code>SetSpellHostile</code> to update the hostility.<br />
  <code class="s">(index:int) AddEffectItem nuEffect:chars magicItem:ref</code><br />
  <code class="s">(index:int) AddEffectItemC nuEffectCode:int magicItem:ref</code></p>
  
  <p><a id="AddFullEffectItem" class="f" href="http://cs.elderscrolls.com/index.php?title=AddFullEffectItem">AddFullEffectItem</a> - adds a fully defined EffectItem to the magic item with the specified MagicEffect, magnitude, area, duration and range.<br />
  <b>Note: </b>Adding a hostile effect to a Spell which previously had none will not make the Spell hostile. Use <code>SetSpellHostile</code> to update the hostility.<br />
  <code class="s">(index:int) AddFullEffectItem nuEffect:chars magnitude:int area:int duration:int <a href="#Magic_Effect_Range">range</a>:int magicItem:ref</code><br />
  <code class="s">(index:int) AddFullEffectItemC nuEffectCode:int magnitude:int area:int duration:int <a href="#Magic_Effect_Range">range</a>:int magicItem:ref</code></p>
  
  <p><a id="IsMagicItemAutoCalc" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicItemAutoCalc">IsMagicItemAutoCalc</a> - returns 1 if the MagicItem determines magicka cost by autocalculation. Now works on all Magic Items (Spells, Alchemy, Ingredients, Enchantments).<br />
  <code class="s">(isAutocalc:bool) IsMagicItemAutoCalc magicItem:ref</code></p>
  
  <p><a id="SetMagicItemAutoCalc" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMagicItemAutoCalc">SetMagicItemAutoCalc</a> - sets whether the Magic Item determines cost by autocalculation. Currently works for Spells, AlchemyItems, Ingredients and Enchantments.<br />
  <code class="s">(nothing) SetMagicItemAutoCalc isAutocalc:bool objectID:ref</code></p>
  
  <p><a id="IsNthEffectItemScripted" class="f" href="http://cs.elderscrolls.com/index.php?title=IsNthEffectItemScripted">IsNthEffectItemScripted</a> - returns whether the specified effect item is scripted.<br />
  <b>Note: </b>This will return true if the effect is a scripted effect, even if no script has been attached to the effect. Use <code>GetNthEffectItemScript</code> to determine if there is a script on the effect.<br />
  <code class="s">(isScriptEffect:bool) IsNthEffectItemScripted magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemScript" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemScript">GetNthEffectItemScript</a> - returns the refID of the script associated with the specified scripted effect.<br />
  <code class="s">(script:ref) GetNthEffectItemScript objectID:ref whichEffect:int</code><br />
  <code class="s">(script:ref) GetNthEIScript objectID:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemScript" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemScript">SetNthEffectItemScript</a> - sets the script for the specified scripted effect item. Note that the CS doesn't have a variable type for a script, so you must assign the script editor id to a ref variable to use this function.<br />
  <code class="s">(nothing) SetNthEffectItemScript scriptObjectID:ref magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEIScript scriptObjectID:ref magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemScriptVisualEffect" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemScriptVisualEffect">GetNthEffectItemScriptVisualEffect</a> - returns the magic effect code for the scripted effect item's visual effect.<br />
  <code class="s">(magicEffectCode:int) GetNthEffectItemScriptVisualEffect magicItem:ref whichEffect:int</code><br />
  <code class="s">(magicEffectCode:int) GetNthEISVisualEffect magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemScriptVisualEffect" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemScriptVisualEffect">SetNthEffectItemScriptVisualEffect</a> - sets the scrited effect item's visual effect.<br />
  <code class="s">(nothing) SetNthEffectItemScriptVisualEffect magicEffect:chars magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEISVisualEffect magicEffect:chars magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEffectItemScriptVisualEffectC magicEffectCode:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEISVisualEffectC magicEffectCode:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemScriptSchool" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemScriptSchool">GetNthEffectItemScriptSchool</a> - returns the school of the scripted effect item.<br />
  <code class="s">(magicSchool:int) GetNthEffectItemScriptSchool magicItem:ref whichEffect:int</code><br />
  <code class="s">(magicSchool:int) GetNthEISSchool magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemScriptSchool" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemScriptSchool">SetNthEffectItemScriptSchool</a> - sets the school of the scripted effect item.<br />
  <code class="s">(nothing) SetNthEffectItemScriptSchool magicSchool:int magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEISSchool magicSchool:int magicItem:ref whichEffect:int</code></p>
  
  <p><a id="IsNthEffectItemScriptHostile" class="f" href="http://cs.elderscrolls.com/index.php?title=IsNthEffectItemScriptHostile">IsNthEffectItemScriptHostile</a> - returns whether the scripted effect is hostile.<br />
  <code class="s">(isHostile:bool) IsNthEffectItemScriptHostile magicItem:ref whichEffect:int</code><br />
  <code class="s">(isHostile:bool) IsNthEISHostile magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemScriptHostile" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemScriptHostile">SetNthEffectItemScriptHostile</a> - sets whether the scripted effect is hostile.<br />
  <code class="s">(nothing) SetNthEffectItemScriptHostile isHostile:bool magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEISHostile isHostile:bool magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItemScriptName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemScriptName">GetNthEffectItemScriptName</a> - returns the name of the nth effect item, provided that effect item is a script effect.<br />
  <code class="s">(name:string_var) GetNthEffectItemScriptName magicItem:ref whichEffect:int</code><!-- magicItem:ref missing in original --></p>
  
  <p><a id="SetNthEffectItemScriptName" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemScriptName">SetNthEffectItemScriptName</a> - sets the name of the scripted effect.<br />
  <code class="s">(nothing) SetNthEffectItemScriptName name:string magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) SetNthEISName name:string magicItem:ref whichEffect:int</code></p>
  
  <p><a id="SetNthEffectItemScriptNameEX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthEffectItemScriptNameEX">SetNthEffectItemScriptNameEX</a> - sets the name of the scripted effect.<br />
  <code class="s">(nothing)SetNthEffectItemScriptNameEX name:<a href="#Format_Specifiers">formatString</a> magicItem:ref whichEffect:int</code></p>
  
  <p><a id="ModNthEffectItemScriptName" class="f" href="http://cs.elderscrolls.com/index.php?title=ModNthEffectItemScriptName">ModNthEffectItemScriptName</a> - modifies the name of the scripted effect. The <code>toReplaceAndReplaceWith</code> string has the following format: "<code>toReplace|replaceWith</code>". We will do a case insensitve search for the <code>toReplace</code> portion and if found will replace it with the <code>replaceWith</code> portion. The <code>|</code> character is used to separate the portions of the string. If there is nothing before the <code>|</code> character, the <code>replaceWith</code> string is prepended to the name. If called from the console, use <code>@</code> instead of <code>|</code>.<br />
  <code class="s">(nothing) ModNthEffectItemScriptName toReplaceAndReplaceWith:string magicItem:ref whichEffect:int</code><br />
  <code class="s">(nothing) ModNthEISName toReplaceAndReplaceWith:string magicItem:ref whichEffect:int</code></p>
  
  <p><a id="MagicItemHasEffectItemScript" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicItemHasEffectItemScript">MagicItemHasEffectItemScript</a> - returns 1 if the magic effect has a scripted item with the specified script.<br />
  <code class="s">(hasScript:bool) MagicItemHasEffectItemScript script:ref magicItem:ref</code></p>
  
  <p><a id="GetNthEffectItemName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItemName">GetNthEffectItemName</a> - returns the name of the specified active effect, i.e. "Fortify Strength".<br />
  <code class="s">(name:string_var) GetNthEffectItemName magicItem:ref whichEffect:int</code><br />
  <code class="s">(name:string_var) GetNthEIName magicItem:ref whichEffect:int</code></p>
  
  <p><a id="GetNthEffectItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthEffectItem">GetNthEffectItem</a> - returns a StringMap fully describing the specified effect item. The StringMap has the following key-value pairs:<br />
  <pre>
      (numeric) effectCode, area, magnitude, duration, range, cost
      (string) name
      (numeric) actorValue - an actor value code, if applicable to the effect
      (StringMap) SEFF - for script effects, additional data about the effect:
        (numeric) school, visualEffectCode - "school" is a magic skill actor value code
        (ref) script
        (bool) hostile
  </pre>
  
  <code class="s">(effectItem:StringMap) GetNthEffectItem magicItem:ref whichEffect:int</code></p>
  
  <h3><a id="Magic_Target">Magic Target</a></h3>
  
  <p>Types with this quality can be the target of magic. They can have Active Effects working on them.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Count</strong> (<span class="op">long</span>) - the number of active effects on the target<br />
  <strong>ActiveEffect Code</strong> (<span class="op">long</span>) - the effect code of the given ActiveEffect<br />
  <strong>ActiveEffect Magnitude</strong> (<span class="op">long</span>) - the magnitude of the given ActiveEffect<br />
  <strong>ActiveEffect Duration</strong> (<span class="op">float</span>) - the duration of the total ActiveEffect<br />
  <strong>ActiveEffect TimeElapsed</strong> (<span class="op">float</span>) - the time in seconds since the ActiveEffect was applied to the target <br />
  <strong>ActiveEffect MagicItem</strong> (<span class="op">ref</span>) - the magic item which applied the ActiveEffect<br />
  <strong>ActiveEffect Caster</strong> (<span class="op">ref</span>) - the caster of the ActiveEffect<br />
  <strong>ActiveEffect Data</strong> (<span class="op">ref</span>) - the extra data (summoned creature, armor, etc.) of the ActiveEffect<br />
  <strong>ActiveEffect MagicItemIndex</strong> (<span class="op">long</span>) - the index of the EffectItem on the magic item which applied the ActiveEffect</p>
  
  <h4>Functions:</h4>
  
  <p><b>Note: </b>Active Effects from different sources are counted as unique Active Effects, even if they are the same effect type. If a Magic Item has 2 of the same effect, they will be counted separately, too.<br /></p>
  
  <p><b>Note: </b>Take care when changing any properties of active magic effects on actors. While the magic effect properties are updated, their effect on the actor is not. If the updated effect is removed from the actor, this could leave the actor with unintended values. (TODO: Verify)<br /></p>
  
  <p><a id="GetActiveEffectCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveEffectCount">GetActiveEffectCount</a> - returns the number of ActiveEffects on the target<br />
  <code class="s">(count:int) reference.GetActiveEffectCount</code></p>
  
  <p><a id="GetNthActiveEffectCode" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectCode">GetNthActiveEffectCode</a> - returns the effect of the Nth ActiveEffect on the target<br />
  <code class="s">(effectCode:int) reference.GetNthActiveEffectCode whichEffect:int</code><br />
  <code class="s">(effectCode:int) reference.GetNthAECode whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectMagnitude">GetNthActiveEffectMagnitude</a> - returns the magnitude of the Nth ActiveEffect on the target<br />
  <b>Note: </b>This returns the magnitude applied to the actor, but not the original from the spell (may or may not include resistances, weaknesses and spell effectiveness).<br />
  <code class="s">(magnitude:int) reference.GetNthActiveEffectMagnitude whichEffect:int</code><br />
  <code class="s">(magnitude:int) reference.GetNthAEMagnitude whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectDuration">GetNthActiveEffectDuration</a> - returns the total duration of the Nth ActiveEffect on the target<br />
  <code class="s">(duration:float) reference.GetNthActiveEffectDuration whichEffect:int</code><br />
  <code class="s">(duration:float) reference.GetNthAEDuration whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectTimeElapsed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectTimeElapsed">GetNthActiveEffectTimeElapsed</a> - returns the time that the Nth ActiveEffect has been applied to the target<br />
  <b>Note: </b>On the very first frame of an effect, this appears to always return 0.1 regardless of framerate.<br />
  <code class="s">(timeElapsed:float) reference.GetNthActiveEffectTimeElapsed whichEffect:int</code><br />
  <code class="s">(timeElapsed:float) reference.GetNthAETime whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectMagicItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectMagicItem">GetNthActiveEffectMagicItem</a> - returns the magic item which applied theNth ActiveEffect to the target<br />
  <code class="s">(magicItem:ref) reference.GetNthActiveEffectMagicItem whichEffect:int</code><br />
  <code class="s">(magicItem:ref) reference.GetNthAEMagicItem whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectCaster" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectCaster">GetNthActiveEffectCaster</a> - return the caster of the Nth ActiveEffect on the target<br />
  <code class="s">(caster:ref) reference.GetNthActiveEffectCaster whichEffect:int</code><br />
  <code class="s">(caster:ref) reference.GetNthAECaster whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectData">GetNthActiveEffectData</a> - return the data of the NthActiveEffect on the target<br />
  <code class="s">(data:ref) reference.GetNthActiveEffectData whichEffect:int</code><br />
  <code class="s">(data:ref) reference.GetNthAEData whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectMagicItemIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectMagicItemIndex">GetNthActiveEffectMagicItemIndex</a> - returns the index on its magic item of the Nth ActiveEffect on the target<br />
  <code class="s">(index:int) reference.GetNthActiveEffectMagicItemIndex whichEffect:int</code><br />
  <code class="s">(index:int) reference.GetNthAEIndex whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectEnchantObject" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectEnchantObject">GetNthActiveEffectEnchantObject</a> - returns the equipped enchanted object, if any, responsible for the specified active effect<br />
  <code class="s">(object:ref) reference.GetNthActiveEffectMagicEnchantObject whichEffect:int</code><br />
  <code class="s">(object:ref) reference.GetNthAEMagicEnchantObject whichEffect:int</code></p>
  
  <p><a id="SetNthActiveEffectMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthActiveEffectMagnitude">SetNthActiveEffectMagnitude</a> - sets the magnitude of the corresponding ActiveEffect<br />
  <code class="s">(nothing) SetNthActiveEffectMagnitude magnitude:float whichEffect:int</code><br />
  <code class="s">(nothing) SetNthAEMagnitude magnitude:float whichEffect:int</code></p>
  
  <p><a id="ModNthActiveEffectMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=ModNthActiveEffectMagnitude">ModNthActiveEffectMagnitude</a> - modifies the magnitude of the corresponding ActiveEffect<br />
  <code class="s">(nothing) ModNthActiveEffectMagnitude magnitude:float whichEffect:int</code><br />
  <code class="s">(nothing) ModNthAEMagnitude magnitude:float whichEffect:int</code></p>
  
  <p><a id="GetTotalActiveEffectMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalActiveEffectMagnitude">GetTotalActiveEffectMagnitude</a> - returns the total magnitude of all ActiveEffects with a given code on the target<br />
  <code class="s">(totalMag:int) reference.GetTotalActiveEffectMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalActiveEffectMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAENonAbilityMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAENonAbilityMagnitude">GetTotalAENonAbilityMagnitude</a> - returns the total magnitude of all non-ability ActiveEffects with a given code on the target<br />
  <code class="s">(totalMag:int) reference.GetTotalAENonAbilityMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAENonAbilityMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAEAbilityMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAEAbilityMagnitude">GetTotalAEAbilityMagnitude</a> - returns the total magnitude of all ability ActiveEffects with a given code on the target<br />
  <code class="s">(totalMag:int) reference.GetTotalAEAbilityMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEAbilityMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAESpellMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAESpellMagnitude">GetTotalAESpellMagnitude</a> - returns the total magniude of all spell ActiveEffects with a given code on the target<br />
  <code class="s">(totalMag:int) reference.GetTotalAESpellMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAESpellMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAEDiseaseMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAEDiseaseMagnitude">GetTotalAEDiseaseMagnitude</a> - returns the total magnitude of all disease ActiveEffects with a given code on the target.<br />
  <code class="s">(totalMag:int) reference.GetTotalAEDiseaseMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEDiseaseMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAELesserPowerMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAELesserPowerMagnitude">GetTotalAELesserPowerMagnitude</a> - returns the total magnitude of all lesser power ActiveEffects with a given code on the target<br />
  <code class="s">(totalMag:int) reference.GetTotalAELesserPowerMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAELesserPowerMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAEPowerMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAEPowerMagnitude">GetTotalAEPowerMagnitude</a> - retuns the total magnidue of all greater power ActiveEffects with a given code on the target<br />
  <code class="s">(totalMag:int) reference.GetTotalAEPowerMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEPowerMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAEAllSpellsMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAEAllSpellsMagnitude">GetTotalAEAllSpellsMagnitude</a> - returns the total magnitude of all spells (Spell, Ability, Disease, Lesser Power, Power) with a given code on the target.<br />
  <code class="s">(totalMag:int) reference.GetTotalAEAllSpellsMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEAllSpellsMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAEEnchantmentMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAEEnchantmentMagnitude">GetTotalAEEnchantmentMagnitude</a> - retuns the total magnitude of all enchantments with a given code on the target.<br />
  <code class="s">(totalMag:int) reference.GetTotalAEEnchantmentMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEEnchantmentMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetTotalAEAlchemyMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalAEAlchemyMagnitude">GetTotalAEAlchemyMagnitude</a> - returns the total magnitude of all potions with a given code on the target.<br />
  <code class="s">(totalMag:int) reference.GetTotalAEAlchemyMagnitude effectCode:chars <span class="op">actorValue:chars</span> <span class="op">ignoreUnappliedEffects:bool</span></code><br />
  <code class="s">(totalMag:int) reference.GetTotalAEAlchemyMagnitudeC effectCode:int <a href="#Actor_Value_Codes"><span class="op">actorValueCode:int</span></a> <span class="op">ignoreUnappliedEffects:bool</span></code></p>
  
  <p><a id="GetScriptActiveEffectIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=GetScriptActiveEffectIndex">GetScriptActiveEffectIndex</a> - returns the index of the corresponding ActiveEffect for the running script effect. Prior to OBSE 0019, this command returned 0 if the script effect could not be found, and could not distinguish between multiple instances of the same script effect. As of 0019, the command returns -1 on failure, and otherwise returns the index corresponding to the unique active effect associated with the calling script.<br />
  <code class="s">(index:int) GetScriptActiveEffectIndex</code></p>
  
  <p><a id="DispelNthActiveEffect" class="f" href="http://cs.elderscrolls.com/index.php?title=DispelNthActiveEffect">DispelNthActiveEffect</a> - dispels the effects of the specified active effect and removes it from the actor's active effect list. Note that the effect will not be removed until the next gamemode frame, so the indexes into an actor's effect list do not change immediately.<br />
  <code class="s">(effectWasRemoved:bool) reference.DispelNthActiveEffect whichEffect:int</code><br />
  <code class="s">(effectWasRemoved:bool) reference.DispelNthAE whichEffect:int</code></p>
  
  <p><a id="GetActiveEffectCodes" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveEffectCodes">GetActiveEffectCodes</a> - returns an Array containing the effect code of each of the calling actor's active effects, in the order in which they appear in his active effect list. An effect code's index in the returned Array can therefore be passed to the Get/SetNthActiveEffectXXX functions to operate on its associated active effect.<br />
  <code class="s">(codes:Array) reference.GetActiveEffectCodes</code></p>
  
  <p><a id="GetActiveEffectCasters" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveEffectCasters">GetActiveEffectCasters</a> - returns an Array containing the casters of each of the calling actor's active effects, in the order in which they appear in his active effect list. A caster's index in the returned Array can therefore be passed to the Get/SetNthActiveEffectXXX functions to operate on its associated active effect. If an active effect has no caster its associated value will be zero.<br />
  <code class="s">(casters:Array) reference.GetActiveEffectCasters</code></p>
  
  <p><a id="GetNthActiveEffectSummonRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectSummonRef">GetNthActiveEffectSummonRef</a> - returns a reference to the creature associated with the specified Summon Creature active effect<br />
  <code class="s">(creature:ref) reference.GetNthActiveEffectSummonRef whichEffect:int</code><br />
  <code class="s">(creature:ref) reference.GetNthAESummonRef whichEffect:int</code></p>
  
  <p><a id="GetNthActiveEffectBoundItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectBoundItem">GetNthActiveEffectBoundItem</a> - returns the base object associated with the specified Bound Item active effect<br />
  <code class="s">(object:ref) reference.GetNthActiveEffectBoundItem whichEffect:int</code><br />
  <code class="s">(object:ref) reference.GetNthAEBoundItem whichEffect:int</code></p>
  
  <p><a id="IsNthActiveEffectApplied" class="f" href="http://cs.elderscrolls.com/index.php?title=IsNthActiveEffectApplied">IsNthActiveEffectApplied</a> - returns 1 if the active effect at the specified index is currently applied to the target. An active effect may exist on the target before its effects are applied (typically for one frame after a spell is cast), in which case this command would return zero.<br />
  <code class="s">(isApplied:bool) reference.IsNthActiveEffectApplied whichEffect:short</code></p>
  
  <p><a id="GetNthActiveEffectActorValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthActiveEffectActorValue">GetNthActiveEffectActorValue</a> - returns the actor value associated with the active effect, if any.<br />
  <code class="s">(actorValueCode:int) reference.GetNthActiveEffectActorValue whichEffect:int</code><br />
  <code class="s">(actorValueCode:int) reference.GetNthAEAV whichEffect:int</code></p>
  
  <h3><a id="Named">Named</a></h3>
  
  <p>Types with this quality have a setable name</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Name</strong> (<span class="op">string</span>) - the display name of the type</p>
  
  <h4>Functions:</h4>
  
  <p><a id="SetName" class="f" href="http://cs.elderscrolls.com/index.php?title=SetName">SetName</a> - sets the display name of the type. SetName is a special function. It is defined to work on Inventory items, but it can be used with any form. To use with a non-Inventory item you must first assign the objectID to a ref. For most forms the name is part of the base form and changing the name will change it for all instances of the type. (TODO: AddLink)<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetName name:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetName">GetName</a> - returns the name of an object.<br />
  <code class="s">(name:string_var) <span class="op">reference.</span>GetName <span class="op">object:ref</span></code></p>
  
  <p><a id="CompareName" class="f" href="http://cs.elderscrolls.com/index.php?title=CompareName">CompareName</a> - returns 1 if stringToFindInName is found in the name of the object<br />
  <code class="s">(nameContainsString) <span class="op">reference.</span>CompareName toFindInName:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(nameContainsString) <span class="op">reference.</span>NameIncludes toFindInName:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="CompareNames" class="f" href="http://cs.elderscrolls.com/index.php?title=CompareNames">CompareNames</a> - compares the names of two objects and returns -1 if the first occurs alphabetically before the second, 1 if the first occurs after the second, or 0 for equality. Comparison is case-insensitive.<br />
  <code class="s">(comparison:int) <span class="op">reference.</span>CompareNames compareTo:ref <span class="op">compare:ref</span></code></p>
  
  <p><a id="CopyName" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyName">CopyName</a> - copies the name from the source to the target. It is defined to work on Inventory items, but it can be used with any form. To use with a non-Inventory item you must first assign the objectID to a ref. For most forms the name is part of the base form and changing the name will change it for all instances of the type.<br />
  <code class="s">(nothing) CopyName srcObjectID:ref targetObjectID:ref</code></p>
  
  <p><a id="ModName" class="f" href="http://cs.elderscrolls.com/index.php?title=ModName">ModName</a> - modifies the name of the calling reference or passed objectID. The toReplaceAndReplaceWith string has the following format: "toReplace|replaceWith". We will do a case insensitve search for the toReplace portion and if found will replace it with the replaceWith portion. The | character is used to separate the portions of the string. If there is nothing before the | character, the replaceWith string is prepended to the name. In the console, use @ instead of |.<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModName toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code></p>
  
  <p><a id="AppendToName" class="f" href="http://cs.elderscrolls.com/index.php?title=AppendToName">AppendToName</a> - appends the passed string to the end of the name of the calling reference or passed objectID.<br />
  <code class="s">(nothing) <span class="op">reference.</span>AppendToName toAppend:string <span class="op">toObject:ref</span></code></p>
  
  <p><a id="HasName" class="f" href="http://cs.elderscrolls.com/index.php?title=HasName">HasName</a> - returns 1 if the object has a id consisting of at least one character.<br />
  <code class="s">(hasName:bool) <span class="op">reference.</span>HasName <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetNameEx" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNameEx">SetNameEx</a> - sets the name of the base object. The new name is a string constructed from a format string using the same format specifiers used by OBSE's <a href="#Output_Functions">output functions</a>.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetNameEx <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span> <span class="op">object:ref</span></code></p>
  
  <h3><a id="Ownable">Ownable</a></h3>
  
  <p>Types with this quality can be owned by an NPC or faction.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Owner</strong> (<span class="op">ref</span>) - NPC or faction owner of the reference.<br />
  <strong>Required Rank</strong> (<span class="op">short</span>) - the rank a member of the owning faction must hold in order to legally activate the reference.<br />
  <strong>Global Variable</strong> (<span class="op">global</span>) - a global variable which, when set to a value other than zero, allows legal activation of the reference.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetOwner" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOwner">GetOwner</a> - returns the NPC or faction which owns the calling reference.<br />
  <b>Note: </b>Does not appear to work on activators such as switches and doors. (TODO: Verify)<br />
  <b>Note: </b>If a cell has a set Owner NPC, all items in the cell that do not have specific ownership set are owned by the NPC. In that case, this function may return 0, but <code>GetParentCellOwner</code> will return the true owner.<br />
  <b>Note: </b>The returned ownerID is a base ObjectID.<br />
  <code class="s">(owner:ref) reference.GetOwner</code></p>
  
  <p><a id="GetParentCellOwner" class="f" href="http://cs.elderscrolls.com/index.php?title=GetParentCellOwner">GetParentCellOwner</a> - returns the NPC or faction which owns the calling reference's parent cell.<br />
  <code class="s">(owner:ref) reference.GetParentCellOwner</code></p>
  
  <p><a id="GetOwningFactionRequiredRank" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOwningFactionRequiredRank">GetOwningFactionRequiredRank</a> - returns the rank in the owning faction required to legally activate the calling reference.<br />
  <code class="s">(rank:int) reference.GetOwningFactionRequiredRank</code><br />
  <code class="s">(rank:int) reference.GetOwningFactionRank</code></p>
  
  <p><a id="GetParentCellOwningFactionRequiredRank" class="f" href="http://cs.elderscrolls.com/index.php?title=GetParentCellOwningFactionRequiredRank">GetParentCellOwningFactionRequiredRank</a> - returns the rank required for ownership of the calling reference's parent cell.<br />
  <code class="s">(rank:int) reference.GetParentCellOwningFactionRequiredRank</code><br />
  <code class="s">(rank:int) reference.GetCellFactionRank</code></p>
  
  <p><a id="IsOffLimits" class="f" href="http://cs.elderscrolls.com/index.php?title=IsOffLimits">IsOffLimits</a> - returns 1 if it is illegal for the specified actor to activate the calling reference, based on the calling reference's ownership. If the argument is omitted, the player is used by default.<br />
  <code class="s">(isOffLimits:bool) reference.IsOffLimits <span class="op">actor:ref</span></code></p>
  
  <h3><a id="Race">Race</a></h3>
  
  <p>Types with this quality have a race.</p>
  
  <h4>Additional Qualities:</h4>
  
  <p class="boxhl"><a href="#Description">Description</a>, <a href="#Named">Named</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Base Attribute</strong> (<span class="op">short</span>) - each sex of a race has base values for all eight attributes<br />
  <strong>Bonus Skill</strong> (<span class="op">bool</span>) - each race has seven attributes which get a bonus<br />
  <strong>Reactions</strong> (<span class="op">long</span>) - reaction values towards other races<br />
  <strong>Scale</strong> (<span class="op">float</span>) - the relative scale factor of the males and females of the race</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetRaceAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceAttribute">GetRaceAttribute</a> - returns the specified base attribute value. If passed a raceFormID you must also pass whether you want the female value or not. If called directly on a reference the function will determine the race and sex of the reference and the raceFormID and isFemale are not needed. The C version of the function takes a number rather than the actorvalue name (ie. 0 instead of Strength).<br />
  <code class="s">(value:int) <span class="op">reference.</span>GetRaceAttribute attributeActorValue:chars <span class="op">raceFormID:ref isFemale:bool</span></code><br />
  <code class="s">(value:int) <span class="op">reference.</span>GetRaceAttributeC <a href="#Actor_Value_Codes">attributeActorValueCode</a>:int <span class="op">raceFormID:ref isFemale:bool</span></code></p>
  
  <p><a id="GetRaceSkillBonus" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceSkillBonus">GetRaceSkillBonus</a> - returns the bonus for the specified skill for the race. If called on a reference the function will determine the race of the reference. Returns 0 if there is no bonus for that skill. The C version specifies the specific skill by number rather than by name.<br />
  <code class="s">(value:int) <span class="op">reference</span>.GetRaceSkillBonus skillActorValue:chars <span class="op">raceFormID:ref</span></code><br />
  <code class="s">(value:int) <span class="op">reference</span>.GetRaceSkillBonusC <a href="#Actor_Value_Codes">skillActorValueCode</a>:int <span class="op">raceFormID:ref</span></code></p>
  
  <p><a id="IsRaceBonusSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=IsRaceBonusSkill">IsRaceBonusSkill</a> - returns whether the specified skill is a bonus for the race. If called on a reference the function will determine the race of the reference. The C version specifies the skill by number rather than by name.<br />
  <code class="s">(isBonusSkill:bool) <span class="op">reference</span>.IsRaceBonusSkill skillActorValue:chars <span class="op">raceFormID:ref</span></code><br />
  <code class="s">(isBonusSkill:bool) <span class="op">reference</span>.IsRaceBonusSkillC <a href="#Actor_Value_Codes">skillActorValueCode</a>:int <span class="op">raceFormID:ref</span></code></p>
  
  <p><a id="GetNthRaceBonusSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthRaceBonusSkill">GetNthRaceBonusSkill</a> - returns the actor value code for the specified index into the bonus skills. Can be followed up with a call to GetRaceSkillBonusC to determine the actual bonus to the skill. If called on a reference the function will determine the race of the reference.<br />
  <code class="s">(<a href="#Actor_Value_Codes">skill</a>:int) <span class="op">reference</span>.GetNthRaceBonusSkill whichSkill:int <span class="op">raceFormID:ref</span></code></p>
  
  <p><a id="GetRaceSpellCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceSpellCount">GetRaceSpellCount</a> - returns the number of spells provided by the race. If no race is specified, the race of the calling NPC is used.<br />
  <code class="s">(numSpells:int) <span class="op">reference.</span>GetRaceSpellCount <span class="op">race:ref</span></code></p>
  
  <p><a id="GetNthRaceSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthRaceSpell">GetNthRaceSpell</a> - returns the nth spell provided by the race, using the race of the calling NPC if none is specified.<br />
  <code class="s">(spell:ref) <span class="op">reference.</span>GetNthRaceSpell whichSpell:int <span class="op">race:ref</span></code></p>
  
  <p><a id="SetRaceAlias" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRaceAlias">SetRaceAlias</a> - creates an alias for a race. If a race has an alias, then calling <code>GetIsRace <span class="op">aliasRace</span></code> will return true for any actor of that race. For example, <code>SetRaceAlias Nord Argonian</code> will cause GetIsRace to recognize Nords as Argonians. However, Argonians will not be recognized as Nords. The third argument defaults to 1; pass 0 to clear a previously created alias.<br />
  <code class="s">(nothing) SetRaceAlias actualRace:ref aliasRace:ref <span class="op">enableAlias:bool</span></code></p>
  
  <p><a id="GetRaceVoice" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceVoice">GetRaceVoice</a> - returns the race which is used to provide the voice of the specified race and gender. Pass 0 for male or 1 for female. <br />
  <code class="s">(voiceRace:ref) GetRaceVoice race:ref whichGender:int</code></p>
  
  <p> <a id="SetRaceVoice" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRaceVoice">SetRaceVoice</a> - changes the voice of a race to the specified race. Specify 0 for male, 1 for female, or 2 for both genders.<br />
  <code class="s">(nothing) SetRaceVoice actualRace:ref voiceRace:ref whichGender:int</code></p>
  
  <p><a id="SetRacePlayable" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRacePlayable">SetRacePlayable</a> - flags a race as playable or unplayable. Unplayable races cannot speak most of the dialog defined in the game.<br />
  <code class="s">(nothing) SetRacePlayable race:ref isPlayable:bool</code></p>
  
  <p><a id="IsRacePlayable" class="f" href="http://cs.elderscrolls.com/index.php?title=IsRacePlayable">IsRacePlayable</a> - returns 1 if the specified race is flagged as playable in the editor.<br />
  <code class="s">(isPlayable:bool) IsRacePlayable race:ref</code></p>
  
  <p><a id="GetRaceReaction" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceReaction">GetRaceReaction</a> - returns the race reaction between the target NPC/Race and the calling NPC reference or passed race. The target and from races are declared as NPCs, but you can also place a Race name into a ref variable and pass those in.<br />
  <code class="s">(reaction:int) <span class="op">reference.</span>GetRaceReaction targetNPC:ref fromNPC:ref</code></p>
  
  <p><a id="GetRaceScale" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceScale">GetRaceScale</a> - returns the default scale of the male or female members of the specified race.<br />
  <code class="s">(scale:float) GetRaceScale race:ref forFemale:bool</code></p>
  
  <p><a id="SetRaceScale" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRaceScale">SetRaceScale</a> - sets the scale for male or female members of the specified race.<br />
  <code class="s">(nothing) SetRaceScale race:ref forFemale:bool scale:float</code></p>
  
  <p><a id="GetRaceWeight" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceWeight">GetRaceWeight</a> - returns the default weight for male or female members of the specified race as defined in the editor.<br />
  <code class="s">(weight:float) GetRaceWeight race:ref forFemale:bool</code></p>
  
  <p><a id="SetRaceWeight" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRaceWeight">SetRaceWeight</a> - sets the weight for male or female members of the specified race.<br />
  <code class="s">(nothing) SetRaceWeight race:ref forFemale:bool weight:float</code></p>
  
  <p><a id="GetRaceDefaultHair" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceDefaultHair">GetRaceDefaultHair</a> - returns the default hair for male or female members of the specified race.<br />
  <code class="s">(hair:ref) GetRaceDefaultHair race:ref forFemale:bool</code></p>
  
  <p><a id="GetRaceHairs" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceHairs">GetRaceHairs</a> - returns an Array of all hairs (male and female) available to actors of the specified race as defined in the editor.<br />
  <code class="s">(hairs:Array) GetRaceHairs race:ref</code></p>
  
  <p><a id="GetRaceEyes" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRaceEyes">GetRaceEyes</a> - returns an Array of all eyes available to actors of the specified race as defined in the editor.<br />
  <code class="s">(eyes:Array) GetRaceEyes race:ref</code></p>
  
  <p><a id="HasTail" class="f" href="http://cs.elderscrolls.com/index.php?title=HasTail">HasTail</a> - returns true if the specified race or the race of the calling npc ref or specified base npc has a tail.<br />
  <code class="s">(hasTail:bool) <span class="op">reference.</span>HasTail <span class="op">raceOrNPC:ref</span> </code></p>
  
  <p><a id="GetTailModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTailModelPath">GetTailModelPath</a> - returns the path to the tail model used by the specified gender of the specified race or the race of the specified NPC or calling reference, if the race has a tail.<br />
  <code class="s">(tailPath:string) <span class="op">reference.</span>GetTailModelPath female:bool <span class="op">raceOrNPC:ref</span> </code></p>
  
  <h3><a id="Scriptable">Scriptable</a></h3>
  
  <p>Types with this quality can have a script associated with them.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsScripted" class="f" href="http://cs.elderscrolls.com/index.php?title=IsScripted">IsScripted</a> - returns whether the scriptable object has a script attached to it or not.<br />
  <b>Note: </b>This is not intended for use on spells, for which you should use <code>IsNthEffectItemScripted</code> instead. <br />
  <code class="s">(isScripted:bool) <span class="op">reference.</span>IsScripted <span class="op">targetObjectID:ref</span></code></p>
  
  <p><a id="GetScript" class="f" href="http://cs.elderscrolls.com/index.php?title=GetScript">GetScript</a> - returns the refID of the script attached to the object<br />
  <code class="s">(script:refID) <span class="op">reference.</span>GetScript <span class="op">targetObjectID:ref</span></code></p>
  
  <p><a id="RemoveScript" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveScript">RemoveScript</a> - removes and returns the script attached to the object. The object is no longer scripted<br />
  <code class="s">(script:refID) <span class="op">reference.</span>RemoveScript <span class="op">targetObjectID:ref</span></code></p>
  
  <p><a id="SetScript" class="f" href="http://cs.elderscrolls.com/index.php?title=SetScript">SetScript</a> - sets the specified script onto the calling object and returns any previous script. Note that Oblivion doesn't have a script variable type so you must assign the script to a ref variable for this to work.<br />
  <strong>Note:</strong> If the specified object already has a script attached to it, after changing the script the stored values of local variables for references to that object will not match the variables in the new script. If called on a reference, the variable list for the calling reference will be updated to match the new script, but other references to the same base object will not be updated.<br />
  <strong>Note:</strong> SetScript is safe to use with quests, with previously unscripted objects, and on unique references (for which no other references exist to the same base object). Using the command on base objects for which non-unique references exist may result in undefined behavior.<br />
  <b>Note: </b><br />
  <b>Note: </b><br />
  <b>Note: </b><br />
  <code class="s">(script:refID) <span class="op">reference.</span>SetScript scriptID:ref <span class="op">targetObjectID:ref</span></code></p>
  
  <p><a id="IsFormValid" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFormValid">IsFormValid</a> - returns 1 if the specified ref variable contains a valid object or reference.<br />
  <b>Note: </b>If you reload the game after picking up a non dynamic (= not mod index 0xFF) reference, <code>IsFormValid</code> will return false if the object was non-persistent and true if the object was persistent. (TODO: Verify)<br />
  <b>Note: </b>If you want to check for a reference originating in an esm file that has been deleted by an esp, use <code>IsRefDeleted</code> instead, as <code>IsFormValid</code> will return true.<br />
  <code class="s">(valid:bool) IsFormValid refVar:var</code></p>
  
  <p><a id="IsReference" class="f" href="http://cs.elderscrolls.com/index.php?title=IsReference">IsReference</a> - returns 1 if the specified ref variable contains a reference, as opposed to a base object.<br />
  <code class="s">(isReference:bool) IsReference refVar:var</code></p>
  
  <p><a id="HasVariable" class="f" href="http://cs.elderscrolls.com/index.php?title=HasVariable">HasVariable</a> - returns 1 if the calling reference or specified quest has a variable with the specified name.<br />
  <code class="s">(hasVariable:bool) <span class="op">reference.</span>HasVariable varName:string <span class="op">questID:ref</span></code></p>
  
  <p><a id="GetVariable" class="f" href="http://cs.elderscrolls.com/index.php?title=GetVariable">GetVariable</a> - returns the value of a numeric variable by name, either from the calling reference's script or the specified quest.<br />
  <code class="s">(variableValue:float) <span class="op">reference.</span>GetVariable varName:string <span class="op">questID:ref</span></code></p>
  
  <p><a id="GetRefVariable" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRefVariable">GetRefVariable</a> - returns the reference stored in a ref variable by name, either from the calling reference's script or the specified quest.<br />
  <code class="s">(reference:ref) <span class="op">reference.</span>GetRefVariable varName:string <span class="op">questID:ref</span></code></p>
  
  <p><a id="GetArrayVariable" class="f" href="http://cs.elderscrolls.com/index.php?title=GetArrayVariable">GetArrayVariable</a> (GetArrayVar) - returns the value of an array variable by name, either from the calling reference's script or the specified quest.<br />
  <code class="s">(array) <span class="op">reference.</span>GetArrayVariable varName:string <span class="op">questID:ref</span></code></p>
  
  <p><a id="CompareScripts" class="f" href="http://cs.elderscrolls.com/index.php?title=CompareScripts">CompareScripts</a> - compares the compiled code of two scripts and returns 1 if they are identical. Note that this doesn't mean the text of the scripts are identical, only that they call the same functions in the same order with the same parameters.<br />
  <code class="s">(scriptsAreIdentical:bool) CompareScripts script:ref script:ref</code></p>
  
  <p><a id="ResetAllVariables" class="f" href="http://cs.elderscrolls.com/index.php?title=ResetAllVariables">ResetAllVariables</a> - sets all variables in the calling script to zero.<br />
  <b>Note: </b>Don't use this in scripts with string_var or array_var, because they aren't cleaned up properly. (TODO: Verify)<br />
  <code class="s">(numVars:int) ResetAllVariables</code></p>
  
  <p><a id="GetNumExplicitRefs" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumExplicitRefs">GetNumExplicitRefs</a> -  returns the number of explicit references in the calling object's script or in the passed script object. Explicit references are any objects mentioned by name in the script; for instance, if a script contains an "OnHit Player" block or a "Player.AddItem" command, its explicit references will include the player.<br />
  <code class="s">(numRefs:int) <span class="op">reference.</span>GetNumExplicitRefs <span class="op">script:ref</span></code></p>
  
  <p><a id="GetNthExplicitRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthExplicitRef">GetNthExplicitRef</a> - returns the <span class="op">n</span>th explicit ref in the calling object's script or the passed script object. See GetNumExplicitRefs are a description of explicit references.<br />
  <code class="s">(object:ref) <span class="op">reference.</span>GetNthExplicitRef index:int <span class="op">script:ref</span></code></p>
  
  <p><a id="GetCurrentScript" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentScript">GetCurrentScript</a> - returns the script which is currently executing.<br />
  <code class="s">(script:ref) GetCurrentScript</code></p>
  
  <h3><a id="Simple">Simple</a></h3>
  
  <p>Types with this quality have a single model path and a single icon texture.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Model Path</strong> (<span class="op">string</span>) - the path to the NIF model for the type<br />
  <strong>Icon Path</strong> (<span class="op">string</span>) - the path to the DDS icon texture for the type</p>
  
  <h4>Functions:</h4>
  
  <p><a id="SetModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetModelPath">SetModelPath</a> - sets the model path for the type.<br />
  <b>Note: </b>This function alters the model for the base object, which means that objects of the same type which are subsequently loaded will share the new model.<br />
  <b>Note: </b>This function is for simple objects with one model, it doesn't work on clothing or armor and using it on actors may lead to crashes.<br />
  <b>Note: </b>The new model will not appear until the object is reloaded, i.e. unequipping and re-equipping for equipped objects and <code>Update3d</code> for world objects.<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetModelPath modelPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetModelPath">GetModelPath</a> - returns the model path for the object.<br />
  <code class="s">(path:string_var) <span class="op">reference.</span>GetModelPath <span class="op">object:ref</span></code></p>
  
  <p><a id="SetIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIconPath">SetIconPath</a> - sets the icon path for the type.<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetIconPath iconPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetIconPath">GetIconPath</a> - returns the icon path for the object.<br />
  <code class="s">(path:string_var) <span class="op">reference.</span>GetIconPath <span class="op">object:Ref</span></code></p>
  
  <p> <a id="CompareModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=CompareModelPath">CompareModelPath</a> - returns whether the passed string is part of the model path. This is a case insensitive search.<br />
  <code class="s">(found:bool) <span class="op">reference.</span>CompareModelPath toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span>ModelPathIncludes toFind:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="CompareIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=CompareIconPath">CompareIconPath</a> - returns whether the passed string is part of the icon path. This is a case insensitive search.<br />
  <code class="s">(found:bool) <span class="op">reference.</span>CompareIconPath toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span>IconPathIncludes toFind:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="CopyModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyModelPath">CopyModelPath</a> - sets the model path of the calling reference or passed objectID to the model path offromObject<br />
  <code class="s">(nothing) <span class="op">reference.</span>CopyModelPath fromObject:ref <span class="op">toObject:ref</span></code></p>
  
  <p><a id="CopyIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyIconPath">CopyIconPath</a> - sets the icon path of the calling reference or passed objectID to the icon path of fromObject<br />
  <code class="s">(nothing) <span class="op">reference.</span>CopyIconPath fromObject:ref <span class="op">toObject:ref</span></code></p>
  
  <p><a id="ModModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=ModModelPath">ModModelPath</a> - modifies the model path of the calling reference or passed objectID. The <code>toReplaceAndReplaceWith</code> string has the following format: <code>"toReplace|replaceWith"</code>. <code>ModModelPath</code> will do a case insensitve search for the <code>toReplace</code> portion and if found will replace it with the <code>replaceWith</code> portion. The <code>|</code> character is used to separate the portions of the string. If there is nothing before the <code>|</code> character, the <code>replaceWith</code> string is prepended to the model path. In the console, use <code>@</code> instead of <code>|</code>.<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModModelPath toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code></p>
  
  <p><a id="ModIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=ModIconPath">ModIconPath</a> - modifies the icon path of the calling reference or passed objectID. The <code>toReplaceAndReplaceWith</code> string has the following format: <code>"toReplace|replaceWith"</code>. <code>ModIconPath</code> will do a case insensitve search for the <code>toReplace</code> portion and if found will replace it with the <code>replaceWith</code> portion. The <code>|</code> character is used to separate the portions of the string. If there is nothing before the <code>|</code> character, the <code>replaceWith</code> string is prepended to the icon path. In the console, use <code>@</code> instead of <code>|</code>.<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModIconPath toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code></p>
  
  <p><a id="IsModelPathValid" class="f" href="http://cs.elderscrolls.com/index.php?title=IsModelPathValid">IsModelPathValid</a> - returns 1 if the model path for the object exists in the user's Data folder or within one of the BSA archives.<br />
  <code class="s">(isPathValid:bool) <span class="op">reference.</span>IsModelPathValid <span class="op">object:ref</span></code></p>
  
  <p><a id="IsIconPathValid" class="f" href="http://cs.elderscrolls.com/index.php?title=IsIconPathValid">IsIconPathValid</a> - returns 1 if the icon path for the object exists in the user's Data folder or within one of the BSA archives.<br />
  <code class="s">(isPathValid:bool) <span class="op">reference.</span>IsIconPathValid <span class="op">object:ref</span></code></p>
  
  <p><a id="GetTexturePath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTexturePath">GetTexturePath</a> - returns the texture path of an object. This command is identical to GetIconPath, but also works for other object types such as skills, classes, and miscellaneous objects.<br />
  <code class="s">(string) <span class="op">reference.</span>GetTexturePath<span class="op"> object:ref</span></code></p>
  
  <p><a id="SetTexturePath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTexturePath">SetTexturePath</a> - sets the texture path of an object. This command works for a broader set of objects than SetIconPathEX.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetTexturePath path:string<span class="op"> object:ref</span></code></p>
  
  <p><a id="GetEditorSize" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEditorSize">GetEditorSize</a> - returns the value contained in the hidden 'size' field of the editor's object window for the specified object. This is a rough scalar approximation of the dimensions of the object. Return value is typically similar to that of <a href="#GetBoundingRadius">GetBoundingRadius</a>. The game only calculates and stores this value for objects for which at least one reference exists in the game world.<br />
  <code class="s">(size:float) <span class="op">reference.</span>GetEditorSize <span class="op">object:ref</span></code></p>
  
  <h3><a id="Wearable">Wearable</a></h3>
  
  <p>Types with this quality can be worn by actors and can have different models and textures for males and females</p>
  
  <h4>Qualities</h4>
  
  <p class="boxhl"><a href="#Equippable">Equippable</a></p>
  
  <h4>Values</h4>
  
  <p class="boxhl"><strong>Slot</strong> (<span class="op">short</span>) - the equipment slot or slots taken by the object<br />
  <strong>Male Model Path</strong> (<span class="op">string</span>) - the path to the NIF file for the male or only model while worn<br />
  <strong>Female Model Path</strong> (<span class="op">string</span>) - the path to the NIF file for the female model while worn<br />
  <strong>Male Ground Path</strong> (<span class="op">string</span>) - the path to the NIF for the male or only model when dropped<br />
  <strong>Female Ground Path</strong> (<span class="op">string</span>) - the path to the NIF for the female model when dropped<br />
  <strong>Male Icon Path</strong> (<span class="op">string</span>) - the path to the DDS icon file for the male or only model<br />
  <strong>Female Icon Path</strong> (<span class="op">string</span>) - the path to the DDS icon file for the female model<br />
  <strong>Playable</strong> (<span class="op">bool</span>) - whether the item is useable by the player or not</p>
  
  <h4>Functions:</h4>
  
  <p><a id="SetMaleBipedPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMaleBipedPath">SetMaleBipedPath</a> - sets the male NIF model path when worn<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetMaleBipedPath modelPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetFemaleBipedPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFemaleBipedPath">SetFemaleBipedPath</a> - sets the female NIF model path when worn<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetFemaleBipedPath modelPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetMaleGroundPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMaleGroundPath">SetMaleGroundPath</a> - sets the male model path when dropped<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetMaleGroundPath modelPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetFemaleGroundPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFemaleGroundPath">SetFemaleGroundPath</a> - sets the female model path when dropped<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetFemaleGroundPath modelPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetMaleIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMaleIconPath">SetMaleIconPath</a> - sets the male icon texture<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetMaleIconPath iconPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetFemaleIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFemaleIconPath">SetFemaleIconPath</a> - sets the female icon texture<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetFemaleIconPath iconPath:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModXXXPath">ModXXXPath</a> - modifies the specified path of the calling reference or passed obectID. The <code>toReplaceAndReplaceWith</code> string has the following format: <code>"toReplace|replaceWith"</code>. <code>ModXXXPath</code> will do a case insensitve search for the <code>toReplace</code> portion and if found will replace it with the <code>replaceWith</code> portion. The <code>|</code> character is used to separate the portions of the string. If there is nothing before the <code>|</code> character, the <code>replaceWith</code> string is prepended to the specified path. In the console, use <code>@</code> instead of <code>|</code>.<br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=ModMaleBipedPath">ModMaleBipedPath</a> toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=ModFemaleBipedPath">ModFemaleBipedPath</a> toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=ModMaleGroundPath">ModMaleGroundPath</a> toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=ModFemaleGroundPath">ModFemaleGroundPath</a> toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=ModMaleIconPath">ModMaleIconPath</a> toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=ModFemaleIconPath">ModFemaleIconPath</a> toReplaceAndReplaceWith:string <span class="op">toObject:ref</span></code></p>
  
  <p><a id="CompareXXXPath">CompareXXXPath</a> - returns whether the specified path of the calling reference or objectID contains the toFind string. This does a case insensitive search.<br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareMaleBipedPath">CompareMaleBipedPath</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareFemaleBipedPath">CompareFemaleBipedPath</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareMaleGroundPath">CompareMaleGroundPath</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareFemaleGroundPath">CompareFemaleGroundPath</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareMaleIconPath">CompareMaleIconPath</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareFemaleIconPath">CompareFemaleIconPath</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareMaleBipedPath">MaleBipedPathIncludes</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareFemaleBipedPath">FemaleBipedPathIncludes</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareMaleGroundPath">MaleGroundPathIncludes</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareFemaleGroundPath">FemaleGroundPathIncludes</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareMaleIconPath">MaleIconPathIncludes</a> toFind:string <span class="op">objectID:ref</span></code><br />
  <code class="s">(found:bool) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CompareFemaleIconPath">FemaleIconPathIncludes</a> toFind:string <span class="op">objectID:ref</span></code></p>
  
  <p><a id="CopyXXXPath">CopyXXXPath</a> - sets the specified path of the calling reference or objectID to the same path from the fromObject.<br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CopyMaleBipedPath">CopyMaleBipedPath</a> fromObject:ref <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CopyFemaleBipedPath">CopyFemaleBipedPath</a> fromObject:ref <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CopyMaleGroundPath">CopyMaleGroundPath</a> fromObject:ref <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CopyFemaleGroundPath">CopyFemaleGroundPath</a> fromObject:ref <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CopyMaleIconPath">CopyMaleIconPath</a> fromObject:ref <span class="op">toObject:ref</span></code><br />
  <code class="s">(nothing) <span class="op">reference.</span><a class="cf" href="http://cs.elderscrolls.com/index.php?title=CopyFemaleIconPath">CopyFemaleIconPath</a> fromObject:ref <span class="op">toObject:ref</span></code></p>
  
  <p><a id="IsPlayable" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPlayable">IsPlayable</a> - returns whether the specified object is playable or not. Returns true only if the object is of a type which can be flagged as playable in the editor.<br />
  <code class="s">(isPlayable:bool) <span class="op">reference</span>.IsPlayable <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsPlayable2" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPlayable2">IsPlayable2</a> - returns whether the specified object is playable or not. If the object is of a type which cannot be flagged as playable in the editor, this function returns true.<br />
  <code class="s">(isPlayable:bool) <span class="op">reference.</span>IsPlayable2 <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetIsPlayable" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsPlayable">SetIsPlayable</a> - specifies whether the object can be used by the player<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetIsPlayable isPlayable:bool <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsBipedIconPathValid" class="f" href="http://cs.elderscrolls.com/index.php?title=IsBipedIconPathValid">IsBipedIconPathValid</a> - returns 1 if the icon path for the object exists in the user's Data folder or within one of the BSA archives.<br />
  <code class="s">(isPathValid:bool) <span class="op">reference.</span>IsBipedIconPathValid <a href="#Biped_Path_Codes">bipedPathCode</a>:int <span class="op">object:ref</span></code></p>
  
  <p><a id="IsBipedModelPathValid" class="f" href="http://cs.elderscrolls.com/index.php?title=IsBipedModelPathValid">IsBipedModelPathValid</a> - returns 1 if the model path for the object exists in the user's Data folder or within one of the BSA archives.<br />
  <code class="s">(isPathValid:bool) <span class="op">reference.</span>IsBipedModelPathValid <a href="#Biped_Path_Codes">bipedPathCode</a>:int <span class="op">object:ref</span></code></p>
  
  <p><a id="GetBipedModelPath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBipedModelPath">GetBipedModelPath</a> - returns the file path of one of the models for the specified biped object.<br />
  <code class="s">(path:string_var) <span class="op">reference.</span>GetBipedModelPath <a href="#Biped_Path_Codes">bipedPathCode</a>:int <span class="op">object:ref</span></code></p>
  
  <p><a id="SetBipedModelPathEX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBipedModelPathEX">SetBipedModelPathEX</a> - sets the file path of the male or female model for the specified biped object.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetBipedModelPathEX path:<a href="#Format_Specifiers">formatString</a> <a href="#Biped_Path_Codes">bipedPathCode</a>:int <span class="op">object:ref</span></code></p>
  
  <p><a id="GetBipedIconPath" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBipedIconPath">GetBipedIconPath</a> - returns the file path of one of the icons for the specified biped object.<br />
  <code class="s">(path:string_var) <span class="op">reference.</span>GetBipedIconPath <a href="#Biped_Path_Codes">bipedPathCode</a>:int <span class="op">object:ref</span></code></p>
  
  <p><a id="SetBipedIconPathEX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBipedIconPathEX">SetBipedIconPathEX</a> - sets the file path of the male or female icon for the specified biped object.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetBipedIconPathEX path:<a href="#Format_Specifiers">formatString</a> <a href="#Biped_Path_Codes">bipedPathCode</a>:int <span class="op">object:ref</span></code></p>
  
  <p><a id="GetHidesRings" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHidesRings">GetHidesRings</a> - returns 1 if the "hides rings" flag is set for the biped object.<br />
  <code class="s">(hidesRings:bool) <span class="op">reference.</span>GetHidesRings <span class="op">object:ref</span></code></p>
  
  <p><a id="GetHidesAmulet" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHidesAmulet">GetHidesAmulet</a> - returns 1 if the "hides amulet" flag is set for the biped object.<br />
  <code class="s">(hidesAmulet:bool) <span class="op">reference.</span>GetHidesAmulet <span class="op">object:Ref</span></code></p>
  
  <p><a id="SetHidesRings" class="f" href="http://cs.elderscrolls.com/index.php?title=SetHidesRings">SetHidesRings</a> - modifies the "hides rings" flag.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetHidesRings hidesRings:bool <span class="op">object:ref</span></code></p>
  
  <p><a id="SetHidesAmulet" class="f" href="http://cs.elderscrolls.com/index.php?title=SetHidesAmulet">SetHidesAmulet</a> - modifies the "hides amulet" flag.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetHidesAmulet hidesAmulet:bool <span class="op">object:ref</span></code></p>
  
  <p><a id="GetBipedSlotMask" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBipedSlotMask">GetBipedSlotMask</a> - returns the slots occupied by a biped object.<br />
  <code class="s">(<a href="#Slot_Mask">slotMask</a>:int) <span class="op">reference.</span>GetBipedSlotMask <span class="op">object:ref</span></code></p>
  
  <p><a id="SetBipedSlotMask" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBipedSlotMask">SetBipedSlotMask</a> - sets the slots occupied by a biped object.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetBipedSlotMask <a href="#Slot_Mask">slotMask</a>:int <span class="op">object:ref</span></code></p>
  
  <p>See also: <a href="#GetEquipmentSlot">GetEquipmentSlot</a></p>
  
  <p>See also: <a href="#SetEquipmentSlot">SetEquipmentSlot</a></p>
  
  <h2><a id="Oblivion_Types">Oblivion Types</a></h2>
  
  <p>Oblivion Types are the various forms available to fill out in the CS. They correspond to real objects or concepts in Oblivion. Types are a collection of values and functions which can be applied to them. Frequently they have <a href="#Qualities">Qualities</a> which encapsulate common values and functions across the various types. If a type has a quality listed, that type has all of the values and functions of that quality in addition to any listed directly with the type itself.</p><ul>
    <li><a href="#Actor_Reference">Actor Reference</a></li>
    <li><a href="#AI_Package">AI Package</a></li>
    <li><a href="#Alchemy_Item">Alchemy Item</a></li>
    <li><a href="#Ammo">Ammo</a></li>
    <li><a href="#Apparatus">Apparatus</a></li>
    <li><a href="#Armor">Armor</a></li>
    <li><a href="#Birthsign">Birthsign</a></li>
    <li><a href="#Book">Book</a></li>
    <li><a href="#Cell">Cell</a></li>
    <li><a href="#Climate">Climate</a></li>
    <li><a href="#Clothing">Clothing</a></li>
    <li><a href="#Combat_Style">Combat Style</a></li>
    <li><a href="#Creature">Creature</a></li>
    <li><a href="#Door">Door</a></li>
    <li><a href="#Enchantment">Enchantment</a></li>
    <li><a href="#Faction">Faction</a></li>
    <li><a href="#Flora">Flora</a></li>
    <li><a href="#Ingredient">Ingredient</a></li>
    <li><a href="#Leveled_List">Leveled List</a></li>
    <li><a href="#Light">Light</a></li>
    <li><a href="#Magic_Effect_Setting">Magic Effect Setting</a></li>
    <li><a href="#Magic_Target">Magic Target</a></li>
    <li><a href="#Map_Marker">Map Marker</a></li>
    <li><a href="#Pathgrid">Pathgrid</a></li>
    <li><a href="#NPC">NPC</a></li>
    <li><a href="#Player">Player</a></li>
    <li><a href="#Projectile">Projectile</a></li>
    <li><a href="#Quest">Quest</a></li>
    <li><a href="#Reference">Reference</a></li>
    <li><a href="#Sigil_Stone">Sigil Stone</a></li>
    <li><a href="#Skill">Skill</a></li>
    <li><a href="#Soul_Gem">Soul Gem</a></li>
    <li><a href="#Sound">Sound</a></li>
    <li><a href="#Spell">Spell</a></li>
    <li><a href="#Weapon">Weapon</a></li>
    <li><a href="#Weather">Weather</a></li>
  </ul>
  
  <h3><a id="Actor_Reference">Actor Reference</a></h3>
  
  <p>A reference to a creature or NPC in the game world. Actor references have AI, animations, and havok states.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Actor">Actor</a>, <a href="#Inventory">Inventory</a>, <a href="#Magic_Target">Magic Target</a>, <a href="#NPC">NPC</a> or <a href="#Creature">Creature</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetNumDetectedActors" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumDetectedActors">GetNumDetectedActors</a> - returns the number of other actors of which the calling actor may detect. This includes actors detected at "Lost" or "Unseen" level.<br />
  <code class="s">(numDetectedActors:int) reference.GetNumDetectedActors</code></p>
  
  <p><a id="GetNthDetectedActor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthDetectedActor">GetNthDetectedActor</a> - returns the Nth actor in the calling actor's detection list<br />
  <code class="s">(actor:ref) reference.GetNthDetectedActor index:short</code></p>
  
  <p><a id="SetDetectionState" class="f" href="http://cs.elderscrolls.com/index.php?title=SetDetectionState">SetDetectionState</a> - sets the <a href="#Detection_State">detection state</a> of the calling actor toward the specified actor reference. Note that Oblivion recalculates this value frequently for actors in high process; the function's main purpose is to reset the detection state of unconscious actors.<br />
  <code class="s">(nothing) reference.SetDetectionState actor:ref <a href="#Detection_State">detection state</a>:int</code></p>
  
  <p><a id="IsBlocking" class="f" href="http://cs.elderscrolls.com/index.php?title=IsBlocking">IsBlocking</a> - returns 1 if the calling actor is blocking<br />
  <code class="s">(isBlocking:bool) reference.IsBlocking</code></p>
  
  <p><a id="IsAttacking" class="f" href="http://cs.elderscrolls.com/index.php?title=IsAttacking">IsAttacking</a> - returns 1 if the calling actor is attacking<br />
  <b>Note: </b>Will return 1 for a few frames while the player is power attacking as well. In cases where a normal and a power attack is to be differentiated, <code>OnControlDown</code> and <code>IsControlPressed</code> can be substituted for <code>IsAttacking</code> and <code>IsPowerAttacking</code> respectively, with appropriate checks. (TODO: Verify)<br />
  <code class="s">(isAttacking:bool) reference.IsAttacking</code></p>
  
  <p><a id="IsRecoiling" class="f" href="http://cs.elderscrolls.com/index.php?title=IsRecoiling">IsRecoiling</a> - returns 1 if the calling actor is recoiling<br />
  <code class="s">(isRecoiling:bool) reference.IsRecoiling</code></p>
  
  <p><a id="IsDodging" class="f" href="http://cs.elderscrolls.com/index.php?title=IsDodging">IsDodging</a> - returns 1 if the calling actor is dodging<br />
  <code class="s">(isDodging:bool) reference.IsDodging</code></p>
  
  <p><a id="IsStaggered" class="f" href="http://cs.elderscrolls.com/index.php?title=IsStaggered">IsStaggered</a> - returns 1 if the calling actor is staggered<br />
  <code class="s">(isStaggered:bool) reference.IsStaggered</code></p>
  
  <p><a id="IsMovingForward" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMovingForward">IsMovingForward</a> - returns 1 if the calling actor is attempting to move forward, even if his path is blocked.<br />
  <code class="s">(isMovingForward:bool) reference.IsMovingForward</code></p>
  
  <p><a id="IsMovingLeft" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMovingLeft">IsMovingLeft</a> - returns 1 if the calling actor is attempting to strafe left<br />
  <code class="s">(isMovingLeft:bool) reference.IsMovingLeft</code></p>
  
  <p><a id="IsMovingRight" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMovingRight">IsMovingRight</a> - returns 1 if the calling actor is attempting to strafe right<br />
  <code class="s">(isMovingRight:bool) reference.IsMovingRight</code></p>
  
  <p><a id="IsMovingBackward" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMovingBackward">IsMovingBackward</a> - returns 1 if the calling actor is attempting to move backwards<br />
  <code class="s">(isMovingBackwards:bool) reference.IsMovingBackwards</code></p>
  
  <p><a id="IsTurningLeft" class="f" href="http://cs.elderscrolls.com/index.php?title=IsTurningLeft">IsTurningLeft</a> - returns 1 if the calling actor is turning left<br />
  <code class="s">(isTurningLeft:bool) reference.IsTurningLeft</code></p>
  
  <p><a id="IsTurningRight" class="f" href="http://cs.elderscrolls.com/index.php?title=IsTurningRight">IsTurningRight</a> - returns 1 if the calling actor is turning right<br />
  <code class="s">(isTurningRight:bool) reference.IsTurningRight</code></p>
  
  <p><a id="IsInAir" class="f" href="http://cs.elderscrolls.com/index.php?title=IsInAir">IsInAir</a> - returns 1 if the calling actor is airborne, whether jumping or falling<br />
  <code class="s">(isInAir:bool) reference.IsInAir</code></p>
  
  <p><a id="IsJumping" class="f" href="http://cs.elderscrolls.com/index.php?title=IsJumping">IsJumping</a> - returns 1 if the calling actor is beginning to jump (playing the JumpStart anim group)<br />
  <code class="s">(isJumping:bool) reference.IsJumping</code></p>
  
  <p><a id="IsOnGround" class="f" href="http://cs.elderscrolls.com/index.php?title=IsOnGround">IsOnGround</a> - returns 1 if the calling actor is on the ground<br />
  <code class="s">(isOnGround:bool) reference.IsOnGround</code></p>
  
  <p><a id="IsFlying" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFlying">IsFlying</a> - returns 1 if the calling actor is flying. Only creatures can fly.<br />
  <code class="s">(isFlying:bool) reference.IsFlying</code></p>
  
  <p><a id="IsPowerAttacking" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPowerAttacking">IsPowerAttacking</a> - returns 1 if the calling actor is executing a power attack. See also the note on <a href="#IsAttacking"><code>IsAttacking</code></a>.<br />
  <code class="s">(isPowerAttacking:bool) reference.IsPowerAttacking</code></p>
  
  <p><a id="IsCasting" class="f" href="http://cs.elderscrolls.com/index.php?title=IsCasting">IsCasting</a> - returns 1 if the calling actor is casting a spell<br />
  <code class="s">(isCasting:bool) reference.IsCasting</code></p>
  
  <p><a id="GetFallTimer" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFallTimer">GetFallTimer</a> - returns the length of time for which the actor has been falling<br />
  <code class="s">(fallTimer:float) reference.GetFallTimer</code></p>
  
  <p><a id="IsAnimGroupPlaying" class="f" href="http://cs.elderscrolls.com/index.php?title=IsAnimGroupPlaying">IsAnimGroupPlaying</a> - returns 1 if the specified <a href="#Animation_Group">animation group</a> is currently being played by the calling actor<br />
  <code class="s">(playing:bool) reference.IsAnimGroupPlaying <a href="#Animation_Group">animationGroup</a>:chars</code></p>
  
  <p><a id="AnimPathIncludes" class="f" href="http://cs.elderscrolls.com/index.php?title=AnimPathIncludes">AnimPathIncludes</a> - returns 1 if one of the calling actor's currently playing animation paths includes the specified substring<br />
  <code class="s">(includes:bool) reference.AnimPathIncludes pathString:string</code></p>
  
  <p><a id="GetProcessLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProcessLevel">GetProcessLevel</a> - returns the actor's current process level, or -1 if called on a non-actor. Process level determines how frequently the game updates an actor's AI. In general, high process actors are in the same cell as the player, while more distant actors are kept at a lower process level.<br />
  <code class="s">(<a href="#Process_Level">processLevel</a>:int) reference.GetProcessLevel</code></p>
  
  <p><a id="GetEquippedItems" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquippedItems">GetEquippedItems</a> - returns an array containing all items currently equipped by the calling actor<br />
  <code class="s">(items:Array) reference.GetEquippedItems</code></p>
  
  <p><a id="GetSpells" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpells">GetSpells</a> - returns an array containing all of the spells in an actor's spell list.<br />
  <code class="s">(spells:Array) <span class="op">reference.</span>GetSpells <span class="op">baseActor:ref</span></code></p>
  
  <p><a id="GetActorAlpha" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActorAlpha">GetActorAlpha</a> - actor references can be made more or less opaque or transparent by changing their alpha property via SetActorAlpha. This function returns the calling actor's current alpha as a floating point number between 0.0 and 1.0, with 0.0 corresponding to fully transparent and 1.0 to fully opaque.<br />
  <code class="s">(alpha:float) reference.GetActorAlpha</code></p>
  
  <p><a id="GetBaseActorValueC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBaseActorValueC">GetBaseActorValueC</a> - identical to the game's GetBaseAV command, but accepts an integer actor value code.<br />
  <code class="s">(baseAV:int) reference.GetBaseActorValueC actorValueCode:int</code></p>
  <code class="s">(baseAV:int) reference.GetBaseAVC actorValueCode:int</code></p>
  
  <p><a id="GetBaseAV3" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBaseAV3">GetBaseAV3</a> - returns the same value as the game's GetBaseAV command, but does not include the effects of Fortify abilities.<br />
  <code class="s">(baseAV:int) reference.GetBaseAV3 actorValue:string</code></p>
  
  <p><a id="GetBaseAV3C" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBaseAV3C">GetBaseAV3C</a> - as GetBaseAV3, but takes an actor value code instead of an actor value name.<br />
  <code class="s">(baseAV:int) reference.GetBaseAV3C actorValueCode:int</code></p>
  
  <p><a id="GetAllies" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAllies">GetAllies</a> -  for an actor in combat, returns an Array of other actors which the game considers allies of the calling actor at that particular moment.<br />
  <code class="s">(allies:Array) reference.GetAllies</code></p>
  
  <p><a id="GetTargets" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTargets">GetTargets</a> - for an actor in combat, returns an Array of actors which the game considers potential targets of the calling actor at that particular moment.<br />
  <code class="s">(targets:Array) reference.GetTargets</code></p>
  
  <p><a id="GetSelectedSpells" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSelectedSpells">GetSelectedSpells</a> - for an actor in combat, returns an Array containing zero to seven spells which the actor has selected from his full spell list (including spells resolved from leveled spell lists) for use. The list contains a maximum of one spell from each of the following categories: bound armor, bound weapon, "buff", melee, ranged, restorative, and summon spells.<br />
  <code class="s">(spells:Array) reference.GetSelectedSpells</code></p>
  
  <p><a id="GetCombatSpells" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCombatSpells">GetCombatSpells</a> - for an actor in combat, returns an Array of all the spells in the actor's spellbook, including spells resolved from leveled spells lists (which are resolved into actual spells when the actor enters combat). The actor will use a subset of these spells during combat; use GetSelectedSpells to determine which of these spells have been selected for use.<br />
  <code class="s">(spells:Array) reference.GetCombatSpells</code></p>
  
  <p><a id="PlayIdle" class="f" href="http://cs.elderscrolls.com/index.php?title=PlayIdle">PlayIdle</a> - attempts to make the calling actor play the specified idle animation. The animation must be one defined in the editor's Gameplay &gt; Idle Animations window. Pass 1 for the forceIdle parameter to force the actor to play the idle regardless of any other animations currently playing.<br />
  <b>Note: </b>Directly using an idleAnim EditorID gives a compiler error (when not using the compiler override). You must load the idleAnim form in a ref variable and use the ref in the function.<br />
  <code class="s">(idlePlayed:bool) ref.PlayIdle idleAnim:ref <span class="op">forceIdle:bool</span></code></p>
  
  <p><a id="IsNaked" class="f" href="http://cs.elderscrolls.com/index.php?title=IsNaked">IsNaked</a> - returns 1 if the calling actor is naked, 0 otherwise. Naked means without a lowerbody equipment. If requireUpperbody is 1 it also requires an upperbody equipment.<br />
  <code class="s">(isNaked:bool) reference.IsNaked <span class="op">requireUpperbody:bool</span></code></p>
  
  <h3><a id="AI_Package">AI Package</a></h3>
  
  <p>A set of information defining actor behavior. Commands which modify AI packages operate on the base package and may have no effect or unpredictable effects on actor references currently executing that package.</p>
  
  <p><a id="SetPackageTarget" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPackageTarget">SetPackageTarget</a> - sets the target of the specified package. Target can be of several types, leading to several syntaxes for this command. The first listed usage sets the target to a specific reference. The second sets it to a particular base object with a specified quantity; when the package executes the actor will look for references to that base object to use as the target(s). The third usage sets the target to a <a href="http://obse.silverlock.org/Package_Object_Codes">code</a> representing the type(s) of objects to be used as targets, along with a quantity. This command does not change the targets of actor references currently executing the package unless they re-evaluate their package after the change has been made.<br />
  <b>Note: </b>If the Package is of Follow type, the distance in feet (integer returned with "Value" key from the StringMap returned by <code>GetPackageTargetData</code>) to follow the Target will be automatically set to 1. So in this case, it will be better to use <code>SetPackageTargetData</code> instead.<br />
  <code class="s">(nothing) SetPackageTarget package:ref targetReference:ref</code><br />
  <code class="s">(nothing) SetPackageTarget package:ref baseObject:ref quantity:int</code><br />
  <code class="s">(nothing) SetPackageTarget package:ref objectCode:int quantity:int</code></p>
  
  <p><a id="GetPackageData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPackageData">GetPackageData</a> - returns a stringmap containing info about a package. The returned stringmap contains the following keys:<br />
  <ul>
    <li type="square">"Type" - a string indicating the type of the package (e.g. "Eat", "Wander")</li>
    <li type=square>"Schedule" - a stringmap of the same format as the returned by <a href="#GetPackageScheduleData">GetPackageScheduleData</a></li>
    <li type=square>"Target" - a stringmap of the same format as the returned by <a href="#GetPackageTargetData">GetPackageTargetData</a></li>
    <li type=square>"Location" - a stringmap of the same format as the returned by <a href="#GetPackageLocationData">GetPackageLocationData</a></li>
  </ul><code class="s">(StringMap) GetPackageData package:ref</code></p>
  
  <p><a id="GetPackageScheduleData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPackageScheduleData">GetPackageScheduleData</a> - returns a stringmap containing info about a package schedule. The returned stringmap contains the following keys:<br />
  <ul>
    <li type=square>"Day" - a string, e.g. "Sunday"</li>
    <li type=square>"Month" - a string, e.g. "January"</li>
    <li type=square>"Date" - integer, 1-30</li>
    <li type=square>"Time" - integer, 0-23</li>
    <li type=square>"Duration" - integer</li>
  </ul><code class="s">(StringMap) GetPackageScheduleData package:ref</code></p>
  
  <p><a id="GetPackageLocationData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPackageLocationData">GetPackageLocationData</a> - returns a stringmap containing info about a package location. The returned stringmap contains the following keys:<br />
  <ul>
    <li type=square>"Type" - string ("Reference", "Cell", "Current", "Editor", "Object", "ObjectType")</li>
    <li type=square>"Radius" - int</li>
    <li type=square>"Object" - form (for types Reference, Cell, and Object) <strong>OR</strong></li>
    <li type=square>"ObjectType" - string as in editor, e.g. "Books", "Spells: School Illusion" (for ObjectType)</li>
  </ul><code class="s">(StringMap) GetPackageLocationData package:ref</code></p>
  
  <p><a id="GetPackageTargetData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPackageTargetData">GetPackageTargetData</a> - returns a stringmap containing info about a package target. The returned stringmap contains the following keys:<br />
  <ul>
    <li type=square>"Type" - string ("Reference", "Object", "ObjectType")</li>
    <li type=square>"Value" - integer</li>
    <li type=square>"Object" - form (for types Reference and Object) <strong>OR</strong></li>
    <li type=square>"ObjectType" - string as in editor, e.g. "Books", "Spells: School Illusion" (for ObjectType)</li>
  </ul><code class="s">(StringMap) GetPackageTargetData package:ref</code></p>
  
  <p><a id="SetPackageData" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPackageData">SetPackageData</a> - sets the target, schedule, and/or location of a package. It accepts a stringmap consisting of one or more stringmaps with keys "Location", "Target", or "Schedule", each following the formats listed above. If any data is omitted, the existing package data will be retained.<br />
  <code class="s">(success:bool) SetPackageData package:ref data:StringMap</code></p>
  
  <p><a id="SetPackageTargetData" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPackageTargetData">SetPackageTargetData</a> - sets the target of a package. Accepts a stringmap of the same format as that returned by <a href="#GetPackageTargetData">GetPackageTargetData</a>. Omitted fields retain their existing values.<br />
  <code class="s">(success:bool) SetPackageTargetData package:ref data:StringMap</code></p>
  
  <p><a id="SetPackageLocationData" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPackageLocationData">SetPackageLocationData</a> - sets the location of a package based on the passed stringmap of the same format as that returned by <a href="#GetPackageLocationData">GetPackageLocationData</a>. Omitted fields retain their existing values.<br />
  <b>Note: </b>Omitted fields might not actually retain their existing values, need to check. If true, TODO: Add example here. (TODO: Verify)<br />
  <code class="s">(success:bool) SetPackageLocationData package:ref data:StringMap</code></p>
  
  <p><a id="SetPackageScheduleData" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPackageScheduleData">SetPackageScheduleData</a> - sets the schedule of a package. Accepts a stringmap of the same format as that returned by <a href="#GetPackageScheduleData">GetPackageScheduleData</a>. Omitted fields retain their existing values.<br />
  <b>Note: </b>TODO: Verify same thing as on function above.<br />
  <code class="s">(success:bool) SetPackageScheduleData package:ref data:StringMap</code></p>
  
  <p><a id="GetSetPackageFlags">Package Flag Commands</a> - gets or sets the state of one of the flags on the specified package. Syntax is identical for all commands; sample usage is given for Get/SetPackageOffersServices<br />
  <code class="s">(offersServices:bool) GetPackageOffersServices package:ref</code><br />
  <code class="s">(nothing) SetPackageOffersServices package:ref offersServices:bool</code></p><ul>
    <li>Get/SetPackageOffersServices</li>
    <li>Get/SetPackageMustReachLocation</li>
    <li>Get/SetPackageMustComplete</li>
    <li>Get/SetPackageLockDoorsAtStart</li>
    <li>Get/SetPackageLockDoorsAtEnd</li>
    <li>Get/SetPackageLockDoorsAtLocation</li>
    <li>Get/SetPackageUnlockDoorsAtStart</li>
    <li>Get/SetPackageUnlockDoorsAtEnd</li>
    <li>Get/SetPackageUnlockDoorsAtLocation</li>
    <li>Get/SetPackageContinueIfPCNear</li>
    <li>Get/SetPackageOncePerDay</li>
    <li>Get/SetPackageSkipFalloutBehavior</li>
    <li>Get/SetPackageAlwaysRun</li>
    <li>Get/SetPackageAlwaysSneak</li>
    <li>Get/SetPackageAllowSwimming</li>
    <li>Get/SetPackageAllowFalls</li>
    <li>Get/SetPackageArmorUnequipped</li>
    <li>Get/SetPackageWeaponsUnequipped</li>
    <li>Get/SetPackageDefensiveCombat</li>
    <li>Get/SetPackageUseHorse</li>
    <li>Get/SetPackageNoIdleAnims</li>
  </ul>
  
  <h3><a id="Alchemy_Item">Alchemy Item</a></h3>
  
  <p>Alchemy Items are potions and poisons.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Edible">Edible</a>, <a href="#Inventory">Inventory</a>, <a href="#Magic">Magic</a>, <a href="#Named">Named</a>, <a href="#Scriptable">Scriptable</a>, <a href="#Simple">Simple</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Is Poison Flag</strong> (<span class="op">bool</span>) - whether the alchemy item is considered a poison. A poison is an alchemy item with all hostile effects. An alchemy item with even a single non-hostile effect is not a poison.</p>
  
  <h4>Functions</h4>
  
  <p><a id="IsPoison" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPoison">IsPoison</a> - returns whether the alchemy item is a poison.<br />
  <b>Note: </b>An alchemy item with even a single non-hostile effect is not a poison.<br />
  <code class="s">(isPoison:bool) <span class="op">reference</span>.IsPoison <span class="op">objectID:ref</span></code></p>
  
  <p><a id="MatchPotion" class="f" href="http://cs.elderscrolls.com/index.php?title=MatchPotion">MatchPotion</a> - Oblivion keeps track of potions created by the player and reuses them if another potion is created with the same effects as one created previously. This command takes a potion and returns a previously-created potion bearing the same effects, if one exists. Note that in some cases it may return the same potion that was passed as the argument. Mainly useful during potion creation in the Alchemy menu, or when dynamically modifying potion effects via script.<br />
  <code class="s">(matchedPotion:ref) MatchPotion potionToMatch:ref</code></p>
  
  <h3><a id="Ammo">Ammo</a></h3>
  
  <p>Ammo includes all ammunition like arrows.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Attacking">Attacking</a>, <a href="#Enchantable">Enchantable</a>, <a href="#Equippable">Equippable</a>, <a href="#Inventory">Inventory</a>, <a href="#Named">Named</a>, <a href="#Simple">Simple</a></p>
  
  <h4>Functions:</h4>
  
  <p>No additional functions have been defined.</p>
  
  <h3><a id="Apparatus">Apparatus</a></h3>
  
  <p>Apparatus are used for Alchemy and the creation of alchemy items.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Type</strong> (<span class="op">short</span>) - the type of alchemy apparatus<br />
  <strong>Quality</strong> (<span class="op">float</span>) - the level of the alchemy apparatus quality. The <a href="#Apparatus_Quality">ApparatusQuality</a> list shows the basic levels, but any value between 0 and 1.0 is valid.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetApparatusType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetApparatusType">GetApparatusType</a> - returns the alchemy apparatus type of the calling reference or passed objectID<br />
  <code class="s">(<a href="#Apparatus_Type">apparatusType</a>:int) <span class="op">reference.</span>GetApparatusType <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetApparatusType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetApparatusType">SetApparatusType</a> - sets the alchemy type of the calling reference or passed objectID<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetApparatusType <a href="#Apparatus_Type">apparatusType</a>:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetQuality" class="f" href="http://cs.elderscrolls.com/index.php?title=GetQuality">GetQuality</a> - returns the quality level of the calling reference or passed objectID<br />
  <code class="s">(<a href="#Apparatus_Quality">quality</a>:float) <span class="op">reference.</span>GetQuality <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetQuality" class="f" href="http://cs.elderscrolls.com/index.php?title=SetQuality">SetQuality</a> - sets the quality level of the calling reference or passed objectID<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetQuality <a href="#Apparatus_Quality">quality</a>:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModQuality" class="f" href="http://cs.elderscrolls.com/index.php?title=ModQuality">ModQuality</a> - modifies the quality of the calling reference or passed objectID<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModQuality <a href="#Apparatus_Quality">modQualityBy</a>:float <span class="op">objectID:ref</span></code></p>
  
  <h3><a id="Armor">Armor</a></h3>
  
  <p>Armor is any type of wearable object that provides protection against damage.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Breakable">Breakable</a>, <a href="#Enchantable">Enchantable</a>, <a href="#Inventory">Inventory</a>, <a href="#Named">Named</a>, <a href="#Wearable">Wearable</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Armor Rating</strong> (<span class="op">long</span>) - the value of protection provided by the armor<br />
  <strong>Armor Type</strong> (<span class="op">short</span>) - the type of the armor. <a href="#Armor_Type">Armor Type Codes</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetArmorAR" class="f" href="http://cs.elderscrolls.com/index.php?title=GetArmorAR">GetArmorAR</a> - returns the armor rating of the object<br />
  <b>Note: </b>The value returned by this function is the armor rating as defined in the Construction Set, multiplied by 100. (TODO: Verify)<br />
  <code class="s">(armorRating:int) <span class="op">reference.</span>GetArmorAR <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetArmorAR" class="f" href="http://cs.elderscrolls.com/index.php?title=SetArmorAR">SetArmorAR</a> - sets the armor rating of the object<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetArmorAR nuArmorRating:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModArmorAR" class="f" href="http://cs.elderscrolls.com/index.php?title=ModArmorAR">ModArmorAR</a> - modifies the armor rating of the object up or down<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModArmorAR modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetArmorType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetArmorType">GetArmorType</a> - returns 0 if light armor and 1 if heavy armor<br />
  <code class="s">(<a href="#Armor_Type">armorType</a>:int) <span class="op">reference</span>.GetArmorType <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetArmorType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetArmorType">SetArmorType</a> - sets whether the armor is heavy or light<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetArmorType <a href="#Armor_Type">nuArmorType</a>:int <span class="op">objectID:ref</span></code></p>
  
  <h3><a id="Birthsign">Birthsign</a></h3>
  
  <p>A set of magic items associated with a birthsign.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetBirthsignSpells" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBirthsignSpells">GetBirthsignSpells</a> - returns an Array containing the spells associated with the specified birthsign<br />
  <code class="s">(spells:Array) GetBirthsignSpells birthsign:ref</code></p>
  
  <h3><a id="Book">Book</a></h3>
  
  <p>Includes books and scrolls.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Inventory">Inventory</a>, <a href="#Description">Description</a>, <a href="#Enchantable">Enchantable</a>, <a href="#Named">Named</a>, <a href="#Simple">Simple</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Can Be Taken</strong> (<span class="op">bool</span>) whether the book can be taken<br />
  <strong>IsScroll</strong> (<span class="op">bool</span>) whether the book is a scroll<br />
  <strong>SkillTaught</strong> (<span class="op">bool</span>) whether the book teaches a skill or not</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetBookCantBeTaken" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBookCantBeTaken">GetBookCantBeTaken</a> - returns 1 if the book cannot be taken<br />
  <code class="s">(cantBeTaken:bool) <span class="op">reference</span>.GetBookCantBeTaken <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetBookIsScroll" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBookIsScroll">GetBookIsScroll</a> - returns whether the book is a scroll or not<br />
  <code class="s">(isScroll:bool) <span class="op">reference.</span>GetBookIsScroll <span class="op">objectID:ref</span></code><br />
  <code class="s">(isScroll:bool) <span class="op">reference.</span>IsScroll <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetBookSkillTaught" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBookSkillTaught">GetBookSkillTaught</a> - returns the skill taught by the book. If no skill is taught, returns -1.<br />
  <code class="s">(<a href="#Actor_Value_Codes">skillTaught</a>:int) <span class="op">reference.</span>GetBookSkillTaught <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetBookCantBeTaken" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBookCantBeTaken">SetBookCantBeTaken</a> - sets whether the book can be taken<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetBookCantBeTaken cantBeTaken:bool <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetBookIsScroll" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBookIsScroll">SetBookIsScroll</a> - sets whether the book is a scroll<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetBookIsScroll isScroll:bool <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetBookSkillTaught" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBookSkillTaught">SetBookSkillTaught</a> - sets the skill the book teaches. The the skillTaught value is not one of the skills, sets the value to 255.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetBookSkillTaught <a href="#Actor_Value_Codes">skillTaught</a>:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetBookText" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBookText">GetBookText</a> - returns the text of a book as a string. The result must be assigned to a string variable.<br />
  <code class="s">(bookText:string_var) <span class="op">reference.</span>GetBookText <span class="op">book:ref</span></code></p>
  
  <p><a id="GetBookLength" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBookLength">GetBookLength</a> - returns the number of characters in a book's text.<br />
  <code class="s">(length:int) <span class="op">reference.</span>GetBookLength <span class="op">book:ref</span></code></p>
  
  <h3><a id="Cell">Cell</a></h3>
  
  <p>There are two types of cells: interior and exterior. Exterior cells exist as parts of worldspaces and often inherit the name of their parent worldspace. Interior cells are isolated from other parts of the world and have their own names. When the player visits and then exits an interior cell, the game records the number of total hours elapsed in the game at the moment the player exits; this value is the cell's "detach time." The next time he visits that cell, if the difference between the current number of game hours passed and the detach time is greater than the game setting iHoursToRespawnCell, the cell will be reset.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Named">Named</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong><a href="#Music_Type">Music Type</a></strong> (<span class="op">short</span>) - the music type for the cell</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetCellMusicType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellMusicType">GetCellMusicType</a> - returns the music type of the player's current cell.<br />
  <code class="s">(<a href="#Music_Type">musicType</a>:int) GetCellMusicType</code></p>
  
  <p><a id="SetCellMusicType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellMusicType">SetCellMusicType</a> - sets the music type used in the specified cell.<br />
  <code class="s">(nothing) SetCellMusicType cell:ref <a href="#Music_Type">musicType</a>:int </code></p>
  
  <p><a id="SetCellWaterHeight" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellWaterHeight">SetCellWaterHeight</a> - changes the water height of the specified cell. In order for the command to take full effect, the cell must be reloaded (con_PurgeCellBuffers can be used to forcibly unload it if it is still in memory). If used to alter the water height in a loaded cell, the water shader will reflect the new height and actors will switch between swimming and walking animations appropriately. However, floating physics and the water surface will not be updated until the cell is reloaded. This command has no effect in exteriors or in cells which have no water.<br />
  <code class="s">(waterHeightChanged:bool) SetCellWaterHeight cell:ref newHeight:float</code></p>
  
  <p><a id="GetCellDetachTime" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellDetachTime">GetCellDetachTime</a> - returns the cell's detach time, described above.<br />
  <code class="s">(detachTime:int) GetCellDetachTime cell:ref</code></p>
  
  <p><a id="GetCellResetHours" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellResetHours">GetCellResetHours</a> - returns the number of hours which must pass in the game before the cell is reset.<br />
  <code class="s">(hours:int) GetCellResetHours cell:ref</code></p>
  
  <p><a id="SetCellResetHours" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellResetHours">SetCellResetHours</a> - sets the number of hours which mustpass before the cell is reset. This value must be less than the game setting iHoursToRespawnCell. Using this function to modify the reset hours for the current cell, or for exterior cells, has no effect.<br />
  <code class="s">(bSucceeded:bool) SetCellResetHours cell:ref hours:int</code></p>
  
  <p><a id="GetCellBehavesAsExterior" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellBehavesAsExterior">GetCellBehavesAsExterior</a> - returns true if the "behaves as exterior" cell is checked for the specified interior cell.<br />
  <code class="s">(behavesAsExterior:bool) GetCellBehavesAsExterior cell:ref</code></p>
  
  <p><a id="IsCellPublic" class="f" href="http://cs.elderscrolls.com/index.php?title=IsCellPublic">IsCellPublic</a> - returns 1 if the cell is marked as 'public'.<br />
  <code class="s">(isPublic:bool) IsCellPublic</code></p>
  
  <p><a id="SetCellIsPublic" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellIsPublic">SetCellIsPublic</a> - sets the 'public' flag for the cell.<br />
  <code class="s">(nothing) SetCellIsPublic cell:ref isPublic:bool</code></p>
  
  <p><a id="SetCellHasWater" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellHasWater">SetCellHasWater</a> - sets the flag indicating whether or not the interior cell has water. Only affects interior cells, and changes are not visible until the cell is reloaded. Has no effect if called while the player is inside the specified cell.<br />
  <code class="s">(nothing) SetCellHasWater cell:ref hasWater:bool</code></p>
  
  <p><a id="SetCellBehavesAsExterior" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellBehavesAsExterior">SetCellBehavesAsExterior</a> - sets the 'behaves like exterior' flag for the interior cell. Has no effect if called while the player is inside the specified cell.<br />
  <code class="s">(nothing) SetCellBehavesAsExterior cell:ref behavesAsExterior:bool</code></p>
  
  <p><a id="GetCellClimate" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellClimate">GetCellClimate</a> - returns the climate for the specified cell. <br />
  <code class="s">(climate:ref) GetCellClimate cell:ref</code></p>
  
  <p><a id="SetCellClimate" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellClimate">SetCellClimate</a> - sets the climate for the specified cell.<br />
  <code class="s">(nothing) SetCellClimate cell:ref climate:ref</code></p>
  
  <p><a id="GetCellLighting" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellLighting">GetCellLighting</a> - returns a StringMap describing the lighting properties for the interior cell. The StringMap contains the following key-value pairs corresponding to the fields in the editor's Cell Lighting tab, where 'RGB Array' is a 3-element Array with values from 0-255 in the order {red, green, blue}: <br />
  <pre>
      "ambient" (RGB Array)
      "directional" (RGB Array)
      "fog" (RGB Array)
      "rotxy" (float)
      "rotz" (float)
      "fognear" (float)
      "fogfar" (float)
      "clip" (float)
      "fade" (float)
  </pre>
  <code class="s">(lighting:StringMap) GetCellLighting cell:ref</code></p>
  
  <p><a id="SetCellLighting" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellLighting">SetCellLighting</a> - alters one or more of an interior cell's lighting fields, taking a StringMap of the same format as that returned by <a href="#GetCellLighting">GetCellLighting</a>. Include only the elements you wish to change; if a key is not found its value will not be modified.<br />
  <code class="s">(nothing) SetCellLighting cell:ref newValues:StringMap</code></p>
  
  <p><a id="GetTerrainHeight" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTerrainHeight">GetTerrainHeight</a> - returns the height of the terrain mesh at the specified x and y coordinates within the current exterior worldspace. X and Y are worldspace coordinates (e.g. as returned by GetPos). If the coordinates are outside of any loaded cells, returns 0.0. Note that this command does not check for collision with surfaces other than terrain.<br />
  <code class="s">(height:float) GetTerrainHeight x:float y:float</code></p>
  
  <p><a id="IsOblivionInterior" class="f" href="http://cs.elderscrolls.com/index.php?title=IsOblivionInterior">IsOblivionInterior</a> - returns 1 if the "Oblivion interior" flag has been checked for the specified interior cell.<br />
  <code class="s">(oblivionInterior:bool) IsOblivionInterior cell:ref</code></p>
  
  <p><a id="IsOblivionWorld" class="f" href="http://cs.elderscrolls.com/index.php?title=IsOblivionWorld">IsOblivionWorld</a> - returns 1 if the "Oblivion World" flag has been checked for the specified world space.<br />
  <code class="s">(oblivionWorld:bool) IsOblivionWorld worldspace:ref</code></p>
  
  <p><a id="CanFastTravelFromWorld" class="f" href="http://cs.elderscrolls.com/index.php?title=CanFastTravelFromWorld">CanFastTravelFromWorld</a> - returns 1 if the player is allowed to fast-travel from the specified world space.<br />
  <code class="s">(canFastTravel:bool) CanFastTravelFromWorld worldspace:ref</code></p>
  
  <p><a id="SetCanFastTravelFromWorld" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCanFastTravelFromWorld">SetCanFastTravelFromWorld</a> - sets whether the player can fast-travel from the specified world space.<br />
  <code class="s">(nothing) SetCanFastTravelFromWorld worldspace:ref canFastTravel:bool</code></p>
  
  <p><a id="GetCellWaterType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellWaterType">GetCellWaterType</a> - returns the Water used by the interior cell. Returns zero if the cell has no water, or if the cell uses the default water type.<br />
  <code class="s">(waterType:ref) GetCellWaterType cell:ref</code></p>
  
  <p><a id="SetCellWaterType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCellWaterType">SetCellWaterType</a> - sets the Water used by the interior cell. Changes will not be visible until the cell is reloaded.<br />
  <code class="s">(nothing) SetCellWaterType cell:ref waterType:ref</code></p>
  
  <p><a id="GetCellNorthRotation" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellNorthRotation">GetCellNorthRotation</a> - returns the rotation on the Z axis of the north marker within the specified interior cell, if one is present. The game uses the north marker's Z rotation to determine what direction is considered "north". Rotation returned is in degrees and is 0.0 if no north marker is present in the specified cell.<br />
  <code class="s">(rotation:float) GetCellNorthRotation cell:ref</code></p>
  
  <h3><a id="Climate">Climate</a></h3>
  
  <p>Climate settings define weather, sun, and moon settings for a worldspace. Additional information about these settings can be found at the <a href="http://cs.elderscrolls.com/index.php?title=Climates">Construction Set Wiki</a>.</p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Sunrise Begin, Sunrise End, Sunset Begin, Sunset End</strong> (<span class="op">short</span>) - these values are the number of 10 minute increments since midnight the given event occurs<br />
  <strong>MoonPhaseLength</strong> (<span class="op">short</span>) - the number of days in a moon's phase<br />
  <strong>HasMasser, HasSecunda</strong> (<span class="op">bool</span>) - which moons the climate will show<br />
  <strong>Volatility</strong> (<span class="op">short</span>) - the volatility of the climate, or how often the weather is likely to change</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetCurrentClimateID" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentClimateID">GetCurrentClimateID</a> - returns the refID of the current climate.<br />
  <code class="s">(currentClimate:ref) GetCurrentClimateID</code></p>
  
  <p><a id="GetClimateSunriseBegin" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateSunriseBegin">GetClimateSunriseBegin</a> - returns the time sunrise begins specified as a number of 10 minute units since midnight.<br />
  <b>Note: </b>There are 1,440 minutes in a day, thus there are 144 ten-minute units, thus you'll receive a value of 0 for midnight, and 143 for 23:50.<br />
  <code class="s">(sunriseBegin:int) GetSunriseBegin climate:ref</code></p>
  
  <p><a id="GetClimateSunriseEnd" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateSunriseEnd">GetClimateSunriseEnd</a> - returns the time sunrise ends specified as a number of 10 minute units since midnight.<br />
  <code class="s">(sunriseEnd:int) GetSunriseEnd climate:ref</code></p>
  
  <p><a id="GetClimateSunsetBegin" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateSunsetBegin">GetClimateSunsetBegin</a> - returns the time sunset begins specified as a number of 10 minute units since midnight.<br />
  <code class="s">(sunsetBegin:int) GetSunsetBegin climate:ref</code></p>
  
  <p><a id="GetClimateSunsetEnd" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateSunsetEnd">GetClimateSunsetEnd</a> - returns the time sunset ends specified as a number of 10 minute units since midnight.<br />
  <code class="s">(sunsetEnd:int) GetSunsetEnd climate:ref</code></p>
  
  <p><a id="GetClimateMoonPhaseLength" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateMoonPhaseLength">GetClimateMoonPhaseLength</a> - returns the number of days in the phase of the moons. The total moon cycle length is 8 x PhaseLength according to the CS.<br />
  <code class="s">(phaseLength:int) GetClimateMoonPhaseLength climate:ref</code></p>
  
  <p><a id="GetClimateHasMasser" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateHasMasser">GetClimateHasMasser</a> - returns 1 if the current climate shows the moon Masser.<br />
  <code class="s">(hasMasser:bool) GetClimateHasMasser climate:ref</code></p>
  
  <p><a id="GetClimateHasSecunda" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateHasSecunda">GetClimateHasSecunda</a> - returns 1 if the current climate shows the moon Secunda.<br />
  <code class="s">(hasSecunda:bool) GetClimateHasSecunda climate:ref</code></p>
  
  <p><a id="RefreshCurrentClimate" class="f" href="http://cs.elderscrolls.com/index.php?title=RefreshCurrentClimate">RefreshCurrentClimate</a> - refreshes the climate info to reflect changes made by the SetClimateXXX functions.<br />
  <code class="s">(nothing) RefreshCurrentClimate</code></p>
  
  <p><a id="SetClimateSunriseBegin" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateSunriseBegin">SetClimateSunriseBegin</a> - sets the time sunrise begins as a number of 10 minute units since midnight.<br />
  <b>Note: </b>The function will have no effect if the time parameter is less than 0 or greater than 59.<br />
  <code class="s">(nothing) SetClimateSunriseBegin time:int climate:ref</code></p>
  
  <p><a id="SetClimateSunriseEnd" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateSunriseEnd">SetClimateSunriseEnd</a> - sets the time sunrise ends as a number of 10 minute units since midnight,<br />
  <b>Note: </b>The time parameter must have a value that is at least 1 greater than the value returned by <code>GetClimateSunriseBegin</code> and be no greater than 95.<br />
  <code class="s">(nothing) SetClimateSunriseEnd time:int climate:ref</code></p>
  
  <p><a id="SetClimateSunsetBegin" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateSunsetBegin">SetClimateSunsetBegin</a> - sets the time sunset begins as a number of 10 minute units since midnight.<br />
  <b>Note: </b>The time parameter must have a value that is at least 1 greater than the value returned by <code>GetClimateSunriseEnd</code> and be no greater than 119.<br />
  <code class="s">(nothing) SetClimateSunsetBegin time:int climate:ref</code></p>
  
  <p><a id="SetClimateSunsetEnd" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateSunsetEnd">SetClimateSunsetEnd</a> - sets the time sunset ends as a number of 10 minute units since midnight.<br />
  <b>Note: </b>The time parameter must have a value that is at least 1 greater than the value returned by GetClimateSunsetBegin.<br />
  <b>Note: </b>The upper limit to the time parameter is 255, which equates to the latest time the sunset can end as being 18:39 the next day. While the sunrise end and sunset beginning cannot overlap, the sunset end and sunrise beginning can, though the in-game consequences of an overlap or a time value of over 143 (23:59) have not been tested.<br />
  <code class="s">(nothing) SetClimateSunsetEnd time:int climate:ref</code></p>
  
  <p><a id="SetClimateMoonPhaseLength" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateMoonPhaseLength">SetClimateMoonPhaseLength</a> - sets the number of days in the phase of the moons<br />
  <code class="s">(nothing) SetClimateMoonPhaseLength nuPhaseLength:int climate:ref</code></p>
  
  <p><a id="SetClimateHasMasser" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateHasMasser">SetClimateHasMasser</a> - sets  whether the climate shows the moon Masser<br />
  <code class="s">(nothing) SetClimateHasMasser hasMasser:bool climate:ref</code></p>
  
  <p><a id="SetClimateHasSecunda" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateHasSecunda">SetClimateHasSecunda</a> - sets whether the climate shows the moon Secunda<br />
  <code class="s">(nothing) SetClimateHasSecunda hasSecunda:bool climate:ref</code></p>
  
  <p><a id="GetClimateVolatility" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClimateVolatility">GetClimateVolatility</a> - returns the volatility of the climate<br />
  <code class="s">(volatility:int) GetClimateVolatility climate:ref</code></p>
  
  <p><a id="SetClimateVolatility" class="f" href="http://cs.elderscrolls.com/index.php?title=SetClimateVolatility">SetClimateVolatility</a> - sets the volatility of the climate<br />
  <code class="s">(nothing) SetClimateVolatility volatility:int climate:ref</code></p>
  
  <h3><a id="Clothing">Clothing</a></h3>
  
  <p>Clothing is any wearable object that does not provide armor protection. Includes amulets and rings.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Enchantable">Enchantable</a>, <a href="#Inventory">Inventory</a>, <a href="#Named">Named</a>, <a href="#Wearable">Wearable</a></p>
  
  <h4>Functions:</h4>
  
  <p>No additional functions have been defined.</p>
  
  <h3><a id="Creature">Creature</a></h3>
  
  <p>Creatures are one of two types of actors.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Actor">Actor</a>, <a href="#Attacking">Attacking</a> (only attack damage), <a href="#Inventory">Inventory</a>, <a href="#Magic_Target">Magic Target</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Creature Type</strong> (<span class="op">short</span>) - the type of creature<br />
  <strong>Combat Skill</strong> (<span class="op">short</span>) - the value for all combat skills for the creature<br />
  <strong>Magic Skill</strong> (<span class="op">short</span>) - the value for all magic skills for the creature<br />
  <strong>Stealth Skill</strong> (<span class="op">short</span>) - the value for all stealth skills for the creature<br />
  <strong>Reach</strong> (<span class="op">short</span>) - the attack reach of the creature<br />
  <strong>Soul Level</strong> (<span class="op">short</span>) - the soul level of the creature<br />
  <strong>Base Scale</strong> (<span class="op">float</span>) - the base scale of the creature</p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsCreature" class="f" href="http://cs.elderscrolls.com/index.php?title=IsCreature">IsCreature</a> - returns whether the reference or passed id is a creature<br />
  <code class="s">(isCreature:bool) <span class="op">reference.</span>IsCreature <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureType">GetCreatureType</a> - returns the type of the creature (Undead, Humanoid, Daedrea etc)<br />
  <code class="s">(<a href="#Creature_Type">creatureType</a>:int) <span class="op">reference.</span>GetCreatureType <span class="op">creature:ref</span></code></p>
  
  <p><a id="SetCreatureType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCreatureType">SetCreatureType</a> - attempts to change the type of the creature.<br />
  <b>Note: </b>This changes the type for the base object, so it affects all references to that object. If used to change the type of a "horse"-type creature to something else, the creature will no longer be ridable until its type is set back to "horse". The command will not allow you to set the creature's type to "horse" unless the creature's model contains the ActorParent node which allows it to be ridden, and it will not allow you to change the type of a ridable creature while it is being ridden.<br />
  <code class="s">(typeSet:bool) reference.SetCreatureType <a href="#Creature_Type">creatureType</a>:int</code></p>
  
  <p><a id="GetCreatureCombatSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureCombatSkill">GetCreatureCombatSkill</a> - returns the combat skill for the creature<br />
  <code class="s">(combatSkill:int) <span class="op">reference</span>.GetCreatureCombatSkill <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureMagicSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureMagicSkill">GetCreatureMagicSkill</a> - returns the magic skill for the creature<br />
  <code class="s">(magicSkill:int) <span class="op">reference</span>.GetCreatureMagicSkill <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureStealthSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureStealthSkill">GetCreatureStealthSkill</a> - returns the stealth skill for the creature<br />
  <code class="s">(stealthSkill:int) <span class="op">reference</span>.GetCreatureStealthSkill <span class="op">creature:ref</span></code></p>
  
  <p><a id="SetCreatureSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCreatureSkill">SetCreatureSkill</a> - sets the value of one of the creature's skills. Pass "stealth", "magic", or "combat" as the skill name. The skill value must be between 0 and 255.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetCreatureSkill skillName:string skillValue:int <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureReach" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureReach">GetCreatureReach</a> - returns the reach of the creature<br />
  <code class="s">(reach:int) <span class="op">reference</span>.GetCreatureReach <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureSoulLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureSoulLevel">GetCreatureSoulLevel</a> - returns the soul level of the creature<br />
  <code class="s">(<a href="#Soul_Level">soulLevel</a>:int) <span class="op">reference.</span>GetCreatureSoulLevel <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureBaseScale" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureBaseScale">GetCreatureBaseScale</a> - retuns the base scale of the creature<br />
  <code class="s">(scale:float) <span class="op">reference</span>.GetCreatureBaseScale <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureWalks" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureWalks">GetCreatureWalks</a> - returns 1 if the Walks flag is set on the creature<br />
  <code class="s">(walks:bool) <span class="op">reference.</span>GetCreatureWalks <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureSwims" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureSwims">GetCreatureSwims</a> - returns 1 if the Swims flag is set on the creature<br />
  <code class="s">(swims:bool) <span class="op">reference.</span>GetCreatureSwims <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureFlies" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureFlies">GetCreatureFlies</a> - returns 1 if the Flies flag is set on the creature<br />
  <code class="s">(flies:bool) <span class="op">reference.</span>GetCreatureFlies <span class="op">creature:ref</span></code></p>
  
  <p><a id="IsCreatureBiped" class="f" href="http://cs.elderscrolls.com/index.php?title=IsCreatureBiped">IsCreatureBiped</a> - returns 1 if the Biped flag is set on the creature<br />
  <code class="s">(biped:bool) <span class="op">reference.</span>isCreatureBiped <span class="op">creature:ref</span></code></p>
  
  <p><a id="CreatureHasNoMovement" class="f" href="http://cs.elderscrolls.com/index.php?title=CreatureHasNoMovement">CreatureHasNoMovement</a> - returns 1 if the No Movement flag is set on the creature<br />
  <code class="s">(noMovement:bool) <span class="op">reference.</span>CreatureHasNoMovement <span class="op">creature:ref</span></code></p>
  
  <p><a id="CreatureHasNoHead" class="f" href="http://cs.elderscrolls.com/index.php?title=CreatureHasNoHead">CreatureHasNoHead</a> - returns 1 if the No Head flag is set on the creature<br />
  <code class="s">(noHead:bool) <span class="op">reference.</span>CreatureHasNoHead <span class="op">creature:ref</span></code></p>
  
  <p><a id="CreatureHasNoLeftArm" class="f" href="http://cs.elderscrolls.com/index.php?title=CreatureHasNoLeftArm">CreatureHasNoLeftArm</a> - returns 1 if the No Left Arm flag is set on the creature.<br />
  <code class="s">(noLeftArm:bool) <span class="op">reference.</span>CreatureHasNoLeftArm <span class="op">creature:ref</span></code></p>
  
  <p><a id="CreatureHasNoRightArm" class="f" href="http://cs.elderscrolls.com/index.php?title=CreatureHasNoRightArm">CreatureHasNoRightArm</a> - returns 1 if the No Right Arm flag is set on the creature.<br />
  <code class="s">(noRightArm:bool) <span class="op">reference.</span>CreatureHasNoRightArm <span class="op">creature:ref</span></code></p>
  
  <p><a id="CreatureNoCombatInWater" class="f" href="http://cs.elderscrolls.com/index.php?title=CreatureNoCombatInWater">CreatureNoCombatInWater</a> - returns 1 if the No Combat In Water flag is set on the creature.<br />
  <code class="s">(noCombat:bool) <span class="op">reference.</span>CreatureNoCombatInWater <span class="op">creature:ref</span></code></p>
  
  <p><a id="CreatureUsesWeaponAndShield" class="f" href="http://cs.elderscrolls.com/index.php?title=CreatureUsesWeaponAndShield">CreatureUsesWeaponAndShield</a> - returns 1 if the Uses Weapon and Shield flag is set on the creature.<br />
  <code class="s">(weaponAndShield:bool) <span class="op">reference.</span>CreatureUsesWeaponAndShield <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetRider" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRider">GetRider</a> - returns the NPC currently riding the calling horse.<br />
  <b>Note: </b>Returns a reference to an NPC from the moment the NPC 'decides' to mount and start walking toward the horse.<br />
  <b>Note: </b>When the PC mounts the horse, returns the Player's reference from the beginning of the mount animation to the end of the dismount animation.<br />
  <code class="s">(rider:ref) reference.GetRider</code></p>
  
  <p><a id="GetCreatureSoundBase" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureSoundBase">GetCreatureSoundBase</a> - returns the creature from which the specified creature's sounds are derived, if any.<br />
  <code class="s">(creature:ref) <span class="op">reference.</span>GetCreatureSoundBase <span class="op">creature:ref</span></code></p>
  
  <p><a id="SetCreatureSoundBase" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCreatureSoundBase">SetCreatureSoundBase</a> - sets the creature from which the creature inherits its sounds. The inheriting creature must not itself be a sound base (mustn't define its own sounds), and the creature specified as the sound base must be a sound base (defining its own sounds) or null.<br />
  <code class="s">(success:bool) <span class="op">reference.</span>SetCreatureSoundBase soundBase:ref<span class="op"> creature:ref</span></code></p>
  
  <p><a id="GetCreatureSound" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureSound">GetCreatureSound</a> - returns the creature's sound associated with the specified action.<br />
  <code class="s">(sound:ref) <span class="op">reference.</span>GetCreatureSound whichSound:<a href="#Actor_Sound">actorSound</a> <span class="op">creature:ref</span></code></p>
  
  <p><a id="HasModel" class="f" href="http://cs.elderscrolls.com/index.php?title=HasModel">HasModel</a> - returns 1 if the creature's model list includes the specified .nif file. The file must appear in the creature's meshes folder. String must include the ".nif" extension and is case-insensitive.<br />
  <code class="s">(hasModel:bool) <span class="op">reference.</span>HasModel model:string <span class="op">creature:ref</span></code></p>
  
  <p><a id="ToggleCreatureModel" class="f" href="http://cs.elderscrolls.com/index.php?title=ToggleCreatureModel">ToggleCreatureModel</a> - toggles a model within a creature's model list on or off. The model path must be relative to the creature's model folder and include the ".nif" extension. When called on a reference which is currently being rendered, the reference must be disabled and then enabled before the change is visible.<br />
  <code class="s">(nothing) <span class="op">reference.</span>ToggleCreatureModel modelPath:string enableModel:bool <span class="op">creature:ref</span></code></p>
  
  <p><a id="GetCreatureModelPaths" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCreatureModelPaths">GetCreatureModelPaths</a> - returns an Array containing the set of model paths in the creature's model list. Only those models which are toggled on are included.<br />
  <code class="s">(modelPaths:Array) <span class="op">reference.</span>GetCreatureModelPaths <span class="op">creature:ref</span></code></p>
  
  <h3><a id="Combat_Style">Combat Style</a></h3>
  
  <p>Combat styles are used by NPCs and creatures to determine behavior in combat.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetCombatStyle" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCombatStyle">GetCombatStyle</a> - returns the combat style assigned to the calling reference.<br />
  <b>Note: </b>Many actors are assigned no combat style in the editor (i.e. "DEFAULT" appears in the selection box); in that case this function returns zero.<br />
  <code class="s">(combatStyle:ref) reference.GetCombatStyle</code></p>
  
  <h4><a id="CombatStyleOptions">Additional Combat Style Functions</a></h4>
  
  <p>Most of these functions get or set the values of properties defined in the Combat Style window for each combat style and follow the same syntax conventions.</p>
  
  <p>Syntax:<br />
  <code class="s">(value:numeric) GetCombatStyleXXX combatStyle:ref</code><br />
  <code class="s">(nothing) SetCombatStyleXXX newValue:numeric combatStyle:ref</code></p><ul>
    <li>Get/SetCombatStyleAcrobaticsDodgeChance</li>
    <li>Get/SetCombatStyleAttackChance</li>
    <li>Get/SetCombatStyleAttackDuringBlockMult</li>
    <li>Get/SetCombatStyleAttackNotUnderAttackMult</li>
    <li>Get/SetCombatStyleAttackSkillModBase</li>
    <li>Get/SetCombatStyleAttackSkillModMult</li>
    <li>Get/SetCombatStyleAttackUnderAttackMult</li>
    <li>Get/SetCombatStyleBlockChance</li>
    <li>Get/SetCombatStyleBlockNotUnderAttackMult</li>
    <li>Get/SetCombatStyleBlockSkillModBase</li>
    <li>Get/SetCombatStyleBlockSkillModMult</li>
    <li>Get/SetCombatStyleBlockUnderAttackMult</li>
    <li>Get/SetCombatStyleBuffStandoffDist</li>
    <li>Get/SetCombatStyleDodgeBackNotUnderAttackMult</li>
    <li>Get/SetCombatStyleDodgeBackTimerMax</li>
    <li>Get/SetCombatStyleDodgeBackTimerMin</li>
    <li>Get/SetCombatStyleDodgeBackUnderAttackMult</li>
    <li>Get/SetCombatStyleDodgeChance</li>
    <li>Get/SetCombatStyleDodgeFatigueModBase</li>
    <li>Get/SetCombatStyleDodgeFatigueModMult</li>
    <li>Get/SetCombatStyleDodgeFWAttackingMult</li>
    <li>Get/SetCombatStyleDodgeFWNotAttackingMult</li>
    <li>Get/SetCombatStyleDodgeFWTimerMax</li>
    <li>Get/SetCombatStyleDodgeFWTimerMin</li>
    <li>Get/SetCombatStyleDodgeLRChance</li>
    <li>Get/SetCombatStyleDodgeLRTimerMax</li>
    <li>Get/SetCombatStyleDodgeLRTimerMin</li>
    <li>Get/SetCombatStyleDodgeNotUnderAttackMult</li>
    <li>Get/SetCombatStyleDodgeUnderAttackMult</li>
    <li>Get/SetCombatStyleEncumberedSpeedModBase</li>
    <li>Get/SetCombatStyleEncumberedSpeedModMult</li>
    <li>Get/SetCombatStyleFleeingDisabled</li>
    <li>Get/SetCombatStyleGroupStandoffDist</li>
    <li>Get/SetCombatStyleH2HBonusToAttack</li>
    <li>Get/SetCombatStyleHoldTimerMax</li>
    <li>Get/SetCombatStyleHoldTimerMin</li>
    <li>Get/SetCombatStyleIdleTimerMax</li>
    <li>Get/SetCombatStyleIdleTimerMin</li>
    <li>Get/SetCombatStyleIgnoreAlliesInArea</li>
    <li>Get/SetCombatStyleKOBonusToAttack</li>
    <li>Get/SetCombatStyleKOBonusToPowerAttack</li>
    <li>Get/SetCombatStyleMeleeAlertOK </li>
    <li>Get/SetCombatStylePowerAttackChance</li>
    <li>Get/SetCombatStylePowerAttackFatigueModBase</li>
    <li>Get/SetCombatStylePowerAttackFatigueModMult</li>
    <li>Get/SetCombatStylePrefersRanged</li>
    <li>Get/SetCombatStyleRangedStandoffDist</li>
    <li>Get/SetCombatStyleRangeMaxMult</li>
    <li>Get/SetCombatStyleRangeOptimalMult</li>
    <li>Get/SetCombatStyleRejectsYields</li>
    <li>Get/SetCombatStyleRushAttackChance</li>
    <li>Get/SetCombatStyleRushAttackDistMult</li>
    <li>Get/SetCombatStyleStaggerBonusToAttack</li>
    <li>Get/SetCombatStyleStaggerBonusToPowerAttack</li>
    <li>Get/SetCombatStyleSwitchDistMelee</li>
    <li>Get/SetCombatStyleSwitchDistRanged</li>
    <li>Get/SetCombatStyleWillYield</li>
  </ul>
  
  <h3><a id="Door">Door</a></h3>
  
  <p>Doors are used to move between interior cells and exterior worldspaces.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Audible">Audible</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsLoadDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=IsLoadDoor">IsLoadDoor</a> - returns 1 if the calling reference is a load door<br />
  <b>Note: </b>Returns 1 only if the door is connected to another door via the Teleport tab. A door reference just dropped in the CS, not connected to another door, returns 0.<br />
  <code class="s">(isLoadDoor:bool) reference.IsLoadDoor</code></p>
  
  <p><a id="GetLinkedDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLinkedDoor">GetLinkedDoor</a> - returns the door to which the calling load door is linked<br />
  <code class="s">(linkedDoor:ref) reference.GetLinkedDoor</code></p>
  
  <p><a id="GetTeleportCell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTeleportCell">GetTeleportCell</a> - returns the cell to which the calling load door teleports<br />
  <code class="s">(cell:ref) reference.GetTeleportCell</code></p>
  
  <p><a id="IsOblivionGate" class="f" href="http://cs.elderscrolls.com/index.php?title=IsOblivionGate">IsOblivionGate</a> -returns true if the door is flagged as an Oblivion gate in the editor.<br />
  <code class="s">(isOBGate:bool) <span class="op">reference.</span>IsOblivionGate <span class="op">door:ref</span></code></p>
  
  <p><a id="IsHiddenDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=IsHiddenDoor">IsHiddenDoor</a> - returns 1 if the "hidden" flag is set for the door.<br />
  <code class="s">(isHidden:bool) <span class="op">reference.</span>IsHiddenDoor <span class="op">door:ref</span></code></p>
  
  <p><a id="IsAutomaticDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=IsAutomaticDoor">IsAutomaticDoor</a> - returns 1 if the "Automatic" flag is set for the door.<br />
  <code class="s">(isAutomatic:bool) <span class="op">reference.</span>IsAutomaticDoor <span class="op">door:ref</span></code></p>
  
  <p><a id="IsMinimalUseDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMinimalUseDoor">IsMinimalUseDoor</a> - returns 1 if the "Minimal Use" flag is set for the door.<br />
  <code class="s">(isMinimalUse:bool) <span class="op">reference.</span>IsMinimalUseDoor <span class="op">door:ref</span></code></p>
  
  <p><a id="SetIsHiddenDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsHiddenDoor">SetIsHiddenDoor</a> - sets or clears the "hidden" flag for the door.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIsHiddenDoor setFlag:bool <span class="op">door:ref</span></code></p>
  
  <p><a id="SetIsAutomaticDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsAutomaticDoor">SetIsAutomaticDoor</a> - sets or clears the "Automatic" flag for the door.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIsAutomaticDoor setFlag:bool <span class="op">door:ref</span></code></p>
  
  <p><a id="SetIsMinimalUseDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsMinimalUseDoor">SetIsMinimalUseDoor</a> - sets or clears the "Minimal Use" flag for the door.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIsMinimalUseDoor setFlag:bool <span class="op">door:ref</span></code></p>
  
  <p><a id="SetIsOblivionGate" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsOblivionGate">SetIsOblivionGate</a> - sets or clears the "Oblivion Gate" flag for the door.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIsOblivionGate setFlag:bool <span class="op">door:ref</span></code></p>
  
  <p><a id="SetDoorTeleport" class="f" href="http://cs.elderscrolls.com/index.php?title=SetDoorTeleport">SetDoorTeleport</a> - sets the reference, coordinates, and rotation to which the calling door teleports. Only the reference argument is required; the values for the others will be taken from the specified reference's coordinates and rotation if omitted. The bTemporary argument specifies that the change should not be saved in the savegame; by default, or if the argument is zero, the change will be saved.<br />
  <code class="s">(nothing) reference.SetDoorTeleport teleportTo:ref <span class="op">x:float y:float z:float rot:float bTemporary:bool</span></code></p>
  
  <p><a id="LinkToDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=LinkToDoor">LinkToDoor</a> - links the calling door reference to the specified door reference. This causes each of the doors to teleport to the other when activated. Both doors must be persistent references and neither can already be linked to another door. Actors will use the doors in their pathfinding. The change persists in the savegame.<br />
  <code class="s">(linked:bool) reference.LinkToDoor otherDoor:ref</code></p>
  
  <p><a id="GetDoorTeleportX" class="f" href="http://cs.elderscrolls.com/index.php?title=GetDoorTeleportX">GetDoorTeleportX</a> - returns the x coordinate to which the calling door teleports.<br />
  <code class="s">(coord:float) reference.GetDoorTeleportX</code></p>
  
  <p><a id="GetDoorTeleportY" class="f" href="http://cs.elderscrolls.com/index.php?title=GetDoorTeleportY">GetDoorTeleportY</a> - returns the y coordinate to which the calling door teleports.<br />
  <code class="s">(coord:float) reference.GetDoorTeleportY</code></p>
  
  <p><a id="GetDoorTeleportZ" class="f" href="http://cs.elderscrolls.com/index.php?title=GetDoorTeleportZ">GetDoorTeleportZ</a> - returns the z coordinate to which the calling door teleports.<br />
  <code class="s">(coord:float) reference.GetDoorTeleportZ</code></p>
  
  <p><a id="GetDoorTeleportRot" class="f" href="http://cs.elderscrolls.com/index.php?title=GetDoorTeleportRot">GetDoorTeleportRot</a> - returns the rotation to which the calling door teleports. This is the angle the player will be facing after activatingthe load door.<br />
  <code class="s">(coord:float) reference.GetDoorTeleportRot</code></p>
  
  <p><a id="GetTeleportCellName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTeleportCellName">GetTeleportCellName</a> - when called on a teleporting door reference, returns the name of the cell or worldspace to which the door teleports<br />
  <code class="s">(cellName:string) ref.GetTeleportCellName</code></p>
  
  <h3><a id="Enchantment">Enchantment</a></h3>
  
  <p>An Enchantment is a group of magical effects that can be applied to enchantable objects.</p>
  
  <h4>Value:</h4>
  
  <p class="boxhl"><strong>Enchantment Type</strong> (<span class="op">short</span>) - the type of object to which an enchantment may be applied<br />
  <strong>Charge</strong> (<span class="op">long</span>) - the charge of the enchantment. Of unknown and dubious use - the number sometimes does not correspond to the value listed in the CS. The CS seems to list cost and charge both from the Cost value on the enchantment item.<br />
  <strong>Cost</strong> (<span class="op">long</span>) - the cost in magicka charge consumed by each use of the enchantment</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetEnchantmentType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchantmentType">GetEnchantmentType</a> - returns the type of the enchantment<br />
  <code class="s">(<a href="#Enchantment_Type">enchantType</a>:int) GetEnchantmentType objectID:ref</code></p>
  
  <p><a id="SetEnchantmentType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEnchantmentType">SetEnchantmentType</a> - sets the type of the enchantment<br />
  <code class="s">(nothing) SetEnchantmentType <a href="#Enchantment_Type">enchantType</a>:int objectID:ref</code></p>
  
  <p><a id="GetEnchantmentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchantmentCharge">GetEnchantmentCharge</a> - returns the charge of the enchantment. Of unknown and dubious use.<br />
  <b>Note: </b>While this value exists in the CS, it doesn't seem to do anything. Charge is determined by enchantment points on the weapon/enchantment cost of the enchantment.<br />
  <code class="s">(charge:int) GetEnchantmentCharge objectID:ref</code></p>
  
  <p><a id="SetEnchantmentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEnchantmentCharge">SetEnchantmentCharge</a> - sets the charge of the enchantment. Of unknown and dubious use.<br />
  <b>Note: </b>While this value exists in the CS, it doesn't seem to do anything. Charge is determined by enchantment points on the weapon/enchantment cost of the enchantment.<br />
  <code class="s">(nothing) SetEnchantmentCharge nuCharge:int objectID:ref</code></p>
  
  <p><a id="ModEnchantmentCharge" class="f" href="http://cs.elderscrolls.com/index.php?title=ModEnchantmentCharge">ModEnchantmentCharge</a> - modifies the charge of the enchantment. Of unknown and dubious use.<br />
  <b>Note: </b>While this value exists in the CS, it doesn't seem to do anything. Charge is determined by enchantment points on the weapon/enchantment cost of the enchantment.<br />
  <code class="s">(nothing) ModEnchantmentCharge modifyBy:float objectID:ref</code></p>
  
  <p><a id="GetEnchantmentCost" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchantmentCost">GetEnchantmentCost</a> - returns the magicka charge cost for using the enchantment.<br />
  <code class="s">(cost:int) GetEnchantmentCost objectID:ref</code></p>
  
  <p><a id="SetEnchantmentCost" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEnchantmentCost">SetEnchantmentCost</a> - sets the cost for using the enchantment.<br />
  <b>Note: </b>This has no effect if the enchantment has the Auto-Calculate flag, see <code><a href="#SetMagicItemAutoCalc">SetMagicItemAutoCalc</a></code>.<br />
  <code class="s">(nothing) SetEnchantmentCost nuCost:int objectID:ref</code></p>
  
  <p><a id="ModEnchantmentCost" class="f" href="http://cs.elderscrolls.com/index.php?title=ModEnchantmentCost">ModEnchantmentCost</a> - modifies the cost for using the enchantment up or down.<br />
  <b>Note: </b>This has no effect if the enchantment has the Auto-Calculate flag, see <code><a href="#SetMagicItemAutoCalc">SetMagicItemAutoCalc</a></code>.<br />
  <code class="s">(nothing) ModEnchantmentCost modifyBy:float objectID:ref</code></p>
  
  <h3><a id="Faction">Faction</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Named">Named</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="FactionHasSpecialCombat" class="f" href="http://cs.elderscrolls.com/index.php?title=FactionHasSpecialCombat">FactionHasSpecialCombat</a> - returns 1 if the Special Combat flag is set on the faction<br />
  <code class="s">(hasSpecialCombat:bool) FactionHasSpecialCombat faction:ref</code></p>
  
  <p><a id="IsFactionEvil" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFactionEvil">IsFactionEvil</a> - returns 1 if the faction is marked as evil.<br />
  <code class="s">(isEvil:bool) IsFactionEvil faction:ref</code></p>
  
  <p><a id="IsFactionHidden" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFactionHidden">IsFactionHidden</a> - returns 1 if the faction is not shown on the player's faction sheet.<br />
  <code class="s">(isHidden:bool) IsFactionHidden faction:ref</code></p>
  
  <p><a id="SetFactionEvil" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFactionEvil">SetFactionEvil</a> - changes the Evil flag on the faction. Changes are saved in the savegame.<br />
  <code class="s">(nothing) SetFactionEvil faction:ref isEvil:int</code></p>
  
  <p><a id="SetFactionHidden" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFactionHidden">SetFactionHidden</a> - changes the Hidden flag on the faction. Changes are saved in the savegame.<br />
  <code class="s">(nothing) SetFactionHidden faction:ref isHidden:int</code></p>
  
  <p><a id="SetFactionHasSpecialCombat" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFactionHasSpecialCombat">SetFactionHasSpecialCombat</a> - changes the Special Combat flag on the faction. Changes are saved in the savegame.<br />
  <code class="s">(nothing) SetFactionHasSpecialCombat faction:ref hasSpecialCombat:int</code></p>
  
  <p><a id="GetNumRanks" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumRanks">GetNumRanks</a> - returns the number of ranks in the faction.<br />
  <code class="s">(numRanks:int) GetNumRanks faction:ref</code></p>
  
  <p><a id="GetNthFactionRankName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthFactionRankName">GetNthFactionRankName</a> - returns the title of the nth rank in a faction. Optionally returns the female rank name.<br />
  <code class="s">(rankName:string_var) GetNthFactionRankName faction:ref whichRank:int <span class="op">female:bool</span></code></p>
  
  <p><a id="SetNthFactionRankNameEX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNthFactionRankNameEX">SetNthFactionRankNameEX</a> - sets the title of the nth rank in a faction. Optionally sets the female rank name.<br />
  <code class="s">(nothing)SetNthFactionRankNameEX path:<a href="#Format_Specifiers">formatString</a> faction:ref whichRank:int <span class="op">female:bool</span></code></p>
  
  <h3><a id="Flora">Flora</a></h3>
  
  <p>Plants which can be harvested for alchemical ingredients.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsHarvested" class="f" href="http://cs.elderscrolls.com/index.php?title=IsHarvested">IsHarvested</a> - returns 1 if the calling reference's ingredient has been harvested.<br />
  <code class="s">(isHarvested:bool) reference.IsHarvested</code></p>
  
  <p><a id="SetHarvested" class="f" href="http://cs.elderscrolls.com/index.php?title=SetHarvested">SetHarvested</a> - mark or unmark the calling reference as having been harvested. Changes are saved in the savegame.<br />
  <b>Note: </b>Prior to xOBSE TODO changing an already harvested flora to unharvested was not actually saved into the savegame. (TODO: Version number of the fix.)<br />
  <code class="s">(nothing) reference.SetHarvested isHarvested:int</code></p>
  
  <p><a id="GetIngredient" class="f" href="http://cs.elderscrolls.com/index.php?title=GetIngredient">GetIngredient</a> - returns the ingredient contained in a plant.<br />
  <code class="s">(ingredient:ref) <span class="op">reference.</span>GetIngredient <span class="op">flora:ref</span></code></p>
  
  <p><a id="SetIngredient" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIngredient">SetIngredient</a> - sets the ingredient contained in a plant. Omit the ingredient parameter or pass an empty ref variable to set it to "no ingredient."<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIngredient <span class="op">ingredient:ref flora:ref</span></code></p>
  
  <p><a id="GetIngredientChance" class="f" href="http://cs.elderscrolls.com/index.php?title=GetIngredientChance">GetIngredientChance</a> - returns the % chance of harvesting an ingredient from the plant for a specific season where 0 = spring, 1 = summer, 2 = autumn, and 3 = winter. Return value ranges from 0 to 100.<br />
  <code class="s">(chance:int) <span class="op">reference.</span>GetIngredientChance whichSeason:int <span class="op">flora:ref</span></code></p>
  
  <p><a id="SetIngredientChance" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIngredientChance">SetIngredientChance</a> - sets the %chance of harvesting an ingredient based on the specified season.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetIngredientChance whichSeason:int newChance:int <span class="op">flora:ref</span></code></p>
  
  <h3><a id="Ingredient">Ingredient</a></h3>
  
  <p>Ingredients are items that may be used to create Alchemy Items.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Edible">Edible</a>, <a href="#Inventory">Inventory</a>, <a href="#Magic">Magic</a>, <a href="#Named">Named</a>, <a href="#Scriptable">Scriptable</a>, <a href="#Simple">Simple</a></p>
  
  <h4>Functions</h4>
  
  <p>No additional functions have been defined.</p>
  
  <h3><a id="Leveled_List">Leveled List</a></h3>
  
  <p>A list of creatures, NPCs, items, or spells. Changes made to lists using OBSE functions are not saved in the savegame, but persist for the duration of the game session after they are made. To make effectively "permanent" changes to a leveled list, include code similar to the following in a quest script:</p>
  <pre>if ( GetGameRestarted ) ; runs once each time Oblivion is started
    AddToLeveledList list object level
    RemoveFromLeveledList list object
  endif</pre>
  
  <h4>Functions:</h4>
  
  <p><a id="AddToLeveledList" class="f" href="http://cs.elderscrolls.com/index.php?title=AddToLeveledList">AddToLeveledList</a> - adds an object to a leveled creature, spell, or item list. <span class="op">Count</span> defaults to 1 if unspecified.<br />
  <code class="s">(nothing) AddToLeveledList leveledList:ref object:ref level:int <span class="op">count:int</span></code></p>
  
  <p><a id="RemoveFromLeveledList" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveFromLeveledList">RemoveFromLeveledList</a> - removes all occurences of an object from a leveled list and returns the number of occurences removed.<br />
  <code class="s">(numRemoved:int) RemoveFromLeveledList leveledList:ref object:ref</code></p>
  
  <p><a id="CalcLeveledItem" class="f" href="http://cs.elderscrolls.com/index.php?title=CalcLeveledItem">CalcLeveledItem</a> - returns one item from a leveled item list, selected randomly for a character of the specified level.<br />
  By default, this function selects a level range from which to choose using the game setting iLevItemLevelDifferenceMax. The item chosen is within the range [minLevel...maxLevel], where maxLevel is the level in the list closest to but not exceeding the character's level, and minLevel = maxLevel - levelDiff.<br />
  You can override the iLevItemLevelDifferenceMax game setting by passing an argument for the levelDiff parameter, or you can omit the levelDiff parameter to use the current value of iLevItemLevelDifferenceMax.<br />
  If the "Calculate for all item &lt;= level" flag is set for the leveled list, minLevel is always zero.<br />
  This function checks the "Chance None" property of the leveled list, so it may return nothing based on that chance; pass 0 for the third parameter to override this behavior.<br/>
  In the case of leveled lists containing nested leveled lists, the function recurses through each list until it finds a non-leveled item.<br />
  <code class="s">(randomItem:ref) CalcLeveledItem leveledList:ref level:int <span class="op">useChanceNone:bool levelDiff:int</span></code></p>
  
  <p><a id="CalcLevItemNR" class="f" href="http://cs.elderscrolls.com/index.php?title=CalcLevItemNR">CalcLevItemNR</a> - does the same thing as CalcLeveledItem but will not recurse through nested leveled lists. This means that unlike CalcLeveledItem, CalcLevItemNR can return another leveled list rather than a real object.<br />
  <code class="s">(randomItem:ref CalcLevItemNR leveledList:ref level:int <span class="op">useChanceNone:bool levelDiff:int</span></code></p>
  
  <p><a id="CalcLevItems" class="f" href="http://cs.elderscrolls.com/index.php?title=CalcLevItems">CalcLevItems</a> - returns an Array of StringMaps representing items selected randomly from a leveled item list. This command uses the game code to select items, which means the items returned are the same as those the game would select for an actor of the specified level. Each entry in the returned Array is a StringMap with the key-value pairs: "item":item (form) and "count":count (integer). The optional "count" parameter is 1 by default.<br />
  <b>Note: </b>Does not work with leveled spells or creatures.<br />
  <code class="s">(items:Array) CalcLevItems levItemList:ref level:int <span class="op">count:int</span></code></p>
  
  <p><a id="GetCalcAllLevels" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCalcAllLevels">GetCalcAllLevels</a> - returns 1 if the "calculate for all levels &lt;= PC level" flag is checked.<br />
  <code class="s">(calcAllLevels:bool) GetCalcAllLevels leveledList:ref</code></p>
  
  <p><a id="SetCalcAllLevels" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCalcAllLevels">SetCalcAllLevels</a> - sets the "calculate for all levels &lt;= PC level" flag on the leveled list.<br />
  <code class="s">(nothing) SetCalcAllLevels leveledList:ref enabled:bool</code></p>
  
  <p><a id="GetCalcEachInCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCalcEachInCount">GetCalcEachInCount</a> - returns 1 if the "calculate for each item in count" flag is checked.<br />
  <code class="s">(calcEach:bool) GetCalcEachInCount leveledList:ref</code></p>
  
  <p><a id="GetChanceNone" class="f" href="http://cs.elderscrolls.com/index.php?title=GetChanceNone">GetChanceNone</a> - returns the chance from 0 to 100 that a leveled list returns no item.<br />
  <code class="s">(chanceNone:int) GetChanceNone leveledList:ref</code></p>
  
  <p><a id="GetNthLeveledItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthLevItem">GetNthLevItem</a> - returns the Nth element in a leveled list, as ordered in the Construction Set.<br />
  <code class="s">(element:ref) GetNthLevItem index:int leveledList:ref</code></p>
  
  <p><a id="GetNthLevItemCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthLevItemCount">GetNthLevItemCount</a> - returns the count of the Nth element of a leveled list.<br />
  <code class="s">(count:int) GetNthLevItemCount index:int leveledList:ref</code></p>
  
  <p><a id="GetNthLevItemLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthLevItemLevel">GetNthLevItemLevel</a> - returns the level of the Nth element of a leveled list.<br />
  <code class="s">(level:int) GetNthLevItemLevel index:int leveledList:ref</code></p>
  
  <p><a id="GetNumLevItems" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumLevItems">GetNumLevItems</a> - returns the number of elements in a leveled list.<br />
  <code class="s">(numItems:int) GetNumLevitems leveledList:ref</code></p>
  
  <p><a id="GetLevItemByLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLevItemByLevel">GetLevItemByLevel</a> - returns the first element of the specified level in the leveled list.<br />
  <code class="s">(element:ref) GetLevItemByLevel whichLevel:int leveledList:ref</code></p>
  
  <p><a id="RemoveLevItemByLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveLevItemByLevel">RemoveLevItemByLevel</a> - removes any elements of the specified level from a leveled list<br />
  <code class="s">(numRemoved:int) RemoveLevItemByLevel whichLevel:int leveledList:ref</code></p>
  
  <p><a id="ClearLeveledList" class="f" href="http://cs.elderscrolls.com/index.php?title=ClearLeveledList">ClearLeveledList</a> - removes all elements from a leveled list.<br />
  <code class="s">(nothing) ClearLeveledList leveledList:ref</code></p>
  
  <p><a id="RemoveNthLevItem" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveNthLevItem">RemoveNthLevItem</a> - removes the nth item from a leveled list.<br />
  <code class="s">(nothing) RemoveNthLevItem index:int leveledList:ref</code></p>
  
  <p><a id="GetLevItemIndexByLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLevItemIndexByLevel">GetLevItemIndexByLevel</a> - returns the index of the first item of the specified level within a leveled list, or -1 if no item exists for that level.<br />
  <code class="s">(index:int) GetLevItemIndexByLevel level:int leveledList:ref</code></p>
  
  <p><a id="GetLevItemIndexByForm" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLevItemIndexByForm">GetLevItemIndexByForm</a> - returns the index of the first occurrence of the specified form in a leveled list, or -1 if the form is not found.<br />
  <code class="s">(index:int) GetLevItemIndexByForm leveledList:ref formToFind:ref</code></p>
  
  <p><a id="SetChanceNone" class="f" href="http://cs.elderscrolls.com/index.php?title=SetChanceNone">SetChanceNone</a> - sets the chance that a leveled list generates no item.<br />
  <code class="s">(nothing) SetChanceNone chance:int levlist:ref</code></p>
  
  <p><a id="GetLevCreatureTemplate" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLevCreatureTemplate">GetLevCreatureTemplate</a> - gets the template actor of a leveled creature list.<br />
  <code class="s">(template:ref) GetLevCreatureTemplate leveledCreature:ref</code></p>
  
  <p><a id="SetLevCreatureTemplate" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLevCreatureTemplate">SetLevCreatureTemplate</a> - sets the template actor of a leveled creature. Omitting or passing a null ref as the second argument will remove any existing template.<br />
  <code class="s">(nothing) SetLevCreatureTemplate leveledCreature:ref <span class="op">template:ref</span></code></p>
  
  <h3><a id="Light">Light</a></h3>
  
  <p>Objects which emit light. They may or may not have a visible model associated with them and may or may not be carriable.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Equippable">Equippable</a>, <a href="#Inventory">Inventory</a>, <a href="#Named">Named</a>, <a href="#Simple">Simple</a>, <a href="#Audible">Audible</a></p>
  
  <h4>Value:</h4>
  
  <p class="boxhl"><strong>Radius</strong> (<span class="op">short</span>) - the radius illuminated by the light</p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsLightCarriable" class="f" href="http://cs.elderscrolls.com/index.php?title=IsLightCarriable">IsLightCarriable</a> - returns 1 if the light may be placed in an inventory.<br />
  <code class="s">(isCarriable:bool) <span class="op">reference.</span>IsLightCarriable <span class="op">light:ref</span></code></p>
  
  <p><a id="GetLightRadius" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLightRadius">GetLightRadius</a> - returns the radius of the light.<br />
  <code class="s">(radius:int) <span class="op">reference.</span>GetLightRadius <span class="op">light:ref</span></code></p>
  
  <p><a id="SetLightRadius" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLightRadius">SetLightRadius</a> - sets the radius of the light. Changes are not saved in the savegame.<br />
  <b>Note: </b>The game will not update the lighting until the cell is reloaded or you force the light to be reloaded, see <a href="#Update3D"><code>Update3D</code></a>.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetLightRadius radius:int <span class="op">light:ref</span></code></p>
  
  <p><a id="GetLightRGB" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLightRGB">GetLightRGB</a> - returns the red, green, and blue components of the light's color as an Array of 3 elements of values 0 through 255. The first element corresponds to the red value, the second to green, and the third to blue.<br />
  <code class="s">(rgb:Array) <span class="op">reference.</span>GetLightRGB <span class="op">light:ref</span></code></p>
  
  <p><a id="SetLightRGB" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLightRGB">SetLightRGB</a> - sets the red, green, and blue components of the light's color, accepting the components as an Array of 3 elements of values 0 through 255. The first element corresponds to the red value, the second to green, and the third to blue.<br />
  <code class="s">(colorChanged:bool) <span class="op">reference.</span>SetLightRGB rgb:Array <span class="op">light:ref</span></code></p>
  
  <p><a id="GetLightDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLightDuration">GetLightDuration</a> - returns the duration of the light as defined in the editor.<br />
  <code class="s">(duration:int) <span class="op">reference</span>.GetLightDuration <span class="op">light:ref</span></code></p>
  
  <p><a id="SetLightDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLightDuration">SetLightDuration</a> - sets the duration of the light.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetLightDuration duration:int <span class="op">light:ref</span></code></p>
  
  <p><a id="GetTimeLeft" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTimeLeft">GetTimeLeft</a> - returns the amount of time left before the calling light reference expires.<br />
  <code class="s">(timeLeft:float) reference.GetTimeLeft</code></p>
  
  <p><a id="GetEquippedTorchTimeLeft" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquippedTorchTimeLeft">GetEquippedTorchTimeLeft</a> - returns the amount of time before the torch equipped by the calling actor expires.<br />
  <code class="s">(timeLeft:float) reference.GetEquippedTorchTimeLeft</code></p>
  
  <p><a id="SetTimeLeft" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTimeLeft">SetTimeLeft</a> - sets the amount of time before the calling light reference expires. <br />
  <code class="s">(nothing) reference.SetTimeLeft timeLeft:float</code></p>
  
  <h3><a id="Magic_Effect_Setting">Magic Effect Setting</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Description">Description</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Code</strong> (<span class="op">chars or long</span>) - the magic effect code. In the CS this is a 4 character code (like FIDG or Z001). As a return value from OBSE functions it is a long with the same numerical value.<br />
  <strong>Base Cost</strong> (<span class="op">float</span>) - the base cost multiplier for the effect<br />
  <strong>School</strong> (<span class="op">short</span>) - the spell skill controlling the effect<br />
  <strong>Projectile Speed</strong> (<span class="op">float</span>) - the projectile speed of the magic effect<br />
  <strong>Enchant Factor</strong> (<span class="op">float</span>) - the constant effect enchantment factor which helps determine the maximum magnitude of the effect when enchanting<br />
  <strong>Barter Factor</strong> (<span class="op">float</span>) - the constant effect barter factor which helps determine the increase in value when enchanting<br />
  <strong>Is Hostile flag</strong> (<span class="op">bool</span>) - determines if the effect is hostile. Only hostile effects may be in a poison.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetMagicEffectCode" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectCode">GetMagicEffectCode</a> - returns the magic effect code of the effect.<br />
  <b>Note: </b>The 'magicEffect:ref' are actually the editor IDs of the magic effects. Thus, this command is really expecting an editor ID, just like most other commands. This means that it will also accept a ref var containing the magic effect.<br />
  <b>Note: </b>When used on Magic Effects without FormIDs the script will not compile correctly (although it does not produce any error messages). With Oblivion.esm loaded, the effects DISE, DUMY, and RSWD do not have FormIDs. Without Oblivion.esm loaded, no magic effects have FormIDs. Modifying the effect to give it a FormID will not fix the problem. To avoid this, use magic effect codes directly or use the <a href="#MagicEffectCodeFromChars"><code>MagicEffectCodeFromChars</code></a> function.<br />
  <code class="s">(magicEffectCode:int) GetMagicEffectCode magicEffect:ref</code><br />
  
  <p><a id="GetMagicEffectChars" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectChars">GetMagicEffectChars</a> - returns the 4-character code for a magic effect<br />
  <code class="s">(chars:string) GetMagicEffectChars magicEffect:ref</code></p>
  
  <p><a id="GetMagicEffectCharsC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectCharsC">GetMagicEffectCharsC</a> - returns the 4-character code for a magic effect<br />
  <code class="s">(chars:string) GetMagicEffectCharsC effectCode:int</code></p>
  
  <p><a id="MagicEffectFromCode" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectFromCode">MagicEffectFromCode</a> - given an effect code, returns the effect setting matching that code.<br />
  <code class="s">(magicEffect:ref) MagicEffectFromCode effectCode:int</code></p>
  
  <p><a id="MagicEffectFromChars" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectFromChars">MagicEffectFromChars</a> - given a string representing a four-letter effect code (e.g. "REHE"), returns the effect setting matching that code<br />
  <code class="s">(magicEffect:ref) MagicEffectFromChars effectChars:String</code></p>
  
  <p><a id="MagicEffectCodeFromChars" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectCodeFromChars">MagicEffectCodeFromChars</a> - given a string representing a four-letter effect code (e.g. "REHE"), returns the effect code for the associated effect setting.<br />
  <code class="s">(effectCode:int) MagicEffectCodeFromChars effectChars:String</code><br />
  <code class="s">(effectCode:int) MECodeFromChars effectChars:String</code></p>
  
  <p><a id="GetMagicEffectBaseCost" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectBaseCost">GetMagicEffectBaseCost(C)</a> - returns the base cost of the magic effect<br />
  <code class="s">(baseCost:float) GetMagicEffectBaseCost magicEffect:ref</code><br />
  <code class="s">(baseCost:float) GetMEBaseCost magicEffect:ref</code><br />
  <code class="s">(baseCost:float) GetMagicEffectBaseCostC magicEffectCode:int</code><br />
  <code class="s">(baseCost:float) GetMEBaseCostC magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectSchool" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectSchool">GetMagicEffectSchool(C)</a> - returns the controlling school of the magic effect<br />
  <code class="s">(<a href="#Magic_Schools">magicSchool</a>:int) GetMagicEffectSchool magicEffect:ref</code><br />
  <code class="s">(<a href="#Magic_Schools">magicSchool</a>:int) GetMESchool magicEffect:ref</code><br />
  <code class="s">(<a href="#Magic_Schools">magicSchool</a>:int) GetMagicEffectSchoolC magicEffectCode:int</code><br />
  <code class="s">(<a href="#Magic_Schools">magicSchool</a>:int) GetMESchoolC magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectProjectileSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectProjectileSpeed">GetMagicEffectProjectileSpeed(C)</a> - returns the projectile speed of the magic effect<br />
  <code class="s">(projectileSpeed:float) GetMagicEffectProjectileSpeed magicEffect:ref</code><br />
  <code class="s">(projectileSpeed:float) GetMEProjSpeed magicEffect:ref</code><br />
  <code class="s">(projectileSpeed:float) GetMagicEffectProjectileSpeedC magicEffectCode:int</code><br />
  <code class="s">(projectileSpeed:float) GetMEProjSpeedC magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectEnchantFactor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectEnchantFactor">GetMagicEffectEnchantFactor(C)</a> - returns the constant effect enchantment factor of the magic effect<br />
  <code class="s">(enchantFactor:float) GetMagicEffectEnchantFactor magicEffect:ref</code><br />
  <code class="s">(enchantFactor:float) GetMEEnchant magicEffect:ref</code><br />
  <code class="s">(enchantFactor:float) GetMagicEffectEnchantFactorC magicEffectCode:int</code><br />
  <code class="s">(enchantFactor:float) GetMEEnchantC magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectBarterFactor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectBarterFactor">GetMagicEffectBarterFactor(C)</a> - returns the constant effect barter factor of the magic effect<br />
  <code class="s">(enchantFactor:float) GetMagicEffectBarterFactor magicEffect:ref</code><br />
  <code class="s">(enchantFactor:float) GetMEEBarter magicEffect:ref</code><br />
  <code class="s">(enchantFactor:float) GetMagicEffectBarterFactorC magicEffectCode:int</code><br />
  <code class="s">(enchantFactor:float) GetMEBarterC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectHostile" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectHostile">IsMagicEffectHostile(C)</a> - returns whether the magic effect is hostile<br />
  <code class="s">(isHostile:bool) IsMagicEffectHostile magicEffect:ref</code><br />
  <code class="s">(isHostile:bool) IsMEHostile magicEffect:ref</code><br />
  <code class="s">(isHostile:bool) IsMagicEffectHostileC magicEffectCode:int</code><br />
  <code class="s">(isHostile:bool) IsMEHostileC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectForSpellmaking" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectForSpellmaking">IsMagicEffectForSpellmaking(C)</a> - returns whether the magic effect can be used for spell making<br />
  <code class="s">(isForSpellMaking:bool) IsMagicEffectForSpellmaking magicEffect:ref</code><br />
  <code class="s">(isForSpellMaking:bool) IsMEForSpellmaking magicEffect:ref</code><br />
  <code class="s">(isForSpellMaking:bool) IsMagicEffectForSpellmakingC magicEffectCode:int</code><br />
  <code class="s">(isForSpellMaking:bool) IsMEForSpellmakingC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectForEnchanting" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectForEnchanting">IsMagicEffectForEnchanting(C)</a> - returns whether the magic effect can be used when enchanting<br />
  <code class="s">(isForEnchanting:bool) IsMagicEffectForEnchanting magicEffect:ref</code><br />
  <code class="s">(isForEnchanting:bool) IsMEForEnchanting magicEffect:ref</code><br />
  <code class="s">(isForEnchanting:bool) IsMagicEffectForEnchantingC magicEffectCode:int</code><br />
  <code class="s">(isForEnchanting:bool) IsMEForEnchantingC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectDetrimental" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectDetrimental">IsMagicEffectDetrimental(C)</a> - returns whether the magic effect harms the receipient<br />
  <code class="s">(isDetrimental:bool) IsMagicEffectDetrimental magicEffect:ref</code><br />
  <code class="s">(isDetrimental:bool) IsMEDetrimental magicEffect:ref</code><br />
  <code class="s">(isDetrimental:bool) IsMagicEffectDetrimentalC magicEffectCode:int</code><br />
  <code class="s">(isDetrimental:bool) IsMEDetrimentalC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectCanRecover" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectCanRecover">IsMagicEffectCanRecover(C)</a> - returns whether the target can recover from the effect<br />
  <code class="s">(isCanRecover:bool) IsMagicEffectCanRecover magicEffect:ref</code><br />
  <code class="s">(isCanRecover:bool) IsMECanRecover magicEffect:ref</code><br />
  <code class="s">(isCanRecover:bool) IsMagicEffectCanRecoverC magicEffectCode:int</code><br />
  <code class="s">(isCanRecover:bool) IsMECanRecoverC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectMagnitudePercent" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectMagnitudePercent">IsMagicEffectMagnitudePercent(C)</a> - returns whether the magic effect's magnitude is a percentage<br />
  <code class="s">(isMagPercent:bool) IsMagicEffectMagnitudePercent magicEffect:ref</code><br />
  <code class="s">(isMagPercent:bool) IsMEMagnitudePercent magicEffect:ref</code><br />
  <code class="s">(isMagPercent:bool) IsMagicEffectMagnitudePercentC magicEffectCode:int</code><br />
  <code class="s">(isMagPercent:bool) IsMEMagnitudePercentC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectFXPersists" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectFXPersists">MagicEffectFXPersists(C)</a> - returns whether the magic effect's graphics effects persist<br />
  <code class="s">(FXPersists:bool) MagicEffectFXPersists magicEffect:ref</code><br />
  <code class="s">(FXPersists:bool) MEFXPersists magicEffect:ref</code><br />
  <code class="s">(FXPersists:bool) MagicEffectFXPersistsC magicEffectCode:int</code><br />
  <code class="s">(FXPersists:bool) MEFXPersistsC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectOnSelfAllowed" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectOnSelfAllowed">IsMagicEffectOnSelfAllowed(C)</a> - returns whether the magic effect can be cast on self<br />
  <code class="s">(onSelfAllowed:bool) IsMagicEffectOnSelfAllowed magicEffect:ref</code><br />
  <code class="s">(onSelfAllowed:bool) IsMEOnSelfAllowed magicEffect:ref</code><br />
  <code class="s">(onSelfAllowed:bool) IsMagicEffectOnSelfAllowedC magicEffectCode:int</code><br />
  <code class="s">(onSelfAllowed:bool) IsMEOnSelfAllowedC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectOnTouchAllowed" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectOnTouchAllowed">IsMagicEffectOnTouchAllowed(C)</a> - returns whether the magic effect can be cast on touch<br />
  <code class="s">(onTouchAllowed:bool) IsMagicEffectOnTouchAllowed magicEffect:ref</code><br />
  <code class="s">(onTouchAllowed:bool) IsMEOnTouchAllowed magicEffect:ref</code><br />
  <code class="s">(onTouchAllowed:bool) IsMagicEffectOnTouchAllowedC magicEffectCode:int</code><br />
  <code class="s">(onTouchAllowed:bool) IsMEOnTouchAllowedC magicEffectCode:int</code></p>
  
  <p><a id="IsMagicEffectOnTargetAllowed" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMagicEffectOnTargetAllowed">IsMagicEffectOnTargetAllowed(C)</a> - returns whether the magic effect can be cast on target<br />
  <code class="s">(onTargetAllowed:bool) IsMagicEffectOnTargetAllowed magicEffect:ref</code><br />
  <code class="s">(onTargetAllowed:bool) IsMEOnTargetAllowed magicEffect:ref</code><br />
  <code class="s">(onTargetAllowed:bool) IsMagicEffectOnTargetAllowedC magicEffectCode:int</code><br />
  <code class="s">(onTargetAllowed:bool) IsMEOnTargetAllowedC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectHasNoDuration" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectHasNoDuration">MagicEffectHasNoDuration(C)</a> - returns whether the magic effect doesn't use the duration value<br />
  <code class="s">(hasNoDuration:bool) MagicEffectHasNoDuration magicEffect:ref</code><br />
  <code class="s">(hasNoDuration:bool) MEHasNoDuration magicEffect:ref</code><br />
  <code class="s">(hasNoDuration:bool) MagicEffectHasNoDurationC magicEffectCode:int</code><br />
  <code class="s">(hasNoDuration:bool) MEHasNoDurationC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectHasNoMagnitude" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectHasNoMagnitude">MagicEffectHasNoMagnitude(C)</a> - returns whether the magic effect doesn't use the magnitude value<br />
  <code class="s">(hasNoMag:bool) MagicEffectHasNoMagnitude magicEffect:ref</code><br />
  <code class="s">(hasNoMag:bool) MEHasNoMagnitude magicEffect:ref</code><br />
  <code class="s">(hasNoMag:bool) MagicEffectHasNoMagnitudeC magicEffectCode:int</code><br />
  <code class="s">(hasNoMag:bool) MEHasNoMagnitudeC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectHasNoArea" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectHasNoArea">MagicEffectHasNoArea(C)</a> - returns whether the magic effect doesn't use the area value<br />
  <code class="s">(hasNoArea:bool) MagicEffectHasNoArea magicEffect:ref</code><br />
  <code class="s">(hasNoArea:bool) MEHasNoArea magicEffect:ref</code><br />
  <code class="s">(hasNoArea:bool) MagicEffectHasNoAreaC magicEffectCode:int</code><br />
  <code class="s">(hasNoArea:bool) MEHasNoAreaC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectHasNoIngredient" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectHasNoIngredient">MagicEffectHasNoIngredient(C)</a> - returns whether the magic effect has no ingredient<br />
  <code class="s">(hasNoIngredient:bool) MagicEffectHasNoIngredient magicEffect:ref</code><br />
  <code class="s">(hasNoIngredient:bool) MEHasNoIngredient magicEffect:ref</code><br />
  <code class="s">(hasNoIngredient:bool) MagicEffectHasNoIngredientC magicEffectCode:int</code><br />
  <code class="s">(hasNoIngredient:bool) MEHasNoIngredientC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectHasNoHitEffect" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectHasNoHitEffect">MagicEffectHasNoHitEffect(C)</a> - returns whether the magic effect has a graphic effect when it hits<br />
  <code class="s">(hasNoHitEffect:bool) MagicEffectHasNoHitEffect magicEffect:ref</code><br />
  <code class="s">(hasNoHitEffect:bool) MEHasNoHitEffect magicEffect:ref</code><br />
  <code class="s">(hasNoHitEffect:bool) MagicEffectHasNoHitEffectC magicEffectCode:int</code><br />
  <code class="s">(hasNoHitEffect:bool) MEHasNoHitEffectC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectUsesWeapon" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectUsesWeapon">MagicEffectUsesWeapon(C)</a> - returns whether the magic effect summons a weapon<br />
  <code class="s">(usesWeapon:bool) MagicEffectUsesWeapon magicEffect:ref</code><br />
  <code class="s">(usesWeapon:bool) MEUsesWeapon magicEffect:ref</code><br />
  <code class="s">(usesWeapon:bool) MagicEffectUsesWeaponC magicEffectCode:int</code><br />
  <code class="s">(usesWeapon:bool) MEUsesWeaponC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectUsesArmor" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectUsesArmor">MagicEffectUsesArmor(C)</a> - returns whether the magic effect summons armor<br />
  <code class="s">(usesArmor:bool) MagicEffectUsesArmor magicEffect:ref</code><br />
  <code class="s">(usesArmor:bool) MEUsesArmor magicEffect:ref</code><br />
  <code class="s">(usesArmor:bool) MagicEffectUsesArmorC magicEffectCode:int</code><br />
  <code class="s">(usesArmor:bool) MEUsesArmorC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectUsesCreature" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectUsesCreature">MagicEffectUsesCreature(C)</a> - returns whether the magic effect summons a creature<br />
  <code class="s">(usesCreature:bool) MagicEffectUsesCreature magicEffect:ref</code><br />
  <code class="s">(usesCreature:bool) MEUsesCreature magicEffect:ref</code><br />
  <code class="s">(usesCreature:bool) MagicEffectUsesCreatureC magicEffectCode:int</code><br />
  <code class="s">(usesCreature:bool) MEUsesCreatureC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectUsesSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectUsesSkill">MagicEffectUsesSkill(C)</a> - returns whether the magic effect affects a skill<br />
  <code class="s">(usesSkill:bool) MagicEffectUsesSkill magicEffect:ref</code><br />
  <code class="s">(usesSkill:bool) MEUsesSkill magicEffect:ref</code><br />
  <code class="s">(usesSkill:bool) MagicEffectUsesSkillC magicEffectCode:int</code><br />
  <code class="s">(usesSkill:bool) MEUsesSkillC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectUsesAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectUsesAttribute">MagicEffectUsesAttribute(C)</a> - returns whether the magic effect affects an attribute<br />
  <code class="s">(usesAttribute:bool) MagicEffectUsesAttribute magicEffect:ref</code><br />
  <code class="s">(usesAttribute:bool) MEUsesAttribute magicEffect:ref</code><br />
  <code class="s">(usesAttribute:bool) MagicEffectUsesAttributeC magicEffectCode:int</code><br />
  <code class="s">(usesAttribute:bool) MEUsesAttributeC magicEffectCode:int</code></p>
  
  <p><a id="MagicEffectUsesOtherActorValue" class="f" href="http://cs.elderscrolls.com/index.php?title=MagicEffectUsesOtherActorValue">MagicEffectUsesOtherActorValue(C)</a> - returns whether the magic effect affects an actor value that is not a skill or an attribute<br />
  <code class="s">(usesOtherActorVal:bool) MagicEffectUsesOtherActorValue magicEffect:ref</code><br />
  <code class="s">(usesOtherActorVal:bool) MEUsesOtherActorValue magicEffect:ref</code><br />
  <code class="s">(usesOtherActorVal:bool) MagicEffectUsesOtherActorValueC magicEffectCode:int</code><br />
  <code class="s">(usesOtherActorVal:bool) MEUsesOtherActorValueC magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectOtherActorValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectOtherActorValue">GetMagicEffectOtherActorValue(C)</a> - returns the actor value (skill, attribute or other) affected by the magic effect<br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValue</a>:int) GetMagicEffectOtherActorValue magicEffect:ref</code><br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValue</a>:int) GetMEOtherActorValue magicEffect:ref</code><br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValue</a>:int) GetMagicEffectOtherActorValueC magicEffectCode:int</code><br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValue</a>:int) GetMEOtherActorValueC magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectUsedObject" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectUsedObject">GetMagicEffectUsedObject(C)</a> - returns the weapon, armor or creature summoned by the magic effect<br />
  <code class="s">(objectID:ref) GetMagicEffectUsedObject magicEffect:ref</code><br />
  <code class="s">(objectID:ref) GetMEUsedObject magicEffect:ref</code><br />
  <code class="s">(objectID:ref) GetMagicEffectUsedObjectC magicEffectCode:int</code><br />
  <code class="s">(objectID:ref) GetMEUsedObjectC magicEffectCode:int</code></p>
  
  <p><a id="RemoveNthMagicEffectCounter" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveNthMagicEffectCounter">RemoveNthMagicEffectCounter(C)</a> - removes the <span class="op">n</span>th counter-effect for the magic effect.<br />
  <code class="s">(nothing) RemoveNthMagicEffectCounter whichCounter:int magicEffect:ref</code><br />
  <code class="s">(nothing) RemoveNthMECounter whichCounter:int magicEffect:ref</code><br />
  <code class="s">(nothing) RemoveNthMagicEffectCounter whichCounter:int magicEffectCode:int</code><br />
  <code class="s">(nothing) RemoveNthMECounterC whichCounter:int magicEffectCode:int</code></p>
  
  <p><a id="AddMagicEffectCounter" class="f" href="http://cs.elderscrolls.com/index.php?title=AddMagicEffectCounter">AddMagicEffectCounter(C)</a> - adds a counter-effect to the magic effect. The 'C' version accepts magic effect codes for both arguments.<br />
  <code class="s">(nothing) AddMagicEffectCounter counterEffect:ref magicEffect:ref</code><br />
  <code class="s">(nothing) AddMECounter counterEffect:ref magicEffect:ref</code><br />
  <code class="s">(nothing) AddMagicEffectCounterC counterEffect:ref magicEffectCode:int</code><br />
  <code class="s">(nothing) AddMECounterC counterEffectCode:int magicEffectCode:int</code></p>
  
  <p><a id="GetMagicEffectCounters" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicEffectCounters">GetMagicEffectCounters(C)</a> - returns an Array containing the effect codes of all counter-effects for the specified magic effect.<br />
  <code class="s">(counters:Array) GetMagicEffectCounters magicEffect:ref</code><br />
  <code class="s">(counters:Array) GetMECounters magicEffect:ref</code><br />
  <code class="s">(counters:Array) GetMagicEffectCountersC magicEffectCode:int</code><br />
  <code class="s">(counters:Array) GetMECountersC magicEffectCode:int</code></p>
  
  <p><a id="SetMagicEffectCounters" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMagicEffectCounters">SetMagicEffectCounters(C)</a> - accepts an Array of effect codes and assigns those effects as counter-effects for the specified magic effect, overriding any existing counter-effects. The user must guarantee that the passed array contains valid effect codes and nothing else. The function returns 1 if the new counter-effects were successfully applied, 0 otherwise.<br />
  <code class="s">(effectsApplied:bool) SetMagicEffectCounters counterEffects:Array magicEffect:ref</code><br />
  <code class="s">(effectsApplied:bool) SetMECounters counterEffects:Array magicEffect:ref</code><br />
  <code class="s">(effectsApplied:bool) SetMagicEffectCountersC counterEffects:Array magicEffectCode:int</code><br />
  <code class="s">(effectsApplied:bool) SetMECountersC counterEffects:Array magicEffectCode:int</code></p>
  
  <h3><a id="Magic_Effect_Functions">Additional Magic Effect Functions</a></h3>
  
  <p>These functions can be used to retrieve or modify the properties of magic effect settings as defined in the Magic Effects window of the editor. Because they all follow similar syntax conventions and are largely self-explanatory, most are not documented individually. Versions of the commands ending in 'C' take a numeric magic effect code rather than a Magic Effect form as the argument to indicate the effect. All of these functions have abbreviated alternate names in which "MagicEffect" is replaced by "ME", i.e. GetMagicEffectName can also be written as GetMEName.</p>
  
  <h4>String functions:</h4>
  
  <p>Get versions of these commands return a string; Set versions take a string as an argument.</p>
  
  <h5>Syntax:</h5>
  
  <p><code class="s">(string) GetMagicEffectXXX effect:ref_or_code</code><br />
  <code class="s">(nothing) SetMagicEffectXXX newValue:string effect:ref_or_code</code></p><ul>
    <li>GetMagicEffectName</li>
    <li>GetMagicEffectNameC</li>
    <li>GetMagicEffectIcon</li>
    <li>GetMagicEffectIconC</li>
    <li>GetMagicEffectModel</li>
    <li>GetMagicEffectModelC</li>
    <li>SetMagicEffectName</li>
    <li>SetMagicEffectNameC</li>
    <li>SetMagicEffectIcon</li>
    <li>SetMagicEffectIconC</li>
    <li>SetMagicEffectModel</li>
    <li>SetMagicEffectModelC</li>
  </ul>
  
  <h4>Form functions:</h4>
  
  <p>Get versions of these commands return a form (i.e. an effect shader, sound, etc); Set versions take a form as an argument.</p>
  
  <h5>Syntax:</h5>
  
  <p><code class="s">(object:ref) GetMagicEffectXXX effect:ref_or_code</code><br />
  <code class="s">(nothing) SetMagicEffectXXX newValue:ref effect:ref_or_code</code></p><ul>
    <li>GetMagicEffectHitShader</li>
    <li>GetMagicEffectHitShaderC</li>
    <li>GetMagicEffectEnchantShader</li>
    <li>GetMagicEffectEnchantShaderC</li>
    <li>GetMagicEffectLight</li>
    <li>GetMagicEffectLightC</li>
    <li>GetMagicEffectCastingSound</li>
    <li>GetMagicEffectCastingSoundC</li>
    <li>GetMagicEffectBoltSound</li>
    <li>GetMagicEffectBoltSoundC</li>
    <li>GetMagicEffectHitSound</li>
    <li>GetMagicEffectHitSoundC</li>
    <li>GetMagicEffectAreaSound</li>
    <li>GetMagicEffectAreaSoundC</li>
    <li>SetMagicEffectCastingSound</li>
    <li>SetMagicEffectCastingSoundC</li>
    <li>SetMagicEffectBoltSound</li>
    <li>SetMagicEffectBoltSoundC</li>
    <li>SetMagicEffectHitSound</li>
    <li>SetMagicEffectHitSoundC</li>
    <li>SetMagicEffectAreaSound</li>
    <li>SetMagicEffectAreaSoundC</li>
    <li>SetMagicEffectLight</li>
    <li>SetMagicEffectLightC</li>
    <li>SetMagicEffectUsedObject</li>
    <li>SetMagicEffectUsedObjectC</li>
    <li>SetMagicEffectHitShader</li>
    <li>SetMagicEffectHitShaderC</li>
    <li>SetMagicEffectEnchantShader</li>
    <li>SetMagicEffectEnchantShaderC</li>
  </ul>
  
  <h4>Numeric Functions:</h4>
  
  <p>These get or set numeric/boolean properties of Magic Effects.</p>
  
  <h5>Syntax:</h5>
  
  <p><code class="s">(value:numeric) GetMagicEffectXXX effect:ref_or_code</code><br />
  <code class="s">(nothing) SetMagicEffectXXX newValue:numeric effect:ref_or_code</code></p><ul>
    <li>GetMagicEffectNumCounters - returns the number of counter-effects for the magic effect</li>
    <li>GetMagicEffectNumCountersC</li>
    <li>GetMagicEffectResistValue - returns an actor value</li>
    <li>GetMagicEffectResistValueC</li>
    <li>GetNthMagicEffectCounter</li>
    <li>GetNthMagicEffectCounterC</li>
    <li>SetMagicEffectIsHostile</li>
    <li>SetMagicEffectIsHostileC</li>
    <li>SetMagicEffectCanRecover</li>
    <li>SetMagicEffectCanRecoverC</li>
    <li>SetMagicEffectIsDetrimental</li>
    <li>SetMagicEffectIsDetrimentalC</li>
    <li>SetMagicEffectMagnitudePercent</li>
    <li>SetMagicEffectMagnitudePercentC</li>
    <li>SetMagicEffectOnSelfAllowed</li>
    <li>SetMagicEffectOnSelfAllowedC</li>
    <li>SetMagicEffectOnTouchAllowed</li>
    <li>SetMagicEffectOnTouchAllowedC</li>
    <li>SetMagicEffectOnTargetAllowed</li>
    <li>SetMagicEffectOnTargetAllowedC</li>
    <li>SetMagicEffectNoDuration</li>
    <li>SetMagicEffectNoDurationC</li>
    <li>SetMagicEffectNoMagnitude</li>
    <li>SetMagicEffectNoMagnitudeC</li>
    <li>SetMagicEffectNoArea</li>
    <li>SetMagicEffectNoAreaC</li>
    <li>SetMagicEffectFXPersists</li>
    <li>SetMagicEffectFXPersistsC</li>
    <li>SetMagicEffectForSpellmaking</li>
    <li>SetMagicEffectForSpellmakingC</li>
    <li>SetMagicEffectForEnchanting</li>
    <li>SetMagicEffectForEnchantingC</li>
    <li>SetMagicEffectNoIngredient</li>
    <li>SetMagicEffectNoIngredientC</li>
    <li>SetMagicEffectUsesWeapon</li>
    <li>SetMagicEffectUsesWeaponC</li>
    <li>SetMagicEffectUsesArmor</li>
    <li>SetMagicEffectUsesArmorC</li>
    <li>SetMagicEffectUsesCreature</li>
    <li>SetMagicEffectUsesCreatureC</li>
    <li>SetMagicEffectUsesSkill</li>
    <li>SetMagicEffectUsesSkillC</li>
    <li>SetMagicEffectUsesAttribute</li>
    <li>SetMagicEffectUsesAttributeC</li>
    <li>SetMagicEffectUseActorValue</li>
    <li>SetMagicEffectUseActorValueC</li>
    <li>SetMagicEffectNoHitEffect</li>
    <li>SetMagicEffectNoHitEffectC</li>
    <li>SetMagicEffectSchool</li>
    <li>SetMagicEffectSchoolC</li>
    <li>SetMagicEffectBaseCost</li>
    <li>SetMagicEffectBaseCostC</li>
    <li>SetMagicEffectResistValue</li>
    <li>SetMagicEffectResistValueC</li>
    <li>SetMagicEffectEnchantFactor</li>
    <li>SetMagicEffectEnchantFactorC</li>
    <li>SetMagicEffectBarterFactor</li>
    <li>SetMagicEffectBarterFactorC</li>
    <li>SetMagicEffectProjectileSpeed</li>
    <li>SetMagicEffectProjectileSpeedC</li>
    <li>SetMagicEffectOtherActorValue</li>
    <li>SetMagicEffectOtherActorValueC</li>
  </ul>
  
  <h3><a id="Map_Marker">Map Marker</a></h3>
  
  <p>A map marker is a reference to a static object of the type "mapmarker" defined as a default object in the editor. Map marker references have additional information such as a id, type of location, etc.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Named">Named</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="IsMapMarkerVisible" class="f" href="http://cs.elderscrolls.com/index.php?title=IsMapMarkerVisible">IsMapMarkerVisible</a> - returns 1 if the map marker can be seen on the player's map<br />
  <code class="s">(visible:bool) reference.IsMapMarkerVisible</code></p>
  
  <p><a id="SetMapMarkerVisible" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMapMarkerVisible">SetMapMarkerVisible</a> - sets whether the map marker can be seen on the player's map<br />
  <code class="s">(nothing) reference.SetMapMarkerVisible visible:bool</code></p>
  
  <p><a id="CanTravelToMapMarker" class="f" href="http://cs.elderscrolls.com/index.php?title=CanTravelToMapMarker">CanTravelToMapMarker</a> - returns 1 if the player can travel to the map marker by clicking on it in the map menu<br />
  <code class="s">(canTravel:bool) reference.CanTravelToMapMarker</code></p>
  
  <p><a id="SetCanTravelToMapMarker" class="f" href="http://cs.elderscrolls.com/index.php?title=SetCanTravelToMapMarker">SetCanTravelToMapMarker</a> - sets whether the player can travel to the map marker by clicking it in the map menu<br />
  <code class="s">(nothing) reference.SetCanTravelToMapMarker canTravel:bool</code></p>
  
  <p><a id="GetMapMarkerType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMapMarkerType">GetMapMarkerType</a> - returns the type of icon used to represent the location on the map.<br />
  <b>Note: </b>Users of the Map Marker Overhaul mod will have more types available.<br />
  <code class="s">(<a href="#Map_Marker_Types">markerType</a>:int) reference.GetMapMarkerType</code></p>
  
  <p><a id="SetMapMarkerType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMapMarkerType">SetMapMarkerType</a> - sets the type of icon used to represent the location on the map.<br />
  <b>Note: </b>Users of the Map Marker Overhaul mod will have more types available.<br />
  <code class="s">(nothing) reference.SetMapMarkerType <a href="#Map_Marker_Types">markerType</a>:int</code></p>
  
  <p><a id="GetMapMarkers" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMapMarkers">GetMapMarkers</a> - returns an Array containing all map marker references. The filter argument can be used to filter out markers based on their visibility and accessibility: pass 0 to include only visible markers which can be fast-traveled to, 1 to include all visible markers, and 2 to include all markers, including those which are not visible. The default filter value is 1. Pass a <a href="#Map_Marker_Types">markerType</a> parameter to include only markers of the specified type; omit it or pass zero to include all types.<br />
  <code class="s">(markers:Array) GetMapMarkers <span class="op">filter:int</span> <span class="op">markerType:int</span></code></p>
  
  <h3><a id="NPC">NPC</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Actor">Actor</a>, <a href="#Class">Class</a>, <a href="#Container">Container</a>, <a href="#Magic_Target">Magic Target</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Equipped Items</strong> - NPC can equip and use items<br />
  <strong>Merchant Container</strong> - NPCS may have a merchant container which holds items they sell and buy</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetEquippedObject" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquippedObject">GetEquippedObject</a> - returns the base object of the item equipped in the specified slot<br />
  <code class="s">(objectID:ref) reference.GetEquippedObject <a href="#Equipment_Slot_IDs">slot</a>:int</code></p>
  
  <p><a id="GetEquipmentSlotMask" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquipmentSlotMask">GetEquipmentSlotMask</a> - Returns the base object of the first equipped object to match the specified equipment slot mask. If no 'value' parameter is specified, it is assumed to be the same value as the 'mask' parameter. For example, an object taking up the UpperBody, LowerBody, and Foot slots would have a mask of 4 + 8 + 32 = 44. See the "<a href="#Slot_Mask">equipment slot bit assignments</a>" list for more info.<br />
  <code class="s">(objectID:ref) reference.GetEquipmentSlotMask <a href="#Slot_Mask">slotMask</a>:int <span class="op">value:int</span></code></p>
  
  <p>See also:</p><ul>
    <li><a href="#GetEquippedCurrentCharge">GetEquippedCurrentCharge</a></li>
    <li><a href="#ModEquippedCurrentCharge">ModEquippedCurrentCharge</a></li>
    <li><a href="#SetEquippedCurrentCharge">SetEquippedCurrentCharge</a></li>
    <li><a href="#GetEquippedCurrentHealth">GetEquippedCurrentHealth</a></li>
    <li><a href="#ModEquippedCurrentHealth">ModEquippedCurrentHealth</a></li>
    <li><a href="#SetEquippedCurrentHealth">SetEquippedCurrentHealth</a></li>
    <li><a href="#GetEquippedWeaponPoison">GetEquippedWeaponPoison</a></li>
    <li><a href="#SetEquippedWeaponPoison">SetEquippedWeaponPoison</a></li>
    <li><a href="#RemoveEquippedWeaponPoison">RemoveEquippedWeaponPoison</a></li>
  </ul>
  
  <p><a id="GetMerchantContainer" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMerchantContainer">GetMerchantContainer</a> - returns the reference to the NPC's merchant container<br />
  <code class="s">(containerReference:ref) npc.GetMerchantContainer</code></p>
  
  <p><a id="SetMerchantContainer" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMerchantContainer">SetMerchantContainer</a> - replaces the specified mechant's container and returns the old container. <br />
  <b>Note: </b>If the specified NPC does not have a merchant container, or if the passed reference is not a container the function does nothing and will return 0.<br />
  <code class="s">(oldContainerRef:ref) npc.SetMerchantContainer nuContainer:ref</code></p>
  
  <p><a id="GetHorse" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHorse">GetHorse</a> - returns the horse currently ridden by the calling NPC.<br />
  <b>Note: </b>This function returns a reference while the NPC is in the process of walking toward a horse with the intention of mounting it.<br />
  <code class="s">(horse:ref) <span class="op">reference.</span>GetHorse</code></p>
  
  <p><a id="GetTravelHorse" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTravelHorse">GetTravelHorse</a> - returns a reference to the travel horse used by the calling reference.<br />
  <code class="s">(horse:ref) reference.GetTravelHorse</code></p>
  
  <p><a id="SetTravelHorse" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTravelHorse">SetTravelHorse</a> - Sets the travel horse used by the calling reference to the horse reference specified. Changes are not saved in the savegame.<br />
  <code class="s">(nothing) reference.SetTravelHorse horse:ref</code></p>
  
  <p><a id="IsFemale" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFemale">IsFemale</a> - returns 1 if the NPC is female.<br />
  <code class="s">(isFemale:bool) <span class="op">reference.</span>IsFemale <span class="op">npc:ref</span></code></p>
  
  <p><a id="CopyHair" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyHair">CopyHair</a> - Copies the hair style, length, and color from one NPC to another. Changes alter the base actor and are not saved in the savegame unless called on the player.<br/>
  <b>Note: </b>Changes will not be visible until the actor is reloaded or <a href="#Update3D"><code>Update3D</code></a> is used on it.<br />
  <code class="s">(nothing) <span class="op">reference.</span>CopyHair copyFrom:ref <span class="op">copyTo:ref</span></code></p>
  
  <p><a id="CopyEyes" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyEyes">CopyEyes</a> - Copies the eyes used by one npc onto another, with the same caveats as CopyHair.<br />
  <code class="s">(nothing) <span class="op">reference.</span>CopyEyes copyFrom:ref <span class="op">copyTo:ref</span></code></p>
  
  <p><a id="SetHair" class="f" href="http://cs.elderscrolls.com/index.php?title=SetHair">SetHair</a> - Sets the hair on the NPC to a hairstyle predefined in the CS, with the same caveats as CopyHair.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetHair hairStyle:ref <span class="op">npc:ref</span></code></p>
  
  <p><a id="SetEyes" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEyes">SetEyes</a> - Sets the eyes on the NPC to a set of eyes predefined in the CS, with the same caveats as CopyHair.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetEyes eyes:ref <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetRace" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRace">GetRace</a> - returns the race of an NPC.<br />
  <code class="s">(race:ref) <span class="op">reference.</span>GetRace <span class="op">npc:ref</span></code></p>
  
  <p><a id="CopyRace" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyRace">CopyRace</a> - modifies the calling NPC reference to be the same race as the passed base NPC. The calling NPC gets the same skeleton, textures, and other race attributes of the specified base NPC. Its facial parameters, hair, and eyes do not change. This command affects the base object of the calling NPC, and should only be used on references which are unique (no other references share the same base form). Note that if the NPC's new race uses a different voice than its old voice, it may not audibly speak any race-specific dialog which has not been recorded for the new voice.<br />
  <code class="s">(nothing) reference.CopyRace sourceNPC:ref</code></p>
  
  <p><a id="GetHair" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHair">GetHair</a> - returns the NPC's hairstyle.<br />
  <code class="s">(hair:ref) <span class="op">reference.</span>GetHair <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetEyes" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEyes">GetEyes</a> - returns the NPC's eyes.<br />
  <code class="s">(eyes:ref) <span class="op">reference.</span>GetEyes <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetHairColor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHairColor">GetHairColor</a> - returns the RGB value of the NPC's hair color.<br />
  <code class="s">(color:int) <span class="op">reference.</span>GetHairColor <a href="#RGB_Value">rgb</a>:int <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetTrainerLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTrainerLevel">GetTrainerLevel</a> - returns the level at which the NPC offers training.<br />
  <code class="s">(level:int) <span class="op">reference.</span>GetTrainerLevel <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetTrainerSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTrainerSkill">GetTrainerSkill</a> - returns the skill in which the NPC offers training as an <a href="#Actor_Value_Codes">actor value code.</a><br />
  <code class="s">(<a href="#Actor_Value_Codes">skill</a>:int) <span class="op">reference.</span>GetTrainerSkill <span class="op">npc:ref</span></code></p>
  
  <p><a id="SetTrainerLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTrainerLevel">SetTrainerLevel</a> - sets the level at which an NPC offers training.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetTrainerLevel newLevel:int <span class="op">npc:ref</span></code></p>
  
  <p><a id="SetTrainerSkill" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTrainerSkill">SetTrainerSkill</a> - sets the skill in which an NPC offers training.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetTrainerSkill newSkill:actorValue <span class="op">npc:ref</span></code></p>
  
  <p><a id="GetServicesMask" class="f" href="http://cs.elderscrolls.com/index.php?title=GetServicesMask">GetServicesMask</a> - returns an integer code representing the services offered by an NPC. The code is obtained by ORing (adding) <a href="#Service_Flags">service flags</a><br />
  <code class="s">(servicesMask:int) <span class="op">reference.</span>GetServicesMask <span class="op">npc:ref</span></code></p>
  
  <p><a id="OffersServicesC" class="f" href="http://cs.elderscrolls.com/index.php?title=OffersServicesC">OffersServicesC</a> - returns 1 if the NPC offers all of the services specified by the services mask<br />
  <code class="s">(offersServices:bool) <span class="op">reference.</span>OffersServicesC <a href="#Service_Flags">serviceFlags</a>:int <span class="op">npc:ref</span></code></p>
  
  <p><a id="SetOffersServicesC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetOffersServicesC">SetOffersServicesC</a> - sets the services offered by the NPC to the specified services mask.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetOffersServicesC <a href="#Service_Flags">serviceFlags</a>:int <span class="op">npc:ref</span></code></p>
  
  <p><a id="OffersXXX">OffersXXX</a> - these functions return 1 if the NPC offers the specified service<br />
  <code class="s">(offersService:bool) <span class="op">reference.</span>OffersXXX <span class="op">npc:ref</span></code></p><ul>
    <li>OffersWeapons</li>
    <li>OffersArmor</li>
    <li>OffersClothing</li>
    <li>OffersBooks</li>
    <li>OffersLights</li>
    <li>OffersIngredients</li>
    <li>OffersApparatus</li>
    <li>OffersMiscItems</li>
    <li>OffersMagicItems</li>
    <li>OffersSpells</li>
    <li>OffersPotions</li>
    <li>OffersTraining</li>
    <li>OffersRecharging</li>
    <li>OffersRepair</li>
  </ul>
  
  <p><a id="SetOffersXXX">SetOffersXXX</a> - these functions toggle the specified service offered by the NPC.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetOffersXXX offersService:bool <span class="op">npc:ref</span></code></p><ul>
    <li>SetOffersWeapons</li>
    <li>SetOffersArmor</li>
    <li>SetOffersClothing</li>
    <li>SetOffersBooks</li>
    <li>SetOffersIngredients</li>
    <li>SetOffersSpells</li>
    <li>SetOffersLights</li>
    <li>SetOffersMiscItems</li>
    <li>SetOffersMagicItems</li>
    <li>SetOffersApparatus</li>
    <li>SetOffersPotions</li>
    <li>SetOffersTraining</li>
    <li>SetOffersRecharging</li>
    <li>SetOffersRepair</li>
  </ul>
  
  <h3><a id="Pathgrid">Pathgrid</a></h3>
  
  <p>A pathgrid is a set of nodes connected by edges which is used by actors to navigate the world. Path nodes are not references, so commands cannot be called on them directly. Instead, OBSE provides an integer NodeID type uniquely describing a node; this ID can be passed to pathgrid commands to retrieve or modify the properties of a pathgrid. Note that a NodeID is only valid for as long as the player remains in the same cell; for practical purposes they should be considered valid only for one frame. Path nodes can be disabled, in which case actors will ignore them while pathfinding.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetPathNodesInRadius" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPathNodesInRadius">GetPathNodesInRadius</a> - returns an Array of all path nodes located within the circular area described by the center point (x, y) and the radius. By default, disabled nodes are ignored; pass 1 for the optional fourth argument to include them.<br />
  <code class="s">(nodes:Array) GetPathNodesInRadius centerX:float centerY:float radius:float <span class="op">includeDisabledNodes:bool</span></code></p>
  
  <p><a id="GetPathNodesInRect" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPathNodesInRect">GetPathNodesInRect</a> - returns an Array of all path nodes located within the rectangular area described by the center point (x, y) and the extents along the x and y axes (i.e. half-width and half-height). An angle of rotation in radians can optionally be specified; if omitted the rectangle is assumed to be aligned with the world axes. By default, disabled nodes are ignored; pass 1 for the optional sixth argument to include them.<br />
  <code class="s">(nodes:Array) GetPathNodesInRect centerX:float centerY:float extentX:float extentY:float <span class="op">angle:float</span> <span class="op">includeDisabledNodes:bool</span></code></p>
  
  <p><a id="GetPathNodePos" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPathNodePos">GetPathNodePos</a> - returns the x, y, or z coordinate of the specified path node. <br />
  <code class="s">(pos:float) GetPathNodePos nodeID:int whichPos:axis</code></p>
  
  <p><a id="IsPathNodeDisabled" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPathNodeDisabled">IsPathNodeDisabled</a> - returns 1 if the path node is disabled.<br />
  <code class="s">(disabled:bool) IsPathNodeDisabled nodeID:int</code></p>
  
  <p><a id="SetPathNodeDisabled" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPathNodeDisabled">SetPathNodeDisabled</a> - enables or disables the specified path node. This node will no longer be used in future pathfinding attempts, but actors who have already built a path including this node may continue along it normally. If this is undesirable, calling EvaluatePackage on the actor will force it to build a new path.<br />
  <code class="s">(nothing) SetPathNodeDisabled nodeID:int disable:bool</code></p>
  
  <p><a id="GetPathNodeLinkedRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPathNodeLinkedRef">GetPathNodeLinkedRef</a> - returns the persistent reference linked to this node in the editor, if any.<br />
  <code class="s">(linked:ref) GetPathNodeLinkedRef nodeID:int</code></p>
  
  <p><a id="PathEdgeExists" class="f" href="http://cs.elderscrolls.com/index.php?title=PathEdgeExists">PathEdgeExists</a> - returns 1 if the two nodes are connected.<br />
  <code class="s">(exists:bool) PathEdgeExists nodeID:int nodeID:int</code></p>
  
  <h3><a id="Player">Player</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Actor">Actor</a>, <a href="#Class">Class</a>, <a href="#Container">Container</a>, <a href="#Magic_Target">Magic Target</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetCrosshairRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCrosshairRef">GetCrosshairRef</a> - returns a reference to whatever is currently under the player's crosshair. Generally returns zero when called during MenuMode. Note that this function will return non-activatable references as well; use <a href="#IsActivatable">IsActivatable</a> to determine if the reference can be activated normally.<br />
  <b>Note: </b>The object must be within activate distance of the player, determined by the game setting <code>iActivatePickLength</code>. If a Telekinesis spell is selected, it will also return a more distant reference. (TODO: Verify)<br />
  <b>Note: </b>Returns 0 for 1-5 frames (maybe even longer) after player presses Activate. (TODO: Verify)<br />
  <code class="s">(crosshairRef:ref) GetCrosshairRef</code></p>
  
  <p><a id="GetPlayersLastRiddenHorse" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayersLastRiddenHorse">GetPlayersLastRiddenHorse</a> - returns a reference to the horse most recently ridden by the player.<br />
  <code class="s">(horse:ref) GetPlayersLastRiddenHorse</code><br />
  <code class="s">(horse:ref) GetPCLastHorse</code></p>
  
  <p><a id="SetPlayersLastRiddenHorse" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPlayersLastRiddenHorse">SetPlayersLastRiddenHorse</a> - marks the specified horse as the horse most recently ridden by the player. This is the horse that will accompany the player when fast traveling while dismounted. The argument must be a Creature of type Horse. Additionally, in order for the new horse to fast travel with the player it must not be owned by anyone other than the player.<br />
  <code class="s">(successfullySet:bool) SetPlayersLastRiddenHorse horse:ref</code></p>
  
  <p><a id="ClearPlayersLastRiddenHorse" class="f" href="http://cs.elderscrolls.com/index.php?title=ClearPlayersLastRiddenHorse">ClearPlayersLastRiddenHorse</a> - clears the game's memory of the horse last ridden by the player. This prevents any horse from accompanying the player when fast traveling, provided the player is not mounted on a horse when he travels.<br />
  <code class="s">(nothing) ClearPlayersLastRiddenHorse</code></p>
  
  <p><a id="GetPlayersLastActivatedLoadDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayersLastActivatedLoadDoor">GetPlayersLastActivatedLoadDoor</a> - returns a reference to the load door most recently activated by the player.<br />
  <code class="s">(loadDoor:ref) GetPlayersLastActivatedLoadDoor</code><br />
  <code class="s">(loadDoor:ref) GetPCLastLoadDoor</code></p>
  
  <p><a id="GetGodMode" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGodMode">GetGodMode</a> - returns 1 if the player has toggled god mode on.<br />
  <code class="s">(godMode:bool) GetGodMode</code></p>
  
  <p><a id="SetPCAMurderer" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPCAMurderer">SetPCAMurderer</a> - sets whether the PC is a murderer or not.<br />
  <code class="s">(nothing) SetPCAMurderer isMurderer:bool</code></p>
  
  <p><a id="GetPlayerSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayerSpell">GetPlayerSpell</a> - returns the objectID of the player's current spell.<br />
  <b>Note: </b>If the active spell is removed from the player, this function might return 0. (TODO: Verify)<br />
  <code class="s">(spell:ref) GetPlayerSpell</code></p>
  
  <p><a id="GetPlayerSpellCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayerSpellCount">GetPlayerSpellCount</a> - returns the player spell count.<br />
  <code class="s">(count:int) GetPlayerSpellCount</code><br/>
  <code class="s">(count:int) GetSpellCount</code></p>
  
  <p><a id="GetNthPlayerSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthPlayerSpell">GetNthPlayerSpell</a> - returns the nth player spell. whichSpell is an index that starts at 0 for the first spell in the list.<br/>
  <b>Note: </b>The CS compiler doesn't expect spells to be returned as a ref. If you are calling this function multiple times to set the same ref variable you need to assign that variable to some other type (say a weapon) in between your calls to this function. Otherwise the ref will continue to keep the value from the first call. (TODO: Verify)<br />
  <code class="s">(spell:ref) GetNthPlayerSpell whichSpell:int</code><br />
  <code class="s">(spell:ref) GetNthSpell whichSpell:int</code></p>
  
  <p><a id="GetPCMajorSkillUps" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCMajorSkillUps">GetPCMajorSkillUps</a> - returns the number of major skill advancements toward the player's next level.<br />
  <code class="s">(skillUps:int) GetPCMajorSkillUps</code></p>
  
  <p><a id="SetPCMajorSkillUps" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPCMajorSkillUps">SetPCMajorSkillUps</a> - sets the number of major skill advancements toward the player's next level<br />
  <code class="s">(nothing) SetPCMajorSkillUps skillUps:int</code></p>
  
  <p><a id="GetPCAttributeBonus" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCAttributeBonus">GetPCAttributeBonus</a> - returns the number of skill advancements contributing to the specified attribute's bonus for the next level. Note that game setting multipliers applied to these values determine the actual bonus at level-up. Returns -1 if passed an invalid actor value, including Luck.<br />
  <code class="s">(bonus:int) GetPCAttributeBonus <a href="#Actor_Value_Codes">actorValue</a>:string</code></p>
  
  <p><a id="SetPCAttributeBonus" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPCAttributeBonus">SetPCAttributeBonus</a> - sets the number of skill advancements contributing to the specified attribute's bonus for the next level. Note that game setting multipliers applied to these values determine the actual bonus at level-up. Does not affect Luck bonus.<br />
  <code class="s">(bonus:int) GetPCAttributeBonus <a href="#Actor_Value_Codes">actorValue</a>:string bonus:int</code></p>
  
  <p><a id="GetTotalPCAttributeBonus" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTotalPCAttributeBonus">GetTotalPCAttributeBonus</a> - returns the sum of the player's attribute bonuses.<br />
  <code class="s">(bonus:int) GetTotalPCAttributeBonus</code></p>
  
  <p><a id="ModPCSpellEffectiveness" class="f" href="http://cs.elderscrolls.com/index.php?title=ModPCSpellEffectiveness">ModPCSpellEffectiveness</a> - alters the script modifier applied to the player's spell effectiveness. This works similarly to Oblivion's ModAV command. Positive values increases the modifier, negative values decrease it. Any game calculations involving player spell effectiveness will use the modified value (base effectiveness + modifier). By default, the effects of this command persist until the end of the current game session. Pass 1 for the second parameter to save the amount modified in the savegame; it will then be applied every time the savegame is reloaded, and removed when reloading a different savegame.<br />
  <code class="s">(nothing) ModPCSpellEffectiveness modBy:float <span class="op">persist:bool</span></code></p>
  
  <p><a id="GetPCSpellEffectivenessModifier" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCSpellEffectivenessModifier">GetPCSpellEffectivenessModifier</a> - returns the current value of the script modifier for player spell effectiveness. Subtract this value from the return value of Player.GetSpellEffectiveness to get the player's base spell effectiveness.<br />
  <code class="s">(modifier:float) GetPCSpellEffectivenessModifier</code></p>
  
  <p><a id="GetPCTrainingSessionsUsed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCTrainingSessionsUsed">GetPCTrainingSessionsUsed</a> - returns the number of times the player has trained during his current level.<br />
  <code class="s">(numSessions:int) GetPCTrainingSessionsUsed</code></p>
  
  <p><a id="SetPCTrainingSessionsUsed" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPCTrainingSessionsUsed">SetPCTrainingSessionsUsed</a> - sets the number of times the player has trained during his current level.<br />
  <code class="s">(nothing) SetPCTrainingSessionsUsed numSessions:int</code></p>
  
  <p><a id="ModPCMovementSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=ModPCMovementSpeed">ModPCMovementSpeed</a> - applies a positive or negative modifier to the player's speed attribute as used in calculating his movement speed while swimming, walking, or running. The actual attribute is not modified, but movement calculations use the attribute value plus the modifier. Positive modifiers well above the maximum value of the speed attribute are permitted and effective; minimum speed including the modifier is limited to zero. By default, the effects of this command persist until the end of the current game session. Pass 1 for the second parameter to save the amount modified in the savegame; it will then be applied every time the savegame is reloaded, and removed when reloading a different savegame.<br />
  <code class="s">(nothing) ModPCMovementSpeed modBy:float <span class="op">persist:bool</span></code></p>
  
  <p> <a id="GetPCMovementSpeedModifier" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCMovementSpeedModifier">GetPCMovementSpeedModifier</a> - returns the current modifier applied to the player's speed for use in movement speed calculations. Because multiple mods may change the modifier this command returns the sum of all calls to ModPCMovementSpeed.<br />
  <code class="s">(modifier:float) GetPCMovementSpeedModifier</code></p>
  
  <p><a id="GetPlayerBirthsign" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayerBirthsign">GetPlayerBirthsign</a> - returns the birthsign chosen by the player.<br />
  <code class="s">(birthsign:ref) GetPlayerBirthsign</code></p>
  
  <p><a id="SetPlayerBirthsign" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPlayerBirthsign">SetPlayerBirthsign</a> - changes the player's birthsign to the one specified. This removes all effects of the previous birthsign and applies the effects of the new one.<br />
  <code class="s">(nothing) SetPlayerBirthsign birthsign:ref</code></p>
  
  <p><a id="GetTelekinesisRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTelekinesisRef">GetTelekinesisRef</a> - returns a reference to the object being manipulated by the player through telekinesis, if any.<br />
  <code class="s">(telekinesisRef:ref) GetTelekinesisRef</code></p>
  
  <p><a id="GetCurrentRegions" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentRegions">GetCurrentRegions</a> - returns an Array of all the regions in which the player is currently located, if any. In interior cells generally returns 0. Regions in exterior cells can overlap, therefore it's possible for the player to be in several regions simultaneously.<br />
  <code class="s">(regions:Array) GetCurrentRegions</code></p>
  
  <p><a id="GetPCLastDroppedItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCLastDroppedItem">GetPCLastDroppedItem</a> - returns the base object of the item most recently dropped by the player.<br />
  <code class="s">(item:ref) GetPCLastDroppedItem</code></p>
  
  <p><a id="GetPCLastDroppedItemRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCLastDroppedItemRef">GetPCLastDroppedItemRef</a> - returns the reference of the item most recently dropped by the player.<br />
  <code class="s">(item:ref) GetPCLastDroppedItemRef</code></p>
  
  <p><a id="GetPCAttributeBonusC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPCAttributeBonusC">GetPCAttributeBonusC</a> - returns the level-up bonus for the specified attribute.<br />
  <code class="s">(short) GetPCAttributeBonusC <a href="#Actor_Value_Codes">actorValue</a>:int</code></p>
  
  <p><a id="SetPCAttributeBonusC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPCAttributeBonusC">SetPCAttributeBonusC</a> - sets the level-up bonus for the specified attribute.<br />
  <code class="s">(nothing) SetPCAttributeBonusC <a href="#Actor_Value_Codes">actorValue</a>:int</code></p>
  
  <p><a id="GetLastUsedSigilStone" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastUsedSigilStone">GetLastUsedSigilStone</a> - returns the sigil stone most recently used to enchant an item during the current game session.<br />
  <code class="s">(usedSigilStone:ref) GetLastUsedSigilStone</code><br/>
  <code class="s">(usedSigilStone:ref) GetLastSS</code></p>
  
  <p><a id="GetLastSigilStoneEnchantedItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastSigilStoneEnchantedItem">GetLastSigilStoneEnchantedItem</a> - returns the unenchanted item most recently enchanted with a sigil stone during the current game session.<br />
  <code class="s">(item:ref) GetLastSigilStoneEnchantedItem</code><br/>
  <code class="s">(item:ref) GetLastSSItem</code></p>
  
  <p><a id="GetLastSigilStoneCreatedItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastSigilStoneCreatedItem">GetLastSigilStoneCreatedItem</a> - returns the enchanted item most recently created with a sigil stone during the current game session.<br />
  <code class="s">(item:ref) GetLastSigilStoneCreatedItem</code><br/>
  <code class="s">(item:ref) GetLastSSCreated</code></p>
  
  <p><a id="SetFlyCameraSpeedMult" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFlyCameraSpeedMult">SetFlyCameraSpeedMult</a> - changes the speed multiplier for the player's camera when in fly camera mode.<br />
  <code class="s">(nothing) SetFlyCameraSpeedMult multiplier:float</code></p>
  
  <p><a id="SetPlayerSkeletonPath" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPlayerSkeletonPAth">SetPlayerSkeletonPath</a> - Set the specific path as the player's skeleton.<br />
  <b>Note: </b>WARNING: passing an invalid path or invalid nif can crash the game.<br />
  <code class="s">(nothing) SetPlayerSkeletonPath path:string</code></p>
  
  
  <h3><a id="Projectile">Projectile</a></h3>
  
  <p>A reference to an arrow or magic projectile in the gameworld. Note that these references are destroyed by the game after a certain period of time. If stored in a reference variable, make sure the reference is still valid before using it in a function. Also note that calling GetBaseObject on a magic projectile will return the same reference; in other words, magic projectile references are their own base objects.</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetProjectileType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProjectileType">GetProjectileType</a> - returns the type of the projectile.<br />
  <code class="s">(<a href="#Projectile_Type">projectileType</a>:int) reference.GetProjectileType</code></p>
  
  <p><a id="GetProjectileSource" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProjectileSource">GetProjectileSource</a> - returns the caster of a magic projectile or the archer who fired an arrow projectile.<br />
  <code class="s">(source:ref) reference.GetProjectileSource</code></p>
  
  <p><a id="GetMagicProjectileSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMagicProjectileSpell">GetMagicProjectileSpell</a> - returns the spell attached to a magic projectile.<br />
  <code class="s">(spell:ref) reference.GetMagicProjectileSpell</code><br />
  <code class="s">(spell:ref) reference.GetMPSpell</code></p>
  
  <p><a id="SetMagicProjectileSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMagicProjectileSpell">SetMagicProjectileSpell</a> - changes the spell attached to a magic projectile.<br />
  <code class="s">(nothing) reference.SetMagicProjectileSpell newSpell:ref</code><br />
  <code class="s">(nothing) reference.SetMPSpell newSpell:ref</code></p>
  
  <p><a id="GetArrowProjectileEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=GetArrowProjectileEnchantment">GetArrowProjectileEnchantment</a> - returns the enchantment on an arrow projectile.<br />
  <code class="s">(enchantment:ref) reference.GetArrowProjectileEnchantment</code><br />
  <code class="s">(enchantment:ref) reference.GetAPEnch</code></p>
  
  <p><a id="GetArrowProjectileBowEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=GetArrowProjectileBowEnchantment">GetArrowProjectileBowEnchantment</a> - returns the enchantment on an arrow derived from the bow from which it was fired.<br />
  <code class="s">(enchantment:ref) reference.GetArrowProjectileBowEnchantment</code><br />
  <code class="s">(enchantment:ref) reference.GetAPBowEnch</code></p>
  
  <p><a id="GetArrowProjectilePoison" class="f" href="http://cs.elderscrolls.com/index.php?title=GetArrowProjectilePoison">GetArrowProjectilePoison</a> - returns the poison on an arrow projectile.<br />
  <code class="s">(poison:ref) reference.GetArrowProjectilePoison</code><br />
  <code class="s">(poison:ref) reference.GetAPPoison</code></p>
  
  <p><a id="SetPlayerProjectile" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPlayerProjectile">SetPlayerProjectile</a> - sets the player as the source of the projectile. Actors hit by the projectile will react as if the player had cast the spell or fired the arrow.<br />
  <code class="s">(nothing) reference.SetPlayerProjectile</code></p>
  
  <p><a id="SetProjectileSource" class="f" href="http://cs.elderscrolls.com/index.php?title=SetProjectileSource">SetProjectileSource</a> - sets the source of a projectile. If an actor other than the player is set as the source, the target of the projectile will not necessarily respond to the attack.<br />
  <code class="s">(nothing) reference.SetProjectileSource actor:ref</code></p>
  
  <p><a id="SetArrowProjectileEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=SetArrowProjectileEnchantment">SetArrowProjectileEnchantment</a> - sets the arrow enchantment associated with the calling projectile.<br />
  <code class="s">(nothing) reference.SetArrowProjectileEnchantment enchantment:ref</code></p>
  
  <p><a id="SetArrowProjectileBowEnchantment" class="f" href="http://cs.elderscrolls.com/index.php?title=SetArrowProjectileBowEnchantment">SetArrowProjectileBowEnchantment</a> - sets the bow enchantment associated with the calling projectile.<br />
  <code class="s">(nothing) reference.SetArrowProjectileBowEnchantment enchantment:ref</code></p>
  
  <p><a id="SetArrowProjectilePoison" class="f" href="http://cs.elderscrolls.com/index.php?title=SetArrowProjectilePoison">SetArrowProjectilePoison</a> - sets the poison on the calling projectile.<br />
  <code class="s">(nothing) reference.SetArrowProjectilePoison poison:ref</code></p>
  
  <p><a id="GetProjectileSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProjectileSpeed">GetProjectileSpeed</a> - returns the speed of the projectile.<br />
  <code class="s">(speed:float) reference.GetProjectileSpeed</code></p>
  
  <p><a id="GetProjectileDistanceTraveled" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProjectileDistanceTraveled">GetProjectileDistanceTraveled</a> - returns the total distance traveled by the calling projectile. Currently does not work for arrow projectiles.<br />
  <code class="s">(distance:float) reference.GetProjectileDistanceTraveled</code></p>
  
  <p><a id="GetProjectileLifetime" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProjectileLifetime">GetProjectileLifetime</a> - returns the number of seconds for which the calling projectile has existed.<br />
  <code class="s">(lifetime:float) reference.GetProjectileLifetime</code></p>
  
  <p><a id="SetProjectileSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=SetProjectileSpeed">SetProjectileSpeed</a> - sets the speed of the projectile. Note that other factors affect the movement of a projectile so a speed of zero does not necessarily completely halt the projectile.<br />
  <code class="s">(nothing) reference.SetProjectileSpeed speed:float</code></p>
  
  <p><a id="GetProjectile" class="f" href="http://cs.elderscrolls.com/index.php?title=GetProjectile">GetProjectile</a> - returns the projectile most recently fired by the calling actor. Optionally specify the type (1 for arrows, 2 for magic, 0 for either) and the arrow, spell, or staff enchantment to match. The minLifetime parameter specifies how old (in seconds) a projectile can be before it is ignored.<br />
  <code class="s">(projectile:ref) reference.GetProjectile <span class="op">type:int minLifetime:float arrowOrMagicItemID:ref</span></code></p>
  
  <h3><a id="Quest" href="http://cs.elderscrolls.com/index.php?title=Quest">Quest</a></h3>
  
  <h4>Functions</h4>
  
  <p><a id="SetActiveQuest" class="f" href="http://cs.elderscrolls.com/index.php?title=SetActiveQuest">SetActiveQuest</a> - sets the players active quest.<br />
  <code class="s">(nothing) SetActiveQuest quest:ref</code></p>
  
  <p><a id="GetActiveQuest" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveQuest">GetActiveQuest</a> - returns the player's active quest, if any.<br />
  <code class="s">(ref) GetActiveQuest</code></p>
  
  <p><a id="ClearActiveQuest" class="f" href="http://cs.elderscrolls.com/index.php?title=ClearActiveQuest">ClearActiveQuest</a> - clears the player's active quest, if any.<br />
  <code class="s">(nothing) ClearActiveQuest</code></p>
  
  <p><a id="GetCurrentQuests" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentQuests">GetCurrentQuests</a> - returns a list of all currently active (uncompleted) quests. Note that this list includes quests which do not appear in the journal.<br />
  <code class="s">(Array) GetCurrentQuests</code></p>
  
  <p><a id="GetCompletedQuests" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCompletedQuests">GetCompletedQuests</a> - returns a list of all completed quests.<br />
  <code class="s">(Array) GetCompletedQuests</code></p>
  
  <p><a id="IsQuestComplete" class="f" href="http://cs.elderscrolls.com/index.php?title=IsQuestComplete">IsQuestComplete</a> - returns 1 if the specified quest is marked as 'completed'.<br />
  <code class="s">(completed:bool) IsQuestComplete quest:ref</code></p>
  
  <p><a id="UncompleteQuest" class="f" href="http://cs.elderscrolls.com/index.php?title=UncompleteQuest">UncompleteQuest</a> - removes the 'completed' flag from the specified quest.<br />
  <code class="s">(nothing) UncompleteQuest quest:ref</code></p>
  
  <p><a id="QuestExists" class="f" href="http://cs.elderscrolls.com/index.php?title=QuestExists">QuestExists</a> - returns 1 if a quest exists with the specified editorID.<br />
  <code class="s">(questExists:bool) QuestExists questEditorID:string</code></p>
  
  <p><a id="GetStageIDs" class="f" href="http://cs.elderscrolls.com/index.php?title=GetStageIDs">GetStageIDs</a> - returns an Array containing the numeric index of each quest stage associated with the specified quest.<br />
  <code class="s">(stageIDs:array) GetStageIDs quest:ref</code></p>
  
  <p><a id="GetStageEntries" class="f" href="http://cs.elderscrolls.com/index.php?title=GetStageEntries">GetStageEntries</a> - returns an Array of all of the entries associated with the specified quest stage. Each element of the array is a Stringmap containing the following fields: "day" (1-31), "month" (1-12), and "year", representing the date at which the entry was added to the player's journal, and "text" containing the log text for the entry. If the entry has not been added to the player's journal, the date fields will all be zero.<br />
  <code class="s">(entries:Array) GetStageEntries quest:ref stageID:int</code></p>
  
  <p><a id="SetStageText" class="f" href="http://cs.elderscrolls.com/index.php?title=SetStageText">SetStageText</a> - sets the log text associated with the specified quest stage entry for the specified quest. The change remains in effect for the duration of the game session or until undone with UnsetStageText.<br />
  <code class="s">(textModified:bool) SetStageText quest:ref stageIndex:int entryIndex:int text:string</code></p>
  
  <p><a id="UnsetStageText" class="f" href="http://cs.elderscrolls.com/index.php?title=UnsetStageText">UnsetStageText</a> - reverses any modification made to the specified log entry text using SetStageText.<br />
  <code class="s">(nothing) UnsetStageText quest:ref stageIndex:int entryIndex:int</code></p>
  
  <p><a id="SetStageDate" class="f" href="http://cs.elderscrolls.com/index.php?title=SetStageDate">SetStageDate</a> - for a quest stage entry which has already been added to the player's journal, modifies the date at which the entry was added. Specify the day of the month (1-31), month (1-12), and year.<br />
  <code class="s">(dateSet:bool) SetStageDate quest:ref stageIndex:int entryIndex:int day:int month:int year:int</code></p>
  
  <h3><a id="Reference">Reference</a></h3>
  
  <p>An instance of an object in the gameworld. In general, a reference has access to the functions associated with its base type as well.</p>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Lockable">Lockable</a>, <a href="#Ownable">Ownable</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetParentCell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetParentCell">GetParentCell</a> - returns the objectID of the parent cell of the calling reference.<br />
  <b>Note: </b>If the reference has been moved to a different call with SetPos, this function returns the original cell of the reference. (TODO: Verify) Moving the reference to itself (e.g. MyRef.MoveTo MyRef) before GetParentCell forces an update.<br />
  <code class="s">(parentCell:ref) reference.GetParentCell</code></p>
  
  <p><a id="GetParentWorldspace" class="f" href="http://cs.elderscrolls.com/index.php?title=GetParentWorldspace">GetParentWorldspace</a> - returns the worldspace to which the calling reference's cell belongs, if any. In interior cells this generally returns 0.<br />
  <code class="s">(parentWorldspace:ref) reference.GetParentWorldspace</code></p>
  
  <p><a id="ParentCellHasWater" class="f" href="http://cs.elderscrolls.com/index.php?title=ParentCellHasWater">ParentCellHasWater</a> - returns 1 if the reference's parent cell can contain water.<br />
  <b>Note: </b>Exterior cells always have water.<br />
  <code class="s">(hasWater:bool) reference.ParentCellHasWater</code><br />
  <code class="s">(hasWater:bool) reference.HasWater</code></p>
  
  <p><a id="GetParentCellWaterHeight" class="f" href="http://cs.elderscrolls.com/index.php?title=GetParentCellWaterHeight">GetParentCellWaterHeight</a> - returns the water height of the references parent cell.<br />
  <code class="s">(waterHeight:float) reference.GetParentCellWaterHeight</code><br />
  <code class="s">(waterHeight:float) reference.GetWaterHeight</code></p>
  
  <p><a id="IsActivatable" class="f" href="http://cs.elderscrolls.com/index.php?title=IsActivatable">IsActivatable</a> - returns 1 if the calling reference can be activated under normal circumstances.<br />
  <b>Note: </b>Might return true for unexpected item types. (TODO: Verify)<br />
  <code class="s">(activatable:bool) reference.IsActivatable</code></p>
  
  <p><a id="IsUnderWater" class="f" href="http://cs.elderscrolls.com/index.php?title=IsUnderWater">IsUnderWater</a> - returns 1 if the calling reference's Z position is less than 120 units under its parent cell's water height.<br />
  <code class="s">(isUnderWater:bool) reference.IsUnderWater</code></p>
  
  <p><a id="GetNumChildRefs" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumChildRefs">GetNumChildRefs</a> - returns the number of reference for which the calling reference behaves as an enable-state parent.<br />
  <code class="s">(numChildren:int) reference.GetNumChildRefs</code></p>
  
  <p><a id="GetNthChildRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthChildRef">GetNthChildRef</a> - returns the nth child reference associated with the calling reference. Child references are stored in no particular order.<br />
  <code class="s">(childRef:ref) reference.GetNthChildRef whichChild:int</code></p>
  
  <p><a id="GetNumFollowers" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumFollowers">GetNumFollowers</a> - returns the number of actors currently following the calling actor. Summoned creatures are excluded.<br />
  <code class="s">(numFollowers:int) reference.GetNumFollowers</code></p>
  
  <p><a id="GetNthFollower" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthFollower">GetNthFollower</a> - returns a reference to the nth actor currently following the calling actor. Does not include summoned creatures.<br />
  <code class="s">(follower:ref) reference.GetNthFollower whichFollower:int</code></p>
  
  <p><a id="GetFollowers" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFollowers">GetFollowers</a> - returns an array containing all actors currently following the calling actor, including summoned creatures.<br />
  <code class="s">(followers:array) reference.GetFollowers</code></p>
  
  <p><a id="IsPersistent" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPersistent">IsPersistent</a> - returns 1 if the calling reference is a persistent reference.<br />
  <code class="s">(isPersistent:bool) reference.IsPersistent</code></p>
  
  <p><a id="SetScaleEX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetScaleEX">SetScaleEX</a> - sets the scale of the calling reference. Unlike SetScale, the scale is not limited to a certain range. The reference should be disabled and then enabled after calling this function in order to update its scale and collision properties. The new scale is saved in the savegame.<br />
  <b>Note: </b>Using <a href="#Update3D"><code>Update3D</code></a> instead of disable/enable should work as well.<br />
  <code class="s">(nothing) reference.SetScaleEX scale:float</code></p>
  
  <p><a id="HasBeenPickedUp" class="f" href="http://cs.elderscrolls.com/index.php?title=HasBeenPickedUp">HasBeenPickedUp</a> - returns true if the calling reference is currently inactive due to having been picked up by an actor or otherwise transferred to an inventory<br />
  <b>Note: </b>It is no use trying to use this function on dynamic references because the moment the reference is picked up, its FormID becomes invalid.<br />
  <code class="s">(pickedUp:bool) reference.HasBeenPickedUp</code><br />
  <code class="s">(pickedUp:bool) reference.IsTaken</code></p>
  
  <p><a id="SetHasBeenPickedUp" class="f" href="http://cs.elderscrolls.com/index.php?title=SetHasBeenPickedUp">SetHasBeenPickedUp</a> - toggles the flag that marks a reference as having been picked up by an actor. When called on a reference which was previously picked up, causes the reference to "respawn". Use <a href="#Update3D"><code>Update3D</code></a> on the reference for the change to become visible.<br/>
  <code class="s">(nothing) reference.SetHasBeenPickedUp pickedUp:bool</code><br />
  <code class="s">(nothing) reference.SetTaken pickedUp:bool</code></p>
  
  <p><a id="GetRefCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRefCount">GetRefCount</a> - returns the number of items in a stack of items in the world.<br />
  <code class="s">(refCount:int) reference.GetRefCount</code></p>
  
  <p><a id="SetRefCount" class="f" href="http://cs.elderscrolls.com/index.php?title=SetRefCount">SetRefCount</a> - sets the number of items in a stack of items in the world.<br />
  <b>Note: </b>While this function will change the count of any type of reference, it may have unpredictable results when used on references like NPCs which are not logically stackable.<br />
  <code class="s">(nothing) reference.SetRefCount newCount:int</code></p>
  
  <p><a id="SetBaseForm" class="f" href="http://cs.elderscrolls.com/index.php?title=SetBaseForm">SetBaseForm</a> - changes the base object associated with a reference, with the limitation that the new base form must be of the same type as the old one (i.e. you can swap a weapon reference's base form only with another weapon). Does not work on actors or on items in containers. Use <a href="#Update3D"><code>Update3D</code></a> on the reference for the change to become visible.<br />
  <b>Note: </b>This function is considered beta.<br />
  <code class="s">(nothing) reference.SetBaseForm newBaseForm:ref</code></p>
  
  <p><a id="Activate2" class="f" href="http://cs.elderscrolls.com/index.php?title=Activate2">Activate2</a> - like the existing Activate command, causes a reference to be activated. The only difference is that this command circumvents the limit on recursive scripted activations of an object, allowing unlimited repeated processing of the target's OnActivate script block. Use with care as performance may degrade if a large number of calls to this command occur within a single frame.<br />
  <code class="s">(nothing) reference.Activate2 <span class="op">activator:ref runOnActivate:bool</span></code></p>
  
  <p><a id="IsRefDeleted" class="f" href="http://cs.elderscrolls.com/index.php?title=IsRefDeleted">IsRefDeleted</a> - returns 1 if the passed object reference has been marked as deleted by a mod or the game. Deleted references should not be used in scripts.<br />
  <b>Note: </b>The reference is passed as a parameter - this function should not be called on a potentially deleted reference directly.<br />
  <code class="s">(isDeleted:bool) IsRefDeleted reference:ref</code></p>
  
  <p><a id="DeleteReference" class="f" href="http://cs.elderscrolls.com/index.php?title=DeleteReference">DeleteReference</a> - attempts to delete the calling object from the game and returns true if successful. In order for a reference to be deleted, it must:</p><ul>
    <li>- be disabled</li>
    <li>- not be an actor</li>
    <li>- not be contained in an inventory</li>
    <li>- be dynamic (i.e. generated via PlaceAtMe or dropped from an inventory, having a mod index of 0xFF)</li>
  </ul>
  
  <p>The primary aim of this function is to combat the savegame bloat resulting from generation of large numbers of dynamic references. In most cases, it is better to avoid creating such bloat in the first place.<br />
  <b>Note: </b>IsRefDeleted is not related to this command in any way.<br />
  <code class="s">(wasRefDeleted:bool) reference.DeleteReference</code></p>
  
  <p><a id="GetBoundingBox" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBoundingBox">GetBoundingBox</a> - returns a stringmap representing the calling objects axis-aligned bounding box. This command only works for mobile objects (projectiles and actors). The stringmap returned contains two stringmaps: "center" has keys "x", "y", and "z" representing the coordinates of the center of the bounding box, and "extent" has the same keys representing the extent of the box along each axis. For example, the height of the box is equal to GetBoundingBox-&gt;extent-&gt;z * 2. Similarly the bottom of the box is equal to GetBoundingBox-&gt;center-&gt;z - GetBoundingBox-&gt;extent-&gt;z<br />
  <b>Note: </b>This function does not return the correct bounding box in some instances. If the actor is scaled, multiplying by <code>GetScale</code> is necessary to scale the returned box appropriately. If the actor is sitting or lying down, the box returned is still the box of the standing actor, which will be completely off.<br />
  <code class="s">(StringMap) reference.GetBoundingBox</code></p>
  
  <p><a id="GetBoundingRadius" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBoundingRadius">GetBoundingRadius</a> - returns the radius of a sphere large enough to entirely contain the 3D geometry of the calling object.<br />
  <code class="s">(radius:float) reference.GetBoundingRadius</code></p>
  
  <p><a id="Update3D" class="f" href="http://cs.elderscrolls.com/index.php?title=Update3D">Update3D</a> - updates the visual representation of the calling actor or object reference. This can be called immediately after commands like SetModelPath and SetEyes to make the changes visible and should work in any instance where instructions tell you to <code>disable</code> and <code>enable</code> a reference to make changes visible.<br />
  <b>Note: </b>This function only works on the player in third person camera mode. Use <a href="#IsThirdPerson"><code>IsThirdPerson</code></a> to check and wait with calling this function until the player goes into third person mode or force it with <a href="#ToggleFirstPerson"><code>ToggleFirstPerson</code></a>.<br />
  <code class="s">(nothing) reference.Update3D</code></p>
  
  <p><a id="HasEffectShader" class="f" href="http://cs.elderscrolls.com/index.php?title=HasEffectShader">HasEffectShader</a> - checks if the specified effect shader is playing on the calling reference, and if so returns the number of instances of that shader playing on it. Otherwise returns zero. Note that this command may return true for a short period after calling StopMagicShaderVisuals because the shader is not fully removed until its ending sequence has played out.<br />
  <code class="s">(instanceCount:int) ref.HasEffectShader effectShader:ref</code></p>
  
  <p><a id="IsInOblivion" class="f" href="http://cs.elderscrolls.com/index.php?title=IsInOblivion">IsInOblivion</a> - returns 1 if the calling reference is in a cell or worldspace marked as belonging to the realm of Oblivion.<br />
  <code class="s">(inOblivion:bool) reference.IsInOblivion</code></p>
  
  <h3><a id="Sigil_Stone">Sigil Stone</a></h3>
  
  <h4>Functions:</h4>
  
  <p><a id="GetSigilStoneUses" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSigilStoneUses">GetSigilStoneUses</a> - returns the number of uses for a sigil stone.<br />
  <code class="s">(short) <span class="op">reference.</span>GetSigilStoneUses<span class="op"> sigilStone:ref</span></code></p>
  
  <p><a id="SetSigilStoneUses" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSigilStoneUses">SetSigilStoneUses</a> - sets the number of uses for a sigil stone.<br />
  <code class="s">(nothing) <span class="op">reference.</span>SetSigilStoneUses uses:integer<span class="op"> sigilStone:ref</span></code></p>
  
  <p><a id="ModSigilStoneUses" class="f" href="http://cs.elderscrolls.com/index.php?title=ModSigilStoneUses">ModSigilStoneUses</a> - mods the number of uses for a sigil stone.<br />
  <code class="s">(nothing) <span class="op">reference.</span>ModSigilStoneUses modBy:integer<span class="op"> sigilStone:ref</span></code></p>
  
  <h3><a id="Skill">Skill</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Description">Description</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Attribute</strong> (<span class="op">short</span>) - the controlling character attribute<br />
  <strong>Specialization</strong> (<span class="op">short</span>) - the corresponding specialization<br />
  <strong>UseValue</strong> (<span class="op">float</span>) - One of two values used to increment the experience toward the next skill level based on an action<br />
  <strong>Experience</strong> (<span class="op">float</span>) - the current player experience points for the skill<br />
  <strong>Advances</strong> (<span class="op">long</span>) - the number of times the skill has been advanced by the character</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetPlayerSkillUse" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayerSkillUse">GetPlayerSkillUse</a> - returns the current experience towards the next level of the skill<br />
  <code class="s">(skillExperience:float) GetPlayerSkillUse <a href="#Actor_Value_Codes">skill</a>:actorValue</code></p>
  
  <p><a id="GetPlayerSkillUseC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayerSkillUseC">GetPlayerSkillUseC</a> - alternatve version of GetPlayerSkillUse taking an actor value code for the skill<br />
  <code class="s">(skillExperience:float) GetPlayerSkillUseC skillCode:int</code></p>
  
  <p><a id="IncrementPlayerSkillUse" class="f" href="http://cs.elderscrolls.com/index.php?title=IncrementPlayerSkillUse">IncrementPlayerSkillUse</a> - records some additional uses of one of the skill actions<br />
  <code class="s">(nuSkillExperience:float) IncrementPlayerSkillUse <a href="#Actor_Value_Codes">skill</a>:int <span class="op">whichAction:inthowManyTimes:float</span></code></p>
  
  <p><a id="GetSkillUseIncrement" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSkillUseIncrement">GetSkillUseIncrement</a> - gets the experience point increase for one use of a skill action<br />
  <code class="s">(useRate:float) GetSkillUseIncrement <a href="#Actor_Value_Codes">skill</a>:int <span class="op">whichAction:int</span></code></p>
  
  <p><a id="SetSkillUseIncrement" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSkillUseIncrement">SetSkillUseIncrement</a> - sets the experience point increase for one use of a skill action<br />
  <code class="s">(nothing) SetSkillUseIncrement nuRate:float <a href="#Actor_Value_Codes">skill</a>:int <span class="op">whichAction:int</span></code></p>
  
  <p><a id="IncrementPlayerSkillUseC" class="f" href="http://cs.elderscrolls.com/index.php?title=IncrementPlayerSkillUseC">IncrementPlayerSkillUseC</a> - records some additional uses of one of the skill actions<br />
  <code class="s">(nuSkillExperience:float) IncrementPlayerSkillUse skill:actorValueCode <span class="op">whichAction:int howManyTimes:float</span></code></p>
  
  <p><a id="TriggerPlayerSkillUse" class="f" href="http://cs.elderscrolls.com/index.php?title=TriggerPlayerSkillUse">TriggerPlayerSkillUse</a> - records positive or negative uses of one of the specified skill actions. Enough skill uses will increment or decrement the skill itself, and adjust the log of the number of increases for that skill.<br />
  <code class="s">(nuSkillExperience:float) TriggerPlayerSkillUse skill:actorValueCode <span class="op">whichAction:int howManyTimes:float</span></code><br />
  <code class="s">(nuSkillExperience:float) TriggerPlayerSkillUseC skill:int <span class="op">whichAction:int howManyTimes:float</span></code></p>
  
  <p><a id="ModPlayerSkillExp" class="f" href="http://cs.elderscrolls.com/index.php?title=ModPlayerSkillExp">ModPlayerSkillExp</a> - directly adjusts the experience for a skill. A large enough adjustment will increment or decrement the skill itself, and adjust the log of the number of increase for that skill.<br />
  <code class="s">(nuSkillExperience:float) ModPlayerSkillExp skill:actorValueCode amount:float</code><br />
  <code class="s">(nuSkillExperience:float) ModPlayerSkillExpC skill:int amount:float</code></p>
  
  <p><a id="GetSkillUseIncrementC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSkillUseIncrementC">GetSkillUseIncrementC</a> - gets the experience point increase for one use of a skill action<br />
  <code class="s">(useRate:float) GetSkillUseIncrement skill:actorValueCode <span class="op">whichAction:int</span></code></p>
  
  <p><a id="SetSkillUseIncrementC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSkillUseIncrementC">SetSkillUseIncrementC</a> - sets the experience point increase for one use of a skill action<br />
  <code class="s">(nothing) SetSkillUseIncrement nuRate:float skill:actorValueCode <span class="op">whichAction:int</span></code></p>
  
  <p><a id="GetSkillGoverningAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSkillGoverningAttribute">GetSkillGoverningAttribute</a> - returns the governing attribute for the skill as an actor value code<br />
  <code class="s">(skillCode:int) GetSkillGoverningAttribute skillName:string</code></p>
  
  <p><a id="SetSkillGoverningAttribute" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSkillGoverningAttribute">SetSkillGoverningAttribute</a> - sets the governing attribute for the skill<br />
  <code class="s">(nothing) SetSkillGoverningAttribute skillName:string attributeName:string</code></p>
  
  <p><a id="GetSkillGoverningAttributeC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSkillGoverningAttributeC">GetSkillGoverningAttributeC</a> - alternate version of GetSkillGoverningAttribute taking an actor value code for the skill<br />
  <code class="s">(skillCode:int) GetSkillGoverningAttributeC skillCode:int</code></p>
  
  <p><a id="SetSkillGoverningAttributeC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSkillGoverningAttributeC">SetSkillGoverningAttributeC</a> - alternate version of SetSkillGoverningAttribute taking actor value codes for the skill and attribute<br />
  <code class="s">(nothing) SetSkillGoverningAttributeC skillCode:int attributeCode:int</code></p>
  
  <p><a id="GetPlayerSkillAdvances" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPlayerSkillAdvances">GetPlayerSkillAdvances</a> - returns the number of times the skill level has advanced for that skill<br />
  <code class="s">(advances:int) GetPlayerSkillAdvances skillCode:int</code><br />
  <code class="s">(advances:int) GetPlayerSkillAdvancesC skillCode:int</code></p>
  
  <p><a id="SetPlayerSkillAdvances" class="f" href="http://cs.elderscrolls.com/index.php?title=SetPlayerSkillAdvances">SetPlayerSkillAdvances</a> - sets the number of times the skill has been advanced<br />
  <code class="s">(nothing) SetPlayerSkillAdvances skillCode:int advances:int</code><br />
  <code class="s">(nothing) SetPlayerSkillAdvancesC skillCode:int advances:int</code></p>
  
  <p><a id="GetRequiredSkillExp" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRequiredSkillExp">GetRequiredSkillExp</a> - returns the total skill use required for the player to advance the specified skill. To get the <strong>remaining</strong> skill use required, subtract the value of <a href="#GetPlayerSkillUse">GetPlayerSkillUse</a> from this value.<br />
  <code class="s">(skillUse:float) GetRequiredSkillExp skill:actorValue</code></p>
  
  <p><a id="GetRequiredSkillExpC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRequiredSkillExpC">GetRequiredSkillExpC</a> - alternate version of GetRequiredSkillExp taking an actor value code for the skill.<br />
  <code class="s">(skillUse:float) GetRequiredSkillExpC skillCode:int</code></p>
  
  <p><a id="GetSkillSpecialization" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSkillSpecialization">GetSkillSpecialization</a> - returns the skill's specialization as an integer. 0: Combat, 1: Magic, or 2: Stealth. <br />
  <code class="s">(specialization:int) GetSkillSpecialization skill:actorValue</code></p>
  
  <p><a id="GetSkillSpecializationC" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSkillSpecializationC">GetSkillSpecializationC</a> - alternate version of GetSkillSpecialization taking an actor value code for the skill.<br />
  <code class="s">(specialization:int) GetSkillSpecializationC skillCode:int</code></p>
  
  <p><a id="SetSkillSpecialization" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSkillSpecialization">SetSkillSpecialization</a> - sets the skill's specialization as an integer. 0: Combat, 1: Magic, or 2: Stealth. <br />
  <code class="s">(nothing) SetSkillSpecialization skill:actorValue specialization:int</code></p>
  
  <p><a id="SetSkillSpecializationC" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSkillSpecializationC">SetSkillSpecializationC</a> - alternate version of SetSkillSpecialization taking an actor value code for the skill<br />
  <code class="s">(specialization:int) SetSkillSpecializationC skillCode:int specialization:int</code></p>
  
  <p><a id="ToggleSkillPerk" class="f" href="http://cs.elderscrolls.com/index.php?title=ToggleSkillPerk">ToggleSkillPerk</a> - turns the perk associated with the specified skill at the specified mastery level on or off. Currently, this command only supports toggling the Journeyman Block perk. Support for additional perks and skills may be added in the future. The mastery level is an integer from 0 (Novice) to 4 (Master).<br />
  <code class="s">(perkToggled:bool) ToggleSkillPerk skill:actorValue masteryLevel:int bEnablePerk:bool</code></p>
  
  <h3><a id="Soul_Gem">Soul Gem</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Inventory">Inventory</a>, <a href="#Named">Named</a>, <a href="#Simple">Simple</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Soul Level</strong> - the soul level currently captured in the soul gem<br />
  <strong>Capacity</strong> - the maximum soul level that can be captured in the soul gem</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetSoulLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSoulLevel">GetSoulLevel</a> - returns the soul level currently in the soul gem<br />
  <code class="s">(<a href="#Soul_Level">soulLevel</a>:int) GetSoulLevel objectID:ref</code></p>
  
  <p><a id="GetSoulGemCapacity" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSoulGemCapacity">GetSoulGemCapacity</a> - returns the max soul level the soul gem can contain<br />
  <code class="s">(<a href="#Soul_Level">soulLevel</a>:int) GetSoulGemCapacity objectID:ref</code></p>
  
  <p><a id="SetSoulLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSoulLevel">SetSoulLevel</a> - set the soul level of the soul gem<br />
  <code class="s">(nothing) SetSoulLevel <a href="#Soul_Level">soulLevel</a>:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetSoulGemCapacity" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSoulGemCapacity">SetSoulGemCapacity</a> - set the capacity level of the soul gem<br />
   <code class="s">(nothing) SetSoulGemCapacity <a href="#Soul_Level">soulLevel</a>:int objectID:ref</code></p>
  
  <p><a id="GetCurrentSoulLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentSoulLevel">GetCurrentSoulLevel</a> - returns the current soul level of the calling actor reference<br />
  <code class="s">(<a href="#Soul_Level">soulLevel</a>:int) GetCurrentSoulLevel</code></p>
  
  <h3><a id="Sound">Sound</a></h3>
  
  <h4>Functions:</h4>
  
  <p><a id="GetSoundAttenuation" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSoundAttenuation">GetSoundAttenuation</a> - returns the specified attenuation value for the specified sound, where the attenuation is "max", "min", or "static"<br />
  <code class="s">(attenuation:float) GetSoundAttenuation sound:ref whichAttenuation:string </code></p>
  
  <p><a id="SetSoundAttenuation" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSoundAttenuation">SetSoundAttenuation</a> - sets the specified attenuation value for the specified sound, where the attenuation is "max", "min", or "static"<br />
  <code class="s">(nothing) SetSoundAttenuation sound:ref whichAttenuation:string attenuation:float </code></p>
  
  <h3><a id="Spell">Spell</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Magic">Magic</a>, <a href="#Named">Named</a></p>
  
  <h4>Value:</h4>
  
  <p class="boxhl"><strong>Spell Type</strong> (<span class="op">short</span>) - the kind of spell. <a href="#Spell_Types">Spell Types</a><br />
  <strong>Magicka Cost</strong> (<span class="op">long</span>) - the cost in magicka for casting the spell<br />
  <strong>Mastery Level</strong> (<span class="op">short</span>) - the skill mastery level needed to cast the spell. <a href="#Spell_Mastery_Level">Spell Mastery Levels</a></p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetSpellType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellType">GetSpellType</a> - returns the spell type<br />
  <code class="s">(<a href="#Spell_Type">spellType</a>:int) GetSpellType spell:ref</code></p>
  
  <p><a id="SetSpellType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellType">SetSpellType</a> - sets the spell type<br />
  <code class="s">(nothing) SetSpellType <a href="#Spell_Type">nuType</a>:int spell:ref</code></p>
  
  <p><a id="GetSpellMagickaCost" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellMagickaCost">GetSpellMagickaCost</a> - returns the magicka casting cost according to the Oblivion formula. If called on a reference it will use the reference's magic skill values to determine the actual magicka cost of the spell. Without a reference it will return the base cost of the spell as reported in the CS.<br />
  <code class="s">(magickaCost:int) <span class="op">reference.</span>GetSpellMagickaCost spell:ref</code></p>
  
  <p><a id="SetSpellMagickaCost" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellMagickaCost">SetSpellMagickaCost</a> - sets the magicka casting cost<br />
  <code class="s">(nothing) SetSpellMagickaCost nuMagickaCost:int spell:ref</code></p>
  
  <p><a id="ModSpellMagickaCost" class="f" href="http://cs.elderscrolls.com/index.php?title=ModSpellMagickaCost">ModSpellMagickaCost</a> - modifies the magicka casting cost up or down<br />
  <code class="s">(nothing) ModSpellMagickaCost modifyBy:float spell:ref</code></p>
  
  <p><a id="GetSpellMasteryLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellMasteryLevel">GetSpellMasteryLevel</a> - returns the mastery level of the spell<br />
  <code class="s">(<a href="#Spell_Mastery_Level">masteryLevel</a>:int) GetSpellMasteryLevel spell:ref</code></p>
  
  <p><a id="SetSpellMasteryLevel" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellMasteryLevel">SetSpellMasteryLevel</a> - sets the mastery level of the spell<br />
  <code class="s">(nothing) SetSpellMasteryLevel <a href="#Spell_Mastery_Level">masteryLevel</a>:int objectID:ref</code></p>
  
  <p><a id="GetSpellSchool" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellSchool">GetSpellSchool</a> - returns the school of the spell, determined by the most expensive effect item<br />
  <code class="s">(magicSchool:int) GetSpellSchool spell:ref</code></p>
  
  <p><a id="GetSpellExplodesWithNoTarget" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellExplodesWithNoTarget">GetSpellExplodesWithNoTarget</a> - returns whether the touch spell explodes without a target<br />
  <code class="s">(spellExplodesWithNoTarget:bool) GetSpellExplodesWithNoTarget spell:ref</code></p>
  
  <p><a id="SetSpellExplodesWithNoTarget" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellExplodesWithNoTarget">SetSpellExplodesWithNoTarget</a> - sets whether the touch spell will explode without a target<br />
  <code class="s">(nothing) SetSpellExplodesWithNoTarget doesSpellExpode:bool spell:ref</code></p>
  
  <p><a id="GetSpellHostile" class="f" href="http://cs.elderscrolls.com/index.php?title=IsSpellHostile">IsSpellHostile</a> - returns 1 if the spell is considered hostile<br />
  <code class="s">(isHostile:bool) IsSpellHostile spell:ref</code></p>
  
  <p><a id="SetSpellHostile" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellHostile">SetSpellHostile</a> - toggles whether or not a spell is considered hostile<br />
  <code class="s">(nothing) SetSpellHostile spell:ref isHostile:bool</code></p>
  
  <p><a id="GetSpellPCStart" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellPCStart">GetSpellPCStart</a> - returns true if the PC Start flag is set for the specified spell<br />
  <code class="s">(bool) GetSpellPCStart spell:ref</code></p>
  
  <p><a id="GetSpellImmuneToSilence" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellImmuneToSilence">GetSpellImmuneToSilence</a> - returns true if the Immune to Silence flag is set for the specified spell<br />
  <code class="s">(bool) GetSpellImmuneToSilence spell:ref</code></p>
  
  <p><a id="GetSpellAreaEffectIgnoresLOS" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellAreaEffectIgnoresLOS">GetSpellAreaEffectIgnoresLOS</a> - returns true if the AE Ignores LOS flag is set for the specified spell<br />
  <code class="s">(bool) GetSpellAreaEffectIgnoresLOS spell:ref</code></p>
  
  <p><a id="GetSpellScriptEffectAlwaysApplies" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellScriptEffectAlwaysApplies">GetSpellScriptEffectAlwaysApplies</a> - returns true if the SEFF Always Applies flag is set for the specified spell<br />
  <code class="s">(bool) GetSpellScriptEffectAlwaysApplies spell:ref</code></p>
  
  <p><a id="GetSpellDisallowAbsorbReflect" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSpellDisallowAbsorbReflect">GetSpellDisallowAbsorbReflect</a> - returns true if the Disallow Absorb Reflect flag is set for the specified spell<br />
  <code class="s">(bool) GetSpellDisallowAbsorbReflect spell:ref</code></p>
  
  <p><a id="SetSpellPCStart" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellPCStart">SetSpellPCStart</a> - sets the PC Start flag for the specified spell<br />
  <code class="s">(nothing) SetSpellPCStart value:integer spell:ref</code></p>
  
  <p><a id="SetSpellImmuneToSilence" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellImmuneToSilence">SetSpellImmuneToSilence</a> - sets the Immune to Silence flag for the specified spell<br />
  <code class="s">(nothing) SetSpellImmuneToSilence value:integer spell:ref</code></p>
  
  <p><a id="SetSpellAreaEffectIgnoresLOS" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellAreaEffectIgnoresLOS">SetSpellAreaEffectIgnoresLOS</a> - sets the AE Ignores LOS flag for the specified spell<br />
  <code class="s">(nothing) SetSpellAreaEffectIgnoresLOS value:integer spell:ref</code></p>
  
  <p><a id="SetSpellScriptEffectAlwaysApplies" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellScriptEffectAlwaysApplies">SetSpellScriptEffectAlwaysApplies</a> - sets the SEFF Always Applies flag for the specified spell<br />
  <code class="s">(nothing) SetSpellScriptEffectAlwaysApplies value:integer spell:ref</code></p>
  
  <p><a id="SetSpellDisallowAbsorbReflect" class="f" href="http://cs.elderscrolls.com/index.php?title=SetSpellDisallowAbsorbReflect">SetSpellDisallowAbsorbReflect</a> - sets the Disallow Absorb Reflect flag for the specified spell<br />
  <code class="s">(nothing) SetSpellDisallowAbsorbReflect value:integer spell:ref</code></p>
  
  <h3><a id="Weapon">Weapon</a></h3>
  
  <h4>Qualities:</h4>
  
  <p class="boxhl"><a href="#Attacking">Attacking</a>, <a href="#Breakable">Breakable</a>, <a href="#Enchantable">Enchantable</a>, <a href="#Equippable">Equippable</a>, <a href="#Inventory">Inventory</a>, <a href="#Named">Named</a>, <a href="#Simple">Simple</a></p>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Reach</strong> (<span class="op">float</span>) - the distance from the wielder the weapon can reach<br />
  <strong>Weapon Type</strong> (<span class="op">short</span>) - the type of weapon<br />
  <strong>Poison</strong> (<span class="op">ref</span>) - the poison currently applied to the weapon</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetWeaponReach" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeaponReach">GetWeaponReach</a> - returns the reach of the weapon<br />
  <code class="s">(reach:float) <span class="op">reference</span>.GetWeaponReach <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetWeaponReach" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeaponReach">SetWeaponReach</a> - sets the reach of the weapon<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetWeaponReach nuReach:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="ModWeaponReach" class="f" href="http://cs.elderscrolls.com/index.php?title=ModWeaponReach">ModWeaponReach</a> - modifies the reach of the weapon up or down<br />
  <code class="s">(nothing) <span class="op">reference</span>.ModWeaponReach modifyBy:float <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetWeaponType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeaponType">GetWeaponType</a> - retuns the weapon type<br />
  <code class="s">(<a href="#Weapon_Type">weaponType</a>:int) <span class="op">reference</span>.GetWeaponType <span class="op">objectID:ref</span></code></p>
  
  <p><a id="SetWeaponType" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeaponType">SetWeaponType</a> - sets the weapon type<br />
  <code class="s">(nothing) <span class="op">reference</span>.SetWeaponType <a href="#Weapon_Type">weaponType</a>:int <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetEquippedWeaponPoison" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEquippedWeaponPoison">GetEquippedWeaponPoison</a> - returns the poison applied to the equipped weapon. Called on the weapon holder.<br />
  <code class="s">(poison:ref) reference.GetEquippedWeaponPoison</code></p>
  
  <p><a id="SetEquippedWeaponPoison" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEquippedWeaponPoison">SetEquippedWeaponPoison</a> - sets the poison applied to the equipped weapon and returns the previous poison.Called on the weapon holder.<br />
  <code class="s">(oldPoison:ref) reference.SetEquippedWeaponPoison nuPoison:ref</code></p>
  
  <p><a id="RemoveEquippedWeaponPoison" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveEquippedWeaponPoison">RemoveEquippedWeaponPoison</a> - removes and returns the poison applied to the equipped weapon. Called on the weapon holder.<br />
  <code class="s">(oldPoison:ref) reference.RemoveEquippedWeaponPoison</code></p>
  
  <h3><a id="Weather">Weather</a></h3>
  
  <h4>Values:</h4>
  
  <p class="boxhl"><strong>Wind Speed</strong> (<span class="op">short float</span>) - how windy it is; affects cloud and tree movement<br />
  <strong>Cloud Speed</strong> (<span class="op">shortfloat</span>) - how fast the clouds move; modified by wind speed<br />
  <strong>Trans Delta</strong> (<span class="op">short float</span>) - in game hours, how long it takes to fully transition into this weather type once a transition begins<br />
  <strong>Sun Glare</strong> (<span class="op">short float</span>) - how much glare there is around the sun disc<br />
  <strong>Sun Damage</strong> (<span class="op">short float</span>) - how much damage the sun does to vampires during daytime hours<br />
  <strong>Fog Distances</strong> (<span class="op">float</span>) - near and far clip planes for fog during different times of day<br />
  <strong><a href="#HDR_Value">HDR Values</a></strong> (<span class="op">float</span>) - see the <a href="http://cs.elderscrolls.com/index.php?title=Weather#HDR">CS Wiki page</a> for more information about these settings<br />
  <strong><a href="#Weather_Color">Weather Colors</a></strong> (<span class="op">float</span>) - the color of the weather for different <a href="#Weather_Time">weather times</a><br />
  <strong>Lightning Frequency</strong> (<span class="op">short</span>) - a value which determines the rate of lightning flashes; scaled from 1(high) to 255 (low)<br />
  *Note - short floats are stored internally as 0-255 but are exposed in the CS and through the API as a float</p>
  
  <h4>Functions:</h4>
  
  <p><a id="GetCurrentWeatherID" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentWeatherID">GetCurrentWeatherID</a> - returns the refID of the current weather<br />
  <code class="s">(currentWeather:ref) GetCurrentWeatherID </code></p>
  
  <p><a id="GetWeatherOverride" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherOverride">GetWeatherOverride</a> - returns the weather which is overriding the current weather as a result of the ForceWeather or SetWeather command with a non-zero "override" argument (for example, in the scripts which control weather near Oblivion gates), or zero if the weather is not being overridden. <br />
  <code class="s">(override:ref) GetWeatherOverride </code></p>
  
  <p><a id="GetWeatherWindSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherWindSpeed">GetWeatherWindSpeed</a> - returns the wind speed of the specified weather<br />
  <code class="s">(windSpeed:float) GetWeatherWindSpeed weather:ref</code><br />
  <code class="s">(windSpeed:float) GetWindSpeed weather:ref</code></p>
  
  <p><a id="SetWeatherWindSpeed" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherWindSpeed">SetWeatherWindSpeed</a> - sets the wind speed of the specified weather<br />
  <code class="s">(nothing) SetWeatherWindSpeed speed:float weather:ref</code><br />
  <code class="s">(nothing) SetWindSpeed speed:float weather:ref</code></p>
  
  <p><a id="GetWeatherCloudSpeedLower" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherCloudSpeedLower">GetWeatherCloudSpeedLower</a> - returns the speed of the lower cloud layer<br />
  <code class="s">(speed:float) GetWeatherCloudSpeedLower weather:ref</code><br />
  <code class="s">(speed:float) GetCloudSpeedLower weather:ref</code></p>
  
  <p><a id="SetWeatherCloudSpeedLower" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherCloudSpeedLower">SetWeatherCloudSpeedLower</a> - sets the speed of the lower cloud layer<br />
  <code class="s">(nothing) SetWeatherCloudSpeedLower speed:float weather:ref</code><br />
  <code class="s">(nothing) SetCloudSpeedLower speed:float weather:ref</code></p>
  
  <p><a id="GetWeatherCloudSpeedUpper" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherCloudSpeedUpper">GetWeatherCloudSpeedUpper</a> - returns the speed of the upper cloud layer<br />
  <code class="s">(speed:float) GetWeatherCloudSpeedUpper weather:ref</code><br />
  <code class="s">(speed:float) GetCloudSpeedUpper weather:ref</code></p>
  
  <p><a id="SetWeatherCloudSpeedUpper" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherCloudSpeedUpper">SetWeatherCloudSpeedUpper</a> - sets the speed of the upper cloud layer<br />
  <code class="s">(nothing) SetWeatherCloudSpeedUpper speed:float weather:ref</code><br />
  <code class="s">(nothing) SetCloudSpeedUpper speed:float weather:ref</code></p>
  
  <p><a id="GetWeatherTransDelta" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherTransDelta">GetWeatherTransDelta</a> - returns the transition delta of the weather<br />
  <code class="s">(transDelta:float) GetWeatherTransDelta weather:ref</code><br />
  <code class="s">(transDelta:float) GetTransDelta weather:ref</code></p>
  
  <p><a id="SetWeatherTransDelta" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherTransDelta">SetWeatherTransDelta</a> - sets the transition delta of the weather<br />
  <code class="s">(nothing) SetWeatherTransDelta transDelta:float weather:ref</code><br />
  <code class="s">(nothing) SetTransDelta transDelta:float weather:ref</code></p>
  
  <p><a id="GetWeatherSunGlare" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherSunGlare">GetWeatherSunGlare</a> - returns the sun glare<br />
  <code class="s">(sunGlare:float) GetWeatherSunGlare weather:ref</code><br />
  <code class="s">(sunGlare:float) GetSunGlare weather:ref</code></p>
  
  <p><a id="SetWeatherSunGlare" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherSunGlare">SetWeatherSunGlare</a> - sets the sun glare<br />
  <code class="s">(nothing) SetWeatherSunGlare sunGlare:float weather:ref</code><br />
  <code class="s">(nothing) SetSunGlare sunGlare:float weather:ref</code></p>
  
  <p><a id="GetWeatherSunDamage" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherSunDamage">GetWeatherSunDamage</a> - returns the sun damage<br />
  <code class="s">(sunDamage:float) GetWeatherSunDamage weather:ref</code><br />
  <code class="s">(sunDamage:float) GetSunDamage weather:ref</code></p>
  
  <p><a id="SetWeatherSunDamage" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherSunDamage">SetWeatherSunDamage</a> - sets the sun damage<br />
  <code class="s">(nothing) SetWeatherSunDamage sunDamage:float weather:ref</code><br />
  <code class="s">(nothing) SetSunDamage sunDamage:float weather:ref</code></p>
  
  <p><a id="GetWeatherFogDayNear" class="f" href="http://cs.elderscrolls.com/index.php?title=">GetWeatherFogDayNear</a> - returns the daytime near fog distance<br />
  <code class="s">(fogDistance:float) GetWeatherFogDayNear weather:ref</code><br />
  <code class="s">(fogDistance:float) GetFogDayNear weather:ref</code></p>
  
  <p><a id="SetWeatherFogDayNear" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherFogDayNear">SetWeatherFogDayNear</a> - sets the daytime near fog distance<br />
  <code class="s">(nothing) SetWeatherFogDayNear fogDistance:float weather:ref</code><br />
  <code class="s">(nothing) SetFogDayNear fogDistance:float weather:ref</code></p>
  
  <p><a id="GetWeatherFogDayFar" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherFogDayFar">GetWeatherFogDayFar</a> - returns the daytime far fog distance<br />
  <code class="s">(fogDistance:float) GetWeatherFogDayFar weather:ref</code><br />
  <code class="s">(fogDistance:float) GetFogDayFar weather:ref</code></p>
  
  <p><a id="SetWeatherFogDayFar" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherFogDayFar">SetWeatherFogDayFar</a>- sets the daytime far fog distance<br />
  <code class="s">(nothing)SetWeatherFogDayFar fogDistance:float weather:ref</code><br />
  <code class="s">(nothing)SetFogDayFar fogDistance:float weather:ref</code></p>
  
  <p><a id="GetWeatherFogNightNear" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherFogNightNear">GetWeatherFogNightNear</a> - returns the nighttime near fog distance<br />
  <code class="s">(fogDistance:float)GetWeatherFogNightNear weather:ref</code><br />
  <code class="s">(fogDistance:float)GetFogNightNear weather:ref</code></p>
  
  <p><a id="SetWeatherFogNightNear" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherFogNightNear">SetWeatherFogNightNear</a> - sets the nighttime near fog distance<br />
  <code class="s">(nothing)SetWeatherFogNightNear fogDistance:float weather:ref</code><br />
  <code class="s">(nothing)SetFogNightNear fogDistance:float weather:ref</code></p>
  
  <p><a id="GetWeatherFogNightFar" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherFogNightFar">GetWeatherFogNightFar</a> - returns the nighttime far fog distance<br />
  <code class="s">(fogDistance:float)GetWeatherFogNightFar weather:ref</code><br />
  <code class="s">(fogDistance:float)GetFogNightFar weather:ref</code></p>
  
  <p><a id="SetWeatherFogNightFar" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherFogNightFar">SetWeatherFogNightFar</a> - sets the nighttime far fog distance<br />
  <code class="s">(nothing)SetWeatherFogNightFar fogDistance:float weather:ref</code><br />
  <code class="s">(nothing)SetFogNightFar fogDistance:float weather:ref</code></p>
  
  <p><a id="GetWeatherHDRValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherHDRValue">GetWeatherHDRValue</a> - returns the specified HDR value for the weather<br />
  <code class="s">(hdrValue:float) GetWeatherHDRValue <a href="#HDR_Value">whichHDRValue</a>:int weather:ref</code><br />
  <code class="s">(hdrValue:float) GetHDRValue <a href="#HDR_Value">whichHDRValue</a>:int weather:ref </code></p>
  
  <p><a id="SetWeatherHDRValue" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherHDRValue">SetWeatherHDRValue</a> - sets the specified HDR value for the weather<br />
  <code class="s">(oldHDRValue:float) SetWeatherHDRValue nuVal:float <a href="#HDR_Value">whichHDRValue</a>:int weather:int</code><br />
  <code class="s">(oldHDRValue:float) SetHDRValue nuVal:float <a href="#HDR_Value">whichHDRValue</a>:int weather:int</code></p>
  
  <p><a id="GetWeatherColor" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherColor">GetWeatherColor</a> - returns the red, green or blue value of the specified weather color at the specified weather time<br />
  <code class="s">(color:int) GetWeatherColor <a href="#RGB_Value">rgb</a>:int <a href="#Weather_Color">whichColor</a>:int weather:ref <ahref="#Weather_Time"><span class="op">whichTime:int</span></a></code></p>
  
  <p><a id="SetWeatherColor" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherColor">SetWeatherColor</a> - sets the red, green and blue values for the specified weather color at the specified weather time<br />
  <code class="s">(nothing) SetWeatherColor red:int green:int blue:int <a href="#Weather_Color">whichColor</a>:int weather:ref <a href="#Weather_Time"><span class="op">whichTime:int</span></a></code></p>
  
  <p><a id="GetWeatherLightningFrequency" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherLightningFrequency">GetWeatherLightningFrequency</a> - returns the frequency of the lightning<br />
  <code class="s">(frequency:int) GetWeatherLightningFrequency weather:ref</code><br />
  <code class="s">(frequency:int) GetLightningFrequency weather:ref</code></p>
  
  <p><a id="SetWeatherLightningFrequency" class="f" href="http://cs.elderscrolls.com/index.php?title=SetWeatherLightningFrequency">SetWeatherLightningFrequency</a> - sets the frequency of the lightning<br />
  <code class="s">(nothing) SetWeatherLightningFrequency frequency:int weather:ref</code><br />
  <code class="s">(nothing) SetLightningFrequency frequency:int weather:ref</code></p>
  
  <p><a id="GetWeatherClassification" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWeatherClassification">GetWeatherClassification</a> - returns the precipitation <a href="#Weather_Classifications">classification</a> of the weather as defined in the editor<br />
  <code class="s">(classification:int) GetWeatherClassification weather:ref</code></p>
  
  <h2><a id="General_Functions">General Functions</a></h2>
  
  <p><a id="IsDoor" class="f" href="http://cs.elderscrolls.com/index.php?title=IsDoor">IsDoor</a> - returns whether the calling reference or passed objectID is a door<br />
  <code class="s">(isDoor:bool) <span class="op">reference</span>.IsDoor <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsFurniture" class="f" href="http://cs.elderscrolls.com/index.php?title=IsFurniture">IsFurniture</a> - returns whether the calling reference or passed objectID is furniture<br />
  <code class="s">(isFurniture:bool) <span class="op">reference</span>.IsFurniture <span class="op">objectID:ref</span></code></p>
  
  <p><a id="IsActivator" class="f" href="http://cs.elderscrolls.com/index.php?title=IsActivator">IsActivator</a> - returns whether the calling reference or passed objectID is an activator<br />
  <code class="s">(isActivator:bool) <span class="op">reference</span>.IsActivator <span class="op">objectID:ref</span></code></p>
  
  <p><a id="GetGameLoaded" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGameLoaded">GetGameLoaded</a> - returns 1 if a saved game was loaded or a new game was started since the last time this call was made. This command returns true once per game load/start for each script that uses it.<br />
  <code class="s">(gameLoaded:bool) GetGameLoaded</code></p>
  
  <p><a id="GetGameRestarted" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGameRestarted">GetGameRestarted</a> - returns 1 if Oblivion was exited and restarted since the last time this call was made from the calling script. Use this condition to reset or undo changes made by OBSE functions which are not stored in the savegame.<br />
  <code class="s">(gameRestarted:bool) GetGameRestarted</code></p>
  
  <p><a id="GetOBSEVersion" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOBSEVersion">GetOBSEVersion</a> - returns the version number of OBSE<br />
  <code class="s">(obseVersion:int) GetOBSEVersion</code></p>
  
  <p><a id="GetOBSERevision" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOBSERevision">GetOBSERevision</a> - returns the minor version number of OBSE. For instance, when running the second released version of v0014, this function returns 2.<br />
  <code class="s">(obseRevision:int) GetOBSERevision</code></p>
  
  <p><a id="SetNumericGameSetting" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNumericGameSetting">SetNumericGameSetting</a> - sets the specified game setting to the following variable or direct value<br />
  <code class="s">(nothing) SetNumericGameSetting gameSettingName:string value:float</code></p>
  
  <p><a id="GetStringGameSetting" class="f" href="http://cs.elderscrolls.com/index.php?title=GetStringGameSetting">GetStringGameSetting</a> - returns the string value of a game setting<br />
  <code class="s">(setting:string_var) GetStringGameSetting settingName:string</code></p>
  
  <p><a id="SetStringGameSettingEX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetStringGameSettingEX">SetStringGameSettingEX</a> - sets the string value of a game setting. The new string value is contained within the format string, following the setting name and separated by a pipe character, i.e. <code>"nameOfGameSetting|newValueOfGameSetting"</code>. When calling from the console, use '@' instead of the pipe character.<br />
  <code class="s">(nothing) SetStringGameSettingEX settingNameAndNewValue:<a href="#Format_Specifiers">formatString</a></code></p>
  
  <p><a id="GetNumericINISetting" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumericINISetting">GetNumericINISetting</a> - returns the specified ini setting<br />
  <code class="s">(setting:float) GetNumericINISetting iniSettingName:string</code></p>
  
  <p><a id="SetNumericINISetting" class="f" href="http://cs.elderscrolls.com/index.php?title=SetNumericINISetting">SetNumericINISetting</a> - sets the specified ini setting to the following variable or direct value<br />
  <code class="s">(nothing) SetNumericINISetting iniSettingName:string value:float</code></p>
  
  <p><a id="GetStringIniSetting" class="f" href="http://cs.elderscrolls.com/index.php?title=GetStringINISetting">GetStringINISetting</a> - returns the value of a string ini setting<br />
  <code class="s">(setting:string_var) GetStringINISetting settingName:<a href="#Format_Specifiers">formatString</a></code></p>
  
  <p><a id="SetStringIniSetting" class="f" href="http://cs.elderscrolls.com/index.php?title=SetStringINISetting">SetStringINISetting</a> - sets the ini setting to the specified string. Pass both arguments as a single string of the format "settingName|newValue". If called from the console, use the "@" character in place of the pipe character.<br />
  <code class="s">(nothing) SetStringINISetting settingNameAndValue:<a href="#Format_Specifiers">formatString</a></code></p>
  
  <p><a id="GetFPS" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFPS">GetFPS</a> - returns the frames per second of the game<br />
  <code class="s">(fps:float) GetFPS</code></p>
  
  <p><a id="IsThirdPerson" class="f" href="http://cs.elderscrolls.com/index.php?title=IsThirdPerson">IsThirdPerson</a> - returns whether the point of view is 3rd person or not<br />
  <code class="s">(isThirdPerson:bool) IsThirdPerson</code></p>
  
  <p><a id="IsGlobalCollisionDisabled" class="f" href="http://cs.elderscrolls.com/index.php?title=IsGlobalCollisionDisabled">IsGlobalCollisionDisabled</a> - returns whether collision is disabled<br />
  <code class="s">(isDisabled:bool) IsGlobalCollisionDisabled</code></p>
  
  <p><a id="SetDisableGlobalCollision" class="f" href="http://cs.elderscrolls.com/index.php?title=SetDisableGlobalCollision">SetDisableGlobalCollision</a> - sets whether to disable the global collision or not<br />
  <code class="s">(nothing) SetDisableGlobalCollision toDisableOrNot:bool</code></p>
  
  <p><a id="RunBatchScript" class="f" href="http://cs.elderscrolls.com/index.php?title=RunBatchScript">RunBatchScript</a> - runs a specified text file under the Oblivion directory as a script. Works the same as the console function <code>bat.</code> The optional second parameter causes the script to execute on the calling object, if any. The optional third parameter prevents any output from appearing in the console while the script executes.<br />
  <code class="s">(nothing) <span class="op">reference.</span>RunBatchScript <span class="op">bRunOnRef:bool bSuppressOutput:bool</span></code></p>
  
  <p><a id="IsPluginInstalled" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPluginInstalled">IsPluginInstalled</a> - returns whether a given plugin is installed<br />
  <code class="s">(isInstalled:bool) IsPluginInstalled pluginName:string</code></p>
  
  <p><a id="GetPluginVersion" class="f" href="http://cs.elderscrolls.com/index.php?title=GetPluginVersion">GetPluginVersion</a> - returns the version of the specified plugin<br />
  <code class="s">(version:int) GetPluginVersion pluginName:string</code></p>
  
  <p><a id="GetDebugSelection" class="f" href="http://cs.elderscrolls.com/index.php?title=GetDebugSelection">GetDebugSelection</a> - returns the reference to the item last selected in the console<br />
  <code class="s">(selection:ref) GetDebugSelection</code></p>
  
  <p><a name="GetSoundPlaying" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSoundPlaying">GetSoundPlaying</a> - If no parameters are passed, then it dumps a list of the currently playing sounds and actors making sound to obse.log (this may change). If a string is passed, then it returns the number of times the specified sound is playing. The string may contain wildcards:<!-- missing operator? --> matches several characters, and ? matches one character. If a reference is passed in, then the search is restricted to that reference, returning  the number of times it is playing that sound. Some sounds are not associated with objects, so if you pass in a "fuzzy check radius" parameter, it returns the number of times the sound is playing within the specified radius around the reference.<br />
  <code class="s">(playingCount:int) <span class="op">reference.</span>GetSoundPlaying <span class="op">soundName:string fuzzyCheckRadius:float</span></code></p>
  
  <p><a id="RunScriptLine" class="f" href="http://cs.elderscrolls.com/index.php?title=RunScriptLine">RunScriptLine</a> - runs a line of script as if it were called from the console. If bRunOnRef is 1, the line of script will be executed on the calling object, if any. If bSuppressOutput is true, no output will be generated in the console while the script line is executing.<br />
  <code class="s">(nothing) <span class="op">reference.</span>RunScriptLine <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20 bRunOnRef:bool bSuppressOutput:bool</span></code></p>
  
  <p><a id="GetFormFromMod" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFormFromMod">GetFormFromMod</a> - attempts to look up and return a form defined in another mod, prepending the two-digit mod index to the formID. The formID is passed in hexadecimal format, i.e. 0001A46B. The first two digits of the formID are ignored and can be omitted. The file name must include the file extension. Pass "NONE" as the file name to look up a dynamic form in the saved game (mod index 0xFF, for example cloned forms).<br />
  <code class="s">(form:ref) GetFormFromMod modFileName:string formID:hexString</code></p>
  
  <p><a id="ToggleFirstPerson" class="f" href="http://cs.elderscrolls.com/index.php?title=ToggleFirstPerson">ToggleFirstPerson</a> - toggles the player's POV to first or third person. Passing 1 enables first person view, 0 enables third person.<br />
  <code class="s">(nothing) ToggleFirstPerson toFirstPerson:bool</code></p>
  
  <p><a id="GetLastCreatedSpell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastCreatedSpell">GetLastCreatedSpell</a> - returns the spell most recently created by the player during the current game session<br />
  <code class="s">(spell:ref) GetLastCreatedSpell</code></p>
  
  <p><a id="GetLastEnchantedItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastEnchantedItem">GetLastEnchantedItem</a> - returns the enchanted item most recently created by the player during the current game session<br />
  <code class="s">(item:ref) GetLastEnchantedItem</code></p>
  
  <p><a id="GetLastCreatedPotion" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastCreatedPotion">GetLastCreatedPotion</a> - returns the potion most recently created by the player during the current game session<br />
  <code class="s">(potion:ref) GetLastCreatedPotion</code></p>
  
  <p><a id="GetLastUniqueCreatedPotion" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastUniqueCreatedPotion">GetLastUniqueCreatedPotion</a> - returns the last <span class="op">unique</span> potion created by the player. The game remembers which potions the player has created in the past. The first time the player creates apotion of a given magnitude and effects, that potion will be returned by GetLastUniqueCreatedPotion. Subsequently, creating a potion of the same effects and magnitude will not create a unique potion and so the potion will not be returned by this command.<br />
  <code class="s">(potion:ref) GetLastUniqueCreatedPotion</code></p>
  
  <p><a id="IsConsoleOpen" class="f" href="http://cs.elderscrolls.com/index.php?title=IsConsoleOpen">IsConsoleOpen</a> - returns 1 if the console is currently open<br />
  <code class="s">(open:bool) IsConsoleOpen</code></p>
  
  <p><a id="LoadGameEx" class="f" href="http://cs.elderscrolls.com/index.php?title=LoadGameEx">LoadGameEx</a> - attempts to load the saved game with the specified name<br />
  <code class="s">(nothing) LoadGameEx <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span></code></p>
  
  <p><a id="ActorValueToString" class="f" href="http://cs.elderscrolls.com/index.php?title=ActorValueToString">ActorValueToString</a> - converts an actor value to its localized name<br />
  <code class="s">(actorValueName:string) ActorValueToString toConvert:actorValue</code><br />
  <code class="s">(actorValueName:string) AVString toConvert:actorValue</code></p>
  
  <p><a id="ActorValueToStringC" class="f" href="http://cs.elderscrolls.com/index.php?title=ActorValueToStringC">ActorValueToStringC</a> - converts an <a href="#Actor_Value_Codes">actor value code</a> to its localized name<br />
  <code class="s">(actorValueName:string) ActorValueToStringC toConvert:actorValueCode</code></p>
  
  <p><a id="StringToActorValue" class="f" href="http://cs.elderscrolls.com/index.php?title=StringToActorValue">StringToActorValue</a> - converts the name of an actor value into the actor value code itself<br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValue</a>:int) StringToActorValue toConvert:string</code><br />
  <code class="s">(<a href="#Actor_Value_Codes">actorValue</a>:int) StringAV toConvert:string</code></p>
  
  <p><a id="GetEditorID" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEditorID">GetEditorID</a> - attempts to retrieve the editorID for the specified object. EditorIDs for most forms are not loaded at run-time. Currently this function only returns editor IDs for cells and quests - for other types, returns the formID as a string. If the second argument is non-zero, however, returns an empty string instead of the formID.<br />
  <code class="s">(editorID:string) GetEditorID object:ref <span class="op">noFormID:bool</span></code></p>
  
  <p><a id="GetFormIDString" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFormIDString">GetFormIDString</a> - returns the formID of the specified object as a hexadecimal string. If the object cannot be found in memory (for example, a non-persistent reference), returns "00000000"<br />
  <code class="s">(formID:string) <span class="op">reference.</span>GetFormIDString <span class="op">object:ref</span></code></p>
  
  <p><a id="GetRawFormIDString" class="f" href="http://cs.elderscrolls.com/index.php?title=GetRawFormIDString">GetRawFormIDString</a> (GetFormIDString2) - returns the formID stored in an array element or ref variable as a hexadecimal string. Unlike GetFormIDString, this command does not care if  the formID is valid.<br />
  <code class="s">(formID:string) GetRawFormIDString object:ref</code></p>
  
  <p><a id="GetUserTime" class="f" href="http://cs.elderscrolls.com/index.php?title=GetUserTime">GetUserTime</a> - returns a StringMap containing information about the time and date on the player's system<br />
  <code class="s">(userTime:StringMap) GetUserTime</code></p>
  
  <p>The returned StringMap has the following key/value pairs, all of which are integers:</p><ul>
    <li>Year (1601 - 30827)</li>
    <li>Month (1-12)</li>
    <li>DayOfWeek (1:Sunday - 7:Saturday)</li>
    <li>Day (1-31)</li>
    <li>Hour (0-23)</li>
    <li>Minute (0-59)</li>
    <li>Second (0-59)</li>
    <li>Millisecond (0-999)</li>
  </ul>
  
  <p><a id="ActorValueToCode" class="f" href="http://cs.elderscrolls.com/index.php?title=ActorValueToCode">ActorValueToCode</a> - given an actor value name, returns the corresponding <a href="#Actor_Value_Codes">actor value code</a><br />
  <code class="s">(code:int) ActorValueToCode toConvert:actorValue</code></p>
  
  <p><a id="GetGameDifficulty" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGameDifficulty">GetGameDifficulty</a> - returns the current difficulty level of the game as a float from -1.0 to 1.0, with higher values corresponding to greater difficulty.<br />
  <code class="s">(difficulty:float) GetGameDifficulty</code></p>
  
  <p><a id="SetGameDifficulty" class="f" href="http://cs.elderscrolls.com/index.php?title=SetGameDifficulty">SetGameDifficulty</a> - sets the current difficulty level of the game as a float from -1.0 to 1.0, with higher values corresponding to greater difficulty. Values outside of the valid range are ignored.<br />
  <code class="s">(nothing) SetGameDifficulty difficulty:float</code></p>
  
  <p><a id="GetOblivionDirectory" class="f" href="http://cs.elderscrolls.com/index.php?title=GetOblivionDirectory">GetOblivionDirectory</a> - returns the full path to the user's Oblivion install<br />
  <code class="s">(directory:string) GetOblivionDirectory</code></p>
  
  <p><a id="GetWaterShader" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWaterShader">GetWaterShader</a> - returns information about the current water shader given a string representing one of the water shader properties. Supports the same property names as the ModWaterShader console command: "direction", "velocity", "frequency", "amplitude", "fresnel", "reflectivity", "opacity", "blend", "scrollx", "scrolly", "rainforce", "rainvelocity", "rainfalloff", "rainsize", "displaceforce", "displacevelocity", "displacefalloff", and "displacedampener".<br />
  <code class="s">(shaderValue:float) GetWaterShader propertyName:string</code></p>
  
  <p><a id="GetGridsToLoad" class="f" href="http://cs.elderscrolls.com/index.php?title=GetGridsToLoad">GetGridsToLoad</a> - returns the effective value of the uGridsToLoad ini setting. This value is specified in Oblivion.ini but adjusted by the game during play.<br />
  <code class="s">(gridsToLoad:int) GetGridsToLoad</code></p>
  
  <p><a id="SetOLMPGrids" class="f" href="http://cs.elderscrolls.com/index.php?title=SetOLMPGrids">SetOLMPGrids</a> - specifies the number of grids that a call to OutputLocalMapPicturesOverride should use when generating local map pictures. The value passed in must be smaller than the effective value of the uGridsToLoad ini setting, which can be obtained with GetGridsToLoad. All subsequent calls to OutputLocalMapPicturesOverride will use the new value.<br />
  <code class="s">(valueSet:bool) SetOLMPGrids grids:int</code></p>
  
  <p><a id="OutputLocalMapPicturesOverride" class="f" href="http://cs.elderscrolls.com/index.php?title=OutputLocalMapPicturesOverride">OutputLocalMapPicturesOverride</a> - this command is identical to the console command OutputLocalMapPictures, except it uses the number of grids specified by the last call to SetOLMPGrids when generating the maps.<br />
  <code class="s">(nothing) OutputLocalMapPicturesOverride</code><br />
  <code class="s">(nothing) OLMPOR</code></p>
  
  <p><a id="GetWorldSpaceParentWorldSpace" class="f" href="http://cs.elderscrolls.com/index.php?title=GetWorldSpaceParentWorldSpace">GetWorldSpaceParentWorldSpace</a> - returns a worldspace's parent worldspace<br />
  <code class="s">(worldspace:ref) GetWorldSpaceParentWorldSpace worldspace:ref</code><br />
  <code class="s">(worldspace:ref) GetWorldParentWorld worldspace:ref</code></p>
  
  <p><a id="GlobalVariableExists" class="f" href="http://cs.elderscrolls.com/index.php?title=GlobalVariableExists">GlobalVariableExists</a> - returns 1 if a global variable exists with the specified editorID<br />
  <code class="s">(globalVariableExists:bool) GlobalVariableExists variableEditorID:string</code></p>
  
  <p><a id="GetCellChanged" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCellChanged">GetCellChanged</a> -returns 1 if the player has entered a new cell since the last time the command was called from the calling script, including transitioning from one exterior cell to another.<br />
  <code class="s">(cellChanged:bool) GetCellChanged</code></p>
  
  <p><a id="ResolveModIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=ResolveModIndex">ResolveModIndex</a> - Attempts to resolve a mod index which was stored during a previous game session to account for any changes to the user's load order. Given the stored mod index for a mod, returns the mod index currently associated with that same mod, or -1 if the index could not be resolved (for instance, because the mod is no longer loaded).<br />
  <code class="s">(resolvedModIndex:int) ResolveModIndex storedModIndex:int</code></p>
  
  <h2><a id="Cloning_Functions">Cloning Functions</a></h2>
  
  <p>The cloning functions are special. They are declared as taking Inventory Objects so any inventory object can be passed as a raw name from the CS. However you can clone any form by first assigning it to a ref and then passing that ref to CloneForm.</p>
  
  <p><a id="CloneForm" class="f" href="http://cs.elderscrolls.com/index.php?title=CloneForm">CloneForm</a> - creates and returns a new base object that is an exact copy of the passed objectID<br />
  <code class="s">(clonedForm:ref) CloneForm objectID:ref</code></p>
  
  <p>Examples:</p><pre>	ref clonedInventoryItem
    ref clonedSpell
    ref originalSpell
    set clonedInventoryItem to CloneForm WeapSteelShortsword
    set originalSpell to StandardCalmTouch1Novice
    set clonedSpell to CloneForm originalSpell</pre>
  
  <p><a id="IsClonedForm" class="f" href="http://cs.elderscrolls.com/index.php?title=IsClonedForm">IsClonedForm</a> - returns whether the passed objectID is a cloned form or not. A cloned form is saved as part of the save game. Instances of cloned forms are player created potions, spells and enchanted items<br />
  <code class="s">(isCloned:bool) IsClonedForm objectID:ref</code></p>
  
  <h2><a id="Flow_Control_Functions">Flow Control Functions</a></h2>
  
  <p>OBSE supports several types of commands for altering the flow of execution within a script. The simplest are <code>Label</code> and <code>Goto</code>, which allow unconditional jumps from one location in a script to a previous location. <code>While</code> loops cause execution to remain within the loop until the specified expression becomes false. <code>ForEach</code> loops iterate over the elements of an array or string.</p>
  
  <p><code>ForEach</code> and <code>While</code> loops both define structured blocks in the same way that <code>if</code> and <code>endif</code> or <code>begin</code> and <code>end</code> do. Every <code>While</code> or <code>ForEach</code> in a script must be matched by exactly one <code>Loop</code> command.</p>
  
  <p>Examples of good and bad loops:</p><pre>	while (expr)
      do stuff
    loop		; good</pre><pre>	while (expr)
    if (something)
      loop  ; BAD, Loop must be on same level of indentation as While
    endif</pre>
  
  <p><code>Break</code> and <code>Continue</code> statements are only valid within a loop body. <code>Goto</code> should never be used within a loop body to jump to a label defined outside of the loop's body.</p>
  
  <p><a id="SaveIP" class="f" href="http://cs.elderscrolls.com/index.php?title=SaveIP">Label</a> - save the location of the command following the <code>SaveIP</code> command<br />
  <code class="s">(nothing) SaveIP <span class="op">slot:int</span></code><br />
  <code class="s">(nothing) Label <span class="op">slot:int</span></code></p>
  
  <p><a id="RestoreIP" class="f" href="http://cs.elderscrolls.com/index.php?title=RestoreIP">Goto</a> - jump to a previously saved location<br />
  <code class="s">(nothing) RestoreIP <span class="op">slot:int</span></code><br />
  <code class="s">(nothing) Goto <span class="op">slot:int</span></code></p>
  
  <p><a id="While" class="f" href="http://cs.elderscrolls.com/index.php?title=While">While</a> - evaluates an OBSE expression. If the expression is true, the statements following it will be executed until the next <code>Loop</code> command, at which point control returns to the top of the loop and the expression is evaluated again.<br />
  <code class="s">(nothing) While <span class="op">expression</span></code></p>
  
  <p><a id="ForEach" class="f" href="http://cs.elderscrolls.com/index.php?title=ForEach">ForEach</a> - <code>ForEach</code> is used to iterate over the elements of an array, the characters in a string, or references to objects in a container. The syntax <code>ForEach item &lt;- collection</code> is used to indicate the variable (&quot;<code>item</code>&quot;) which will hold the current element and the string, array, or container reference (&quot;<code>collection</code>&quot;) from which elements will be drawn. On loop entry, <code>item</code> is set to the first element in <code>collection</code>. When the next <code>Loop</code> command is encountered, <code>item</code> is set to the next element in <code>collection</code> and execution returns to the top of the loop. The loop terminates when all elements have been returned. The type of <code>item</code> varies based on the type of <code>collection</code>.</p>
  
  <p>For arrays, <code>item</code> is an array_var, specifically a StringMap. The loop will initialize <code>item</code> with two elements: "key", which holds the key of the current element, and "value", which holds the value associated with that key. Within a <code>ForEach</code> loop you can access both fields via <code>item["key"]</code> and <code>item["value"]</code>. Once the loop terminates, <code>item</code> is reset to an uninitialized array.<br />
  <code class="s">(nothing) ForEach iterator:array_var &lt;- sourceArray:array</code></p>
  
  <p>For strings, <code>item</code> is a string_var. The loop initializes <code>item</code> to the first character in the string; on each successive iteration <code>item</code> contains the next character in the string.<br />
  <code class="s">(nothing) ForEach iterator:string_var &lt;- sourceString:string</code></p>
  
  <p>For containers, <code>item</code> is a ref variable. See the section on <a href="#Inventory_Reference">Inventory References</a> for details on the usage.<br />
  <code class="s">(nothing) ForEach iterator:ref_var &lt;- sourceContainer:ref</code></p>
  
  <p><a id="Loop" class="f" href="http://cs.elderscrolls.com/index.php?title=Loop">Loop</a> - Returns execution to the most recent <code>While</code> or <code>ForEach</code> command. The loop condition is evaluated and if it passes, execution continues inside the body of the loop. Otherwise, execution returns to the instruction immediately following the <code>Loop</code> command.<br />
  <code class="s">(nothing) Loop</code></p>
  
  <p><a id="Break" class="f" href="http://cs.elderscrolls.com/index.php?title=Break">Break</a> - Must be called inside of a <code>ForEach</code> or <code>While</code> loop. <code>Break</code> causes the loop to exit immediately, forcing execution to jump to the instruction immediately following the next <code>Loop</code> command.<br />
  <code class="s">(nothing) Break</code></p>
  
  <p><a id="Continue" class="f" href="http://cs.elderscrolls.com/index.php?title=Continue">Continue</a> - Must be called inside of a <code>ForEach</code> or <code>While</code> loop. <code>Continue</code> skips the rest of the body of a loop, returning execution to the top of the loop and evaluating the loop condition. If the condition passes, execution enters the loop body, otherwise the loop terminates and continues from the instruction following the corresponding <code>Loop</code> command.<br />
  <code class="s">(nothing) Continue</code></p>
  
  <h2><a id="Ref_Walking_Functions">Ref Walking Functions</a></h2>
  
  <p><a id="GetFirstRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFirstRef">GetFirstRef</a> - returns the first reference in the current cell. A type can optionally be supplied to return only references matching that type. Additionally, you can pass 69 for actors and 70 for inventory items. This function should only be used either within a <code>Label...Goto</code> loop or within <code>While</code> loop and use <code>GetNextRef</code> for getting next element. An optional cell depth can be supplied to specify the number of adjacent cells to scan in exteriors: a cell depth of 0 scans only the player's current cell, a cell depth of 1 scans the player's current cell plus 8 adjacent cells, a depth of 2 scans the player's cell plus 24 adjacent cells, etc... By default, inactive references to items which were previously picked up by an actor are ignored; passing 1 for the third parameter will force those references to be included (WARNING! Some people have reported that it's not working that way).<br />
  <code class="s">(reference:ref) GetFirstRef <span class="op"><a href="#Form_Type_IDs">type</a>:int cellDepth:int includeInactiveRefs:int</span></code></p>
  
  <p><a id="GetNextRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNextRef">GetNextRef</a> - returns the next reference in the curent cell. <code>GetFirstRef</code> must be called first; this function uses the cell depth and type passed to <code>GetFirstRef</code> and returns the next reference matching that type, or zero after the last reference has been returned. This function should only be used either within a <code>Label...Goto</code> loop or within <code>While</code> loop.<br />
  <code class="s">(reference:ref) GetNextRef</code></p>
  
  <p><a id="GetNumRefs" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumRefs">GetNumRefs</a> - returns the number of references in the current cell which match the optionally supplied type code. Use 69 for actors and 70 for inventory items. An optional cell depth can be specified for exteriors. By default, inactive references to items which were previously picked up by an actor are ignored; passing 1 for the third parameter will force those references to be included.<br />
  <code class="s">(numRefs:int) GetNumRefs <span class="op"><a href="#Form_Type_IDs">type</a>:int cellDepth:int includeInactiveRefs:int</span></code></p>
  
  <p><a id="GetFirstRefInCell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetFirstRefInCell">GetFirstRefInCell</a> - Works the same as <code>GetFirstRef</code> but takes an additional parameter specifying the cell to scan. Note that if the specified is not loaded in memory, this function will only return persistent references. Use <code>GetNextRef</code> to iterate through the rest of the references in the cell.<br />
  <code class="s">(reference:ref) GetFirstRefInCell cell:ref <span class="op"><a href="#Form_Type_IDs">type</a>:int cellDepth:int  includeInactiveRefs:int</span></code></p>
  
  <p><a id="GetNumRefsInCell" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumRefsInCell">GetNumRefsInCell</a> - Works the same as <code>GetNumRefs</code> but takes an additional parameter specifying the cell to scan. Only counts persistent references if the cell is not loaded in memory.<br />
  <code class="s">(numRefs:int) GetNumRefsInCell cell:ref <span class="op"><a href="#Form_Type_IDs">type</a>:int cellDepth:int includeInactiveRefs:int</span></code></p>
  
  <p><a id="GetHighActors" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHighActors">GetHighActors</a> - returns an Array containing all actors currently in high AI processing. Generally this is equivalent to all the actors in the currently loaded interior cell or set of exterior cells adjacent to and including the player's current cell. This command is more efficient than using GetFirst/NextRef.<br />
  <code class="s">(actors:Array) GetHighActors</code></p>
  
  <p><a id="GetMiddleHighActors" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMiddleHighActors">GetMiddleHighActors</a> - returns an Array containing all actors currently in middle high AI processing. This generally includes all actors in cells that are not currently loaded but which have recently been visited by the player. This command is more efficient than using GetFirst/NextRef.<br />
  <code class="s">(actors:Array) GetMiddleHighActors</code></p>
  
  <p><a id="GetLowActors" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLowActors">GetLowActors</a> - returns an Array containing all actors currently in low AI processing. This generally includes actors on unloaded cells. This command is more efficient than using GetFirst/NextRef.<br />
  <code class="s">(actors:Array) GetLowActors</code></p>
  
  <p>Example of ref looping (transfers all carriable items in the cell to the player's inventory):</p><pre>
  Ref nextItem
  
  begin OnActivate
      let nextItem := GetFirstRef 70 ; get first carriable item
  
      While nextItem ; continue until all refs are processed
          nextItem.Activate PlayerREF ; give the item to the player
          let nextItem := GetNextRef
      Loop
  end</pre>
  
  <h2><a id="Console_Functions">Console Functions</a></h2>
  
  <p>Some of the console commands have been exposed as scripting commands. In many cases, their functionality is not completely documented, and as they were not designed to be used via scripts, strange behavior may occur when using them. The primary thing to expect is changes not being saved in the player's savedata file.</p><ul>
    <li><a id="con_CAL">con_CAL</a></li>
    <li><a id="con_GetINISetting">con_GetINISetting</a></li>
    <li><a id="con_HairTint">con_HairTint</a></li>
    <li><a id="con_LoadGame">con_LoadGame</a></li>
    <li><a id="con_ModWaterShader">con_ModWaterShader</a></li>
    <li><a id="con_QuitGame">con_QuitGame</a></li>
    <li><a id="con_RefreshINI">con_RefreshINI</a></li>
    <li><a id="con_RunMemoryPass">con_RunMemoryPass</a></li>
    <li><a id="con_Save">con_Save</a></li>
    <li><a id="con_SavINI">con_SavINI</a></li>
    <li><a id="con_SetCameraFOV">con_SetCameraFOV</a></li>
    <li><a id="con_SetClipDist">con_SetClipDist</a></li>
    <li><a id="con_SetFog">con_SetFog</a></li>
    <li><a id="con_SetGameSetting">con_SetGameSetting</a></li>
    <li><a id="con_SetGamma">con_SetGamma</a></li>
    <li><a id="con_SetHDRParam">con_SetHDRParam</a></li>
    <li><a id="con_SetImageSpaceGlow">con_SetImageSpaceGlow</a></li>
    <li><a id="con_SetINISetting">con_SetINISetting</a></li>
    <li><a id="con_SetSkyParam">con_SetSkyParam</a></li>
    <li><a id="con_SetTargetRefraction">con_SetTargetRefraction</a></li>
    <li><a id="con_SetTargetRefractionFire">con_SetTargetRefractionFire</a></li>
    <li><a id="con_SexChange">con_SexChange</a></li>
    <li><a id="con_TCL">con_TCL</a></li>
    <li><a id="con_TFC">con_TFC</a></li>
    <li><a id="con_TGM">con_TGM</a></li>
    <li><a id="con_ToggleAI">con_ToggleAI</a></li>
    <li><a id="con_ToggleCombatAI">con_ToggleCombatAI</a></li>
    <li><a id="con_ToggleDetection">con_ToggleDetection</a></li>
    <li><a id="con_ToggleMenus">con_ToggleMenus</a></li>
    <li><a id="con_WaterDeepColor">con_WaterDeepColor</a></li>
    <li><a id="con_WaterReflectionColor">con_WaterReflectionColor</a></li>
    <li><a id="con_WaterShallowColor">con_WaterShallowColor</a></li>
    <li><a id="con_PlayerSpellBook">con_PlayerSpellBook</a></li>
    <li><a id="con_ToggleMapMarkers">con_ToggleMapMarkers</a></li>
    <li><a id="con_Show1stPerson">con_Show1stPerson</a></li>
    <li><a id="con_OutputLocalMapPictures">con_OutputLocalMapPictures</a></li>
  </ul>
  
  <h2><a id="Input_Functions">Input Functions</a></h2>
  
  <p><a id="IsKeyPressed" class="f" href="http://cs.elderscrolls.com/index.php?title=IsKeyPressed">IsKeyPressed</a> - returns whether the specified key is currently pressed. Uses standard windows key codes.<br />
  <code class="s">(isKeyPressed:bool) IsKeyPressed windowsKeyCode:int</code></p>
  
  <p><a id="IsKeyPressed2" class="f" href="http://cs.elderscrolls.com/index.php?title=IsKeyPressed2">IsKeyPressed2</a> - returns whether the specified key is currently pressed. Uses DX scancodes. Detect Tapped/Hold/Hammered keys but not Disabled keys<br />
  <code class="s">(isKeyPressed:bool) IsKeyPressed2 dxScanCode:int</code></p>
  
  <p><a id="GetKeyPress" class="f" href="http://cs.elderscrolls.com/index.php?title=GetKeyPress">GetKeyPress</a> - returns the DX scan code of the key being pressed. If more than one key is pressed use whichIndex to choose which keycode to return.<br />
  <code class="s">(keyPressed:int) GetKeyPress <span class="op">whichIndex:int</span></code></p>
  
  <p><a id="GetNumKeysPressed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumKeysPressed">GetNumKeysPressed</a> - returns the number of keys currently pressed<br />
  <code class="s">(count:int) GetNumKeysPressed</code></p>
  
  <p><a id="DisableKey" class="f" href="http://cs.elderscrolls.com/index.php?title=DisableKey">DisableKey</a> - disables the key with the specified dx scancode<br />
  <code class="s">(nothing) DisableKey dxScanCode:int</code></p>
  
  <p><a id="EnableKey" class="f" href="http://cs.elderscrolls.com/index.php?title=EnableKey">EnableKey</a> - enables the key with the specified dx scancode. Turns off DisableKey.<br />
  <code class="s">(nothing) EnableKey dxScanCode:int</code></p>
  
  <p><a id="HoldKey" class="f" href="http://cs.elderscrolls.com/index.php?title=HoldKey">HoldKey</a> - holds down the key with the specified dx scancode<br />
  <code class="s">(nothing) HoldKey dxScanCode:int</code></p>
  
  <p><a id="ReleaseKey" class="f" href="http://cs.elderscrolls.com/index.php?title=ReleaseKey">ReleaseKey</a> - releases a held key with the specified dx scancode<br />
  <code class="s">(nothing) ReleaseKey dxScanCode:int</code></p>
  
  <p><a id="TapKey" class="f" href="http://cs.elderscrolls.com/index.php?title=TapKey">TapKey</a> - presses the key with the specidied dx scancode once<br />
  <code class="s">(nothing) TapKey dxScanCode:int</code></p>
  
  <p><a id="HammerKey" class="f" href="http://cs.elderscrolls.com/index.php?title=HammerKey">HammerKey</a> - fakes keypresses every other frame of the key with the specified dx scancode<br />
  <code class="s">(nothing) HammerKey dxScanCode:int</code></p>
  
  <p><a id="AHammerKey" class="f" href="http://cs.elderscrolls.com/index.php?title=AHammerKey">AHammerKey</a> - fakes keypresses every other frame on the alternate frames from HammerKey of the key with the specified dx scancode<br />
  <code class="s">(nothing) AHammerKey dxScanCode:int</code></p>
  
  <p><a id="UnHammerKey" class="f" href="http://cs.elderscrolls.com/index.php?title=UnHammerKey">UnHammerKey</a> - stops hammering the key with the specified dx scancode<br />
  <code class="s">(nothing) UnHammerKey dxScanCode:int</code></p>
  
  <p><a id="GetControl" class="f" href="http://cs.elderscrolls.com/index.php?title=GetControl">GetControl</a> - returns the dx scancode of the key used for the specified control<br />
  <code class="s">(dxScanCode:int) GetControl <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="GetAltControl2" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAltControl2">GetAltControl2</a> - returns the dx scancode of the alternate key used for the specified control. Unlike GetAltControl, the return value of this function is a valid DX scan code which requires no further calculation for use with other input functions.<br />
  <code class="s">(dxScanCode:int) GetAltControl2 <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="GetMouseButtonPress" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMouseButtonPress">GetMouseButtonPress</a> - returns the dx scancode of the mouse button being pressed. If more than one mouse button is pressed, use whichIndex to choose which code to return<br />
  <code class="s">(dxScanCode:int) GetMouseButtonPress whichIndex:int</code></p>
  
  <p><a id="GetNumMouseButtonsPressed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumMouseButtonsPressed">GetNumMouseButtonsPressed</a> - returns the number of mouse buttons pressed<br />
  <code class="s">(count:int) GetNumMouseButtonsPressed</code></p>
  
  <p><a id="DisableMouse" class="f" href="http://cs.elderscrolls.com/index.php?title=DisableMouse">DisableMouse</a> - prevents the mouse from moving<br />
  <code class="s">(nothing) DisableMouse</code></p>
  
  <p><a id="EnableMouse" class="f" href="http://cs.elderscrolls.com/index.php?title=EnableMouse">EnableMouse</a> - turns off <code>DisableMouse</code><br />
  <code class="s">(nothing) EnableMouse</code></p>
  
  <p><a id="MoveMouseX" class="f" href="http://cs.elderscrolls.com/index.php?title=MoveMouseX">MoveMouseX</a> - moves the mouse horizontally the specified number of pixels<br />
  <code class="s">(nothing) MoveMouseX pixels:int</code></p>
  
  <p><a id="MoveMouseY" class="f" href="http://cs.elderscrolls.com/index.php?title=MoveMouseY">MoveMouseY</a> - moves the mouse veritcally the specified number of pixels<br />
  <code class="s">(nothing) MoveMouseY pixels:int</code></p>
  
  <p><a id="SetMouseSpeedX" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMouseSpeedX">SetMouseSpeedX</a> - moves the mouse in the horizontal axis at the specified number of pixels per second<br />
  <code class="s">(nothing) SetMouseSpeedX pixels:float</code></p>
  
  <p><a id="SetMouseSpeedY" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMouseSpeedY">SetMouseSpeedY</a> - moves the mouse in the vertical axis at the specified number of pixels per second<br />
  <code class="s">(nothing) SetMouseSpeedY pixels:float</code></p>
  
  <p><a id="IsKeyPressed3" class="f" href="http://cs.elderscrolls.com/index.php?title=IsKeyPressed3">IsKeyPressed3</a> - returns 1 if the key or mouse button specified is currently pressed. Just like IsKeyPressed2, but detects disabled keys.<br />
  <code class="s">(isPressed:bool) IsKeyPressed3 dxScanCode:int</code></p>
  
  <p><a id="IsControlPressed" class="f" href="http://cs.elderscrolls.com/index.php?title=IsControlPressed">IsControlPressed</a> - returns 1 if either the key or mouse button assigned to the specified control code is currently pressed. Detects disabled keys.<br />
  <code class="s">(isPressed:bool) IsControlPressed <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="DisableControl" class="f" href="http://cs.elderscrolls.com/index.php?title=DisableControl">DisableControl</a> - disables both the key and mouse buton assigned to the specified control<br />
  <code class="s">(nothing) DisableControl <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="EnableControl" class="f" href="http://cs.elderscrolls.com/index.php?title=EnableControl">EnableControl</a> - enables the key and mouse button for a control disabled with <code>DisableControl</code><br />
  <code class="s">(nothing) EnableControl <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="OnKeyDown" class="f" href="http://cs.elderscrolls.com/index.php?title=OnKeyDown">OnKeyDown</a> - registers a script as a listener for input events. Returns 1 for one frame when the passed key or mouse button is pressed. If used by multiple scripts, each script will be informed of the key's state. Will not return true again until the key is released and then pressed again.<br />
  <code class="s">(keyPressed:bool) OnKeyDown dxScanCode:int</code></p>
  
  <p><a id="OnControlDown" class="f" href="http://cs.elderscrolls.com/index.php?title=OnControlDown">OnControlDown</a> - works like <code>OnKeyDown</code>, but takes a control code and returns 1 when the key or mouse buttonassigned to that control is pressed<br />
  <code class="s">(controlPressed:bool) OnControlDown <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="TapControl" class="f" href="http://cs.elderscrolls.com/index.php?title=TapControl">TapControl</a> - presses the key or mouse button associated with the specified control once<br />
  <code class="s">(nothing) TapControl <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="SetControl" class="f" href="http://cs.elderscrolls.com/index.php?title=SetControl">SetControl</a> - assigns a new key to the specified control. If the specified control already has a key assigned, the key mappings are swapped.<br />
  <code class="s">(nothing) SetControl <a href="#Input_Control_IDs">whichControl</a>:int dxScanCode:int</code></p>
  
  <p><a id="SetAltControl2" class="f" href="http://cs.elderscrolls.com/index.php?title=SetAltControl2">SetAltControl2</a> - assigns a new mouse button to the specified control. If the specified control already has a mouse button assigned, the button mappings are swapped.<br />
  <code class="s">(nothing) SetAltControl2 <a href="#Input_Control_IDs">whichControl</a>:int dxScanCode:int</code></p>
  
  <p><a id="GetCursorPos" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCursorPos">GetCursorPos</a> - returns the current X or Y coordinate of the mouse cursor in menu mode. Minumum coordinate is zero, maximum is determined by the user's screen resolution. Specify 'X' or 'Y' for the axis.<br />
  <code class="s">(cursorPos:int) GetCursorPos axis:char</code></p>
  
  <p><a id="SetIsControl" class="f" href="http://cs.elderscrolls.com/index.php?title=SetIsControl">SetIsControl</a> - allows mods to register or unregister keys or mouse buttons as custom controls. Other mods can then use <code>IsControl</code> to detect conflicts between custom controls.<br />
  <code class="s">(nothing) SetIsControl keyCode:int isControl:bool</code></p>
  
  <p><a id="IsControl" class="f" href="http://cs.elderscrolls.com/index.php?title=IsControl">IsControl</a> - returns 1 if the specified key or mouse button is assigned to a game control, 2 if it has been registered as a custom control by a mod via <code>SetIsControl</code>, or 0 otherwise.<br />
  <code class="s">(isControl:int) IsControl keyCode:int</code></p>
  
  <p><a id="IsKeyDisabled" class="f" href="http://cs.elderscrolls.com/index.php?title=IsKeyDisabled">IsKeyDisabled</a> - returns 1 if the key has been disabled using <code>DisableKey</code><br />
  <code class="s">(isDisabled:bool) IsKeyDisabled keycode:int</code></p>
  
  <p><a id="IsControlDisabled" class="f" href="http://cs.elderscrolls.com/index.php?title=IsControlDisabled">IsControlDisabled</a> - returns 1 if thecontrol has been disabled by a call to <code>DisableControl</code>. Note that this only keeps track of calls to <code>DisableControl</code> and <code>EnableControl</code>; it does not check if the disabled state of the key or mouse button has been affected by <code>DisableKey</code><br />
  <code class="s">(isDisabled:bool) IsControlDisabled <a href="#Input_Control_IDs">whichControl</a>:int</code></p>
  
  <p><a id="GetMouseButtonsSwapped" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMouseButtonsSwapped">GetMouseButtonsSwapped</a> - returns true if the user has configured his operating system to swap the left and right mouse buttons. Input functions do not change their behavior when the buttons are swapped.<br />
  <code class="s">(swapped:bool) GetMouseButtonsSwapped</code></p>
  
  <h2><a id="Math_Functions">Math Functions</a></h2>
  
  <p><a id="Abs" class="f" href="http://cs.elderscrolls.com/index.php?title=Abs">Abs</a> - returns the absolute value of the argument<br />
  <code class="s">(absoluteValue:float) abs arg:float</code></p>
  
  <p><a id="Ceil" class="f" href="http://cs.elderscrolls.com/index.php?title=Ceil">Ceil</a> - returns the nearest whole number above the argument<br />
  <code class="s">(ceil:float) ceil arg:float</code></p>
  
  <p><a id="Exp" class="f" href="http://cs.elderscrolls.com/index.php?title=Exp">Exp</a> - returns e to the power of the argument<br />
  <code class="s">(exp:float) exp arg:float</code></p>
  
  <p><a id="Floor" class="f" href="http://cs.elderscrolls.com/index.php?title=Floor">Floor</a> - returns the nearest whole number less than the argument<br />
  <code class="s">(floor:float) floor arg:float</code></p>
  
  <p><a id="Log" class="f" href="http://cs.elderscrolls.com/index.php?title=Log">Log</a> - returns the natural logarithm of the number<br />
  <code class="s">(log:float) log arg:float</code></p>
  
  <p><a id="Log10" class="f" href="http://cs.elderscrolls.com/index.php?title=Log10">Log10</a> - returns the base 10 logarithm of the number<br />
  <code class="s">(log10:float) log10 arg:float</code></p>
  
  <p><a id="Pow" class="f" href="http://cs.elderscrolls.com/index.php?title=Pow">Pow</a> - returns the base raised to the exponents power<br />
  <code class="s">(pow:float) pow base:float exponent:float</code></p>
  
  <p><a id="Rand" class="f" href="http://cs.elderscrolls.com/index.php?title=Rand">Rand</a> - returns a random number between min and max<br />
  <code class="s">(rand:float) rand min:float max:float</code></p>
  
  <p><a id="SquareRoot" class="f" href="http://cs.elderscrolls.com/index.php?title=SquareRoot">SquareRoot</a> - returns the square root of the argument<br />
  <code class="s">(sqrt:float) squareroot arg:float</code><br />
  <code class="s">(sqrt:float) sqrt arg:float</code></p>
  
  <p><a id="Fmod" class="f" href="http://cs.elderscrolls.com/index.php?title=Fmod">Fmod</a> - returns the floating point modulus of dividend in the given base. This differs from <code>dividend % base</code> in the scripting language as <code>%</code> is a strictly integer function. When base is positive, <code>0 &lt;= result &lt; base</code>. The <em>optional</em> offset shifts the range of the result to <code>offset &lt;= result &lt; base+offset</code>.</p>
  
  <p>The two most likely uses of this function are <code>modulus angle 360</code> to normalize a computed angle, i.e., ensure it is <code>&gt;= 0</code> and <code>&lt; 360.0</code> and <code>modulus angle 360 -180</code> which ensures the computed [change of] angle is <code>&gt;= -180.0</code> and <code>&lt; 180.0</code>.</p>
  
  <p><code> modulus n base</code> is defined as <code>n - base Floor n / base</code>. If the base is negative the direction of the inequality changes. Thus: <code>0 &gt;= result &gt; base</code> and <code>offset &gt;= result &gt; base+offset</code>.</p>
  
  <p>Syntax:<br />
  <code class="s">(fmod:float) fmod dividend:float base:float <span class="op">offset:float</span></code></p>
  
  <h2><a id="Trigonometry_Functions">Trigonometry Functions</a></h2>
  
  <p><a id="ACos" class="f" href="http://cs.elderscrolls.com/index.php?title=ACos">ACos</a> - returns the arccosine of the argument. <code>ACos</code> and <code>DACos</code> use degrees. <code>RACose</code> uses radians.<br />
  <code class="s">(acos:float) acos arg:float</code><br />
  <code class="s">(acos:float) dacos arg:float</code><br />
  <code class="s">(acos:float) racos arg:float</code></p>
  
  <p><a id="ASin" class="f" href="http://cs.elderscrolls.com/index.php?title=ASin">ASin</a> - returns the arcsine of the argument. <code>ASin</code> and <code>DASin</code> use degrees. <code>RASin</code> uses radians.<br />
  <code class="s">(asin:float) asin arg:float</code><br />
  <code class="s">(asin:float) dasin arg:float</code><br />
  <code class="s">(asin:float) rasin arg:float</code></p>
  
  <p><a id="ATan" class="f" href="http://cs.elderscrolls.com/index.php?title=ATan">ATan</a> - returns the arctangent of the argument. <code>ATan</code> and <code>DATan</code> use degrees. <code>RATan</code> uses radians.<br />
  <code class="s">(atan:float) atan arg:float</code><br />
  <code class="s">(atan:float) datan arg:float</code><br />
  <code class="s">(atan:float) ratan arg:float</code></p>
  
  <p><a id="ATan2" class="f" href="http://cs.elderscrolls.com/index.php?title=ATan2">ATan2</a> - returns the arctangent of the arguments. <code>ATan2</code> and <code>DATan2</code> use degrees. <code>RATan2</code> uses radians.<br />
  <code class="s">(atan2:float) atan2 arg1:float arg2:float</code><br />
  <code class="s">(atan2:float) datan2 arg1:float arg2:float</code><br />
  <code class="s">(atan2:float) ratan2 arg1:float arg2:float</code></p>
  
  <p><a id="Cos" class="f" href="http://cs.elderscrolls.com/index.php?title=Cos">Cos</a> - returns the cosine of the angle. <code>Cos</code> and <code>DCos</code> use degrees. <code>RCos</code> uses radians.<br />
  <code class="s">(cos:float) cos arg:float</code><br />
  <code class="s">(cos:float) dcos arg:float</code><br />
  <code class="s">(cos:float) rcos arg:float</code></p>
  
  <p><a id="Cosh" class="f" href="http://cs.elderscrolls.com/index.php?title=Cosh">Cosh</a> - returns the hyperbolic cosine of the angle. <code>Cosh</code> and <code>DCosh</code> use degrees. <code>RCosh</code> uses radians.<br />
  <code class="s">(cosh:float) cosh arg:float</code><br />
  <code class="s">(cosh:float) dcosh arg:float</code><br />
  <code class="s">(cosh:float) rcosh arg:float</code></p>
  
  <p><a id="Sin" class="f" href="http://cs.elderscrolls.com/index.php?title=Sin">Sin</a> - returns the sine of the angle. <code>Sin</code> and <code>DSin</code> use degrees. <code>RSinh</code> uses radians.<br />
  <code class="s">(sin:float) sin arg:float</code><br />
  <code class="s">(sin:float) dsin arg:float</code><br />
  <code class="s">(sin:float) rsin arg:float</code></p>
  
  <p><a id="Sinh" class="f" href="http://cs.elderscrolls.com/index.php?title=Sinh">Sinh</a> - returns the hyperbolic sine of the angle. <code>Sinh</code> and <code>DSinh</code> use degrees. <code>RSinh</code> uses radians.<br />
  <code class="s">(sinh:float) sin arg:float</code><br />
  <code class="s">(sinh:float) dsin arg:float</code><br />
  <code class="s">(sinh:float) rsin arg:float</code></p>
  
  <p><a id="Tan" class="f" href="http://cs.elderscrolls.com/index.php?title=Tan">Tan</a> - returns the tangent of the angle. <code>Tan</code> and <code>DTan</code> use degrees. <code>RTan</code> uses radians.<br />
  <code class="s">(tan:float) tan arg:float</code><br />
  <code class="s">(tan:float) dtan arg:float</code><br />
  <code class="s">(tan:float) rtan arg:float</code></p>
  
  <p><a id="Tanh" class="f" href="http://cs.elderscrolls.com/index.php?title=Tanh">Tanh</a> - returns the hyperbolic tangent of the angle. <code>Tanh</code> and <code>DTanh</code> use degrees. <code>RTanh</code> uses radians.<br />
  <code class="s">(tanh:float) tanh arg:float</code><br />
  <code class="s">(tanh:float) dtanh arg:float</code><br />
  <code class="s">(tanh:float) rtanh arg:float</code></p>
  
  <h2><a id="Bitwise_Manipulation_Functions">Bitwise Manipulation Functions</a></h2>
  
  <p><a id="LeftShift" class="f" href="http://cs.elderscrolls.com/index.php?title=LeftShift">LeftShift</a> - shifts the argument left by the specified number of bits. Returns zero if shiftAmount is &gt;= 32.<br />
  <code class="s">(result:int) LeftShift value:int shiftAmount:int</code></p>
  
  <p><a id="RightShift" class="f" href="http://cs.elderscrolls.com/index.php?title=RightShift">RightShift</a> - shifts the argument right by the specified number of bits, inserting zeros on the left. Returns zero if shiftAmount is &gt;= 32.<br />
  <code class="s">(result:int) RightShift value:int shiftAmount:int</code></p>
  
  <p><a id="LogicalAnd" class="f" href="http://cs.elderscrolls.com/index.php?title=LogicalAnd">LogicalAnd</a> - returns the bitwise AND of the two arguments<br />
  <code class="s">(result:int)LogicalAnd arg1:int arg2:int</code></p>
  
  <p><a id="LogicalOr" class="f" href="http://cs.elderscrolls.com/index.php?title=LogicalOr">LogicalOr</a> - returns the bitwise OR of the two arguments<br />
  <code class="s">(result:int)LogicalOr arg1:int arg2:int</code></p>
  
  <p><a id="LogicalXor" class="f" href="http://cs.elderscrolls.com/index.php?title=LogicalXor">LogicalXor</a> - returns the bitwise XOR of the two arguments<br />
  <code class="s">(result:int)LogicalXor arg1:int arg2:int</code></p>
  
  <p><a id="LogicalNot" class="f" href="http://cs.elderscrolls.com/index.php?title=LogicalNot">LogicalNot</a> - returns the bitwise NOT of the argument<br />
  <code class="s">(result:int)LogicalNot arg:int</code></p>
  
  <h2><a id="Linear_Algebra_Functions">Linear Algebra Functions</a></h2>
  
  <p>These functions treat Arrays as <a href="http://en.wikipedia.org/wiki/Euclidean_vector">vectors</a> and <a href="http://en.wikipedia.org/wiki/Matrix_(mathematics)">matrices</a>, performing standard <a href="http://en.wikipedia.org/wiki/Linear_algebra">linear algebra</a> operations on them.
  
  <p>Internally, matrices are two-dimensional arrays, where the elements of the outer array each arrays holding the rows. Therefore, <tt>A[i][j]</tt> refers to the <i>j</i><sup>th</sup> element of the <i>i</i><sup>th</sup> row, in keeping with common mathematical convention.</p>
  
  <p>To be a matrix, the array must be one or two dimensional, contain only numerical values, and in the case of two-dimensional arrays, every row in the array must have the same length. These functions will always fail if an input does not meet these criteria.</p>
  
  <p>Some functions require that the matrix be sqaure, which means that its height and width are equal.</p>
  
  <p>Other functions further require that the matrix be a vector, that is, either be a one-dimensional array, or a two-dimensional array where there is either only one sub-array (a row vector), or every sub-array has only one element (a column vector).</p>
  
  <p>One-dimensional arrays may be used as vectors, but these functions will not assume that they are either row or column vectors. In most cases, this is not important, but in some it is. For example, with <a href="#MatrixMultiply"><tt>MatrixMultiply</tt></a>, the value changes based on which of the vectors is a column vector and which is a row vector (see the function description for more information). In such ambiguous cases, the functions will not work; use <a href="#ForceRowVector"><tt>ForceRowVector</tt></a> or <a href="#ForceColumnVector"><tt>ForceColumnVector</tt></a> to resolve such ambiguities. If a function does not indicate such a situation, one-dimensional arrays will work for a vector just fine.</p>
  
  <p>These functions returns 0 if they fail for whatever reason (incompatible matrix dimensions is the most common reason). In some cases (e.g. <a href="#MatrixDeterminant"><tt>MatrixDeterminant</tt></a>), 0 is <i>also</i> a valid return value, so it is the scripter's responsibility to ensure that the matrix is acceptable for the function.</p>
  
  <p><a id="GenerateZeroMatrix" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=GenerateZeroMatrix">GenerateZeroMatrix</a>
  - Returns an n&times;m matrix with each element filled with a 0.<br />
  
  <code class="s">(zeroMat:array) GenerateZeroMatrix height:int width:int</code><br />
  <code class="s">(zeroMat:array) ZeroMat height:int width:int</code></p>
  
  <p><a id="GenerateIdentityMatrix" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=GenerateIdentityMatrix">GenerateIdentityMatrix</a>
  - Returns a square (n&times;n) matrix with each element along the diagonal (from top-left to bottom-right) filled with a 1, and every other element with 0.<br />
  
  <code class="s">(idenMat:array) GenerateIdentityMatrix height:int</code><br />
  <code class="s">(idenMat:array) IdentityMat height:int</code></p>
  
  <p><a id="GenerateRotationMatrix" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=GenerateRotationMatrix">GenerateRotationMatrix</a>
  - Returns a 3&times;3 square matrix that can serve as a <a href="http://en.wikipedia.org/wiki/Rotation_matrix">rotation matrix</a> about the specified axis. Rotation matrices are always invertible, and their inverse is equal to their transpose.<br />
  
  <code class="s">(rotationMat:array) GenerateRotationMatrix axis:axis angle:float</code><br />
  <code class="s">(rotationMat:array) RotMat axis:axis angle:float</code></p>
  
  <p><a id="VectorMagnitude" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=VectorMagnitude">VectorMagnitude</a>
  - Returns the magnitude of a vector (square-root of the sum of the squares of its elements).<br />
  
  <code class="s">(magnitude:float) VectorMagnitude vector:array</code><br />
  <code class="s">(magnitude:float) VecMag vector:array</code></p>
  
  <p><a id="VectorNormalize" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=VectorNormalize">VectorNormalize</a>
  - Returns the normalized version of a vector (each entry of the vector divided by its magnitude). A normalized vector has a magnitude of 1.<br />
  
  <code class="s">(norm:array) VectorNormalize vector:array</code><br />
  <code class="s">(norm:array) VecNorm vector:array</code></p>
  
  <p><a id="VectorDot" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=VectorDot">VectorDot</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Dot_product">dot (scalar) product</a> of two vectors. The vectors must have the same length.<br />
  <br />
  <b>Warning:</b> If this function fails (generally because the vectors do not have the same length), it will return zero. However, zero is also a valid value for a dot product, so it is the scripter's responsibility to ensure that the vectors have the same length.<br />
  
  <code class="s">(dotProduct:float) VectorDot vector:array vector:array</code><br />
  <code class="s">(dotProduct:float) dot vector:array vector:array</code></p>
  
  <p><a id="VectorCross" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=VectorCross">VectorCross</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Cross_product">cross (vector) product</a> of two vectors. The vectors must have the same length.<br />
  
  <code class="s">(crossProduct:array) VectorCross vector:array vector:array</code><br />
  <code class="s">(crossProduct:array) cross vector:array vector:array</code></p>
  
  <p><a id="ForceRowVector" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=ForceRowVector">ForceRowVector</a>
  - Takes a one-dimensional array, and returns an equivalent two-dimensional array, where the outer array's only element is the 1d array; i.e. <tt>A[0][j] == <b>v</b>[j]</tt>. This forces various linear algebra functions to treat the vector as a row vector, and can be necessary when using <a href="#MatrixMultiply"><tt>MatrixMultiply</tt></a>.<br />
  <br />
  Note that row vectors require only 2 array variables, as opposed to the <i>n</i>+1 (where <i>n</i> is the number of elements) array variables needed for column vectors; for this reason, row vectors are generally preferred.<br />
  
  <code class="s">(rowVector:array) ForceRowVector vector1d:array</code><br />
  <code class="s">(rowVector:array) RowVec vector1d:array</code></p>
  
  <p><a id="ForceColumnVector" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=ForceColumnVector">ForceColumnVector</a>
  - Takes a one-dimensional array, and returns an equivalent two-dimensional array, where the outer array's elements are each arrays with only one element - each element in the 1d array. I.e., <tt>A[i][0] == <b>v</b>[i]</tt>. This forces various linear algebra functions to treat the vector as a column vector, and can be necessary when using <a href="#MatrixMultiply"><tt>MatrixMultiply</tt></a>.<br />
  <br />
  Note that row vectors require only 2 array variables, as opposed to the <i>n</i>+1 (where <i>n</i> is the number of elements) array variables needed for column vectors; for this reason, row vectors are generally preferred.<br />
  
  <code class="s">(colVector:array) ForceColumnVector vector1d:array</code><br />
  <code class="s">(colVector:array) ColVec vector1d:array</code></p>
  
  <p><a id="MatrixTrace" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixTrace">MatrixTrace</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Trace_%28linear_algebra%29">trace</a> of a square matrix, that is the sum of the elements along the diagonal (from top-left to bottom-right).<br />
  <br />
  <b>Warning:</b> If the matrix is not square, the return value will be zero, but zero is also a possible value for an actual trace; it is the scripter's responsibility to ensure that the matrix is square.<br />
  
  <code class="s">(trace:float) MatrixTrace squareMatrix:array</code><br />
  <code class="s">(trace:float) tr squareMatrix:array</code></p>
  
  <p><a id="MatrixDeterminant" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixDeterminant">MatrixDeterminant</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Determinant">determinant</a> of a square matrix.<br />
  <br />
  <b>Warning:</b> If the matrix is not square, the return value will be zero, but zero is also a possible value for an actual determinant; it is the scripter's responsibility to ensure that the matrix is square.<br />
  
  <code class="s">(determinant:float) MatrixDeterminant squareMatrix:array</code><br />
  <code class="s">(determinant:float) det squareMatrix:array</code></p>
  
  <p><a id="MatrixRREF" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixRREF">MatrixRREF</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Row_echelon_form">reduced row echelon form (RREF)</a> of a matrix.<br />
  
  <code class="s">(rref:array) MatrixRREF matrix:array</code><br />
  <code class="s">(rref:array) RREF matrix:array</code></p>
  
  <p><a id="MatrixInvert" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixInvert">MatrixInvert</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Invertible_matrix">inverse matrix</a> of a given matrix. Returns 0 if the matrix is not invertible.<br />
  
  <code class="s">(inverse:array) MatrixInvert matrix:array</code><br />
  <code class="s">(inverse:array) MatInv matrix:array</code></p>
  
  <p><a id="MatrixTranspose" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixTranspose">MatrixTranspose</a>
  - Returns the <a href="http://en.wikipedia.org/wiki/Transpose">transpose</a> of a matrix. The rows of a matrix become the columns of its transpose.<br />
  
  <code class="s">(transpose:array) MatrixTranspose matrix:array</code><br />
  <code class="s">(transpose:array) Transpose matrix:array</code></p>
  
  <p><a id="MatrixScale" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixScale">MatrixScale</a>
  - Returns a matrix scaled by a number, that is, with every element multiplied by that number.<br />
  
  <code class="s">(scaledMatrix:array) MatrixScale scalar:float matrix:array</code><br />
  <code class="s">(scaledMatrix:array) MatScale scalar:float matrix:array</code></p>
  
  <p><a id="MatrixAdd" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixAdd">MatrixAdd</a>
  - Returns the sum of two matrices, that is, a matrix where each element is the sum of the elements in the corresponding position in each of the addends. The two matrices must have the same dimensions.<br />
  
  <code class="s">(sum:array) MatrixAdd addend:array addend:array</code><br />
  <code class="s">(sum:array) MatAdd addend:array addend:array</code></p>
  
  <p><a id="MatrixSubtract" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixSubtract">MatrixSubtract</a>
  - Returns the difference of two matrices, that is, a matrix where each element is the difference between the elements in the corresponding position in the terms. The two matrices must have the same dimensions.<br />
  
  <code class="s">(difference:array) MatrixSubtract minuend:array subtrahend:array</code><br />
  <code class="s">(difference:array) MatSubtract minuend:array subtrahend:array</code></p>
  
  <p><a id="MatrixMultiply" class="f"
  
  href="http://cs.elderscrolls.com/index.php?title=MatrixMultiply">MatrixMultiply</a>
  - Returns the product of two matrices using <a href="http://en.wikipedia.org/wiki/Matrix_multiplication">matrix multiplication</a>. Matrix multiplication is not commutative, that is, order matters and <tt>AB != BA</tt>. In order to multiply two matrices, the width of the first factor must equal the height of the second.<br />
  <br />
  Two one-dimensional arrays (as opposed to two-dimensional vectors) cannot be multiplied because a column vector multiplied by a row vector has a different result than if a row vector is multiplied by a column vector, even if all the values are the same. Therefore, at least one of the vectors must be represented as a two-dimensional array (usually using <a href="#ForceRowVector"><tt>ForceRowVector</tt></a>) to remove this ambiguity (they do not both need to be two-dimensional as a column vector cannot be multiplied with another column vector, nor a row vector with another row vector, so there is no ambiguity).<br />
  
  <code class="s">(product:array) MatrixMultiply factor:array factor:array</code><br />
  <code class="s">(product:array) MatMult factor:array factor:array</code></p>
  
  <h2><a id="Output_Functions">Output Functions</a></h2>
  
  <p>Output functions are used to display messages. Some take a string containing format specifiers and an optional list of up to 20 variables which may include reference variables. Format specifiers include all of those used by the <code>Message</code> and <code>MessageBox</code> functions, as well as additional specifiers.</p>
  
  <p><a id="MessageEX" class="f" href="https://cs.elderscrolls.com/index.php?title=MessageEx">MessageEX</a> - prints a formatted message using the extended <a href="#Format_Specifiers">format specifiers</a> to the top-left corner of the screen.<br />
  It is recommended to pass a string_var to the vanilla function <code>Message</code> instead, unless you need the <a href="#SetMessageSound">SetMessageSound</a> or <a href="#SetMessageIcon">SetMessageIcon</a> functions.<br />
  <code class="s">(nothing) MessageEX <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20 duration:int</span></code></p>
  
  <p><a id="MessageBoxEX" class="f" href="https://cs.elderscrolls.com/index.php?title=MessageBoxEx">MessageBoxEX</a> - 
  displays a formatted messagebox using the extended <a href="#Format_Specifiers">format specifiers</a>. Format specifiers may appear within buttons. Button text should be included within the format string, separated by a pipe character when called from a script or the '@' character when called from the console.<br />
  <code class="s">(nothing) MessageBoxEX <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span></code></p>
  
  <p><a id="PrintToConsole" class="f" href="http://cs.elderscrolls.com/index.php?title=PrintToConsole">PrintToConsole</a> - prints a formatted message to the console using the extended <a href="#Format_Specifiers">format specifiers</a>.<br />
  <code class="s">(nothing) PrintToConsole <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span></code><br />
  <code class="s">(nothing) PrintC <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span></code></p>
  
  <p>Example script using MessageBoxEX:</p><pre>	ref refVar1
    ref refVar2
    short keyCode
    short goldCost
    set refVar1 to AdrianDecanusREF
    set refVar2 to ShadySamREF
    set keyCode to GetControl 15 ; menu key, assuming 'Tab' (15)
    set goldCost to 500
    MessageBoxEX "Press %k to summon a companion %rCost: %g gold|%n|%n|Cancel" keyCode goldCost refVar1 refVar2</pre>
  
  <p>The script displays a messageBox in the following format:</p><pre class="msgbox">	Press TAB to summon a companion	                  Cost: 500 gold	               [Adrian Decanus]	                   [Shady Sam]	                     [Cancel]</pre>
  
  <p><a id="SetMessageSound" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMessageSound">SetMessageSound</a> - sets the sound which is to be played by the next call to <code>MessageEX</code>. The sound must be defined in the Sounds branch of the Object Window. Once <code>MessageEX</code> has been called the sound is cleared.<br />
  <b>Note: </b>This function takes a string as soundID, not a ref, so it will not complain if the sound does not exist.<br />
  <code class="s">(nothing) SetMessageSound soundID:string</code></p>
  
  <p><a id="SetMessageIcon" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMessageIcon">SetMessageIcon</a> - sets the icon which is to be displayed to the left of the text for the next call to <code>MessageEX</code>. The icon is a .dds file located in the folder "Data\Textures\Menus\" or a subfolder thereof. Once <code>MessageEX</code> has been called the icon will be cleared.<br />
  <b>Note: </b>The full path must be entered starting with "Data".<br />
  <code class="s">(nothing) SetMessageIcon iconPath:string</code></p>
  
  <p><a id="DebugPrint" class="f" href="http://cs.elderscrolls.com/index.php?title=DebugPrint">DebugPrint</a> - prints a message to the console only if debug mode has been enabled for the mod from which the calling script originates. Use <code>SetDebugMode</code> to toggle debug messages on or off. <br />
  <code class="s">(nothing) DebugPrint <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span></code></p>
  
  <p><a id="SetDebugMode" class="f" href="http://cs.elderscrolls.com/index.php?title=SetDebugMode">SetDebugMode</a> - toggles all debug messages on or off for the mod from which the calling script originates. Pass 1 as the argument to turn debug messages on, or 0 to turn them off. Optionally pass the modIndex of the mod for which you wish to toggle messages.<br />
  <code class="s">(nothing) SetDebugMode EnableDebugMessages:bool <span class="op">modIndex:int</span></code></p>
  
  <p><a id="Print" class="f" href="http://cs.elderscrolls.com/index.php?title=Print">Print</a> - prints a string expression to the console. This is mainly a convenience function to eliminate the need for temporary string variables when printing complex strings using <code>PrintToConsole</code>, as it supports string concatenation, the <code>ToString</code> function, etc.<br />
  <code class="s">(nothing) Print string:expr</code></p>
  
  <p><a id="PrintD" class="f" href="http://cs.elderscrolls.com/index.php?title=PrintD">PrintD</a> - as <code>DebugPrint</code>, but accepts any OBSE expression evaluating to a string<br />
  <code class="s">(nothing) PrintD string:expr</code></p>
  
  <h2><a id="Spam_Blocking_Functions">Spam-Blocking Functions</a></h2>
  
  <p>Some existing script functions generate UI messages in the top-left corner of the screen when called on the player. The following functions duplicate the behavior of those functions while suppressing those messages. Syntax is identical to the original functions.</p><ul>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=AddItemNS">AddItemNS</a></li>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveItemNS">RemoveItemNS</a></li>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=EquipItemNS">EquipItemNS</a></li>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=UnequipItemNS">UnequipItemNS</a></li>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=AddSpellNS">AddSpellNS</a></li>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveSpellNS">RemoveSpellNS</a></li>
  </ul>
  <p>The following commands, in addition to suppressing UI messages, also suppress the "item up/down" sounds generated by their original versions:</p><ul>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=EquipItemSilent">EquipItemSilent</a></li>
    <li><a class="f" href="http://cs.elderscrolls.com/index.php?title=UnequipItemSilent">UnequipItemSilent</a></li>
  </ul>
  
  <h2><a id="Mod_Functions">Mod Functions</a></h2>
  
  <p>These functions return information about currently loaded Oblivion plugins and manipulate mod-specific data</p>
  
  <p><a id="GetModIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=GetModIndex">GetModIndex</a> - returns the mod index of the specified plugin. This is equivalent to the first two digits of the object's formID (when represented in hexadecimal notation).<br />
  <code class="s">(index:int) GetModIndex modName:string</code></p>
  
  <p><a id="GetSourceModIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=GetSourceModIndex">GetSourceModIndex</a> - returns the mod index of the plugin from which the specified object originates<br />
  <code class="s">(index:int) <span class="op">reference.</span>GetSourceModIndex <span class="op">object:ref</span></code></p>
  
  <p><a id="GetNumLoadedMods" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNumLoadedMods">GetNumLoadedMods</a> - returns the number of plugins currently loaded. Used in conjunction with GetModIndex, this can be used to verify load order at run-time.<br />
  <code class="s">(loadedPluginCount:int) GetNumLoadedMods</code></p>
  
  <p><a id="IsModLoaded" class="f" href="http://cs.elderscrolls.com/index.php?title=IsModLoaded">IsModLoaded</a> - returns 1 if the specified .esp or .esm is currently loaded. String is case-insensitive but must include the file extension.<br />
  <code class="s">(isLoaded:bool) IsModLoaded modName:string</code></p>
  
  <p><a id="GetNthModName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetNthModName">GetNthModName</a> - returns the filename of the nth loaded mod<br />
  <code class="s">(name:string_var) GetNthModName modIndex:int</code></p>
  
  <h2>Mod Local Data Functions</h2>
  
  <p>In some circumstances it is useful for a mod to record information about its state independent of the savegame. For instance, a mod which uses OBSE commands to modify objects or settings may want to reset those changes when a different savegame is loaded. OBSE provides each loaded mod with the ability to define data which persists for the duration of the game session. Data is defined as key-value pairs, where the key is a string and the value is a number, object, or string. A script has access only to the data defined for the mod to which it belongs. In the example below, a quest script is used to make sure that modifications to the player's movement speed are recorded in the savegame and reset when a new savegame is loaded</p><pre>	scriptName pcSpeedQuestScript
    short moddedAmt		; the amount by which player's movement speed has been modified (stored in the savegame as a script variable)
    short prevModAmt
    begin gamemode
    if getGameLoaded				; a game has been loaded
      if getGameRestarted == 0					; reset the player's movement speed
        let prevModAmt := GetModLocalData "speedMod"
        ModPCMovementSpeed -prevModAmt
      endif
  
      ; record the value from the savegame
      SetModLocalData "speedMod" moddedAmt
    endif
    end</pre>A script attached to an activator in the gameworld modifies the player's movement speed by 10 each time it is activated and updates the local data<pre>	scriptName pcSpeedActivatorScript
    begin OnActivate player
      let pcSpeedQuest.moddedAmt += 10
      SetModLocalData "speedMod" pcSpeedQuest.moddedAmt
      ModPCMovementSpeed 10
    end</pre>
  
  <p><a id="SetModLocalData" class="f" href="http://cs.elderscrolls.com/index.php?title=SetModLocalData">SetModLocalData</a> - sets the data value associated with the specified key for the mod to which the calling script belongs. The key must be a string; the data can be a string, number, or object. Keys are case-insensitive and unique - only one data value can be associated with a particular key. <br />
  <code class="s">(success:bool) SetModLocalData key:string data:multi</code></p>
  
  <p><a id="GetModLocalData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetModLocalData">GetModLocalData</a> - gets the data value associated with the specified key for the mod to which the calling script belongs. If no data exists for the key, returns 0. <br />
  <code class="s">(data:multi) GetModLocalData key:string</code></p>
  
  <p><a id="ModLocalDataExists" class="f" href="http://cs.elderscrolls.com/index.php?title=ModLocalDataExists">ModLocalDataExists</a> - returns true if local data exists with the specified key for the mod to which the calling script belongs. <br />
  <code class="s">(exists:bool) ModLocalDataExists key:string</code></p>
  
  <p><a id="RemoveModLocalData" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveModLocalData">RemoveModLocalData</a> - removes the data value associated with the specified key for the mod to which the calling script belongs. If no data exists for the key, returns false, otherwise returns true. <br />
  <code class="s">(removed:bool) RemoveModLocalData key:string</code></p>
  
  <p><a id="GetAllModLocalData" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAllModLocalData">GetAllModLocalData</a> - returns a StringMap consisting of all of the name-value entries for the mod local data associated with the mod to which the calling script belongs. This is a copy of the local data so modifying the array contents will not modify the stored data. <br />
  <code class="s">(data:StringMap) GetAllModLocalData</code></p>
  
  <h2><a id="Hotkey_Functions">Hotkey Functions</a></h2>
  
  <p><a id="GetHotkeyItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetHotkeyItem">GetHotkeyItem</a> - returns the item or spell bound to the specified hotkey (1-8)<br />
  <code class="s">(itemOrSpell:ref) GetHotkeyItem whichHotkey:int</code></p>
  
  <p><a id="SetHotkeyItem" class="f" href="http://cs.elderscrolls.com/index.php?title=SetHotkeyItem">SetHotkeyItem</a> - sets a hotkey to the specified spell or item<br />
  <code class="s">(nothing) SetHotkeyItem whichHotkey:int spellOrItem:ref</code></p>
  
  <p><a id="ClearHotkey" class="f" href="http://cs.elderscrolls.com/index.php?title=ClearHotkey">ClearHotkey</a> - removes any spell or item bound to the specified hotkey<br />
  <code class="s">(nothing) ClearHotkey whichHotkey:int</code></p>
  
  <h2><a id="File_Functions">File Functions</a></h2>
  
  <p><a id="FileExists" class="f" href="http://cs.elderscrolls.com/index.php?title=FileExists">FileExists</a> - returns 1 if the specified file exists in the user's installation folder or within one of the BSA archives. Path is relative to the user's install folder, which is "Bethesda Softworks\Oblivion" by default.<br />
  <code class="s">(fileExists:bool) FileExists filePath:string</code></p>
  
  <h2><a id="UI_Functions">UI Functions</a></h2>
  
  <p>Return information about the user interface. When the term "active menu" is used, it refers to the menu over which the mouse cursor is positioned when the command is called. Some functions accept an optional parameter specifying the specific menu you are interested in, assuming that menu is currently open.</p>
  
  <p><a id="GetActiveMenuMode" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveMenuMode">GetActiveMenuMode</a> - returns the <a href="#Menu_Code">menu code</a> of the active menu. These are the same codes used by the <code>MenuMode</code> function.<br />
  <code class="s">(<a href="#Menu_Code">menuCode</a>:int) GetActiveMenuMode</code></p>
  
  <p><a id="GetActiveMenuSelection" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveMenuSelection">GetActiveMenuSelection</a> - returns the item in the active menu over which the mouse is currently positioned<br />
  <code class="s">(activeItem:ref) GetActiveMenuSelection</code></p>
  
  <p>The return type varies depending on the active menu:</p><p style="font-family: monospace; margin-left: 40px;">Magic: &nbsp; &nbsp; &nbsp; &nbsp; Highlighted spell<br />
  Container: &nbsp; &nbsp; Highlighted item<br />
  Inventory: &nbsp; &nbsp; Highlighted item<br />
  SpellPurchase: Highlighted spell</p>
  
  <p><a id="GetActiveMenuFilter" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveMenuFilter">GetActiveMenuFilter</a> - returns the <a href="#Menu_Filter_Code">code</a> which indicates the current filteroptions for the active menu<br />
  <code class="s">(<a href="#MenuFilterCode">filterCode</a>:int) GetActiveMenuFilter <span class="op"><a href="#Menu_Code">menuType</a>:int</span></code></p>
  
  <p><a id="GetActiveMenuRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveMenuRef">GetActiveMenuRef</a> - returns the reference from which the active menu is derived<br />
  <code class="s">(menuRef:ref) GetActiveMenuRef <span class="op"><a href="#Menu_Code">menuType</a>:int</span></code></p>
  
  <p>The return type varies depending on the active menu:</p><p style="font-family: monospace; margin-left: 40px;">SpellPurchase: Spell merchant<br />
  Container: &nbsp; &nbsp; Container, corpse, or merchant<br />
  Dialog: &nbsp; &nbsp; &nbsp; &nbsp;Speaking NPC<br />
  Book: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Book reference in the gameworld<br />
  Recharge: &nbsp; &nbsp; &nbsp;Recharging NPC, if any</p>
  
  <p><a id="GetActiveMenuObject" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveMenuObject">GetActiveMenuObject</a> - returns the base object from which the active menu is derived<br />
  <code class="s">(menuObject:ref) GetActiveMenuObject <span class="op"><a href="#Menu_Code">menuType</a>:int</span></code></p>
  
  <p>The return type varies based on the active menu type:</p><p style="font-family: monospace; margin-left: 40px;">Book: &nbsp; &nbsp;Book base object<br />
  Alchemy: Potion being brewed<br />
  Message: The formID of the reference whose attached script generated the message, or the quest script which generated it. Returns 0 for game-generated messages such as confirmation boxes</p>
  
  <p><a id="GetEnchMenuSoulgem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchMenuSoulgem">GetEnchMenuSoulgem</a> - returns the soulgem selected for enchantment in the enchantment menu. Only works if the enchantment menu is the active menu.<br />
  <code class="s">(soulgem:ref) GetEnchMenuSoulgem</code></p>
  
  <p><a id="GetEnchMenuEnchItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchMenuEnchItem">GetEnchMenuEnchItem</a> - returns the enchantment which is to be applied to the item to be enchanted. Only works if the enchantment menu is the active menu.<br />
  <code class="s">(enchantment:ref) GetEnchMenuEnchItem</code></p>
  
  <p><a id="IsBarterMenuActive" class="f" href="http://cs.elderscrolls.com/index.php?title=IsBarterMenuActive">IsBarterMenuActive</a> - returns 1 if the player is bartering with a merchant, providing a way to distinguish between an ordinary container menu and a barter menu, which both return the same MenuMode code<br />
  <code class="s">(isBarterMode:bool) IsBarterMenuActive</code></p>
  
  <p><a id="GetAlchMenuIngredient" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAlchMenuIngredient">GetAlchMenuIngredient</a> - returns one of the four ingredients, from 0 to 3, selected for inclusion in the potion currently being brewed<br />
  <code class="s">(ingredient:ref) GetAlchMenuIngredient whichIngred:int</code></p>
  
  <p><a id="GetAlchMenuIngredientCount" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAlchMenuIngredientCount">GetAlchMenuIngredientCount</a> - returns the number of the specified ingredient selected for inclusion in the potion being brewed. Pass 0 for the first ingredient, 3 for the last.<br />
  <code class="s">(count:int) GetAlchMenuIngredientCount whichIngred:int</code></p>
  
  <p><a id="GetAlchMenuApparatus" class="f" href="http://cs.elderscrolls.com/index.php?title=GetAlchMenuApparatus">GetAlchMenuApparatus</a> - returns the apparatus object being used in the brewing process<br />
  <code class="s">(apparatus:ref) GetAlchMenuApparatus <a href="#Alchemy_Apparatus">apparatusType</a>:int</code></p>
  
  <p><a id="CloseAllMenus" class="f" href="http://cs.elderscrolls.com/index.php?title=CloseAllMenus">CloseAllMenus</a> - closes all currently open menus. Note: if the console is open at the time this function is called, it will be closed but the displayed console text will remain visible until the console is opened and closed again.<br />
  <code class="s">(nothing) CloseAllMenus</code></p>
  
  <p><a id="GetContainerMenuView" class="f" href="http://cs.elderscrolls.com/index.php?title=GetContainerMenuView">GetContainerMenuView</a> - when the container/barter menu is open, returns 1 if the player is viewing his own inventory, or 0 if viewing the container or merchant's inventory<br />
  <code class="s">(menuView:int) GetContainerMenuView</code></p>
  
  <p><a id="SetButtonPressed" class="f" href="http://cs.elderscrolls.com/index.php?title=SetButtonPressed">SetButtonPressed</a> - When any Message menu is displayed (game prompts such as the inventory quantity prompt as well as those created by the <code>MessageBox</code> function), forces the menu to behave as if the specified button was pressed. Button IDs range from 0 to 9.<br />
  <code class="s">(nothing) SetButtonPressed buttonID:int</code></p>
  
  <p><a id="IsGameMessageBox" class="f" href="http://cs.elderscrolls.com/index.php?title=IsGameMessageBox">IsGameMessageBox</a> - returns 1 if a messagebox is currently displayed which was generated by game code (e.g., confirm item purchase) rather than a script<br />
  <code class="s">(isGameMessage:bool) IsGameMessageBox</code></p>
  
  <p><a id="GetMessageBoxType" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMessageBoxType">GetMessageBoxType</a> - returns a code indicating the origin of the currently-displayed messagebox</p>
  
  <p>Return values:</p><ul>
    <li>0: No messagebox displayed or unknown origin</li>
    <li>1: Generated from script</li>
    <li>2: Confirm Buy Item</li>
    <li>3: Confirm Sell Item</li>
    <li>4: Confirm Give Item</li>
    <li>5: Confirm Buy Spell</li>
    <li>6: Confirm Poison Weapon</li>
    <li>7: Confirm Overwrite Savegame</li>
    <li>8: Confirm Load Savegame</li>
    <li>9: Confirm Load Savegame with Missing Content</li>
    <li>10: (RepairMenu) Attempting to repair a magic item without sufficient skill</li>
  </ul>
  
  <p><code class="s">(type:int) GetMessageBoxType</code></p>
  
  <p>OBSE v0016 adds the ability to retrieve or modify the value of any trait defined in a menu's XML file. In order to use these commands you must specify the location of the desired trait within the XML hierarchy. For instance, given the following excerpt from MessageMenu.xml:</p>
  <pre>	&lt;menu name="MessageMenu"&gt;
      &lt;rect name="background"&gt;
        &lt;image name="button_1"&gt;
          &lt;visible&gt; &amp;true &lt;/visible&gt;
          </pre>
  
  <p>To access the "visible" attribute of the first button, you would use "background\button_1\visible". Traits can have values of three types: float, boolean, or string. Boolean values are treated as floats, with 1 representing "false" and 2 representing "true." You must also specify the <a href="#Menu_Code">menu code</a> of the menu you are interested in.</p>
  
  <p>Examples:</p>
  <pre>	float  floatVar
    string_var strVar
    ; MessageMenu - is button 3 visible?
    set floatVar to GetMenuFloatValue "background\button_3\visible" 1001
    ; MessageMenu - retrieve message text
    set strVar to GetMenuStringValue "background\message_text\string" 1001
    ; hides the "Take All" button in the Container menu
    SetMenuFloatValue "cont_background\page_layout\cont_contents\cont_button_take_all\visible" 1008 1
    ; sets the text of button 1 to the contents of strVar
    SetMenuStringValue "background\button_1\button_1_text\string|%z" strVar 1001
    ; clicks the icon for the player's active spell, switching from item view to spell view if inventory is open
    ClickMenuButton "hudmain_background\hudmain_magic_cover" 1009</pre>
  
  <p><a id="GetMenuFloatValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMenuFloatValue">GetMenuFloatValue</a> - returns the value of a float or boolean trait of the specified menu<br />
  <code class="s">(value:float) GetMenuFloatValue trait:<a href="#Format_Specifiers">formatString</a> <a href="#Menu_Code">menuType</a>:int</code></p>
  
  <p><a id="GetMenuStringValue" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMenuStringValue">GetMenuStringValue</a> - returns the value of a string trait of the specified menu<br />
  <code class="s">(value:string_var) GetMenuStringValue trait:<a href="#Format_Specifiers">formatString</a> <a href="#Menu_Code">menuType</a>:int</code></p>
  
  <p><a id="SetMenuFloatValue" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMenuFloatValue">SetMenuFloatValue</a> - sets the value of a float or boolean trait of the specified menu<br />
  <code class="s">(nothing) SetMenuFloatValue trait:<a href="#Format_Specifiers">formatString</a> <a href="#Menu_Code">menuType</a>:intnewValue:float</code></p>
  
  <p><a id="SetMenuStringValue" class="f" href="http://cs.elderscrolls.com/index.php?title=SetMenuStringValue">SetMenuStringValue</a> - sets the value of a string trait of the specified menu. The new value follows the trait name, separated from it by a pipe character. i.e. "elementName\traitName|newValue". (If calling from the console, replace the pipe character with the '@' character).<br />
  <code class="s">(nothing) SetMenuStringValue traitAndNewValue:<a href="#Format_Specifiers">formatString</a> <a href="#Menu_Code">menuType</a>:int</code></p>
  
  <p><a id="GetActiveUIComponentID" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveUIComponentID">GetActiveUIComponentID</a> - returns the integer ID of the menu elemented currently highlighted by the mouse cursor as defined by that element's &lt;id&gt; trait in the menu XML file.<br />
  <code class="s">(id:int) GetActiveMenuComponentID</code></p>
  
  <p><a id="GetActiveUIComponentName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveUIComponentName">GetActiveUIComponentName</a> - returns the name of the menu element currently highlighted by the mouse cursor as defined in the menu XML file.<br />
  <code class="s">(name:string_var) GetActiveUIComponentName</code></p>
  
  <p><a id="GetActiveUIComponentFullName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetActiveUIComponentFullName">GetActiveUIComponentFullName</a> - like GetActiveUIComponentName, returns the name of the menu element currently highlighted by the mouse cursor, if any. However the returned name is fully qualified with the names of the element's parents in a form suitable to pass to commands like GetMenuFloatValue. i.e., if button_1 is highlighted in the MessageMenu, this command returns "background\button_1".<br />
  <code class="s">(name:string_var) GetActiveUIComponentFullName</code></p>
  
  <p><a id="ClickMenuButton" class="f" href="http://cs.elderscrolls.com/index.php?title=ClickMenuButton">ClickMenuButton</a> - simulates the user clicking on the specified UI component. Pass the fully qualified component name as described above, or pass the &lt;id&gt; trait of the desired component as specified in the XML, preceded by a '#'; i.e. "<code>#32</code>" to click the button with ID 32. Note that specifying the name results in much better performance than specifying an ID.<br />
  <code class="s">(nothing) ClickMenuButton componentName:<a href="#Format_Specifiers">formatString</a> <a href="#Menu_Code">menuType</a>:int</code></p>
  
  <p><a id="GetMenuHasTrait" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMenuHasTrait">GetMenuHasTrait</a> - returns 1 if the menu has the trait specified. The trait name may be qualified with component names to access traits of subcomponents.<br />
  <code class="s">(hasTrait:bool) GetMenuHasTrait traitName:<a href="#Format_Specifiers">formatString</a> <a href="#Menu_Code">menuType</a>:int</code></p>
  
  <p><a id="GetTileChildren" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTileChildren">GetTileChildren</a> - given a UI component (referred to by the game as a "Tile"), returns an Array containing the names of all of the direct subcomponents of that component. Using this command is more efficient than accessing children individually if you need to inspect more than one subcomponent.<br />
  <code class="s">(children:Array) GetTileChildren parentTile:string menuType:int</code></p>
  
  <p><a id="GetTileTraits" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTileTraits">GetTileTraits</a> - given a UI component, returns a StringMap representing all of that component's traits and their values. The keys of the returned StringMap's elements are the names of the traits; their values are the string or numeric values of the traits. This command is more efficient for accessing multiple traits of the same component than the commands which access traits individually.<br />
  <code class="s">(traits:StringMap) GetTileTraits componentName:string menuType:int</code></p>
  
  <p><a id="PrintTileInfo" class="f" href="http://cs.elderscrolls.com/index.php?title=PrintTileInfo">PrintTileInfo</a> - a debugging command which outputs all of the children of a UI component as well as the names and values of all of its traits. Output is sent to the console and to obse.log. Avoid using this function in released mods; it is intended for testing and debugging only.<br />
  <code class="s">(nothing) PrintTileInfo componentName:string menuType:int</code></p>
  
  <p><a id="PrintActiveTileInfo" class="f" href="http://cs.elderscrolls.com/index.php?title=PrintActiveTileInfo">PrintActiveTileInfo</a> - a debugging command which outputs all of the children of the UI component currently under the mouse cursor as well as the names and values of all of its traits. Output is sent to the console and to obse.log. Avoid using this function in released mods; it is intended for testing and debugging only.<br />
  <code class="s">(nothing) PrintActiveTileInfo</code></p>
  
  <p><a id="GetMapMenuMarkerName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMapMenuMarkerName">GetMapMenuMarkerName</a> - when the world map menu is visible and a location icon is highlighted by the mouse, this command returns the name of the highlighted icon. At all other times it returns an empty string.<br />
  <code class="s">(markerName:string) GetMapMenuMarkerName</code></p>
  
  <p><a id="GetMapMenuMarkerRef" class="f" href="http://cs.elderscrolls.com/index.php?title=GetMapMenuMarkerRef">GetMapMenuMarkerRef</a> - when the world map menu is visible and a location icon is highlighted by the mouse, this command returns a reference to the MapMarker reference associated with the highlighted icon. This is a slow function, so avoid calling it repeatedly. If you want to detect changes in the currently highlighted map icon, it is best to check GetMapMenuMarkerName over the course of several frames, and only call GetMapMenuMarkerRef if the name changes and is not an empty string.<br />
  <code class="s">(markerRef:ref) GetMapMenuMarkerRef</code></p>
  
  <p><a id="GetBarterItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBarterItem">GetBarterItem</a> - returns the active item in a container menu<br />
  <code class="s">(item:ref) GetBarterItem</code></p>
  
  <p><a id="GetBarterItemQuantity" class="f" href="http://cs.elderscrolls.com/index.php?title=GetBarterItemQuantity">GetBarterItemQuantity</a> - returns the selected quantity of the active item in a container menu<br />
  <code class="s">() GetBarterItemQuantity</code></p>
  
  <p><a id="GetLastTransactionItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastTransactionItem">GetLastTransactionItem</a> - returns the item most recently confirmed for buying or selling by the player. Note that this transaction may not have been completed due to the purchaser having insufficient gold or attempting to sell a quest item. Use <a href="#GetTransactionInfo">GetTransactionInfo</a> for more accurate information.<br />
  <code class="s">(item:ref) GetLastTransactionItem</code></p>
  
  <p><a id="GetLastTransactionQuantity" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLastTransactionQuantity">GetLastTransactionQuantity</a> - returns the quantity of the most recent buy/sell transaction confirmed by the player. Note that the transaction may not have been completed due to the purchaser having insufficient gold or attempting to sell a quest item. Use <a href="#GetTransactionInfo">GetTransactionInfo</a> for more accurate information.<br />
  <code class="s">(quantity:short) GetLastTransactionQuantity</code></p>
  
  <p><a id="GetTransactionInfo" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTransactionInfo">GetTransactionInfo</a> - returns information about the most recent barter transaction completed by the player as a Stringmap. Specify "buy" for information about the player's most recent purchase, or "sell" for his most recent sale to a merchant. Once a transaction has been returned to a particular script, subsequent calls to this function requesting the same type of transaction ("buy" or "sell") will return zero until a new transaction of that type takes place. The returned Stringmap contains the following information:<br />
  <pre>	"seller" (ref): The actor who sold the item
    "buyer" (ref): The actor who purchased the item
    "item" (base object): The item purchased or sold
    "quantity" (short): The number of items purchased or sold
    "price" (short): The total cost of the transaction
  </pre>
  <code class="s">(transactionInfo:Stringmap) GetTransactionInfo transactionType:string</code></p>
  
  <p><a id="GetQMCurrent" class="f" href="http://cs.elderscrolls.com/index.php?title=GetQMCurrent">GetQMCurrent (GetQuantityMenuCurrentQuantity)</a> - returns the current quantity in the quantity menu<br />
  <code class="s">(quantity:int) GetQMCurrent</code></p>
  
  <p><a id="GetQMMaximum" class="f" href="http://cs.elderscrolls.com/index.php?title=GetQMMaximum">GetQMMaximum (GetQuantityMenuMaximumQuantity)</a> - returns the maximum quantity in the quantity menu<br />
  <code class="s">(maxQuantity:int) GetQMMaximum</code></p>
  
  <p><a id="GetQMItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetQMItem">GetQMItem (GetQuantityMenuItem)</a> - returns the active item in the quantity menu<br />
  <code class="s">(item:ref) GetQMItem</code></p>
  
  <p><a id="GetClassMenuSelectedClass" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClassMenuSelectedClass">GetClassMenuSelectedClass</a> - while the class selection menu is visible, returns the class which would be selected by the player if he were to click 'Done'.<br />
  <code class="s">(class:ref) GetClassMenuSelectedClass</code></p>
  
  <p><a id="GetClassMenuHighlightedClass" class="f" href="http://cs.elderscrolls.com/index.php?title=GetClassMenuHighlightedClass">GetClassMenuHighlightedClass</a> - while the class selection menu is visible, returns the class over which the cursor is currently positioned, if any.<br />
  <code class="s">(class:ref) GetClassMenuHighlightedClass</code></p>
  
  <p><a id="GetEnchMenuBaseItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetEnchMenuBaseItem">GetEnchMenuBaseItem</a> - while the enchantment menu is visible, returns the unenchanted item selected by the player as the target of the enchantment.<br />
  <code class="s">(item:ref) GetEnchMenuBaseItem</code></p>
  
  <p><a id="UpdateContainerMenu" class="f" href="http://cs.elderscrolls.com/index.php?title=UpdateContainerMenu">UpdateContainerMenu</a> - if called while a container or barter menu is displayed, updates the contents of the menu. In barter mode this recalculates prices and quantities of available items.<br />
  <code class="s">(nothing) UpdateContainerMenu</code></p>
  
  <p><a id="UpdateSpellPurchaseMenu" class="f" href="http://cs.elderscrolls.com/index.php?title=UpdateSpellPurchaseMenu">UpdateSpellPurchaseMenu</a> - when called while the spell purchase menu is visible, updates the contents of the menu to reflect changes in prices<br />
  <code class="s">(nothing) UpdateSpellPurchaseMenu</code></p>
  
  <h2><a name="Text_Input_Functions">Text Input Functions</a></h2>
  
  <p>Allow the user to enter and edit text, with limited support for HTML formatting.</p>
  
  <p>Controls while entering text:</p><ul>
    <li>- Left/Right arrows: move cursor left or right. Pressing in conjunction with the CTRL key moves the cursor to the beginning of the closest word.</li>
    <li>- Home/End: move cursor to the beginning or end of the text.</li>
    <li>- Backspace/Delete: delete text. Use with CTRL to delete an entire word.</li>
    <li>- TAB: Inserts 4 spaces.</li>
    <li>- Up/Down: When editing books or scrolls, move cursor to the end of the previous line or the beginning of the next line.</li>
  </ul>
  
  <p>Additional formatting can be inserted when editing books and scrolls by pressing CTRL in combination with one of the following:</p><ul>
    <li>- L, R, or C: align the current line left, right, or center respectively. Alignment affects the current line and any subsequent lines until the next alignment tag.</li>
    <li>- 1, 2, 3, 4, 5: change the font of the text.</li>
  </ul>
  
  <p><code>&lt;IMG&gt;</code> tags are not directly supported, but can be added using <code>InsertInInputText</code>. The &lt;, &gt;, and ~ characters are not considered valid input characters.</p>
  
  <p>Note that it is possible for the user to close the menu by clicking one of the buttons in a messagebox or the "Exit" button in a book. Calls to <code>UpdateTextInput</code> will re-display a messagebox with the user's text intact, but will not re-open a book once closed. Further, it is still necessary to call <code>CloseTextInput</code> to release the text input menu for use by other scripts.</p>
  
  <p><a id="OpenTextInput" class="f" href="http://cs.elderscrolls.com/index.php?title=OpenTextInput">OpenTextInput</a> - opens a text input menu if one is not currently in use. MenuType is 0 for a messagebox, 1 for a book, or 2 for a scroll. The MaxLength parameter specifies how many characters to allow the user to enter. For messageboxes, the prompt string will be displayed before the cursor and cannot be erased. It may also contain buttons, with the button text separated from the prompt text with pipe '|' characters as in <code>MessageBoxEX</code>. For books and scrolls, the prompt string serves as the default text visible as soon as the menu is opened and may be edited by the user.<br />
  <code class="s">(nothing) OpenTextInput promptString:string <span class="op">var1 var2 ... var20 menuType:int maxLength:int</span></code></p>
  
  <p><a id="IsTextInputInUse" class="f" href="http://cs.elderscrolls.com/index.php?title=IsTextInputInUse">IsTextInputInUse</a> - returns 1 if a script is currently using a text input menu, regardless of whether or not the menu is visible. Only one script may request text input at a time.<br />
  <code class="s">(isInUse:bool) IsTextInputInUse</code></p>
  
  <p><a id="GetInputText" class="f" href="http://cs.elderscrolls.com/index.php?title=GetInputText">GetInputText</a> - returns the text entered by the user. You may call this function at any point before calling <code>CloseTextInput</code>. Note that the returned string includes any html formatting inserted by the user. It also includes an html prefix along the lines of <code>&lt;FONT face="#"&gt;&lt;div align="align"&gt;</code>.<br />
  <code class="s">(inputText:string_var) GetInputText</code></p>
  
  <p><a id="UpdateTextInput" class="f" href="http://cs.elderscrolls.com/index.php?title=UpdateTextInput">UpdateTextInput</a> - tells the text input menu to check for user input and refresh the displayed text if necessary. In general, unless you want to temporarily disallow input, this command should be called every frame while the text input menu is open.<br />
  <code class="s">(nothing) UpdateTextInput</code></p>
  
  <p><a id="CloseTextInput" class="f" href="http://cs.elderscrolls.com/index.php?title=CloseTextInput">CloseTextInput</a> - closes the text input menu, releasing it for use by other scripts. Be sure to call this command when you are done getting input.<br />
  <code class="s">(nothing) CloseTextInput</code></p>
  
  <p><a id="InsertInInputText" class="f" href="http://cs.elderscrolls.com/index.php?title=InsertInInputText">InsertInInputText</a> - inserts formatted text at the current cursor position in the text input menu, as long as doing so would not increase the length of the text beyond its maximum length.<br />
  <code class="s">(nothing) InsertInInputText <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span></code></p>
  
  <p><a id="GetTextInputControlPressed" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTextInputControlPressed">GetTextInputControlPressed</a> - allows scripters to define custom controls for text input. Returns the scan code of the last key pressed in conjunction with the CTRL key, excluding those keys reserved for use by the text input menu. Once the code has been retrieved, subsequent calls to this command will return -1; it will also return -1 if no control has been pressed (similar to <code>GetButtonPressed</code>).<br />
  <code class="s">(scanCode:int) GetTextInputControlPressed</code></p>
  
  <p><a id="DeleteFromInputText" class="f" href="http://cs.elderscrolls.com/index.php?title=DeleteFromInputText">DeleteFromInputText</a> - deletes a number of characters or words from the input text in the direction specified, beginning from the current cursor position. Note that an html tag is treated as both a word and a character (it is not possible to delete only part of a tag). Both optional parameters are false by default.<br />
  <code class="s">(nothing) DeleteFromInputText numToDelete:int <span class="op">bBackwards:bool bDeleteWholeWords:bool</span></code></p>
  
  <p><a id="GetTextInputCursorPos" class="f" href="http://cs.elderscrolls.com/index.php?title=GetTextInputCursorPos">GetTextInputCursorPos</a> - returns the current position of the cursor as an index into the input string<br />
  <code class="s">(cursorPos:int) GetTextInputCursorPos</code></p>
  
  <p><a id="MoveTextInputCursor" class="f" href="http://cs.elderscrolls.com/index.php?title=MoveTextInputCursor">MoveTextInputCursor</a> - moves the cursor a specified number of characters in the specified direction from its current position. Note that each html tag is treated as a single character.<br />
  <code class="s">(nothing) MoveTextInputCursor numChars:int <span class="op">moveBackwards:bool</span></code></p>
  
  <p><a id="SetInputText" class="f" href="http://cs.elderscrolls.com/index.php?title=SetInputText">SetInputText</a> - replaces any text which has been input by the user with the specified text and repositions the cursor to the specified position. If the specified position is invalid (e.g. greater than the length of the text, or inside an html tag), returns false without modifying the input text; otherwise returns true. For books, the text must be in an appropriate format - no invalid html tags should be present and the text must be prefixed with html of the format <code>&lt;FONT face="#"&gt;&lt;div align="align"&gt;</code><br />
  <code class="s">(textSet:bool) SetInputText text:string newCursorPos:int</code></p>
  
  <p><a id="SetTextInputHandler" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTextInputHandler">SetTextInputHandler</a> - registers a function script to handle control-key combos pressed while the current text input menu is active. The function script should accept a single integer argument; when a key is pressed in conjunction with the Control key, that key's scan code will be passed to the function script. The script will not be informed of control-key combos which are handled by OBSE (for instance, ctrl+5 to change to font #5) unless the default controls have been disabled with SetTextInputDefaultControlsDisabled. The function script is unregistered when the text input menu is closed.<br />
  <code class="s">(nothing) SetTextInputHandler functionScript:ref</code></p>
  
  <p><a id="SetTextInputDefaultControlsDisabled" class="f" href="http://cs.elderscrolls.com/index.php?title=SetTextInputDefaultControlsDisabled">SetTextInputDefaultControlsDisabled</a> - sets whether or not OBSE responds to control-key combos it recognizes, such as ctrl+(number) for changing the font. While default controls are disabled, they will be passed to the function script registered with SetTextInputHandler or stored for retrieval using GetTextInputControlPressed. This setting is reset when the text input menu is closed.<br />
  <code class="s">(nothing) SetTextInputDefaultControlsDisabled disableDefaultControls:bool</code></p>
  
  <p>Example script:</p>
  <pre>scriptName GetUserInputSCR
  int button
  int state
  string_var userText
  
  begin OnEquip
    if (IsTextInputInUse == 0)
      OpenTextInput "Type stuff (max 20 chars) | Finished" 0 20
      set state to 1
    endif
  end
  
  begin menuMode
    if (state)
      UpdateTextInput
    endif
  end
  
  begin gameMode
    if (state)
    set button to GetButtonPressed
    if (button == 0) ; user has finished
      set userText to GetInputText
      CloseTextInput
      set state to 0
    endif
    endif
  end
  </pre>
  
  <h2><a id="String_Variables">String Variables</a></h2>
  
  <p>OBSE v0016 introduces the string_var datatype for representing strings of characters. String variables can be declared and used like normal variables and can hold the return values from OBSE commands defined as returning a string_var. Their contents are preserved with the savegame. String-related commands include commands to modify a string variable and commands to retrieve a game string and store it in a string variable. Additionally, many existing commands like <code>SetName</code> now have EX counterparts (i.e. <code>SetNameEX</code>) which can accept a format string and a variable number of arguments, including string variables.</p>
  
  <p>A string variable should not be used until it has been initialized with a value, by using it on the left hand side of a call to <code>sv_Construct</code> or a command that returns a string. An uninitialized string variable has a value of zero, which can be tested for in scripts. The value of an initialized string, on the other hand, is undefined and should never be modified directly by statements such as <code>set someStringVar to 6</code> or using arithmetic operators. Similarly, string variables should <em>only</em> be used to store strings, and the result of a string-returning variable should <em>only</em> (and <em>always</em>) be assigned to a string variable. Note that direct assignment of one string variable to another causes both variables to refer to the same string. For instance, in the following code:</p>
  <pre>	string_var string1
    string_var string2
    set string1 to sv_Construct "First string"
    set string2 to string1	set string1 to sv_Construct "Second string" ; modifies both string1 and string2</pre>
  
  <p>both string1 and string2 end up containing "Second string." If this is not desired behavior, use <code>sv_Construct</code> to copy the contents of one string to another, i.e.:</p>
  <pre>	set string2 to sv_Construct "%z" string1 ; copies string1's contents to string2
    set string2 to player.GetName ; modifies only string2</pre>
  
  <p>String variables persist in the savegame until they are explicitly destroyed or until the mod from which they originate is removed from the user's mod list. In general, string variables should be destroyed after use unless it is necessary to save their values permanently. In the following example, the string variable is used each time the scripted object is activated:</p>
  <pre>	string_var refName
    ref activatingRef
    begin onActivate
      set activatingRef to GetActionRef
      set refName to activatingRef.GetName
      if (sv_Count "e" refName &gt; 0)
        Message "Your name contains the letter e"
      endif
      set refName to sv_Destruct
    end</pre>
  
  <p>Because the value of the string variable is only needed temporarily, <code>sv_Destruct</code> is used to prevent it from being saved.</p>
  
  <p>As of OBSE v0017, string variables can be passed to any command expecting a string literal as an argument by prefacing the name of the variable with a dollar sign. This deprecates many of the Set...EX commands. The variable can be a quest variable, specified as <b>$quest.varname</b>, or local to the calling script specified as <b>$varname</b>. Example:</p>
  <pre>	string_var msg
    let msg := "Greetings from Stonekeep, " + player.GetName + "!!!"
    MessageBox $msg</pre>
  
  <p>Additionally in v0017, support for string operations has been integrated into the language via OBSE expressions, which leaves functions such as <code>sv_Construct</code>, <code>sv_Substring</code>, etc. mostly deprecated.</p>
  
  <p><a id="sv_Construct" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Construct">sv_Construct</a> - constructs a string from a format string and set of variables and assigns the result to a string variable.<br />
  While mostly no longer needed due to OBSE expressions being able to handle string operations, there are some uses for this still. Most noteably when OBSE expressions can't be used, like in custom ini files, or when certain <a href="#Format_Specifiers">format specifiers</a> are needed.<br />
  <code class="s">(nothing) sv_Construct <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span> variableToSet:string_var</code></p>
  
  <p><a id="sv_Destruct" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Destruct">sv_Destruct</a> - destroys a string variable, setting its value to zero and preventing its contents from being saved in the savegame. Two different syntaxes are supported: the first should be used in an assignment with no parameters, using the <code>Set</code> keyword: <code>set stringVar to sv_Destruct</code>. The second is used without assignment and accepts up to ten string variables as arguments, destroying them all: <code>sv_Destruct var1 var2 ... var10</code>.<br />
  <code class="s">(string_var) sv_Destruct</code><br />
  <code class="s">(nothing) sv_Destruct var1:string_var <span class="op">var2:string_var ... var10:string_var</span></code></p>
  
  <p><a id="sv_Length" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Length">sv_Length</a> - returns the number of characters in a string variable<br />
  <code class="s">(length:int) sv_Length variable:string_var</code></p>
  
  <p><a id="sv_Compare" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Compare">sv_Compare</a> - compares a string to a formatted string. Performs a case-insensitive comparison by default. Returns 0 if the strings are equal, 1 if the string variable occurs alphabetically before the formatted string, -1 if the string variable occurs alphabetically after the formatted string, or -2 if the comparison fails.<br />
  <code class="s">(comparison:int) sv_Compare <a href="#Format_Specifiers">formatString</a>:string <span class="op">var1 var2 ... var20</span> variable:string_var <span class="op">caseSensitive:bool</span></code></p>
  
  <p><a id="sv_Erase" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Erase">sv_Erase</a> - erases the specified number of characters from a string starting at the specified position. If omitted, <span class="op">startPos</span> = 0. Omitting <span class="op">numToErase</span> erases all characters from <code><span class="op">startPos</span></code> to the end of the string.<br />
  <code class="s">(nothing) sv_Erase variable:string_var <span class="op">startPos:int numToErase:int</span></code></p>
  
  <p><a id="sv_ToNumeric" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_ToNumeric">sv_ToNumeric</a> - attempts to convert the contents of a string variable to a number. Valid characters include digits, a leading sign, and an e to indicate scientific notation. Conversion halts at the first invalid character.<br />
  <code class="s">(float) sv_ToNumeric sourceString:string_var</code></p>
  
  <p><a id="sv_Find" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Find">sv_Find</a> - returns the index of the first occurrence of a substring within a string variable, starting at the specified position and only including occurrences contained completely within the range [<span class="op">startPos, startPos + searchLen</span>]. Omit the arguments to search the entire string without regard to case.<br />
  <code class="s">(index:int) sv_Find subString:<a href="#Format_Specifiers">formatString</a> <span class="op">formatVars</span> source:string_var <span class="op">startPos:int searchLen:int caseSensitive:bool</span></code></p>
  
  <p><a id="sv_Count" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Count">sv_Count</a> - returns the number of occurrences of a substring within a string variable, using the same arguments as <code>sv_Find</code>.<br />
  <code class="s">(count:int) sv_Count subString:<a href="#Format_Specifiers">formatString</a> <span class="op">formatVars</span> source:string_var <span class="op">startPos:int searchLen:int</span></code></p>
  
  <p><a id="sv_Replace" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Replace">sv_Replace</a> - replaces occurrences of a string1 with string2 within a string variable. Both the text to replace and that with which to replace it are passed in a single format string separated by a pipe character as in "toReplace|replaceWith" (when calling from the console, use '@' in place of the pipe character). You can specify a range to search and case-sensitivity as in <code>sv_Find</code>, plus an additional final argument specify how many occurrences to replace. By default, the command replaces all occurrences.<br />
  <code class="s">(numReplaced:int) sv_Replace subString:<a href="#Format_Specifiers">formatString</a> <span class="op">formatVars</span> source:string_var <span class="op">startPos:int searchLen:int caseSensitive:bool numToReplace:int</span></code></p>
  
  <p><a id="sv_Insert" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Insert">sv_Insert</a> - inserts a substring into a string at the specified position, provided the position is less than the length of the string, or prepends it if no position is specified.<br />
  <code class="s">(nothing) sv_Insert subString:<a href="#Format_Specifiers">formatString</a> <span class="op">formatVars</span> targetString:string_var <span class="op">insertPos:int</span></code></p>
  
  <p><a id="sv_Split" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Split">sv_Split</a> - given a string and a set of delimiters, returns an Array containing all the substrings separated by one or more of the delimiting characters. For example, <code>sv_Split "#This is.a##. string." ".# "</code> returns <code>{ "This", "is", "a", "string" }</code>. The '.', '#', and space characters are removed.<br />
  <code class="s">(substrings:Array) sv_Split toSplit:string delimiters:string</code></p>
  
  <p><a id="GetKeyName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetKeyName">GetKeyName</a> - returns the name of a key given its DirectInput scan code<br />
  <code class="s">(keyName:string) GetKeyName keycode:int</code></p>
  
  <p><a id="AsciiToChar" class="f" href="http://cs.elderscrolls.com/index.php?title=AsciiToChar">AsciiToChar</a> - returns the character associated with an ASCII code as a string<br />
  <code class="s">(character:string) AsciiToChar asciiCode:int</code></p>
  
  <p><a id="NumToHex" class="f" href="http://cs.elderscrolls.com/index.php?title=NumToHex">NumToHex</a> - returns a string representation of an integer in hexadecimal format. An optional <span class="op">width</span> parameter ranging from 0 to 8 specifies the minimum number of digits toinclude; unused digits are padded with zeroes. By default, 8 digits are included.<br />
  <code class="s">(hex:string) NumToHex num:int <span class="op">width:int</span></code></p>
  
  <p><a id="sv_Percentify" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_Percentify">sv_Percentify</a> - Takes an input string and returns it with each '%' character replaced by two '%' characters. For instance, "100% gold" becomes "100%% gold" and "99.99%%" becomes "99.99%%%%". The argument can be any expression evaluating to a string value.<br />
  <code class="s">(percentified:string) sv_Percentify source:string</code></p>
  
  <p><a id="sv_ToLower" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_ToLower">sv_ToLower</a> - returns the passed string with all characters converted to lowercase.<br />
  <code class="s">(lower:string) sv_ToLower source:string </code></p>
  
  <p><a id="sv_ToUpper" class="f" href="http://cs.elderscrolls.com/index.php?title=sv_ToUpper">sv_ToUpper</a> - returns the passed string with all characters converted to uppercase.<br />
  <code class="s">(upper:string) sv_ToUpper source:string </code></p>
  
  <h4>Character Functions</h4>
  
  <p>A single character is represented by an integer with a value from 0 to 127 corresponding to its ASCII code. <code>sv_GetChar</code> returnscharacters.</p>
  
  <p><a id="IsDigit" class="f" href="http://cs.elderscrolls.com/index.php?title=IsDigit">IsDigit</a> - returns 1 if the character is a digit<br />
  <code class="s">(isDigit:bool) IsDigit character:int</code></p>
  
  <p><a id="IsPunctuation" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPunctuation">IsPunctuation</a> - returns 1 if the character is punctuation<br />
  <code class="s">(isPunctuation:bool) IsPunctuation character:int</code></p>
  
  <p><a id="IsUppercase" class="f" href="http://cs.elderscrolls.com/index.php?title=IsUppercase">IsUppercase</a> - returns 1 if the character is an uppercase letter<br />
  <code class="s">(isUpper:bool) IsUppercase character:int</code></p>
  
  <p><a id="IsPrintable" class="f" href="http://cs.elderscrolls.com/index.php?title=IsPrintable">IsPrintable</a> - returns 1 if the character is printable (not a non-printable control character)<br />
  <code class="s">(isPrint:bool) IsPrintable character:int</code></p>
  
  <p><a id="IsLetter" class="f" href="http://cs.elderscrolls.com/index.php?title=IsLetter">IsLetter</a> - returns 1 if the character is alphabetic<br />
  <code class="s">(isLetter:bool) IsLetter character:int</code></p>
  
  <p><a id="CharToASCII" class="f" href="http://cs.elderscrolls.com/index.php?title=CharToASCII">CharToASCII</a> - returns the ASCII code of a character passed as a string. Additional characters in the string are ignored.<br />
  <code class="s">(character:int) CharToASCII character:string</code></p>
  
  <p><a id="ToUpper" class="f" href="http://cs.elderscrolls.com/index.php?title=ToUpper">ToUpper</a> - returns the ASCII code of a character converted to uppercase<br />
  <code class="s">(upperCharacter:int) ToUpper character:int</code></p>
  
  <p><a id="ToLower" class="f" href="http://cs.elderscrolls.com/index.php?title=ToLower">ToLower</a> - returns the ASCII code of a character converted to lowercase<br />
  <code class="s">(lowerCharacter:int) ToLower character:int</code></p>
  
  <p><a id="ToNumber" class="f" href="http://cs.elderscrolls.com/index.php?title=ToNumber">ToNumber</a> - takes a string expression and attempts to convert it to a numeric value. By default the string is assumed to be in decimal notation containing digits, at most one decimal point, and an optional leading sign. If the string is prefixed with "0x" or the optional argument is non-zero, the string is interpreted in hexadecimal notation instead, with valid characters consisting of digits and the letters 'A' through 'F'. Returns 0 if the conversion fails.<br />
  <code class="s">(number:float) ToNumber expression:string <span class="op">bIsHex:bool</span></code></p>
  
  <h4>Examples:</h4>
  
  <p>Copying a string:<br />
  <code>set string2 to sv_construct "%z" string1</code></p>
  
  <p>Concatenating two strings:<br />
  <code>set string2 to sv_construct "%z%z" string1 string2</code></p>
  
  <h2><a id="Format_Specifiers">Format Specifiers</a></h2>
  
  <p>Some OBSE commands take a format string as a parameter. Format strings are actually a collection of arguments consisting of a string followed by zero to twenty variables and/or numbers. The string specifies how the command should use the rest of the arguments to construct a new string. Within the format string, percent signs are used to indicate special characters.</p>
  
  <p>The format specifiers recognized by OBSE commands include all of those recognized by vanilla Oblivion script commands like <code>MessageBox</code> as well as several extended specifiers:</p><ul>
    <li>%a - replaced by the character matching the ASCII code passed as an integer</li>
    <li>%c - replaced with the name of a component within another object. Takes two arguments - an object (ref) and the index of the component you want to access (short). Supported object types:		<ul>
        <li>Magic Item - prints the name of the <span class="op">nth</span> effect item.</li>
        <li>Faction - prints the male rank title of the <span class="op">nth</span> rank.</li>
      </ul></li>
    <li>%e - replaced by nothing. Useful for passing an empty string as an argument, as the script compiler will not accept an empty string. <strong>Can be used outside of format strings.</strong></li>
    <li>%i - is replaced by the formID of a reference or object passed in a ref variable</li>
    <li>%k - replaced by a string representing the key associated with a DirectInput scan code</li>
    <li>%n - replaced with the name of a reference or object passed in a ref variable</li>
    <li>%p - replaced with a pronoun based on the gender of the object parameter passed in a ref variable:		<ul>
        <li>%ps - subjective (he, she, it)</li>
        <li>%pp - possessive (his, her, its)</li>
        <li>%po - objective (him, her, it)</li>
      </ul></li>
    <li>%q - replaced with a double quote character (takes no arguments). <strong>Can be used outside of format strings.</strong></li>
    <li>%r - replaced by a new-line character (takes no arguments). <strong>Can be used outside of format strings.</strong></li>
    <li>%v - replaced by the name of an actor value passed as an integer <a href="#Actor_Value_Codes">actor  value code</a></li>
    <li>%x - replaced with an integer in hexadecimal format. An optional digit from 0-9 immediately following this specifier indicates the minimum width of the displayed value. For example, <code>MessageEx "%x4" 255</code> will display "00FF".</li>
    <li>%z - replaced by the contents of a string variable</li>
    <li>%{ .. %} - Conditionally omits a portion of the format string based on a boolean value. The left bracket accepts a variable; if the value of the variable is zero, all text up to the right bracket will be ignored, and any parameters supplied to format specifiers within the omitted substring will be skipped.</li>
    <li>%B - toggles blue text on for console output</li>
    <li>%b - toggles blue text off for console output. e.g. "%BBlue%b suede shoes": when printed to the console, the word "Blue" will be printed in blue text.</li>
    </ul>
  
  <p>Note that the %e, %q, and %r specifiers can be used within <strong>any</strong> string literal and will be replaced by an empty string, a double quote, or a carriage return respectively.</p>
  
  <h2><a id="Array_Variables">Array Variables</a></h2>
  
  <p>OBSE v0017 introduces the array_var datatype for storing a collection of values within a single variable. An array_var is a set of data elements each identified by a unique key. A key can be a number or a string, and the value associated with the key can be a string, number, game object, or another array. An element's value can be accessed using bracket notation, e.g. <code>array[key]</code>. In this documentation, "key" refers to the element's key, and "value" refers to the data associated with that key.</p>
  
  <p>All elements within an array must have the same type of key - all strings or all numeric. However, an array can contain any mix of types for its values. Elements are sorted by key, in ascending order either alphabetically or numerically depending on the key type.</p>
  
  <p>OBSE's array_var type actually represents three different kinds of associative containers:</p><dl>	<dt>1. Array:</dt>	<dd>An Array behaves like arrays in most programming languages: the key is an unsigned integer starting at zero, and there are no gaps between elements. (In other words, if an element exists at indexes 1 and 3 then an element necessarily exists at 0 and 2). Attempting to access an element using a key which is greater than the highest key in the array results in an error. The only exception to this rule is during assignment: it is okay to assign a value to the key which is one greater than the highest key in the array.</dd>	<dt>2. Map:</dt>	<dd>A Map associates numeric keys with values. Unlike an Array, a Map allows negative and floating point numbers to be used as keys and allows gaps to exist between elements.</dd>	<dt>3. StringMap:</dt>	<dd>Like a Map, except the keys are strings. Keys are case-insensitive, so <code>array[INDEX]</code> and <code>array[index]</code> both refer to the same value. There is no practical limit on the length of the strings used as keys. StringMaps can be used to simulate C-style structs by associating named properties with data values.</dd></dl>
  
  <p>An array_var must be initialized before it can be used in expressions, either by explicitly initializing it using <code>ar_Construct</code>, assigning the value of another array_var to it, or assigning it the return value of a command returning an array such as <code>GetItems</code>. <strong>Most array operations should be performed within OBSE expressions</strong> such as <code>Let</code> or <code>Eval</code> statements. Array elements cannot be passed directly to most commands as arguments. Assigning one array to another as in <code>Let array_1 := array_2</code> causes both array_1 and array_2 to refer to the <strong>same</strong> array, as illustrated below:</p>
  <pre>	array_var a
    array_var b
    let a := ar_Construct Array
    let a[0] := "First elem"
    let b := a                  ; b now refers to the same array as a
    let b[1] := "Second elem"   ; array now contains two elements</pre>
  
  <p>OBSE keeps track of the number of references to each array and destroys the array when no references to it remain. This makes it unnecessary for scripts to worry about destroying arrays explicitly. For example, continuing from the code above:</p>
  <pre>	; our array currently has 2 references: the variables a and b
    let a := ar_Construct StringMap ; now a refers to a new array, and only b refers to ours
    let b := ar_Null                ; b now refers to no array. No references to our array remain
    ; OBSE will delete the unreferenced array</pre>
  
  <h3>Array Operations</h3>
  
  <p>OBSE supports a variety of operations on arrays within the context of <code>Let</code>, <code>Eval</code>, and similar statements.</p>
  
  <h4>Examples:</h4>
  
  <pre>	array_var arr_1
    array_var arr_2
    let arr_1 := ar_Construct Array
    let arr_1[0] := "a string"
    let arr_1[1] := 1.234
    let arr_1[2] := Player.GetEquippedObject 16
    ; let arr_1[10] := 0 &lt;- this is an error, index out of bounds
    let arr_1[3] := Player.GetEquippedItems	; &lt;- arr_1[3] is another array
    let arr_1[4] := arr_1[3][0]		; &lt;- access first item returned by GetEquippedItems
    let arr_2 := arr_1[1:3]			; &lt;- arr_2 contains elements 1, 2, and 3 from arr_1
    let arr_2 := arr_1[1:-2]  ; &lt;- arr_2 contains elements 1 through (size of arr_1 minus 2) of arr_1</pre>
  
  <h3>Array Functions</h3>
  
  <p>Note: Unless otherwise indicated, an <code>array_var</code> parameter may be either a variable declared as array_var or an array element containing an array. Commands accepting this type of parameter must be called within the context of an OBSE expression such as <code>Let</code> or <code>Eval</code>.</p>
  
  <p><a id="ar_Construct" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Construct">ar_Construct</a> - creates a new array_var and assigns it to an array variable. Must be called within the context of an OBSE expression such as <code>Let</code>. The parameter specifies the type of array to create: StringMap, Map, or Array. See the above section for more information on the different types of array variables.<br />
  <code class="s">(array_var) ar_Construct arrayType:string</code></p>
  
  <p><a id="ar_Size" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Size">ar_Size</a> - returns the number of elements in an array, or -1 if the array is not initialized. For Array-type variables the highest key in the array is equal to one less than the array's size. Must be called within the context of an OBSE expression. The array can be an array variable or an array element which contains an array.<br />
  <code class="s">(size:int) ar_Size array:array_var</code></p>
  
  <p><a id="ar_Dump" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Dump">ar_Dump</a> - for debugging purposes, prints the key and value of every element in an array to the console. Must be called within an OBSE expression.<br />
  <code class="s">(nothing) ar_Dump array:array_var</code></p>
  
  <p><a id="ar_DumpID" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_DumpID">ar_DumpID</a> - does the same as ar_Dump but accepts an array ID instead of an array_var. Provided as a convenience for debugging in the console.<br />
  <code class="s">(nothing) ar_DumpID arrayID:int</code></p>
  
  <p><a  name="ar_Erase" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Erase">ar_Erase</a> - erases elements from an array. You may provide a single element, in which case only that element will be erased and only if it is present. Or, you may provide a range in slice notation. Any elements greater than or equal to the lower bound and less than or equal to the upper bound of the range will be erased. If the array is of type <code>Array</code>, elements above the erased elements will be shifted down. Returns the number of elements removed. Users of OBSE 0020 or later may omit the second argument; doing so will erase all elements of the array.<br />
  <code class="s">(numRemoved:int) ar_Erase target:array index:arrayIndex</code><br />
  <code class="s">(numRemoved:int) ar_Erase target:array range:slice</code>
  <cose class="s">(numRemoved:int) ar_Erase target:array</p>
  
  <p>Examples:</p>
  <pre>	array_var arr
    let arr := ar_Construct StringMap
    let arr["another array"] := ar_Construct Array
    ar_Erase arr["another array"] 0  ; erase element 0 if it exists, higher elements will be shifted down by 1
    ar_Erase arr "begin":"end"  ; erase any elements having keys &gt;= "begin" and &lt;= "end"</pre>
  
  <p><a id="ar_Find" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Find">ar_Find</a> - locates the first occurrence of the specified value within an array and returns the key associated with it. A range may optionally be specified using range notation, i.e. <code>let key := ar_Find "tofind" arrayVar lowerBound:upperBound</code>. If the value is not found, the function returns an empty string (for string-indexed arrays) or the value -99999.0 (for numeric-index arrays).<br />
  <code class="s">(key:stringOrNumber) ar_Find value:stringOrNumberOrForm arrayToSearch:array <span class="op">inRange:range</span></code></p>
  
  <p><a id="ar_Sort" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Sort">ar_Sort</a> - attempts to sort the elements of an array in ascending or descending order and returns a new Array containing the elements in sorted order (keys associated with the elements are lost). In order to be sorted all elements of an array must be of the same type (strings, numbers, or objects). If this condition is not met an empty Array is returned. Strings are sorted alphabetically and case-insensitively, numbers are sorted numerically, and objects are sorted by formID. By default the elements are sorted in ascending order.<br />
  <code class="s">(sortedArray:Array) ar_Sort toSort:array <span class="op">sortDescending:bool</span></code></p>
  
  <p><a id="ar_SortAlpha" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_SortAlpha">ar_SortAlpha</a> - sorts the elements of an array alphabetically in ascending or descending order and returns a new Array containing the elements in sorted order. Ordering is case-insensitive. Unlike <code>ar_Sort</code>, does not require elements to be of the same type - numeric elements are converted to a string representation, and forms are sorted by their names (if named) or the string representation of their formIDs. Omitting the optional parameter causes elements to be sorted in ascending order.<br />
  <code class="s">(sortedArray:Array) ar_SortAlpha toSort:array <span class="op">sortDescending:bool</span></code></p>
  
  <p><a id="ar_Copy" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Copy">ar_Copy</a> - creates a copy of the keys and elements of the specified array. The resulting array is identical to the source array. If the source array contains other arrays, the copy will contain <strong>references</strong> to those same arrays.<br />
  <code class="s">(copy:array) ar_Copy src:array</code></p>
  
  <p><a id="ar_DeepCopy" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_DeepCopy">ar_DeepCopy</a> - performs the same function as <code>ar_Copy</code>, except any arrays contained within the source array are <strong>also</strong> copied (and any arrays within those arrays are copied as well, and so on).<br />
  <code class="s">(copy:array) ar_DeepCopy src:array</code></p>
  
  <p><a id="ar_First" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_First">ar_First</a> - returns the key of the first element in an array<br />
  <code class="s">(key:arrayKey) ar_First src:array</code></p>
  
  <p><a id="ar_Last" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Last">ar_Last</a> - returns the key of the last element in an array<br />
  <code class="s">(key:arrayKey) ar_Last src:array</code></p>
  
  <p><a id="ar_Next" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Next">ar_Next</a> - returns the key of the element immediately following the passed key, or <code>BadIndex</code> if no key follows it<br />
  <code class="s">(key:arrayKey) ar_Next src:array precedingKey:arrayKey</code></p>
  
  <p><a id="ar_Prev" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Prev">ar_Prev</a> - returns the key of the element immediately preceding the passed key, or <code>BadIndex</code> if no key precedes it<br />
  <code class="s">(key:arrayKey) ar_Prev src:array prevKey:arrayKey</code></p>
  
  <p><a id="ar_BadNumericIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_BadNumericIndex">ar_BadNumericIndex</a> - returns a constant representing an invalid numeric array index. Compare to the return value of commands returning an array key to determine if a valid key was returned.<br />
  <code class="s">(badKey:int) ar_BadNumericIndex</code></p>
  
  <p><a id="ar_BadStringIndex" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_BadStringIndex">ar_BadStringIndex</a> - as above, but for string array keys<br />
  <code class="s">(badKey:string) ar_BadStringIndex</code></p>
  
  <p><a id="ar_Keys" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Keys">ar_Keys</a> - returns an Array containing all of the keys of the source array<br />
  <code class="s">(keys:Array) ar_Keys src:array</code></p>
  
  <p><a id="ar_HasKey" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_HasKey">ar_HasKey</a> - returns true if the array has an element with the specified key<br />
  <code class="s">(hasKey:bool) ar_HasKey src:array key:arrayKey</code></p>
  
  <p><a id="ar_Null" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Null">ar_Null</a> - returns an invalid array. This is useful if you wish to specify that a variable which previously referred to an array should no longer refer to any array.<br />
  <code class="s">(nullArray:array) ar_Null</code></p>
  
  <p><a id="ar_List" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_List">ar_List</a> - Takes up to twenty arguments of any type and returns an Array containing those elements in the order in which they were passed. We recommend separating the values with commas (starting after the first argument).<br />
  <code class="s">(list:Array) ar_List <span class="op">element0:multi</span> <span class="op">element1:multi ... element19:multi</span></code></p>
  
  <p>The following commands are usable only with Array-type arrays:</p>
  
  <p><a id="ar_Resize" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Resize">ar_Resize</a> - resizes an Array-type array to be of the specified size. If the new size is smaller than the current size, elements at the end of the array are discarded. If the new size is larger, additional elements are appended to the array. By default these elements have the numeric value zero, but an optional argument can be used to specify the value with which to pad the array. Returns 1 if successful, 0 otherwise.<br />
  <code class="s">(bResized:bool) ar_Resize array:Array newSize:int <span class="op">paddingValue:multi</span></code></p>
  
  <p><a id="ar_Insert" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Insert">ar_Insert</a> - inserts a single element into an Array-type array at the specified index provided the index is not greater than the current size of the array. Elements above the index are shifted up by one index.<br />
  <code class="s">(bInserted:bool) ar_Insert array:Array index:int valueToInsert:multi</code></p>
  
  <p><a id="ar_InsertRange" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_InsertRange">ar_InsertRange</a> - inserts a range of elements into an Array-type array at the specified index provided the index is not greater than the current size of the array. The range is passed as an Array. Each element of the range is inserted into the target Array in order. Elements above the insertion index are shifted up by the number of elements inserted.<br />
  <code class="s">(bInserted:bool) ar_Insert target:Array index:int rangeToInsert:Array</code></p>
  
  <p><a id="ar_Range" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Range">ar_Range</a> - returns an Array of zero or more numbers ranging from <span class="op">start</span> up to and including <span class="op">end</span> spaced in intervals of <span class="op">step</span>. For example, <code>ar_Range (5,10,2)</code> returns <code>(5,7,9)</code> and <code>ar_Range (5,3,-1)</code> returns <code>(5,4,3)</code>. This is useful for performing a traditional <code>for</code> loop within a <code>foreach</code> expression. The optional <span class="op">step</span> argument defaults to 1.<br />
  <code class="s">(range:Array) ar_Range start:int end:int <span class="op">step:int</span></code></p>
  
  <p><a id="ar_Map" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Map">ar_Map</a> - creates a Map or Stringmap given a list of 0-20 key-value pairs. Pairs are specified as 'key::value', where 'key' is a string or numeric value and 'value' is a string, number, array, or form.<br />
  <code class="s">(Map/StringMap) ar_Map key-value pair:<unknown><span class="op"> key-value pair:<unknown></span><span class="op"> key-value pair:<unknown></span><span class="op"> entry_1:pair</span><span class="op"> entry_2:pair</span> ...<span class="op"> entry_20:pair</span></code></p>
  
  <p><a id="ar_Append" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_Append">ar_Append</a> - appends an element to an Array<br />
  <code class="s">(nothing) ar_Append array:<unknown> toInsert:<unknown></code></p>
  
  <p><a id="ar_CustomSort" class="f" href="http://cs.elderscrolls.com/index.php?title=ar_CustomSort">ar_CustomSort</a> - returns an Array sorted by calling the provided function script to perform comparison of elements. The function should be defined to take two array_var arguments. When it is called, the arguments will contain exactly one element each - the elements to be compared. It should return true if the first argument is less than the second argument, and true if it is greater than or equal to the second argument. You can define 'less', 'greater', and 'equal' in whatever way makes sense for you provided your definitions provide a definitive ordering of any set of values; otherwise the sort may never terminate. The optional third argument sorts the elements in reverse order. <br />
  <code class="s">(sorted:Array) ar_CustomSort toSort:Array comparisonFunction:ref <span class="op">reverse:bool</span></code></p>
  
  <h2><a id="OBSE_Expressions">OBSE Expressions</a></h2>
  
  <p>OBSE v0017 introduces support for evaluation of complex expressions involving a larger set of operators than that provided by Oblivions <code>set</code> and <code>if</code> statements, type-checking and type inference, and operations on strings and arrays. These expressions are supported within the context of new commands such as <code>let</code> (for assignment, analogous to <code>set</code>) and <code>eval</code> (to be used within <code>if</code> statements to test the value of a boolean expression).</p><table class="c">	<caption style="font-size: 110%; color: #000099; background-color: #ffffff;">Operators</caption>    <tr>      <th>Symbol</th>      <th>Precedence</th>      <th>Function</th>      <th>Number of Operands</th>      <th>Description</th>    </tr>    <tr class="alt">      <td><code class="alt">:=</code></td>      <td>0</td>      <td>Assignment</td>      <td>2</td>      <td class="l">Assigns the value of an expression on the right to the variable or array element on the left. <strong>Right-associative</strong>. The value of the assignment is the right-most operand. Supports multiple assignment i.e. <code class="alt">a := b := c := 0</code> sets all 3 variables to zero. Assignment of strings creates a <strong>copy</strong> of the string, whereas assignment of arrays creates a <strong>reference</strong> to the array.</td>    </tr>    <tr>      <td><code>||</code></td>      <td>1</td>      <td>Logical Or</td>      <td>2</td>      <td class="l">True if either expression is true.</td>    </tr>    <tr class="alt">      <td><code class="alt">&amp;&amp;</code></td>      <td>2</td>      <td>Logical And</td>      <td>2</td>      <td class="l">True if both expressions are true.</td>    </tr>    <tr>      <td><code>+=</code></td>      <td>2</td>      <td>Add and Assign</td>      <td>2</td>      <td class="l">Adds the expression on the right to the variable or array element on the left.</td>    </tr>	<tr class="alt">      <td><code class="alt">-=</code></td>      <td>2</td>      <td>Subtract and Assign</td>      <td>2</td>      <td class="l">Subtracts the expression on the right from the variable or array element on the left.</td>    </tr>    <tr>      <td><code>*=</code></td>      <td>2</td>      <td>Multiply and Assign</td>      <td>2</td>      <td class="l">Multiplies the variable or array element on the left by the expression on the right.</td>    </tr>    <tr class="alt">      <td><code class="alt">/=</code></td>      <td>2</td>      <td>Divide and Assign</td>      <td>2</td>      <td class="l">Divides the variable or array element on the left by the expression on the right.</td>    </tr>    <tr>      <td><code>^=</code></td>      <td>2</td>      <td>Exponent and Assign</td>      <td>2</td>      <td class="l">Raises the variable or array element on the left to the power of the expression on the right.</td>    </tr>    <tr class="alt">      <td><code class="alt">:</code></td>      <td>3</td>      <td>Slice/Range</td>      <td>2</td>      <td class="l">Specifies a range of elements in a string or array. For strings, creates a substring. For arrays, creates a copy of the elements within the range. Range includes the upper element. For strings, negative indices start at the last element and count backwards.</td>    </tr>    <tr>      <td><code>::</code></td>      <td>3</td>      <td>Make Pair</td>      <td>2</td>      <td class="l">Specifies a key-value pair. The lefthand operand defines the key as a numeric or string value, and the righthand operand defines the value (of any type).</td>    </tr>    <tr class="alt">      <td><code class="alt">==</code></td>      <td>4</td>      <td>Equality</td>      <td>2</td>      <td class="l">True if the operands are equal. Operands must be comparable to each other.</td>    </tr>    <tr>      <td><code>!=</code></td>      <td>4</td>      <td>Inequality</td>      <td>2</td>      <td class="l">True if the operands are not equal.</td>    </tr>    <tr class="alt">      <td><code class="alt">&gt;</code></td>      <td>5</td>      <td>Greater Than</td>      <td>2</td>      <td class="l">Operands must be comparable and ordered. For strings, comparison is case-insensitive.</td>    </tr>    <tr>      <td><code>&lt;</code></td>      <td>5</td>      <td>Less Than</td>      <td>2</td>      <td class="l">For strings, case-insensitive.</td>    </tr>    <tr class="alt">      <td><code class="alt">&gt;=</code></td>      <td>5</td>      <td>Greater or Equal</td>      <td>2</td>      <td class="l">For strings, case-insensitive.</td>    </tr>    <tr>      <td><code>&lt;=</code></td>      <td>5</td>      <td>Less than or Equal</td>      <td>2</td>      <td class="l">For strings, case-insensitive.</td>    </tr>    <tr class="alt">      <td><code class="alt">|</code></td>      <td>6</td>      <td>Bitwise Or</td>      <td>2</td>      <td class="l">Performs a bitwise or, demoting the operands to integers.</td>    </tr>    <tr>      <td><code>&amp;</code></td>      <td>7</td>      <td>Bitwise And</td>      <td>2</td>      <td class="l">Performs a bitwise and, demoting the operands to integers.</td>    </tr>    <tr class="alt">      <td><code class="alt">&lt;&lt;</code></td>      <td>8</td>      <td>Binary Left Shift</td>      <td>2</td>      <td class="l">Shifts left operand left by specified number of bits, demoting both operands to integers.</td>    </tr>    <tr>      <td><code>&gt;&gt;</code></td>      <td>8</td>      <td>Binary Right Shift</td>      <td>2</td>      <td class="l">Shifts left operand right by specified number of bits, demoting both operands to integers.</td>    </tr>    <tr class="alt">      <td><code class="alt">+</code></td>      <td>9</td>      <td>Addition/Concatentation</td>      <td>2</td>      <td class="l">Adds two numbers or joins two strings.</td>    </tr>    <tr>      <td><code>-</code></td>      <td>9</td>      <td>Subtraction</td>      <td>2</td>      <td class="l">Self-explanatory.</td>    </tr>    <tr class="alt">      <td><code class="alt">*</code></td>      <td>10</td>      <td>Multiplication</td>      <td>2</td>      <td class="l">Self-explanatory.</td>    </tr>    <tr>      <td><code>/</code></td>      <td>10</td>      <td>Division</td>      <td>2</td>      <td class="l">Self-explanatory.</td>    </tr>    <tr class="alt">      <td><code class="alt">%</code></td>      <td>10</td>      <td>Modulo</td>      <td>2</td>      <td class="l">Returns the remainder of integer division.</td>    </tr>    <tr>      <td><code>^</code></td>      <td>11</td>      <td>Exponentiation</td>      <td>2</td>      <td class="l">Raises left operand to the power of the right operand.</td>    </tr>    <tr class="alt">      <td><code class="alt">-</code></td>      <td>12</td>      <td>Negation</td>      <td>1</td>      <td class="l">Returns the opposite of an expression.</td>    </tr>    <tr>      <td><code>$</code></td>      <td>12</td>      <td>Stringize</td>      <td>1</td>      <td class="l">Returns a string representation of an expression. (Shorthand for <a href="#ToString">ToString</a>).</td>    </tr>    <tr class="alt"> <td><code class="alt">#</code></td>      <td>12</td>      <td>Numericize</td>      <td>1</td>      <td class="l">Returns the numeric value of a string. (Shorthand for <a href="#ToNumber">ToNumber</a>).</td>    </tr>    <tr>      <td><code>*</code></td>      <td>12</td>      <td>Dereference/Unbox</td>      <td>1</td>      <td class="l">Dereferences an array. If the array is a StringMap with a "value" key, returns the value associated with that key. Otherwise returns the value of the first element.</td>    </tr>    <tr class="alt">      <td><code class="alt">&</code></td>      <td>12</td>      <td>Box</td>      <td>1</td>      <td class="l">"Boxes" a value of any type, returning an Array containing that value as its only element. The value can be retrieved with the unary * (unbox) operator.</td>    </tr>    <tr>      <td><code>!</code></td>      <td>13</td>      <td>Logical Not</td>      <td>1</td>      <td class="l">Returns the opposite of a boolean expression. i.e. <code class="alt">!(true)</code> evaluates to false.</td>    </tr>    <tr class="alt">      <td><code class="alt">( )</code></td>      <td>14</td>      <td>Parentheses</td>      <td>0</td>      <td class="l">Enclose expressions within parentheses to override default precedence rules.</td>    </tr>    <tr>      <td><code>[ ]</code></td>      <td>15</td>      <td>Subscript</td>      <td>2</td>      <td class="l">For arrays, accesses the element having the specified key. For strings, returns a string containing the single character at the specified position. The expression within the brackets is treated as if it were parenthesized (overrides precedence rules).</td>    </tr>	<tr class="alt">      <td><code class="alt">-></code></td>      <td>15</td>      <td>Member Access</td>      <td>2</td>      <td class="l">The lefthand operand is a StringMap having a key specified by the righthand operand. Returns the value associated with that key. Example: 'dict->key' is equivalent to 'dict["key"]'</td>    </tr></table>
  
  <h3><a id="Compiler_Override">Using OBSE expressions in scripts</a></h3>
  
  <p>By default, only a handful of OBSE commands like Let, Eval, and ar_List accept OBSE expressions as arguments. However, as of v0020 OBSE allows individual script blocks to optionally be compiled in a way that lets <strong>any</strong> command accept OBSE expressions - including arrays, strings, and user-defined function calls - as arguments. To turn this feature on for a script block, prepend an underscore to the block name. All commands within that block will then be allowed to accept OBSE expressions. For example:
  <pre>
    ; compiled normally
    begin gamemode
      let axis := someArray[index]
      let pos := (call SomeFunction) + someRef.getPos z
      if eval axis == "Z"
      setpos z pos
      elseif eval axis == "Y"
      setpos y pos
      else
      setpos x pos
      endif
    end
  
    ; the same behavior, compiled with OBSE expression support enabled
    begin _gamemode
      setPos someArray[index], (call SomeFunction)  + someRef.getPos z
    end
  </pre>
  
  This gives you increased flexibility when using certain argument types:
  <ul>
    <li>Actor value: Accepts a string such as "strength" or an integer actor value code</li>
    <li>Effect setting: Accepts a string such as "FIDG", an integer effect code, or a ref</li>
  </ul>
  
  Note that commands originating from an OBSE plugin will be compiled without support for OBSE expressions unless the plugin has been built with OBSE v0020 or later. Check with the plugin author for updates and be sure to test the plugin version at run-time if you use this feature to ensure that your users have an appropriate version installed.
  
  <h3>Considerations</h3>
  
  <p>Unlike most programming languages, Oblivion's scripting language doesn't require function arguments to be delineated (e.g., enclosed in parentheses). In most cases this is not a problem, but when an expression contains a call to a function which itself accepts an expression as an argument, followed by another argument or expression, OBSE cannot determine where the inner expression ends. In these cases the entire function call, including the function name, can be enclosed in parentheses to clarify the statement.</p>
  
  <p>Example:<br />
  <code class="s">let a := ar_size array1 + ar_size array2</code></p>
  
  <p>The above expression will not compile because OBSE tries to interpret the entire expression following the first call to <code>ar_size</code> as an array. Instead the expression must be written as:<br />
  <code class="s">let a := (ar_size array1) + ar_size array2</code></p>
  
  <p>For the majority of commands, including all vanilla commands, OBSE commands prior to v0017, and most v0017 commands, the parentheses are not required.</p>
  
  <p>Scripts compiled with OBSE v0018 or greater are made dependent on their respective versions even if their commands are not being used, as the script bytecode representation was changed in the former.</p>
  
  <h3>Run-time Error Reporting</h3>
  
  <p>Because it performs type-checking and type-inference, OBSE can detect and report most syntax errors when compiling a script in the Construction Set. However in some cases errors may be impossible to detect until the script is executed. In ambiguous cases, OBSE gives the scripter the benefit of the doubt by assuming the expression is valid. Run-time errors are logged to the console and obse.log, along with the formID of the script which caused the error. Errors may be tested for (and the output of error messages suppressed) using the <code>TestExpr</code> command.</p>
  
  <p>Common causes of run-time errors include:</p><ul>
    <li style="margin-bottom: 10px;"><strong>Expressions involving array elements:</strong> Because an array element can hold a value of several types, its type is ambiguous at compile-time. For instance, an expression multiplying two array elements will compile, but will cause an error at run-time if the elements contain non-numeric values. It is the scripter's responsibility to either know that the elements are of the correct type or check their types at run-time.</li>
    <li style="margin-bottom: 10px;"><strong>Uninitialized arrays:</strong> It is an error to use bracket notation to attempt to retrieve an element from an uninitialized array. Arrays are initialized by assignment, for instance by calling <code>ar_Construct</code> or by assigning the return value of a command like <code>GetItems</code> to an array variable. An uninitialized array stores an arrayID of 0 so testing if an array is initialized is as simple as <code>if (array)</code>.</li>
    <li style="margin-bottom: 10px;"><strong>Non-existent or out-of-bounds array index:</strong> Attempting to retrieve a value from an array using a key which does not exist in that array is an error. Assigning to an element with a key which doesn't exist is fine - doing so creates an element with that key - unless the array is of the Array type, in which case using a key which is greater than the number of elements in the array will cause an error.</li>
    <li><strong>Function calls:</strong> OBSE knows the return type of commands which return strings or array. However, all vanilla commands and the majority of OBSE commands do not return strings or arrays; they return either numbers or objects. At compile-time OBSE can't know which will be returned, so attempting to use the result of a command like <code>GetInventoryObject</code> in an arithmetic expression will result in an error at run-time.</li>
  </ul>
  
  <h3>Expression Statements</h3>
  
  <p><a id="Let" class="f" href="http://cs.elderscrolls.com/index.php?title=Let">Let</a> - The Let statement is OBSE's version of Oblivion's <code>Set</code> statement. It takes the form <code>let <span class="op">expr1</span> := <span class="op">expr2</span></code> where <span class="op">expr1</span> evaluates to something which can hold a value, such as a variable or array element, and <span class="op">expr2</span> is an expression of a type which can be stored in <span class="op">expr1</span>. Values within expressions can include arithmetic expressions, function calls, etc. The assignment operator checks the types of its operands, so it will allow assigning a number to a <code>short</code> variable but not to a <code>string_var</code>.<br />
  <code class="s">(nothing) Let <span class="op">expr</span> := <span class="op">expr</span></code></p>
  
  <p>There is no practical limit to the complexity of the expressions on either side of the assignment as long as their types match.</p>
  
  <p>Examples:</p>
  <pre>string_var str
  array_var arr
  short num
  let str := "a string"
  let str := str[0:num] + player.GetName + " some more text"
  let arr := ar_Construct Map
  let arr[(num + player.GetPos Z) / player.GetPos X] := player.GetDistance someRef ^ 2</pre>
  
  <p><a id="Eval" class="f" href="http://cs.elderscrolls.com/index.php?title=Eval">Eval</a> - <code>Eval</code> is used within <code>if</code> statements to test the value of an expression. This allows OBSE expressions to be used as conditions. The expression must evaluate to a boolean value.<br />
  <code class="s">(bool) Eval <span class="op">expr</span></code></p>
  
  <p>Example:</p><pre>if eval (array[0] &gt; 1)
    ; code executes if array[0] &gt; 1
  endif</pre>
  
  <p><a id="TestExpr" class="f" href="http://cs.elderscrolls.com/index.php?title=TestExpr">TestExpr</a> - attempts to evaluate an expression, returning false if an error occurs during evaluation and true otherwise. This can be useful when checking if an array index is out of bounds or if an element exists with a given key, among other things. <code>TestExpr</code> suppresses the output of error messages to the console and log file.<br />
  <code class="s">(bool) TestExpr <span class="op">expr</span></code></p>
  
  <p>Example:</p><pre>array_var array
  let array := ar_Construct Array
  if testexpr (array[5] := 2)
    PrintC "5 is a valid index, assignment succeeded."
  else
    PrintC "Index 5 is out of bounds, no assignment."
  endif
  let array := ar_Construct StringMap
  if testexpr (array["INDEX"])
    PrintC "An element exists in array with key 'INDEX'"
  else
    PrintC "No element with the specified key exists."
  endif</pre>
  
  <p><a id="ToString" class="f" href="http://cs.elderscrolls.com/index.php?title=ToString">ToString</a> - attempts to convert an expression to a string. For numeric expressions, the result is a string representation of the numeric value. For objects, it is the name of the object if available; otherwise it is the formID expressed in hexadecimal notation. For string expressions no conversion is necessary.<br />
  <code class="s">(string) ToString <span class="op">expr</span></code></p>
  
  <p>Note that the <code>$</code> operator can be used in place of <code>ToString</code>. The following two lines are equivalent:</p><pre>let aStringVar := ToString (aNumber + 1)
  let aStringVar := $(aNumber + 1)</pre>
  
  <p><a id="TypeOf" class="f" href="http://cs.elderscrolls.com/index.php?title=TypeOf">TypeOf</a> - returns a string representing the type of an expression. This is mainly useful for determining the type of an array element at run-time. Possible return values: "String", "Number", "Form", "Array", "StringMap", "Map".<br />
  <code class="s">(type:string) TypeOf <span class="op">expr</span></code></p>
  
  <h2><a id="User_Defined_Functions">User-Defined Functions</a></h2>
  
  <p>OBSE allows scripters to define their own functions, which can be called from other scripts. When a function is called, script execution passes to the function and resumes after the function call when a return statement is encountered or execution reaches the end of the function script. Factoring commonly-used code out into a function prevents repetitious code and shortens scripts. Encapsulating complicated routines into stand-alone functions results in simplified, more readable code.</p>
  
  <p>Functions are defined as Object scripts but are treated as a distinct type with special limitations. A function script can contain only one block. The name of the script is the name of the function. Function scripts should never be attached to any object. All variables in a function script must be declared before the function body.</p>
  
  <p>A simple function script might look like:</p><pre>ScriptName Multiply	; the name of this function
  float arg1	; holds an argument passed to the function
  float arg2	; second arg
  float localVar	; a local variable
  Begin Function {arg1, arg2}		; function body, with parameter list in {braces}
    Let localVar := arg1 * arg2
    SetFunctionValue localVar	; this is the value that will be returned
    Return				; optional, causes the function to return immediately
  End</pre>
  
  <p>Parameters are stored in local variables and must be indicated within <code>{</code>braces<code>}</code> in the function definition; a set of empty braces indicates the function takes no arguments. Local variables and argument variables retain their values only until the function returns.</p>
  
  <p>To call this function you would use:<br />
  <code class="s">Call Multiply 10 5</code></p>
  
  <p>To store the result (50, in this case):<br />
  <code class="s">Let someVar := Call Multiply 10 5</code></p>
  
  <p>When parsing a function call, the compiler will verify that the number and type of the arguments match those expected by the function's parameter list. If the called function is specified as a ref variable this validation cannot be performed; it is the scripter's responsibility to ensure the argument list is valid to avoid errors at run-time.</p>
  
  <p>Functions have some useful properties. Because they are object scripts, you can call them on references using <code>someRef.Call someFunc</code>; any commands used inside the function will then operate implicitly on the calling reference. Because they are scripts, they can be stored in and called using ref variables, and even passed as arguments to other functions. Functions can call other functions, including themselves (i.e. recursively); for instance:</p>
  <pre>ScriptName Pow ; calculates base to the exp power
  float base
  short exp
  short val
  begin Function {base, exp}
    if exp == 0
      let val := 1
    else
      let val := base * Call Pow base, exp - 1
    endif
    SetFunctionValue val
  end</pre>
  
  <p>OBSE allows a maximum of 30 nested function calls. This means the above function will only work with exponents less than 30.</p>
  
  <p>A note about local variables within functions: when the function terminates, all local variables are reset to zero. Local array variables are automatically cleaned up so there is no need to use <code>ar_Null</code> to reset them. String variables used to hold function arguments are also automatically destroyed. Local string variables, however, are not automatically cleaned up because they may refer to strings in use by other scripts. It is the scripter's responsibility to use <code>sv_Destruct</code> to destroy any local variables when appropriate. The following example code illustrates this idea:</p><pre>scn SomeFunction
  string_var arg
  string_var local0
  string_var local1
  string_var local2
  Begin Function { arg }
    let local0 := "some string"
    set local1 to someQuest.someStringVar
    let local2 := someQuest.someStringVar
    sv_Destruct local0 local2
  End</pre>
  
  <p>In the above script, the string variable <code>arg</code> will be automatically cleaned up by OBSE when the function terminates. <code>local1</code> will not be, and should not be destroyed explicitly because doing so would invalidate the <code>someStringVar</code> variable in an external script. <code>local0</code>, however, must be explicitly destroyed as it is not referenced by any other script. <code>local2</code> must also be destroyed as <code>let</code>, unlike <code>set</code>, creates a <strong>copy</strong> of the string with a new string ID.</p>
  
  <p><a id="Function" class="f" href="http://cs.elderscrolls.com/index.php?title=Function">Function</a> - a blocktype which precedes the body of a function. This blocktype is only valid within function scripts. A parameter list consisting of up to ten local variables used to hold arguments passed to the function must follow this keyword enclosed in curly braces; if the function takes no arguments the braces should be empty.</p><pre>Begin Function {<span class="op">arg1, arg2, ... arg10</span>}
    <span class="op">; function body</span>
  End</pre>
  
  <p><a id="SetFunctionValue" class="f" href="http://cs.elderscrolls.com/index.php?title=SetFunctionValue">SetFunctionValue</a> - specifies the value to be returned from a function. Valid only within a <code>Function</code> block. If a function does not specify a return value, the return value is assumed to be numeric zero. If multiple calls to <code>SetFunctionValue</code> are processed within a single Function block, the most recent value specified will be returned.<br />
  <code class="s">(nothing) SetFunctionValue returnValue:expr</code></p>
  
  <p><a id="Call" class="f" href="http://cs.elderscrolls.com/index.php?title=Call">Call</a> - calls a user-defined function. Should be followed by a list of arguments matching the types expected by the function. If a calling reference is specified, commands within the function body will operate on that reference. Call returns whatever value is returned by the function.<br />
  <code class="s">(returnValue:multi) <span class="op">ref</span>.Call function:ref <span class="op">arg1:multi arg2:multi ... arg10:multi</span></code></p>
  
  <p><a id="GetCallingScript" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCallingScript">GetCallingScript</a> - returns the script that called the currently executing function script. Returns nothing if the function script was not invoked by a <strong>Call</strong> statement from another script (e.g., will return nothing if the function was invoked as an event handler by OBSE).<br />
  <code class="s">(callingScript:ref) GetCallingScript</code></p>
  
  <h2><a id="Events">Event Handler Functions</a></h2>
  
  <p>An event handler is a user-defined function designed to respond to game events. Rather than calling the function directly, the scripter uses <a href="#SetEventHandler">SetEventHandler</a> to register it as a handler for a specific event. When the associated event occurs during gameplay, OBSE will invoke any handlers for that event, passing information about the event to the function through its arguments.</p>
  <p>Events include block types such as "OnHit", "OnDeath", and so on, as well as other events involving loading, saving, and exiting the game. Each event expects its handlers to accept a specific set of arguments. The supported events, including any required arguments (listed in the order in which they should appear in the function definition) are listed below:</p>
  <table>	<caption style="font-size: 110%; color: #000099; background-color: #ffffff;">Events</caption>
  <tr><th align="left" width="15%">Name</th> <th align="left" width="25%">Parameters</th> <th align="left" width="60%">Notes</th></tr>
    <tr><td>OnHit</td><td>target:ref attacker:ref</td></tr>
    <tr><td>OnHitWith</td><td>target:ref weapon:form</td></tr>
    <tr><td>OnMagicEffectHit</td><td>target:ref effectCode:int</td></tr>
    <tr><td>OnMagicEffectHit2</td><td>target:ref effect:ref</td><td>Only useful for effects which have valid formIDs at compile-time, e.g. effects from the Oblivion Magic Extender plugin</td></tr>
    <tr><td>OnActorEquip</td><td>target:ref item:form</td></tr>
    <tr><td>OnDeath	</td><td>target:ref killer:form</td></tr>
    <tr><td>OnMurder</td><td>target:ref killer:form</td></tr>
    <tr><td>OnKnockout</td><td>target:ref</td></tr>
    <tr><td>OnActorUnequip</td><td>target:ref item:form</td></tr>
    <tr><td>OnAlarm Trespass</td><td>alarmedActor:ref criminal:ref</td></tr>
    <tr><td>OnAlarm Steal</td><td>alarmedActor:ref criminal:ref</td></tr>
    <tr><td>OnAlarm Attack</td><td>alarmedActor:ref criminal:ref</td></tr>
    <tr><td>OnAlarm Pickpocket</td><td>alarmedActor:ref criminal:ref</td></tr>
    <tr><td>OnAlarm Murder</td><td>alarmedActor:ref criminal:ref</td></tr>
    <tr><td>OnPackageChange</td><td>target:ref package:form</td></tr>
    <tr><td>OnPackageStart</td><td>target:ref package:form</td></tr>
    <tr><td>OnPackageDone</td><td>target:ref package:form</td></tr>
    <tr><td>OnStartCombat</td><td>target:ref opponent:ref</td></tr>
    <tr><td>OnActivate</td><td>activatedRef:ref activatingRef:ref</td></tr>
    <tr><td>OnVampireFeed</td><td>NONE</td><td>invoked after player finishes feeding as a vampire</td></tr>
    <tr><td>OnSkillUp</td><td>skillActorValueCode:int</td><td>invoked after skill increases through use</td></tr>
    <tr><td>OnScriptedSkillUp</td><td>skillActorValueCode:int amount:int</td><td>when ModPCSkill/AdvanceSkill are used to increase skill, invoked before the skill is modified</td></tr>
    <tr><td>OnDrinkPotion</td><td>drinker:ref potion:form</td></tr>
    <tr><td>OnEatIngredient</td><td>eater:ref ingredient:form</td><td>also triggers OnActorEquip event</td></tr>
    <tr><td>OnActorDrop	</td><td>dropper:ref droppedItem:ref</td><td>droppedItem is the new reference in the game world to the dropped item</td></tr>
    <tr><td>OnSpellCast	</td>
      <td>caster:ref spell:form</td>
      <td>only invoked when the caster is an actor</td></tr>
    <tr><td>OnScrollCast</td>
      <td>caster:ref scrollEnchantment:form</td>
      <td>only invoked when the caster is an actor</td></tr>
    <tr><td>OnFallImpact</td><td>faller:ref</td><td>invoked when a falling actor hits the ground with sufficient velocity to be potentially damaging, before damage is applied</td></tr>
    <tr><td>OnMapMarkerAdd</td><td>mapMarker:ref</td></tr>
    <tr><td>OnHealthDamage</td><td>damage:float attacker:ref</td><td>Invoked <strong>on</strong> the actor taking damage (i.e. GetSelf will return the damaged actor) whenever damage is taken. "Attacker" may be zero e.g. when taking damage from falling. The handler is invoked just before the damage is applied, so it can be nullified by commands like ModActorValue. Use the <strong>object</strong> filter to specify the damaged actor to which your event handler should be attached, if any. The <strong>ref</strong> filter can be used to specify the attacking actor, if any.</td></tr>
    <tr><td>OnCreateSpell</td><td>spell:ref</td><td>when player creates a new spell</td></tr>
    <tr><td>OnCreatePotion</td><td>potion:ref isUnique:int</td><td>when player creates a new potion. The second argument is 1 if the resulting potion is a new base object, 0 if a previously-created potion has the same effects as the newly-created one (in which case the existing base object is used).</td></tr>
    <tr><td>OnEnchant</td><td>enchantedItem:ref</td><td>when player enchants an item.</td></tr>
    <tr><td>OnAttack</td><td>actor:ref</td><td>Slightly misnamed. Invoked whenever <strong>actor</strong> begins the animation sequence for a melee or staff attack or a spell cast. Use commands like IsCasting to determine the current action.</td></tr>
    <tr><td>OnBowAttack</td><td>actor:ref</td><td>actor begins the animation of drawing his bowstring</td></tr>
    <tr><td>OnRelease</td><td>actor:ref</td><td>animation begun by OnAttack or OnBowAttack completes - e.g., actor releases an arrow shot, swings his weapon, or releases a spell projectile.</td></tr>
    <tr><td>OnBlock</td><td>actor:ref</td><td>actor begins block animation</td></tr>
    <tr><td>OnRecoil</td><td>actor:ref</td><td>actor begins recoil animation</td></tr>
    <tr><td>OnStagger</td><td>actor:ref</td><td>actor begins stagger animation</td></tr>
    <tr><td>OnDodge</td><td>actor:ref</td><td>actor begins dodge animation</td></tr>
    <tr><td>OnSoulTrap</td><td>capturedActor:ref soulgem:ref</td><td>Second parameter is an InventoryReference for the soulgem used to capture the soul, valid only for the duration of the event handler</td></tr>
    <tr><td>OnQuestComplete</td><td>quest:ref</td><td>when a quest is marked as completed</td></tr>
    <tr><td>OnMagicCast</td><td>magicItem:ref target:ref</td><td>Invoked on the casting reference whenever it attempts to cast a spell/scroll. The target ref is valid only for self-range spells (the exception is when the spell is cast using the Cast command). Works on both actors and non-actor magic casters (activators, furniture, doors, etc.).</td></tr>
    <tr><td>OnMagicApply</td><td>magicItem:ref caster:ref</td><td>Invoked on the target reference whenever a magic item&#39;s (spells, enchantments, potions, ingredients) effects are applied to it, once for each of its effect items.</td></tr>
    <tr><td>OnWaterDive</td><td>actor:ref</td><td>Invoked when an actor goes underwater.</td></tr>
    <tr><td>OnWaterSurface</td><td>actor:ref</td><td>Invoked when a submerged actor emerges from the water.</td></tr>
  
    <tr><td>LoadGame</td><td>filename:string</td></tr>
    <tr><td>SaveGame</td><td>filename:string</td></tr>
    <tr><td>PostLoadGame</td><td>gameLoadedSuccessfully:bool</td><td>0 if error occurred during load (corrupt savegame?), 1 otherwise</td></tr>
    <tr><td>ExitGame</td><td>NONE</td><td>exiting from main menu or in-game menu</td></tr>
    <tr><td>ExitToMainMenu</td><td>NONE</td><td>exiting from in-game menu to main menu</td></tr>
    <tr><td>QQQ	</td><td>NONE</td><td>exiting via QQQ/QuitGame console command</td></tr>
    <tr><td>OnNewGame</td><td>NONE</td><td>user starts a new game from the main menu</td></tr>
    <tr><td>OnSaveIni</td><td>postSave:bool</td><td>Invoked before (postSave=false) and after (postSave=true) the game's ini settings are saved to the ini file. Not invoked when saving ini settings when quitting the game - use an ExitGame handler if settings must be reset before the ini is saved at game exit</td></tr>
    <tr><td id="OnKeyEvent">OnKeyEvent</td><td>key:int  action:int</td><td>Invoked when the key is pressed (action 0) released (action 1) or hold (action 2). Experimental</td></tr>
      <tr><td id="OnControlEvent">OnControlEvent</td><td>control:int  action:int</td><td>Invoked when the control is pressed (action 0) released (action 1) or hold (action 2). Experimental</td></tr>
  </table>
  
  <p>For events associated with block types, you may provide a specific value for any, all, or none of the arguments when registering an event handler. The first argument is referred to by the name "first" or "ref" and the second as "second" or "object", regardless of the names of the argument variables in your function script (exception: for OnHealthDamage, "second" or "object" refers to the damaged actor). Doing so allows you to filter out events you're not interested in. For instance, to handle events involving the player being hit by another actor, use <code>SetEventHandler OnHit yourScript first::playerRef</code>. To handle events in which the player, and only the player, hits anyone else, use <code>SetEventHandler OnHit yourScript second::playerRef</code>. To handle the player being affected by a Restore Health magic effect, use <code>SetEventHandler OnMagicEffectHit yourScript first::playerRef second::"REHE"</code>.</p>
  <p>It is recommended that you prefer to filter events as strictly as possible to allow OBSE to avoid calling your handler for events you're not interested in. Further, once an event handler becomes unneeded (for instance, if the target of the handler dies), use RemoveEventHandler to remove it; this prevents OBSE from having to check against the defunct handler when processing events. Be aware that event handler scripts are invoked at the moment the event is registered by the game. For example, an OnEquip handler is invoked when an actor decides to equip an item, but before the item is actually equipped, which means that trying to unequip the item from within the handler will fail. IMPORTANT: avoid using AddSpell to add an ability or disease to an actor from within an OnMagicEffectHit handler, as doing so may cause the game to become unstable.</p>
  
  <p><a id="SetEventHandler" class="f" href="http://cs.elderscrolls.com/index.php?title=SetEventHandler">SetEventHandler</a> - registers a user-defined function as a handler for the specified event. If the function script returns a value, it will be ignored. Two optional arguments can be supplied as key::value pairs to filter events according to the target and/or object.<br />
  <code class="s">(success:bool) SetEventHandler eventID:string functionScript:ref <span class="op">filter1:pair filter2:pair</span></code></p>
  Example usage:
  <code><pre>
    scn FnOnHitByPlayer
    ref target
    ref attacker
  
    begin Function { target, attacker }
      ; we know the attacker must be the player, but the argument is still required
      print $target + " was hit by the player"
    end
    -------------
    scn FnOnPlayerRestoreHealth
    ref target
    long effectCode
  
    begin Function { target, effectCode }
      print "The player has been hit by a restore health effect"
    end
    --------------
    scn FnOnLoadGame
    string_var filename
  
    begin Function { filename }
      print "Loading game from " + $filename
    end
    ---------------
    scn SomeQuestScript
    begin gamemode
      if getGameRestarted
        SetEventHandler "OnHit" FnOnHitByPlayer second::PlayerRef
        SetEventHandler "OnMagicEffectHit" FnOnPlayerRestoreHealth first::PlayerRef second::"REHE"
        SetEventHandler "LoadGame" FnOnLoadGame
      endif
    end
  </pre></code>
  <p><a id="RemoveEventHandler" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveEventHandler">RemoveEventHandler</a> - removes the specified script as an event handler for the specified event. Two optional arguments can be supplied as key::value pairs to filter events according to the target and/or object. If both filters are omitted, all event handlers matching the script and event will be removed. If only one filter is omitted, all handlers matching the script, event, and the other filter will be removed. Returns true if at least one matching event handler was found and removed, false otherwise.<br />
  <code class="s">(removed:bool) RemoveEventHandler eventID:string functionScript:ref <span class="op">filter1:pair filter2:pair</span></code></p>
  
  <p><span id="EventHandlerExist" class="f">EventHandlerExist</span> - checks if the specified script is set as an event handler for the specified event. Two optional arguments can be supplied as key::value pairs to filter events according to the target and/or object. The command will match the specific event handler, so no partial filtering is allowed.<br />
  <code class="s">(exists:bool) EventHandlerExist eventID:string functionScript:ref <span class="op">filter1:pair filter2:pair</span></code></p>
  
  <p><a id="GetCurrentEventName" class="f" href="http://cs.elderscrolls.com/index.php?title=GetCurrentEventName">GetCurrentEventName</a> - When called from within an event handler, returns the name of the event currently being handled, as defined <a href="#Events">above</a>.<br />
  <code class="s">(eventName:string) GetCurrentEventName</code></p>
  
  <h3><a id="User_Defined_Events">User-Defined Events</a></h3>
  
  <p>In addition to the events supplied by OBSE, mods can also register event handlers for events dispatched by other mods. These types of events are referred to as "user-defined events". The event handler for a user-defined event always takes one argument: a Stringmap. The stringmap argument always includes the following two key-value pairs:<pre>
    "eventName": a string indicating the event which occurred
    "eventSender": a string indicating the origin of the event. By default this is the filename of the mod which dispatched the event, unless that mod supplied an alternate sender name.</pre>
  The stringmap argument will also contain any additional data supplied by the sender of the event.</p>
  <p>To register an event handler for a user-defined event, use <a href="#SetEventHandler">SetEventHandler</a>. To dispatch an event to any registered listeners, use <a href="#DispatchEvent">DispatchEvent</a><br />Example:</p>
  <p>
  <pre>scriptname EventHandler
  array_var args
  begin Function {args}
    print "Event " + args->eventName + " received from " + args->eventSender
    print $arg->activator + " was activated by " + $arg->activatedBy
  end
  
  scriptname EventSender
  begin onActivate
    DispatchEvent "Activated" (ar_Map "activator"::GetSelf "activatedBy"::GetActionRef)
  end</pre></p>
  
  <p><a id="DispatchEvent" class="f" href="http://cs.elderscrolls.com/index.php?title=DispatchEvent">DispatchEvent</a> - dispatches a user-defined event to any registered listeners. The eventName parameter specifies the event that occurred; this should be fairly unique to prevent event name clashes between different mods, but the event handler can also disambiguate name clashes by checking the name of the event sender if necessary. The optional second parameter is a StringMap containing any additional information about the event. When the event is dispatched, the array will also include the event name and the name of the sender. If omitted, the name of the sender is the filename from which the event originated; otherwise it matches the supplied third argument.<br />
  <code class="s">(dispatched:bool) DispatchEvent eventName:string <span class="op">args:StringMap senderName:string</span></code></p>
  
  <h2><a id="Inventory_Reference">Inventory References</a></h2>
  
  <p>In Oblivion, objects stored inside of the inventories of actors or containers are not references. However, it can be useful to treat them as references in order to modify them. OBSE provides this functionality through the use of "inventory references", which are specialized, temporary references representing a stack of one or more items inside of a container. Scripts can obtain an inventory reference in three ways: by iterating over the contents of a container, by requesting references to items in a container matching a particular base item using <a href="#GetInvRefsForItem">GetInvRefsForItem</a>, or by creating one directly using <a href="#CreateTempRef">CreateTempRef</a>.</p>
  
  <p>Iteration is performed using a <a href="#ForEach">ForEach</a> loop. On each pass through the loop, the iterator variable is set to a temporary reference to a stack of identical items within the source container. Items are considered identical if they share the same health, soul level, ownership, and/or other values; if any one of these differ then the items are not considered identical and will be returned in different stacks. The order in which stacks are returned is arbitrary, but stacks of the same base object type are guaranteed to be returned consecutively. Note that the number and contents of the stacks returned may not correspond directly to those displayed in the inventory/container menu.</p>
  
  <p>Within the loop, the temporary reference stored in the iterator variable can be treated almost exactly like a normal reference, allowing you to call functions like SetCurrentHealth, SetCurrentSoulLevel, etc on it. However, as soon as execution returns to the top of the loop the previous value of the iterator becomes invalid - the reference it held no longer exists, and has been replaced by a reference to the next stack of items in the container. When the loop ends, the final reference becomes invalid and the iterator variable is set to <code>null</code>. Therefore, you should never store a temporary reference and try to use it later on.</p>
  
  <p>The temporary nature of inventory references require some extra care in their use. The contents of the source container should not be modified within the loop. In general:</p><ul>
    <li type=square>If you move or remove the reference from within a loop using <a href="#RemoveMeIR">RemoveMeIR</a>, the reference becomes immediately invalid.</li>
    <li type=square>Never use Remove/Add/Equip/UnequipItem/RemoveAllItems on the source container from within the loop. Using <a href="#EquipItem">EquipMe</a> and <a href="#UnequipMe">UnequipMe</a> to equip or unequip the current reference is fine.</li>
    <li type=square>Don't use <a href="#SetRefCount">SetRefCount</a> to modify the quantity of an inventory reference</li>
  </ul>
  
  <p>The following code illustrates inventory reference usage:</p>
  <pre>		scriptName ExampleInvRefSCR	; attached to a container/actor reference
      ref iter
      ref container
      short count
      begin onActivate
        let container := getSelf
        foreach iter <- container
          let count := iter.GetRefCount
          print "Found " + $count + " " + iter.GetName + "(s)"
          if iter.GetOwner && iter.GetOwner != playerRef
            if iter.IsEquipped == 0		; can't remove equipped items
              ; move stolen items to another container
              iter.RemoveMeIR someOtherContainerRef
            endif
          else
            ; remove completely
            iter.RemoveMeIR
          endif
          ; iter is now invalid because RemoveMeIR was used - so we won't attempt to continue using it
        loop	; now that loop has terminated, iter has been set to null (0)
  
        ; create a temp ref to a weapon with a specific health value and quantity
        let iter := CreateTempRef weapSteelDagger
        iter.SetRefCount 5		; okay to use SetRefCount on a temp ref that is NOT in a container
        iter.SetCurrentHealth 10 	; damage the 5 daggers
        iter.CopyIR container		; container now contains 5 damaged daggers
        let iter := 0				; temp ref will be invalid next frame, set to null to be sure we don't try to re-use it
      end</pre>
  
  <p><a id="RemoveMeIR" class="f" href="http://cs.elderscrolls.com/index.php?title=RemoveMeIR">RemoveMeIR</a> - removes an inventory reference from its container, optionally transferring it to a different container, in much the same way as the vanilla RemoveMe command. The inventory reference becomes invalid once this command is called and should no longer be used. This command will not remove <strong>equipped</strong> items until the end of the loop.<br />
  <code class="s">(success:bool) reference.RemoveMeIR<span class="op"> containerRef:ref</span></code></p>
  
  <p><a id="CopyIR" class="f" href="http://cs.elderscrolls.com/index.php?title=CopyIR">CopyIR</a> - copies an inventory reference to the specified container. The calling object needn't be in a container and remains valid after the command is called. If the calling object is equipped, the copy will not be equipped.<br />
  <code class="s">(success:bool) reference.CopyIR container:ref</code></p>
  
  <p><a id="CreateTempRef" class="f" href="http://cs.elderscrolls.com/index.php?title=CreateTempRef">CreateTempRef</a> - creates a temporary reference to the specified form. This reference does not exist in the gameworld or in a container, and remains valid for only one frame. It is mostly useful for creating a stack of one or more items to be added to a container with CopyIR<br />
  <code class="s">(tempRef:ref) CreateTempRef baseObject:ref</code></p>
  
  <p><a id="GetInvRefsForItem" class="f" href="http://cs.elderscrolls.com/index.php?title=GetInvRefsForItem">GetInvRefsForItem</a> - given a base inventory item, returns an Array of temporary references to stacks of that item inside the calling container.<br />
  <code class="s">(refs:Array) ref.GetInvRefsForItem baseObject:ref</code></p>
  
  <p><a id="IsEquipped" class="f" href="http://cs.elderscrolls.com/index.php?title=IsEquipped">IsEquipped</a> - returns true if the calling object is currently being worn<br />
  <code class="s">(bool) reference.IsEquipped</code></p>
  
  <h2><a id="Temporary_Functions">Temporary Functions</a></h2>
  
  <p>These functions duplicate existing commands, but they attempt to prevent the changes made by those commands from being stored in the savegame. The arguments and behavior are otherwise identical to the original functions. By default, a command like SetOwnership or SetPos sets a flag telling the game that an attribute of the object (ownership, position, etc) has been changed. When the game is saved, the current value of the flagged attribute will be recorded in the savegame. The game remembers only the fact that the attribute was changed - <strong>not</strong> the value to which it was changed. The upshot is that if, for example, <strong>any</strong> script uses SetPos to change the position of an object, the object's position as saved in the savegame will be its position at the time the save is made - not necessarily the position set by any particular script command.</p>
  
  <p><a id="SetOwnership_T">SetOwnership_T</a></p>
  <p><a id="ClearOwnership_T">ClearOwnership_T</a></p>
  <p><a id="SetPos_T">SetPos_T</a> - note that some persistent references, such as load doors in exterior worldspaces, are flagged as having been moved at the beginning of the game. SetPos_T will not prevent changes to the positions of such objects from being saved.</p>
  <p><a id="SetGoldValue_T">SetGoldValue_T</a>
  
  <h2><a id="Physics_Functions">Physics Functions</a></h2>
  
  <p>These functions allow scripts to modify the physical properties of the world and objects in it. Velocity is measured in game units per second, and acceleration in game units per second squared. Currently, commands that modify velocity are only effective on living actors. Because actors move under their own control, they are not strictly subject to forces other than gravity, so making noticeable changes to their movement using these commands requires using a velocity of large magnitude or repeated calls to SetVelocity over the course of several frames.</p>
  
  <p><a id="GetLocalGravity" class="f" href="http://cs.elderscrolls.com/index.php?title=GetLocalGravity">GetLocalGravity</a> - returns the acceleration due to gravity in the specified axis for the current cell. Unless SetLocalGravityVector has been used, the x and y components will always be zero.<br />
  <code class="s">(gravity:float) GetLocalGravity axis:axis</code></p>
  
  <p><a id="SetLocalGravity" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLocalGravity">SetLocalGravity</a> - sets the vertical acceleration due to gravity for the current cell. Negative values are the norm, causing objects to accelerate downward, but positive values are also acceptable. Changing the gravity for an exterior cell changes it for <strong>all</strong> exterior cells until it is reset by another call to this function. Changes to gravity in an interior cell affect only that cell, and the change will be reset once the cell is reloaded.<br />
  <code class="s">(nothing) SetLocalGravity gravity:float</code></p>
  
  <p><a id="SetLocalGravityVector" class="f" href="http://cs.elderscrolls.com/index.php?title=SetLocalGravityVector">SetLocalGravityVector</a> - sets the x, y, and z components of local acceleration due to gravity. This can be used to cause gravity to act in a non-vertical direction, which might be useful for simulating water currents.<br />
  <code class="s">(nothing) SetLocalGravityVector xAccel:float yAccel:float zAccel:float</code></p>
  
  <p><a id="GetVelocity" class="f" href="http://cs.elderscrolls.com/index.php?title=GetVelocity">GetVelocity</a> - returns the actor's current velocity in the specified axis.<br />
  <code class="s">(velocity:float) reference.GetVelocity axis:axis</code></p>
  
  <p><a id="GetVerticalVelocity" class="f" href="http://cs.elderscrolls.com/index.php?title=GetVerticalVelocity">GetVerticalVelocity</a> - returns the z component of the actor's current velocity.<br />
  <code class="s">(velocity:float) reference.GetVerticalVelocity</code></p>
  
  <p><a id="SetVelocity" class="f" href="http://cs.elderscrolls.com/index.php?title=SetVelocity">SetVelocity</a> - sets the x, y, and z components of the actor's velocity. The change applies only to the current frame.<br />
  <code class="s">(nothing) reference.SetVelocity xVelocity:float yVelocity:float zVelocity:float</code></p>
  
  <p><a id="SetVerticalVelocity" class="f" href="http://cs.elderscrolls.com/index.php?title=SetVerticalVelocity">SetVerticalVelocity</a> - Sets the vertical velocity for an actor. This is primarily useful for actors who are jumping or falling. Positive values will cause the actor to move upwards, negative values will cause him to move downwards, and zero will prevent him from moving vertically for the current frame. On the subsequent frame, acceleration due to gravity will be applied to the new velocity. This means that if you set a falling actor's velocity to zero, on the next frame he will appear to accelerate as if he had just begun falling.<br />
  <code class="s">(nothing) reference.SetVerticalVelocity velocity:float</code></p>
  
  <h2><a id="Type_Codes">Type Codes</a></h2>
  
  <h3><a id="Form_Type_IDs">Form Type IDs</a></h3>
  
  <ul>
    <li>&nbsp; 0: None</li>
    <li>&nbsp; 1: TES4</li>
    <li>&nbsp; 2: Group</li>
    <li>&nbsp; 3: GMST</li>
    <li>&nbsp; 4: Global</li>
    <li>&nbsp; 5: Class</li>
    <li>&nbsp; 6: Faction</li>
    <li>&nbsp; 7: Hair</li>
    <li>&nbsp; 8: Eyes</li>
    <li>&nbsp; 9: Race</li>
    <li>10: Sound</li>
    <li>11: Skill</li>
    <li>12: Effect</li>
    <li>13: Script</li>
    <li>14: LandTexture</li>
    <li>15: Enchantment</li>
    <li>16: Spell</li>
    <li>17: BirthSign</li>
    <li>18: Activator</li>
    <li>19: Apparatus</li>
    <li>20: Armor</li>
    <li>21: Book</li>
    <li>22: Clothing</li>
    <li>23: Container</li>
    <li>24: Door</li>
    <li>25: Ingredient</li>
    <li>26: Light</li>
    <li>27: Misc</li>
    <li>28: Stat</li>
    <li>29: Grass</li>
    <li>30: Tree</li>
    <li>31: Flora</li>
    <li>32: Furniture</li>
    <li>33: Weapon</li>
    <li>34: Ammo</li>
    <li>35: NPC</li>
    <li>36: Creature</li>
    <li>37: LeveledCreature</li>
    <li>38: SoulGem</li>
    <li>39: Key</li>
    <li>40: AlchemyItem</li>
    <li>41: SubSpace</li>
    <li>42: SigilStone</li>
    <li>43: LeveledItem</li>
    <li>44: SNDG</li>
    <li>45: Weather</li>
    <li>46: Climate</li>
    <li>47: Region</li>
    <li>48: Cell</li>
    <li>49: REFR</li>
    <li>50: ACHR</li>
    <li>51: ACRE</li>
    <li>52: PathGrid</li>
    <li>53: WorldSpace</li>
    <li>54: Land</li>
    <li>55: TLOD</li>
    <li>56: Road</li>
    <li>57: Dialog</li>
    <li>58: DialogInfo</li>
    <li>59: Quest</li>
    <li>60: Idle</li>
    <li>61: Package</li>
    <li>62: CombatStyle</li>
    <li>63: LoadScreen</li>
    <li>64: LeveledSpell</li>
    <li>65: ANIO</li>
    <li>66: WaterForm</li>
    <li>67: EffectShader</li>
    <li>68: TOFT</li>
    <li>69: Actors</li>
    <li>70: Inventory items</li>
    <li>72: MapMarker references</li>
  </ul>
  
  <h3><a id="Equipment_Slot_IDs">Equipment Slot IDs*</a></h3>
  
  <ul>
    <li>&nbsp; 0: head</li>
    <li>&nbsp; 1: hair</li>
    <li>&nbsp; 2: upper body</li>
    <li>&nbsp; 3: lower body</li>
    <li>&nbsp; 4: hand</li>
    <li>&nbsp; 5: foot</li>
    <li>&nbsp; 6: right ring</li>
    <li>&nbsp; 7: left ring</li>
    <li>&nbsp; 8: amulet</li>
    <li>&nbsp; 9: weapon</li>
    <li>10: back weapon</li>
    <li>11: side weapon</li>
    <li>12: quiver</li>
    <li>13: shield</li>
    <li>14: torch</li>
    <li>15: tail</li>
    <li>16: weapon</li>
    <li>17: ammo</li>
    <li>18: lower and upper body</li>
    <li>19: lower and upper and foot</li>
    <li>20: lower, upper, hand and foot</li>
    <li>21: lower, upper, and hand</li>
    <li>22: upper and hand</li>
  </ul>
  
  <p>*Return values only</p>
  
  <h4><a id="Slot_Mask">Equipment slot bit assignments:</a></h4>
  
  <ul style="font-family: monospace;">	<li>0x00000001 1 &nbsp; &nbsp; &nbsp;Head</li>
    <li>0x00000002 2 &nbsp; &nbsp; &nbsp;Hair</li>
    <li>0x00000004 4 &nbsp; &nbsp; &nbsp;UpperBody</li>
    <li>0x00000008 8 &nbsp; &nbsp; &nbsp;LowerBody</li>
    <li>0x00000010 16 &nbsp; &nbsp; Hand</li>
    <li>0x00000020 32 &nbsp; &nbsp; Foot</li>
    <li>0x00000040 64 &nbsp; &nbsp; RightRing</li>
    <li>0x00000080 128 &nbsp; &nbsp;LeftRing</li>
    <li>0x00000100 256 &nbsp; &nbsp;Amulet</li>
    <li>0x00000200 512 &nbsp; &nbsp;Weapon</li>
    <li>0x00000400 1024 &nbsp; BackWeapon</li>
    <li>0x00000800 2048 &nbsp; SideWeapon</li>
    <li>0x00001000 4096 &nbsp; Quiver</li>
    <li>0x00002000 8192 &nbsp; Shield</li>
    <li>0x00004000 16384 &nbsp;Torch</li>
    <li>0x00008000 32768 &nbsp;Tail</li>
    <li>0x00010000 65536 &nbsp;Weapon</li>
    <li>0x00020000 131072 Ammo</li>
    <li>0x00040000 262144 Ranged Weapon</li>
  </ul>
  
  <h3><a id="Weapon_Type">Weapon Type</a></h3>
  
  <ul>
    <li>0: Blade1H</li>
    <li>1: Blade2H</li>
    <li>2: Blunt1H</li>
    <li>3: Blunt2H</li>
    <li>4: Staff</li>
    <li>5: Bow</li>
  </ul>
  
  <h3><a id="Apparatus_Type">Apparatus Type</a></h3>
  
  <ul>
    <li>0: Mortar &amp; Pestle</li>
    <li>1:  Alembic</li>
    <li>2:  Calcinator</li>
    <li>3:  Retort</li>
  </ul>
  
  <h3><a id="Apparatus_Quality">Apparatus Quality Levels</a></h3>
  
  <ul>
    <li>.10: Novice</li>
    <li>.25: Apprentice</li>
    <li>.50: Journeyman</li>
    <li>.75: Expert</li>
    <li>1.0: Master</li>
  </ul>
  
  <h3><a id="Armor_Type">Armor Type</a></h3>
  
  <ul>
    <li>0: Light Armor</li>
    <li>1: Heavy Armor</li>
  </ul>
  
  <h3><a id="Soul_Level">Soul Level</a></h3>
  
  <ul>
    <li>0: None</li>
    <li>1: Petty</li>
    <li>2: Lesser</li>
    <li>3: Common</li>
    <li>4: Greater</li>
    <li>5: Grand</li>
  </ul>
  
  <h3><a id="Magic_Item_Type">Magic Item Type</a></h3>
  
  <ul>
    <li>0: Not a Magic Item</li>
    <li>1: Spell</li>
    <li>2: Enchantment</li>
    <li>3: Alchemy Item</li>
    <li>4: Ingredient</li>
  </ul>
  
  <h3><a id="Magic_Effect_Range">Magic Effect Range</a></h3>
  
  <ul>
    <li>0: Self</li>
    <li>1: Touch</li>
    <li>2: Target</li>
  </ul>
  
  <h3><a id="Spell_Type">Spell Type</a></h3>
  
  <ul>
    <li>0: Spell</li>
    <li>1: Disease</li>
    <li>2: Power</li>
    <li>3: Lesser Power</li>
    <li>4: Ability</li>
  </ul>
  
  <h3><a id="Spell_Mastery_Level">Spell Mastery Level</a></h3>
  
  <ul>
    <li>0: Novice</li>
    <li>1: Apprentice</li>
    <li>2: Journeymand</li>
    <li>3: Expert</li>
    <li>4: Master</li>
  </ul>
  
  <h3><a id="Enchantment_Type">Enchantment Type</a></h3>
  
  <ul>
    <li>0: Scroll</li>
    <li>1: Staff</li>
    <li>2: Weapon</li>
    <li>3: Apparel</li>
  </ul>
  
  <h3><a id="Magic_Schools">Magic Schools</a></h3>
  
  <ul>
    <li>0: Alteration</li>
    <li>1: Conjuration</li>
    <li>2: Destruction</li>
    <li>3: Illusion</li>
    <li>4: Mysticism</li>
    <li>5: Restoration</li>
  </ul>
  
  <h3><a id="Actor_Value_Codes">Actor Value Codes</a></h3>
  
  <ul>
    <li>&nbsp; &nbsp; 0: Strength</li>
    <li>&nbsp; &nbsp; 1: Intelligence</li>
    <li>&nbsp; &nbsp; 2: Willpower</li>
    <li>&nbsp; &nbsp; 3: Agility</li>
    <li>&nbsp; &nbsp; 4: Speed</li>
    <li>&nbsp; &nbsp; 5: Endurance</li>
    <li>&nbsp; &nbsp; 6: Personality</li>
    <li>&nbsp; &nbsp; 7: Luck</li>
    <li>&nbsp; &nbsp; 8: Health</li>
    <li>&nbsp; &nbsp; 9: Magicka</li>
    <li>&nbsp; 10: Fatigue</li>
    <li>&nbsp; 11: Encumbrance</li>
    <li>&nbsp; 12: Armorer</li>
    <li>&nbsp; 13: Athletics</li>
    <li>&nbsp; 14: Blade</li>
    <li>&nbsp; 15: Block</li>
    <li>&nbsp; 16: Blunt</li>
    <li>&nbsp; 17: HandToHand</li>
    <li>&nbsp; 18: HeavyArmor</li>
    <li>&nbsp; 19: Alchemy</li>
    <li>&nbsp; 20: Alteration</li>
    <li>&nbsp; 21: Conjuration</li>
    <li>&nbsp; 22: Destruction</li>
    <li>&nbsp; 23: Illusion</li>
    <li>&nbsp; 24: Mysticism</li>
    <li>&nbsp; 25: Restoration</li>
    <li>&nbsp; 26: Acrobatics</li>
    <li>&nbsp; 27: LightArmor</li>
    <li>&nbsp; 28: Marksman</li>
    <li>&nbsp; 29: Mercantile</li>
    <li>&nbsp; 30: Security</li>
    <li>&nbsp; 31: Sneak</li>
    <li>&nbsp; 32: Speechcraft</li>
    <li>&nbsp; 33: Aggression</li>
    <li>&nbsp; 34: Confidence</li>
    <li>&nbsp; 35: Energy</li>
    <li>&nbsp; 36: Responsibility</li>
    <li>&nbsp; 37: Bounty</li>
    <li>&nbsp; 38: Fame</li>
    <li>&nbsp; 39: Infamy</li>
    <li>&nbsp; 40: MagickaMultiplier</li>
    <li>&nbsp; 41: NightEyeBonus</li>
    <li>&nbsp; 42: AttackBonus</li>
    <li>&nbsp; 43: DefendBonus</li>
    <li>&nbsp; 44: CastingPenalty</li>
    <li>&nbsp; 45: Blindness</li>
    <li>&nbsp; 46: Chameleon</li>
    <li>&nbsp; 47: Invisibility</li>
    <li>&nbsp; 48: Paralysis</li>
    <li>&nbsp; 49: Silence</li>
    <li>&nbsp; 50: Confusion</li>
    <li>&nbsp; 51: DetectItemRange</li>
    <li>&nbsp; 52: SpellAbsorbChance</li>
    <li>&nbsp; 53: SpellReflectChance</li>
    <li>&nbsp; 54: SwimSpeedMultiplier</li>
    <li>&nbsp; 55: WaterBreathing</li>
    <li>&nbsp; 56: WaterWalking</li>
    <li>&nbsp; 57: StuntedMagicka</li>
    <li>&nbsp; 58: DetectLifeRange</li>
    <li>&nbsp; 59: ReflectDamage</li>
    <li>&nbsp; 60: Telekinesis</li>
    <li>&nbsp; 61: ResistFire</li>
    <li>&nbsp; 62: ResistFrost</li>
    <li>&nbsp; 63: ResistDisease</li>
    <li>&nbsp; 64: ResistMagic</li>
    <li>&nbsp; 65: ResistNormalWeapons</li>
    <li>&nbsp; 68: ResistParalysis</li>
    <li>&nbsp; 67: ResistPoison</li>
    <li>&nbsp; 68: ResistShock</li>
    <li>&nbsp; 69: Vampirism</li>
    <li>&nbsp; 70: Darkness</li>
    <li>&nbsp; 71: ResistWaterDamage</li>
    <li>256: No Actor Value</li>
  </ul>
  
  <h3><a id="Class_Specialization_Codes">Class Specialization Codes</a></h3>
  
  <ul>
    <li>0: Combat</li>
    <li>1: Magic</li>
    <li>2: Stealth</li>
  </ul>
  
  <h3><a id="Input_Control_IDs">Input Control IDs</a></h3>
  
  <ul>
    <li>&nbsp; 0: Forward</li>
    <li>&nbsp; 1: Back</li>
    <li>&nbsp; 2: Slide Left</li>
    <li>&nbsp; 3: Slide Right</li>
    <li>&nbsp; 4: Use</li>
    <li>&nbsp; 5: Activate</li>
    <li>&nbsp; 6: Block</li>
    <li>&nbsp; 7: Cast</li>
    <li>&nbsp; 8: Ready Item</li>
    <li>&nbsp; 9: Crouch/Sneak</li>
    <li>10: Run</li>
    <li>11: Always Run</li>
    <li>12: Auto Move</li>
    <li>13: Jump</li>
    <li>14: Toggle POV</li>
    <li>15: Menu Mode</li>
    <li>16: Rest</li>
    <li>17: Quick Menu</li>
    <li>18: Quick1</li>
    <li>19: Quick2</li>
    <li>20: Quick3</li>
    <li>21: Quick4</li>
    <li>22: Quick5</li>
    <li>23: Quick6</li>
    <li>24: Quick7</li>
    <li>25: Quick8</li>
    <li>26: QuickSave</li>
    <li>27: QuickLoad</li>
    <li>28: Grab</li>
  </ul>
  
  <h3><a id="Creature_Type">Creature Type</a></h3>
  
  <ul>
    <li>0: Creature</li>
    <li>1: Daedra</li>
    <li>2: Undead</li>
    <li>3: Humanoid</li>
    <li>4: Horse</li>
    <li>5: Giant</li>
  </ul>
  
  <h3><a id="HDR_Value">HDR Value</a></h3>
  
  <ul>
    <li>&nbsp; 0: Eye Adapt</li>
    <li>&nbsp; 1: Blur Radius</li>
    <li>&nbsp; 2: Blur Passes</li>
    <li>&nbsp; 3: Emissive Mult</li>
    <li>&nbsp; 4: Target LUM</li>
    <li>&nbsp; 5: Upper LUM Clamp</li>
    <li>&nbsp; 6: Bright Scale</li>
    <li>&nbsp; 7: Bright Clamp</li>
    <li>&nbsp; 8: LUM Ramp No Tex</li>
    <li>&nbsp; 9: LUM Ramp Min</li>
    <li>10: LUM Ramp Max</li>
    <li>11: Sunlight Dimmer</li>
    <li>12: Grass Dimmer</li>
    <li>13: Tree Dimmer</li>
  </ul>
  
  <h3><a id="Weather_Color">Weather Color</a></h3>
  
  <ul>
    <li>&nbsp; 0: Sky Upper</li>
    <li>&nbsp; 1: Fog</li>
    <li>&nbsp; 2: Clouds Lower</li>
    <li>&nbsp; 3: Ambient</li>
    <li>&nbsp; 4: Sunlight</li>
    <li>&nbsp; 5: Sun</li>
    <li>&nbsp; 6: Stars</li>
    <li>&nbsp; 7: Sky Lower</li>
    <li>&nbsp; 8: Horizon</li>
    <li>&nbsp; 9: Clouds Upper</li>
    <li>10: Lightning</li>
  </ul>
  
  <h3><a id="Weather_Time">Weather Time</a></h3>
  
  <ul>
    <li>0: Sunrise</li>
    <li>1: Day</li>
    <li>2: Sunset</li>
    <li>3: Night</li>
  </ul>
  
  <h3><a id="RGB_Value">RGB Value</a></h3>
  
  <ul>
    <li>0: Red</li>
    <li>1: Green</li>
    <li>2: Blue</li>
  </ul>
  
  <h3><a id="Music_Type">Music Type</a></h3>
  
  <ul>
    <li>0: Default</li>
    <li>1: Public</li>
    <li>2: Dungeon</li>
  </ul>
  
  <h3><a id="Projectile_Type">Projectile Type</a></h3>
  
  <ul>
    <li>0: Arrow</li>
    <li>1: Magic Ball</li>
    <li>2: Magic Fog</li>
    <li>3: Magic Bolt</li>
  </ul>
  
  <h3><a id="Actor_Sound">Actor Sound</a></h3>
  
  <ul>
    <li>0: LeftFoot</li>
    <li>1: RightFoot</li>
    <li>2: LeftBack</li>
    <li>3: RightBack</li>
    <li>4: Idle</li>
    <li>5: Aware</li>
    <li>6: Attack</li>
    <li>7: Hit</li>
    <li>8: Death</li>
    <li>9: Weapon</li>
  </ul>
  
  <h3><a id="Detection_State">Detection State</a></h3>
  
  <ul>
    <li>0: Lost</li>
    <li>1: Unseen</li>
    <li>2: Noticed</li>
    <li>3: Seen</li>
  </ul>
  
  <h3><a id="Animation_Group">Animation Group</a></h3>
  
  <p>Note: Functions expecting an Animation Group parameter will accept the string associated with that group.</p><ul>
    <li>&nbsp; 0: Idle</li>
    <li>&nbsp; 1: DynamicIdle</li>
    <li>&nbsp; 2: SpecialIdle</li>
    <li>&nbsp; 3: Forward</li>
    <li>&nbsp; 4: Backward</li>
    <li>&nbsp; 5: Left</li>
    <li>&nbsp; 6: Right</li>
    <li>&nbsp; 7: FastForward</li>
    <li>&nbsp; 8: FastBackward</li>
    <li>&nbsp; 9: FastLeft</li>
    <li>10: FastRight</li>
    <li>11: DodgeForward</li>
    <li>12: DodgeBack</li>
    <li>13: DodgeLeft</li>
    <li>14: DodgeRight</li>
    <li>15: TurnLeft</li>
    <li>16: TurnRight</li>
    <li>17: Equip</li>
    <li>18: Unequip</li>
    <li>19: AttackBow</li>
    <li>20: AttackLeft</li>
    <li>21: AttackRight</li>
    <li>22: AttackPower </li>
    <li>23: AttackForwardPower</li>
    <li>24: AttackBackPower</li>
    <li>25: AttackLeftPower</li>
    <li>26: AttackRightPower</li>
    <li>27: BlockIdle</li>
    <li>28: BlockHit</li>
    <li>29: BlockAttack</li>
    <li>30: Recoil</li>
    <li>31: Stagger</li>
    <li>32: Death</li>
    <li>33: TorchIdle</li>
    <li>34: CastSelf</li>
    <li>35: CastTouch</li>
    <li>36: CastTarget</li>
    <li>37: CastSelfAlt</li>
    <li>38: CastTouchAlt</li>
    <li>39: CastTargetAlt</li>
    <li>40: JumpStart</li>
    <li>41: JumpLoop</li>
    <li>42: JumpLand</li>
  </ul>
  
  <h3><a id="Service_Flags">Service Flags</a></h3>
  
  <p>Note: Add two or more flags together to specify a group of services offered by an NPC.</p><ul>
    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1: Weapons</li>
    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2: Armor</li>
    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4: Clothing</li>
    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8: Books</li>
    <li>&nbsp; &nbsp; &nbsp; &nbsp; 16: Ingredients</li>
    <li>&nbsp; &nbsp; &nbsp; 128: Lights</li>
    <li>&nbsp; &nbsp; &nbsp; 256: Apparatus</li>
    <li>&nbsp; &nbsp; 1024: Misc</li>
    <li>&nbsp; &nbsp; 2048: Spells</li>
    <li>&nbsp; &nbsp; 4096: MagicItems</li>
    <li>&nbsp; &nbsp; 8192: Potions</li>
    <li>&nbsp; 16384: Training</li>
    <li>&nbsp; 65536: Recharge</li>
    <li>131072: Repair</li>
  </ul>
  
  <h3><a id="Biped_Path_Codes">Biped Path Codes</a></h3>
  
  <p>Specifies icon/model paths associated with biped objects, i.e. clothing and armor</p><ul>
    <li>0: Male Biped Path</li>
    <li>1: Female Biped Path</li>
    <li>2: Male Ground Path</li>
    <li>3: Female Ground Path</li>
  </ul>
  
  <h3><a id="Process_Level">Process Level</a></h3>
  
  <p>For actors, the level at which the game processes their AI.</p><ul>
    <li>0: High</li>
    <li>1: Middle-high</li>
    <li>2: Middle-low</li>
    <li>3: Low</li>
  </ul>
  
  <h3><a id="Menu_Code">Menu Code</a></h3>
  
  <ul>
    <li>1001: Message</li>
    <li>1002: Inventory</li>
    <li>1003: Stats</li>
    <li>1004: HUDMain</li>
    <li>1005: HUDInfo</li>
    <li>1006: HUDReticle</li>
    <li>1007: Loading</li>
    <li>1008: Container, Barter</li>
    <li>1009: Dialog</li>
    <li>1010: HUDSubtitle</li>
    <li>1011: Generic</li>
    <li>1012: SleepWait</li>
    <li>1013: Pause</li>
    <li>1014: LockPick</li>
    <li>1015: Options</li>
    <li>1016: Quantity</li>
    <li>1017: Audio</li>
    <li>1018: Video</li>
    <li>1019: VideoDisplay</li>
    <li>1020: Gameplay</li>
    <li>1021: Controls</li>
    <li>1022: Magic</li>
    <li>1023: Map</li>
    <li>1024: MagicPopup</li>
    <li>1025: Negotiate</li>
    <li>1026: Book</li>
    <li>1027: LevelUp</li>
    <li>1028: Training</li>
    <li>1029: BirthSign</li>
    <li>1030: Class</li>
    <li>1031: Attributes</li>
    <li>1032: Skills</li>
    <li>1033: Specilization</li>
    <li>1034: Persuasion</li>
    <li>1035: Repair</li>
    <li>1036: RaceSex</li>
    <li>1037: SpellPurchase</li>
    <li>1038: Load</li>
    <li>1039: Save</li>
    <li>1040: Alchemy</li>
    <li>1041: SpellMaking</li>
    <li>1042: Enchantment</li>
    <li>1043: EffectSetting</li>
    <li>1044: Main</li>
    <li>1045: Breath</li>
    <li>1046: QuickKeys</li>
    <li>1047: Credits</li>
    <li>1048: SigilStone</li>
    <li>1049: Recharge</li>
    <li>1051: TextEdit</li>
  </ul>
  
  <h3><a id="Menu_Filter_Code">Menu Filter Code</a></h3>
  
  <h4>Magic Menu:</h4>
  
  <ul>
    <li>1: Target</li>
    <li>2: Touch</li>
    <li>3: Self</li>
    <li>7: All</li>
    <li>8: Active Effects</li>
  </ul>
  
  <h4>Container/Barter/Inventory Menu:</h4>
  
  <ul>
    <li>&nbsp; 1: Weapons</li>
    <li>&nbsp; 2: Armor/Clothing</li>
    <li>&nbsp; 3: Alchemy</li>
    <li>&nbsp; 4: Miscellaneous</li>
    <li>31: All</li>
  </ul>
  
  <h3><a id="Alchemy_Apparatus">Alchemy Apparatus</a></h3>
  
  <ul>
    <li>0: Mortar and Pestle</li>
    <li>1: Alembic</li>
    <li>2: Calcinator</li>
    <li>3: Retort</li>
  </ul>
  
  <h3><a id="Map_Marker_Types">Map Marker Types</a></h3>
  
   <ul>
    <li>&nbsp; 1: Camp</li>
    <li>&nbsp; 2: Cave</li>
    <li>&nbsp; 3: City</li>
    <li>&nbsp; 4: Elven Ruin</li>
    <li>&nbsp; 5: Fort Ruin</li>
    <li>&nbsp; 6: Mine</li>
    <li>&nbsp; 7: Landmark</li>
    <li>&nbsp; 8: Tavern</li>
    <li>&nbsp; 9: Settlement</li>
    <li>10: Daedric Shrine</li>
    <li>11: Oblivion Gate</li>
  </ul>
  
  <h3><a id="Weather_Classifications">Weather Classifications</a></h3>
  
  <ul>
    <li>0: None</li>
    <li>1: Pleasant</li>
    <li>2: Cloudy</li>
    <li>3: Rainy</li>
    <li>4: Snow</li>
  </ul>
  
  <h3><a id="Package_Object_Codes">Package Object Codes</a></h3>
  
  <ul>
    <li>&nbsp; 1: Activator</li>
    <li>&nbsp; 2: Apparatus</li>
    <li>&nbsp; 3: Armor</li>
    <li>&nbsp; 4: Book</li>
    <li>&nbsp; 5: Clothing</li>
    <li>&nbsp; 6: Container</li>
    <li>&nbsp; 7: Door</li>
    <li>&nbsp; 8: Ingredient</li>
    <li>&nbsp; 9: Light</li>
    <li>10: Misc</li>
    <li>11: Flora</li>
    <li>12: Furniture</li>
    <li>13: Weapon (Any)</li>
    <li>14: Ammo</li>
    <li>15: NPC</li>
    <li>16: Creature</li>
    <li>17: Soulgem</li>
    <li>18: Key</li>
    <li>19: Alchemy</li>
    <li>20: Food</li>
    <li>21: Combat Wearable</li>
    <li>22: Wearable</li>
    <li>23: Weapon None</li>
    <li>24: Weapon Melee</li>
    <li>25: Weapon Ranged</li>
    <li>26: Spells (Any)</li>
  </ul>
  
  <h3><a id="Package_Procedures">Package Procedure Names</a></h3>
  <ul>
      <li>TRAVEL</li>
      <li>WANDER</li>
      <li>ACTIVATE</li>
      <li>ACQUIRE</li>
      <li>SLEEP</li>
      <li>EAT</li>
      <li>FOLLOW</li>
      <li>ESCORT</li>
      <li>ALARM</li>
      <li>COMBAT</li>
      <li>FLEE</li>
      <li>YIELD</li>
      <li>DIALOGUE</li>
      <li>WAIT</li>
      <li>TRAVEL_TARGET</li>
      <li>PURSUE</li>
      <li>GREET</li>
      <li>CREATE_FOLLOW</li>
      <li>OBSERVE_COMBAT</li>
      <li>OBSERVE_DIALOGUE</li>
      <li>GREET_DEAD</li>
      <li>WARN</li>
      <li>GET_UP</li>
      <li>MOUNT_HORSE</li>
      <li>DISMOUNT_HORSE</li>
      <li>DO_NOTHING</li>
      <li>CAST_SPELL</li>
      <li>AIM</li>
      <li>NOTIFY</li>
      <li>ACCOMPANY</li>
      <li>USE_ITEM_AT</li>
      <li>FEED</li>
      <li>AMBUSH_WAIT</li>
      <li>SURFACE</li>
      <li>WAIT_FOR_SPELL</li>
      <li>CHOOSE_CAST</li>
      <li>FLEE_NON_COMBAT</li>
      <li>REMOVE_WORN_ITEMS</li>
      <li>SEARCH</li>
      <li>CLEAR_MOUNT_POSITION</li>
      <li>SUMMON_CREATURE_DEFEND</li>
      <li>MOVEMENT_BLOCKED</li>
      <li>UNEQUIP_ARMOR</li>
      <li>DONE</li>
  </ul>
  
  <h3><a id="Surface_Type">Surface Type Codes</a></h3>
  
  <ul>
    <li>&nbsp; 0: Stone</li>
    <li>&nbsp; 1: Cloth</li>
    <li>&nbsp; 2: Dirt</li>
    <li>&nbsp; 3: Glass</li>
    <li>&nbsp; 4: Grass</li>
    <li>&nbsp; 5: Metal</li>
    <li>&nbsp; 6: Organic</li>
    <li>&nbsp; 7: Skin</li>
    <li>&nbsp; 8: Water</li>
    <li>&nbsp; 9: Wood</li>
    <li>10: HeavyStone</li>
    <li>11: HeavyMetal</li>
    <li>12: HeavyWood</li>
    <li>13: Chain</li>
    <li>14: Snow</li>
    <li>15: StoneStairs</li>
    <li>16: ClothStairs</li>
    <li>17: DirtStairs</li>
    <li>18: GlassStairs</li>
    <li>19: GrassStairs</li>
    <li>20: MetalStairs</li>
    <li>21: OrganicStairs</li>
    <li>22: SkinStairs</li>
    <li>23: WaterStairs</li>
    <li>24: WoodStairs</li>
    <li>25: HeavyStoneStairs</li>
    <li>26: HeavyMetalStairs</li>
    <li>27: HeavyWoodStairs</li>
    <li>28: ChainStairs</li>
    <li>29: SnowStairs</li>
    <li>30: Elevator</li>
    <li>31: Default/Unknown</li>
  </ul>
  
  <h3><a id="Swim_Breath_State">Swimming Breath Behaviour Overrides</a></h3>
  
  <ul>
    <li>1: CanBreath - forces the game to think the actor can breath, no other changes so standard behaviour of setting 'curBreath' to 'maxBreath' applies</li>
    <li>2: NoBreath - forces the game to think the actor cannot breath, no other changes so standard behaviour applies</li>
    <li>3: NoTick - stops the game from changing 'curBreath' each frame (when underwater) but still causes health damage when 'curBreath' is set below 0</li>
    <li>4: SkipBreath - completely skips breath level checking (BreathMenu not included)</li>
    <li>5: SkipBreath2 - completely skips breath level checking (BreathMenu included)</li>
  </ul>
  
     
  
  <!--<a href="#Abs">Abs</a><br />
  <a href="#ACos">ACos</a><br />
  <a href="#AddEffectItem">AddEffectItem<sup>10</sup><br />
  AddEffectItemC<sup>10</sup></a><br />
  <a href="#AddFullEffectItem">AddFullEffectItem<sup>11<br />
  </sup></a><a href="#AddFullEffectItem">AddFullEffectItemC<sup>11</sup></a><br />
  <a href="#Spam_Blocking_Functions">AddItemNS</a><sup>15<br />
  </sup><a href="#Spam_Blocking_Functions">AddSpellNS</a><sup>15</sup><br />
  <a href="#AddToLeveledList">AddToLeveledList<sup>13</sup></a><br />
  <a href="#AHammerKey">AHammerKey</a><br />
  <a href="#AnimPathIncludes">AnimPathIncludes</a><sup>15</sup><br />
  <a href="#AppendToName">AppendToName<sup>11</sup></a><br />
  <a href="#ASin">ASin</a><br />
  <a href="#ATan">ATan</a><br />
  <a href="#ATan2">ATan2</a><br />
  <a href="#CalcLeveledItem">CalcLeveledItem<sup>13</sup></a><br />
  <a href="#CalcLevItemNR">CalcLeveledItemNR</a><sup>15</sup><br />
  <a href="#CanCorpseCheck">CanCorpseCheck<sup>14</sup></a><br />
  <a href="#CanTravelToMapMarker">CanTravelToMapMarker</a><sup>16</sup><br />
  <a href="#Ceil">Ceil</a><br />
  <a href="#CharToASCII">CharToAscii</a><sup>16</sup><br />
  <a href="#ClearHotkey">ClearHotKey</a><sup>15<br />
  </sup><a href="#ClearLeveledList">ClearLeveledList</a><sup>15<br />
  </sup><a href="#ClickMenuButton">ClickMenuButton</a><sup>16</sup><br />
  <a href="#CloneForm">CloneForm</a><br />
  <a href="http://obse.silverlock.org/CloseAllMenus">CloseAllMenus</a><sup>15<br />
  </sup><a href="#CloseTextInput">CloseTextInput</a><sup>16</sup><br />
  <a href="#Wearable">CompareFemaleBipedPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CompareFemaleGroundPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CompareFemaleIconPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Simple">CompareIconPath<sup>10</sup></a><a href="#Simple"><br />
  </a><a href="#Wearable">CompareMaleBipedPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CompareMaleGroundPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CompareMaleIconPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Simple">CompareModelPath<sup>10</sup></a><a href="#Simple"><br />
  </a><a href="#CompareName">CompareName<sup>10</sup></a><br />
  <a href="#CompareNames">CompareNames<sup>13</sup></a><br />
  <a href="#CompareScripts">CompareScripts</a><sup>15<br />
  </sup><a href="#CompareStr"></a><a href="#CompareStrCS"></a><a href="#Console_Functions">con_CAL<sup>10</sup></a><br />
  <a href="#con_GetINISetting">con_GetINISetting</a><br />
  <a href="#con_HairTint">con_HairTint</a><br />
  <a href="#con_LoadGame">con_LoadGame<sup>13</sup></a><br />
  <a href="#con_ModWaterShader">con_ModWaterShader</a><br />
  <a href="#con_PlayerSpellBook">con_PlayerSpellBook<sup>14</sup></a><br />
  <a href="#con_QuitGame">con_QuitGame<sup>11</sup></a><br />
  <a href="#con_RefreshINI">con_RefreshINI</a><br />
  <a href="#con_RunMemoryPass">con_RunMemoryPass</a><br />
  <a href="#Console_Functions">con_Save<sup>10</sup></a><br />
  <a href="#con_SaveINI">con_SaveINI<sup>11</sup></a><br />
  <a href="#con_SetCameraFOV">con_SetCameraFOV</a><br />
  <a href="#con_SetClipDist">con_SetClipDist</a><br />
  <a href="#con_SetFog">con_SetFog</a><br />
  <a href="#con_SetGameSetting">con_SetGameSetting</a><br />
  <a href="#con_SetGamma">con_SetGamma</a><br />
  <a href="#con_SetHDRParam">con_SetHDRParam</a><br />
  <a href="#con_SetImageSpaceGlow">con_SetImageSpaceGlow</a><br />
  <a href="#con_SetINISetting">con_SetINISetting</a><br />
  <a href="#con_SetSkyParam">con_SetSkyParam</a><br />
  <a href="#con_SetTargetRefraction">con_SetTargetRefraction</a><br />
  <a href="#con_SetTargetRefractionFire">con_SetTargetRefractionFire</a><br />
  <a href="#con_SexChange">con_SexChange</a><br />
  <a href="#con_Show1stPerson">con_Show1stPerson</a><sup>16</sup><br />
  <a href="#Console_Functions">con_TCL<sup>10</sup></a><br />
  <a href="#con_TFC">con_TFC<sup>12</sup></a><br />
  <a href="#con_TGM">con_TGM<sup>11</sup></a><br />
  <a href="#Console_Functions">con_ToggleAI<sup>10</sup></a><a href="#Console_Functions"><br />
  con_ToggleCombatAI<sup>10</sup></a><a href="#Console_Functions"><br />
  </a><a href="#con_ToggleDetection">con_ToggleDetection</a><br />
  <a href="#con_ToggleMapMarkers">con_ToggleMapMarkers<sup>14</sup></a><br />
  <a href="#Console_Functions">con_ToggleMenus<sup>10</sup></a><br />
  <a href="#con_WaterDeepColor">con_WaterDeepColor</a><br />
  <a href="#con_WaterReflectionColor">con_WaterReflectionColor</a><br />
  <a href="#con_WaterShallowColor">con_WaterShallowColor<br />
  </a><a href="#CopyEyes">CopyEyes<sup>13</sup></a><a href="#CopyHair"><br />
  </a><a href="#Wearable">CopyFemaleBipedPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CopyFemaleGroundPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CopyFemaleIconPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#CopyHair">CopyHair<sup>13</sup></a><br />
  <a href="#IsPluginInstalled"></a><a href="#Simple">CopyIconPath<sup>10</sup></a><br />
  <a href="#Wearable">CopyMaleBipedPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CopyMaleGroundPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">CopyMaleIconPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Simple">CopyModelPath<sup>10</sup></a><a href="#Simple"><br />
  </a><a href="#CopyName">CopyName<sup>10</sup></a><br />
  <a href="#CopyNthEffectItem">CopyNthEffectItem<sup>10</sup></a><br />
  <a href="#CopyAllEffectItems">CopyAllEffectItems<sup>10</sup></a><br />
  <a href="#Cos">Cos</a><br />
  <a href="#Cosh">Cosh</a><br />
  <a href="#CreatureHasNoHead">CreatureHasNoHead<sup>14</sup></a><br />
  <a href="#CreatureHasNoLeftArm">CreatureHasNoLeftArm<sup>14</sup></a><br />
  <a href="#CreatureHasNoMovement">CreatureHasNoMovement<sup>14</sup></a><br />
  <a href="#CreatureHasNoRightArm">CreatureHasNoRightArm<sup>14</sup></a><br />
  <a href="#CreatureNoCombatInWater">CreatureNoCombatInWater<sup>14</sup></a><br />
  <a href="#CreatureUsesWeaponAndShield">CreatureUsesWeaponAndShield<sup>14</sup></a><br />
  <a href="#DebugPrint">DebugPrint</a><sup>16<br />
  </sup><a href="#DeleteFromInputText">DeleteFromInputText</a><sup>16</sup><br />
  <a href="#DisableControl">DisableControl<sup>13</sup></a><br />
  <a href="#DisableKey">DisableKey</a><br />
  <a href="#DisableMouse">DisableMouse</a><br />
  <a href="#EnableControl">EnableControl<sup>13</sup></a><br />
  <a href="#EnableKey">EnableKey</a><br />
  <a href="#EnableMouse">EnableMouse</a><br />
  <a href="#Spam_Blocking_Functions">EquipItemNS</a><sup>15</sup><br />
  <a href="#Exp">Exp</a><br />
  <a href="#FactionHasSpecialCombat">FactionHasSpecialCombat<sup>14</sup></a><br />
  <a href="#FileExists">FileExists</a><sup>15</sup><br />
  <a href="#Exp">Floor</a><br />
  <a href="#Fmod">Fmod<sup>10</sup></a><br />
  <span style="text-decoration: underline;"></span><a href="#GetActiveEffectCount">GetActiveEffectCount<sup>13</sup></a><br />
  <a href="#GetActiveMenuFilter">GetActiveMenuFilter<sup>15</sup></a><br />
  <a href="#GetActiveMenuMode">GetActiveMenuMode<sup>15</sup></a><br />
  <a href="#GetActiveMenuRef">GetActiveMenuRef<sup>15</sup></a><br />
  <a href="#GetActiveMenuObject">GetActiveMenuObject<sup>15</sup></a><br />
  <a href="#GetActiveMenuSelection">GetActiveMenuSelection<sup>15</sup></a><br />
  <a href="#GetActiveMenuComponentID">GetActiveUIComponentID<sup>16</sup></a><br />
  <a href="#GetActiveUIComponentFullName">GetActiveUIComponentFullName<sup>16</sup></a><br />
  <a href="#GetActiveUIComponentID">GetActiveUIComponentName</a><sup>16</sup><br />
  <a href="#GetEnchMenuEnchItem"></a><a href="#GetActorLightAmount">GetActorLightAmount</a><br />
  <a href="#GetActorMaxLevel">GetActorMaxLevel<sup>14</sup></a><br />
  <a href="#GetActorMinLevel">GetActorMinLevel<sup>14</sup></a><br />
  <a href="#GetActorSoulLevel">GetActorSoulLevel<sup>14</sup></a><br />
  <a href="#GetActorValueC">GetActorValueC<sup>14</sup></a><br />
  <a href="#GetAlchMenuIngredient">GetAlchMenuIngredient<sup>15</sup></a><br />
  <a href="#GetAlchMenuIngredientCount">GetAlchMenuIngredientCount<sup>15</sup></a><br />
  <a href="#GetAlchMenuApparatus">GetAlchMenuApparatus<sup>15</sup></a><br />
  <a href="#GetAltControl">GetAltControl2<sup>15</sup></a><br />
  <a href="#Apparatus">GetApparatusType<sup>10</sup></a><a href="#Apparatus"><br />
  </a><a href="#GetArmorAR">GetArmorAR</a><br />
  <a href="#GetArmorType">GetArmorType</a><br />
  <a href="#GetArrowProjectileEnchantment">GetArrowProjectileEnchantment</a><sup>15<br />
  </sup><a href="#GetArrowProjectileBowEnchantment">GetArrowProjectileBowEnchantment</a><sup>15<br />
  </sup><a href="#GetArrowProjectilePoison">GetArrowProjectilePoison</a><sup>15</sup><br />
  <a href="#GetAttackDamage">GetAttackDamage</a><br />
  <a href="#GetBaseObject">GetBaseObject</a><br />
  <a href="#GetBipedIconPath">GetBipedIconPath<sup>16</sup></a><br />
  <a href="#GetBipedModelPath">GetBipedModelPath<sup>16</sup></a><br />
  <a href="#GetBipedSlotMask">GetBipedSlotMask</a><sup>16</sup><br />
  <a href="#Book">GetBookCantBeTaken<sup>10</sup></a><a href="#Book"><br />
  GetBookIsScroll<sup>10</sup></a><a href="#Book"><br />
  GetBookSkillTaught<sup>10</sup></a><br />
  <a href="#GetBookText">GetBookText</a><sup>16</sup><br />
  <a href="#GetCalcAllLevels">GetCalcAllLevels</a><sup>15<br />
  </sup><a href="#GetCalcEachInCount">GetCalcEachInCount<sup>15</sup></a><br />
  <a href="#GetChanceNone">GetChanceNone<sup>15</sup></a><br />
  <a href="#Book"></a><a href="#GetCellMusicType">GetCellMusicType<sup>14</sup></a><br />
  <a href="#GetClass">GetClass</a><br />
  <a href="#GetClassAttribute">GetClassAttribute</a><br />
  <a href="#GetClassSkill">GetClassSkill</a><br />
  <a href="#GetClassSpecialization">GetClassSpecialization</a><br />
  <a href="#GetClimateSunriseBegin">GetClimateSunriseBegin<sup>12</sup></a><br />
  <a href="#GetClimateSunriseEnd">GetClimateSunriseEnd<sup>12</sup></a><br />
  <a href="#GetClimateSunsetBegin">GetClimateSunsetBegin<sup>12</sup></a><br />
  <a href="#GetClimateSunsetEnd">GetClimateSunsetEnd<sup>12</sup></a><br />
  <a href="#GetClimateVolatility">GetClimateVolatility<sup>13</sup></a><br />
  <a href="#GetCloseSound">GetCloseSound</a><sup>15</sup><br />
  <a href="http://obse.silverlock.org/GetContainerMenuView">GetContainerMenuView<sup>15</sup></a><br />
  <a href="http://obse.silverlock.org/SetAltControl"></a><a href="#GetContainerRespawns">GetContainerRespawns<sup>13</sup></a><br />
  <a href="#GetControl">GetControl</a><br />
  <a href="#GetCreatureBaseScale">GetCreatureBaseScale<sup>13</sup></a><br />
  <a href="#Creature">GetCreatureCombatSkill<sup>10</sup></a><a href="#Creature"><br />
  </a><a href="#GetCreatureFlies">GetCreatureFlies<sup>14</sup></a><br />
  <a href="#Creature">GetCreatureMagicSkill<sup>10</sup></a><a href="#Creature"><br />
  </a><a href="#GetCreatureReach">GetCreatureReach<sup>13</sup></a><br />
  <a href="#GetCreatureSoulLevel">GetCreatureSoulLevel<sup>13</sup></a><br />
  <a href="#GetCreatureSound">GetCreatureSound</a><sup>15</sup><br />
  <a href="#GetCreatureSoundBase">GetCreatureSoundBase<sup>14</sup></a><br />
  <a href="#Creature">GetCreatureStealthSkill<sup>10</sup></a><a href="#Creature"><br />
  </a><a href="#GetCreatureSwims">GetCreatureSwims<sup>14</sup></a><br />
  <a href="#Creature">GetCreatureType<sup>10</sup></a><a href="#Creature"><br />
  </a><a href="#GetCreatureWalks">GetCreatureWalks<sup>14</sup></a><br />
  <a href="#GetCurrentCharge">GetCurrentCharge<sup>10</sup></a><br />
  <a href="#GetCurrentClimateID">GetCurrentClimateID<sup>12</sup></a><br />
  <a href="#GetCursorPos">GetCursorPos</a><sup>16</sup><br />
  <a href="#GetCrosshairRef">GetCrosshairRef<sup>14</sup></a><br />
  <a href="#GetCurrentHealth">GetCurrentHealth<sup>10</sup></a><br />
  <a href="#GetCurrentSoulLevel">GetCurrentSoulLevel<sup>10</sup></a><br />
  <a href="#GetCurrentWeatherID">GetCurrentWeatherID<sup>12</sup></a><br />
  <a href="#GetDebugSelection">GetDebugSelection<sup>13</sup></a><br />
  <a href="#GetEnchantment">GetEnchantment</a><br />
  <a href="#GetEnchMenuEnchItem">GetEnchMenuEnchItem</a><sup>15</sup><br />
  <a href="#GetEnchMenuSoulgem">GetEnchMenuSoulgem<sup>15</sup></a><br />
  <a href="#GetEnchantmentCharge">GetEnchantmentCharge</a><br />
  <a href="#GetEnchantmentCost">GetEnchantmentCost</a><br />
  <a href="#GetEnchantmentType">GetEnchantmentType</a><br />
  <a href="#GetEquipmentSlot">GetEquipmentSlot</a><br />
  <a href="#GetEquipmentSlotMask">GetEquipmentSlotMask<sup>10</sup></a><br />
  <a href="#GetEquippedCurrentCharge">GetEquippedCurrentCharge</a><br />
  <a href="#GetEquippedCurrentHealth">GetEquippedCurrentHealth</a><br />
  <a href="#GetEquippedObject">GetEquippedObject</a><br />
  <a href="#GetEquippedWeaponPoison">GetEquippedWeaponPoison</a><br />
  <a href="#GetEyes">GetEyes</a><sup>15<br />
  </sup><a href="#GetFallTimer">GetFallTimer</a><sup>15</sup><br />
  <a href="#GetFirstRef">GetFirstRef<sup>13</sup></a><br />
  <a href="#GetFirstRefInCell">GetFirstRefInCell<sup>16</sup></a><br />
  <a href="#GetFormFromMod">GetFormFromMod</a><sup>16</sup><br />
  <a href="#GetFPS">GetFPS<sup>10</sup></a><br />
  <a href="#GetFullGoldValue">GetFullGoldValue</a><sup>15</sup><br />
  <a href="#GetGameLoaded">GetGameLoaded</a><br />
  <a href="#GetGameRestarted">GetGameRestarted<sup>13</sup></a><br />
  <a href="#GetGodMode">GetGodMode</a><sup>15</sup><br />
  <a href="#GetGoldValue">GetGoldValue</a><br />
  <a href="#GetHair">GetHair<sup>15</sup></a><br />
  <a href="#GetHairColor">GetHairColor<sup>15</sup></a><br />
  <a href="#GetHidesAmulet">GetHidesAmulet<sup>16</sup></a><br />
  <a href="#GetHidesRings">GetHidesRings<sup>16</sup></a><br />
  <a href="#GetHotkeyItem">GetHotKeyItem</a><sup>15</sup><br />
  <a href="#GetHorse">GetHorse<sup>14</sup></a><br />
  <a href="#GetIconPath">GetIconPath<sup>16</sup></a><br />
  <a href="#GetIgnoresResistance">GetIgnoresResistance</a><br />
  <a href="#GetIngredient">GetIngredient<sup>16</sup></a><br />
  <a href="#GetIngredientChance">GetIngredientChance</a><sup>16<br />
  </sup><a href="#GetInputText">GetInputText</a><sup>16</sup><br />
  <a href="#GetInventoryObject">GetInventoryObject</a><br />
  <a href="#GetKeyPress">GetKeyPress</a><br />
  <a href="#GetLastCreatedPotion">GetLastCreatedPotion<sup>16</sup></a><br />
  <a href="#GetLastCreatedSpell">GetLastCreatedSpell</a><sup>16</sup><br />
  <a href="#GetLastEnchantedItem">GetLastEnchantedItem<sup>16</sup></a><br />
  <a href="#GetLastUniqueCreatedPotion">GetLastUniqueCreatedPotion</a><sup>16</sup><br />
  <a href="#GetLevItemByLevel">GetLevItemByLevel</a><sup>15<br />
  </sup><a href="#GetLevItemIndexByForm">GetLevItemIndexByForm</a><sup>16<br />
  </sup><a href="#GetLevItemIndexByLevel">GetLevItemIndexByLevel</a><sup>16</sup><br />
  <a href="#GetLightRadius">GetLightRadius<sup>14</sup></a><br />
  <a href="#GetLinkedDoor">GetLinkedDoor<sup>13</sup></a><br />
  <a href="#GetLoopSound">GetLoopSound</a><sup>15</sup><br />
  <a href="#GetMagicEffectBarterFactor">GetMagicEffectBarterFactor</a><br />
  <a href="#GetMagicEffectBaseCost">GetMagicEffectBaseCost</a><br />
  <a href="#GetMagicEffectCode">GetMagicEffectCode</a><br />
  <a href="#GetMagicEffectEnchantFactor">GetMagicEffectEnchantFactor</a><br />
  <a href="#IsMagicEffectHostile">GetMagicEffectOtherActorValue<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  GetMagicEffectOtherActorValueC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#GetMagicEffectProjectileSpeed">GetMagicEffectProjectileSpeed</a><br />
  <a href="#GetMagicEffectSchool">GetMagicEffectSchool</a><br />
  <a href="#IsMagicEffectHostile">GetMagicEffectUsedObject<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  GetMagicEffectUsedObjectC<sup>10</sup></a><br />
  <a href="#GetMagicItemEffectCount">GetMagicItemEffectCount</a><br />
  <a href="#GetMagicItemType">GetMagicItemType</a><br />
  <a href="#GetMagicProjectileSpell">GetMagicProjectileSpell</a><sup>15<br />
  </sup><a href="#GetMapMarkerType">GetMapMarkerType</a><sup>16</sup><br />
  <a href="#GetMenuFloatValue">GetMenuFloatValue<sup>16</sup></a><br />
  <a href="#GetMenuHasTrait">GetMenuHasTrait</a><sup>16</sup><br />
  <a href="#GetMenuStringValue">GetMenuStringValue</a><sup>16</sup><br />
  <a href="#GetMerchantContainer">GetMerchantContainer<sup>12</sup></a><br />
  <a href="#GetModelPath">GetModelPath<sup>16</sup></a><br />
  <a href="#GetIconPath"><sup></sup></a><a href="#ModFunctions">GetModIndex</a><sup>15</sup><br />
  <a href="#GetMouseButtonPress">GetMouseButtonPress</a><br />
  <a href="#GetName">GetName<sup>16</sup></a><br />
  <a href="#GetNextRef">GetNextRef<sup>13</sup></a><br />
  <a href="#GetNthActiveEffectCaster">GetNthActiveEffectCaster<sup>13</sup></a><br />
  <a href="#GetNthActiveEffectCode">GetNthActiveEffectCode<sup>13</sup></a><a href="#GetNthActiveEffectMagnitude"><br />
  </a><a href="#GetNthActiveEffectData">GetNthActiveEffectData<sup>13</sup></a><a href="#GetTotalActiveEffectMagnitudeC"><br />
  </a><a href="#GetNthActiveEffectDuration">GetNthActiveEffectDuration<sup>13</sup></a><a href="#GetNthActiveEffectTimeElapsed"><br />
  </a><a href="#GetNthActiveEffectMagicItem">GetNthActiveEffectMagicItem<sup>13</sup></a><a href="#GetNthActiveEffectCaster"><br />
  </a><a href="#GetNthActiveEffectMagicItemIndex">GetNthActiveEffectMagicItemIndex<sup>13</sup></a><a href="#GetTotalActiveEffectMagnitude"><br />
  </a><a href="#GetNthActiveEffectMagnitude">GetNthActiveEffectMagnitude<sup>13</sup></a><br />
  <a href="#GetNthActiveEffectTimeElapsed">GetNthActiveEffectTimeElapsed<sup>13</sup></a><a href="#GetNthActiveEffectMagicItem"><br />
  </a><a href="#GetNthChildRef">GetNthChildRef<sup>14</sup></a><br />
  <a href="#GetNthDetectedActor">GetNthDetectedActor</a><sup>15</sup><br />
  <a href="#GetNthEffectItemActorValue">GetNthEffectItemActorValue</a><br />
  <a href="#GetNthEffectItemArea">GetNthEffectItemArea</a><br />
  <a href="#GetNthEffectItemCode">GetNthEffectItemCode</a><br />
  <a href="#GetNthEffectItemDuration">GetNthEffectItemDuration</a><br />
  <a href="#GetNthEffectItemMagnitude">GetNthEffectItemMagnitude</a><br />
  <a href="#GetNthEffectItemRange">GetNthEffectItemRange</a><br />
  <a href="#GetNthEffectItemScript">GetNthEffectItemScript<sup>10</sup></a><br />
  <a href="#GetNthEffectItemScriptName">GetNthEffectItemScriptName</a><sup>16</sup><br />
  <a href="#GetNthEffectItemScriptVisualEffect">GetNthEffectItemScriptSchool<sup>10</sup></a><br />
  <a href="#GetNthEffectItemScriptVisualEffect">GetNthEffectItemScriptVisualEffect<sup>10</sup></a><br />
  <a href="#GetNthExplicitRef">GetNthExplicitRef</a><sup>16</sup><br />
  <a href="#GetNthEffectItemScriptVisualEffect"></a><a href="#GetNthFaction">GetNthFaction<sup>14</sup></a><br />
  <a href="#GetNthFactionRankName">GetNthFactionRankName</a><sup>16</sup><br />
  <a href="#GetNthFollower">GetNthFollower<sup>14</sup></a><br />
  <a href="#GetNthLevItem">GetNthLevItem</a><br />
  <a href="#GetNthLevItemCount">GetNthLevItemCount<sup>15</sup></a><br />
  <a href="#GetNthLevItemLevel">GetNthLevItemLevel<sup>15</sup></a><br />
  <a href="#GetNthModName">GetNthModName</a><sup>16</sup><br />
  <a href="#GetNthPackage">GetNthPackage</a><sup>15</sup><br />
  <a href="#GetNthPlayerSpell">GetNthPlayerSpell<sup>10</sup></a><br />
  <a href="#GetNthRaceBonusSkill">GetNthRaceBonusSkill<sup>12</sup></a><br />
  <a href="#GetNthRaceSpell">GetNthRaceSpell<sup>14</sup></a><br />
  <a href="#ModFunctions">GetNumLoadedMods</a><sup>15</sup><br />
  <a href="#GetNumRanks">GetNumRanks<sup>14</sup></a><br />
  <a href="#GetNumChildRefs">GetNumChildRefs<sup>14</sup></a><br />
  <a href="#GetNumDetectedActors">GetNumDetectedActors</a><sup>15</sup><br />
  <a href="#GetNumericINISetting">GetNumericINISetting</a><br />
  <a href="#GetNumExplicitRefs">GetNumExplicitRefs</a><sup>16</sup><br />
  <a href="#GetNumFactions">GetNumFactions<sup>14</sup></a><br />
  <a href="#GetNumFollowers">GetNumFollowers<sup>14</sup></a><br />
  <a href="#GetNumItems">GetNumItems</a><br />
  <a href="#GetNumKeysPressed">GetNumKeysPressed</a><br />
  <a href="#GetNumLevItems">GetNumLevItems</a><sup>15</sup><br />
  <a href="#GetNumMouseButtonsPressed">GetNumMouseButtonsPressed</a><br />
  <a href="#GetNumPackages">GetNumPackages</a><sup>15</sup><br />
  <a href="#GetNumRefs">GetNumRefs<sup>13</sup></a><br />
  <a href="#GetNumRefsInCell">GetNumRefsInCell</a><sup>16</sup><br />
  <a href="#GetNthActiveEffectMagicItem"></a><a href="#GetObjectCharge">GetObjectCharge</a><br />
  <a href="#GetObjectHealth">GetObjectHealth</a><br />
  <a href="#GetOBSERevision">GetOBSERevision</a><sup>15</sup><br />
  <a href="#GetOBSEVersion">GetOBSEVersion</a><br />
  <a href="#GetOpenKey">GetOpenKey<sup>13</sup></a><br />
  <a href="#GetOpenSound">GetOpenSound<sup>15</sup></a><br />
  <a href="#GetOwner">GetOwner<sup>13</sup></a><br />
  <a href="#GetOwningFactionRank">GetOwningFactionRank<sup>13</sup></a><br />
  <a href="#GetParentCell">GetParentCell</a><br />
  <a href="#GetParentCellOwner">GetParentCellOwner</a><sup><ahref="#GetParentCellOwner">13</a><br />
  </sup><a href="#GetParentCellOwningFactionRank">GetParentCellOwningFactionRank<sup>13</sup></a><br />
  <a href="#GetParentCellWaterHeight">GetParentCellWaterHeight<sup>13</sup></a><br />
  <a href="#GetPCAttributeBonus">GetPCAttributeBonus<sup>15</sup></a><br />
  <a href="#GetPCMajorSkillUps">GetPCMajorSkillUps<sup>15</sup></a><br />
  <a href="#GetPCSpellEffectivenessModifier">GetPCSpellEffectivenessModifier</a><sup>16<br />
  </sup><a href="#GetPCTrainingSessionsUsed">GetPCTrainingSessionsUsed</a><sup>16</sup><br />
  <a href="#GetPlayerSkillUse">GetPlayerSkillUse<sup>11</sup></a><br />
  <a href="#GetPlayerSpell">GetPlayerSpell</a><br />
  <a href="#GetPlayerSpellCount">GetPlayerSpellCount<sup>10</sup></a><br />
  <a href="#GetPlayersLastActivatedLoadDoor">GetPlayersLastActivatedLoadDoor<sup>14</sup></a><br />
  <a href="#GetPlayersLastRiddenHorse">GetPlayersLastRiddenHorse<sup>14</sup></a><br />
  <a href="#GetPluginVersion">GetPluginVersion<sup>13</sup></a><br />
  <a href="#GetProcessLevel">GetProcessLevel</a><sup>15<br />
  </sup><a href="#GetProjectile">GetProjectile</a><sup>16</sup><br />
  <a href="#GetProjectileDistanceTraveled">GetProjectileDistanceTraveled<sup>16</sup></a><br />
  <a href="#GetProjectileLifetime">GetProjectileLifetime<sup>16</sup></a><br />
  <a href="#GetProjectileSource">GetProjectileSource</a><sup>15<br />
  </sup><a href="#GetProjectileSpeed">GetProjectileSpeed</a><sup>16</sup><br />
  <a href="#GetProjectileType">GetProjectileType</a><sup>15</sup><br />
  <a href="#GetNthActiveEffectData"></a><a href="#Apparatus">GetQuality<sup>10</sup></a><br />
  <a href="#GetRace">GerRace<sup>14</sup></a><br />
  <a href="#GetRefCount">GetRefCount</a><sup>15<br />
  </sup><a href="#GetRefVariable">GetRefVariable</a><sup>15</sup><br />
  <a href="#GetRaceAttribute">GetRaceAttribute<sup>12</sup><br />
  GetRaceAttributeC<sup>12</sup></a><br />
  <a href="#GetRaceSkillBonus">GetRaceSkillBonus<sup>12</sup><br />
  GetRaceSkillBonusC<sup>12</sup></a><br />
  <a href="#GetRaceSpellCount">GetRaceSpellCount<sup>14</sup></a><br />
  <a href="#GetRider">GetRider<sup>14</sup></a><br />
  <a href="#GetScript">GetScript<sup>12</sup></a><br />
  <a href="#GetScriptActiveEffectIndex">GetScriptActiveEffectIndex<sup>13</sup></a><br />
  <a href="#GetServicesMask">GetServicesMask</a><sup>15</sup><br />
  <a href="#GetSkillUseIncrement">GetSkillUseIncrement<sup>11</sup></a><br />
  <a href="#GetSoulGemCapacity">GetSoulGemCapacity</a><br />
  <a href="#GetSoulLevel">GetSoulLevel</a><br />
  <a href="#GetSoundPlaying">GetSoundPlaying<sup>15</sup></a><br />
  <a href="#ModFunctions">GetSourceModIndex</a><sup>15<br />
  </sup><a href="#GetSpellEffectiveness">GetSpellEffectiveness<sup>16</sup></a><br />
  <a href="#GetSpellExplodesWithNoTarget">GetSpellExplodesWithNoTarget<sup>12</sup></a><br />
  <a href="#GetSpellMagickaCost">GetSpellMagickaCost</a><br />
  <a href="#GetSpellMasteryLevel">GetSpellMasteryLevel</a><br />
  <a href="#GetSpellSchool">GetSpellSchool<sup>10</sup></a><br />
  <a href="#GetSpellType">GetSpellType</a><br />
  <a href="#GetStringGameSetting">GetStringGameSetting</a><sup>16<br />
  </sup><a href="#GetStringIniSetting">GetStringIniSetting</a><sup>16</sup><br />
  <a href="#GetTeleportCell">GetTeleportCell<sup>13</sup></a><br />
  <a href="#GetTextInputControlPressed">GetTextInputControlPressed</a><sup>16<br />
  </sup><a href="#GetTextInputCursorPos">GetTextInputCursorPos</a><sup>16</sup><br />
  <a href="#GetTotalActiveEffectMagnitude">GetTotalActiveEffectMagnitude<sup>13</sup></a><a href="#GetTotalAENonAbilityMagnitude"><br />
  </a><a href="#GetTotalAEAbilityMagnitude">GetTotalAEAbilityMagnitude<sup>13</sup></a><br />
  <a href="#GetTotalAEAlchemyMagnitude">GetTotalAEAlchemyMagnitude<sup>13</sup></a><br />
  <a href="#GetTotalAEAllSpellsMagnitude">GetTotalAEAllSpellsMagnitude<sup>13</sup></a><a href="#GetTotalAEEnchantmentMagnitude"><br />
  </a><a href="#GetTotalAEDiseaseMagnitude">GetTotalAEDiseaseMagnitude<sup>13</sup></a><br />
  <a href="#GetTotalAEEnchantmentMagnitude">GetTotalAEEnchantmentMagnitude<sup>13</sup></a><br />
  <a href="#GetTotalAELesserPowerMagnitude">GetTotalAELesserPowerMagnitude<sup>13</sup></a><br />
  <a href="#GetTotalAENonAbilityMagnitude">GetTotalAENonAbilityMagnitude<sup>13</sup></a><a href="#GetTotalAEAbilityMagnitude"><br />
  </a><a href="#GetTotalAEPowerMagnitude">GetTotalAEPowerMagnitude<sup>13</sup></a><a href="#GetTotalAEAllSpellsMagnitude"><br />
  </a><a href="#GetTotalAESpellMagnitude">GetTotalAESpellMagnitude<sup>13</sup></a><br />
  <a href="#GetTotalPCAttributeBonus">GetTotalPCAttributeBonus</a><sup>15</sup><br />
  <a href="#GetTrainerLevel">GetTrainerLevel<sup>15</sup></a><br />
  <a href="#GetTrainerSkill">GetTrainerSkill<sup>15</sup></a><br />
  <a href="#GetTravelHorse">GetTravelHorse<sup>13</sup></a><br />
  <a href="#GetType">GetObjectType</a><br />
  <a href="#GetVariable">GetVariable</a><sup>15</sup><br />
  <a href="#GetWeaponReach">GetWeaponReach</a><br />
  <a href="#GetWeaponSpeed">GetWeaponSpeed</a><br />
  <a href="#GetWeaponType">GetWeaponType</a><br />
  <a href="#GetWeatherCloudSpeedLower">GetWeatherCloudSpeedLower<sup>13</sup></a><br />
  <a href="#GetWeatherCloudSpeedUpper">GetWeatherCloudSpeedUpper<sup>13</sup></a><br />
  <a href="#GetWeatherColor">GetWeatherColor<sup>13</sup></a><br />
  <a href="#GetWeatherFogDayFar">GetWeatherFogDayFar<sup>13</sup></a><br />
  <a href="#GetWeatherFogDayNear">GetWeatherFogDayNear<sup>13</sup></a><br />
  <a href="#GetWeatherFogNightFar">GetWeatherFogNightFar<sup>13</sup></a><br />
  <a href="#GetWeatherFogNightNear">GetWeatherFogNightNear<sup>13</sup></a><br />
  <a href="#GetWeatherHDRValue">GetWeatherHDRValue<sup>13</sup></a><br />
  <a href="#GetWeatherLightningFrequency">GetWeatherLightningFrequency<sup>13</sup></a><br />
  <a href="#GetWeatherSunDamage">GetWeatherSunDamage<sup>13</sup></a><br />
  <a href="#GetWeatherSunGlare">GetWeatherSunGlare<sup>13</sup></a><br />
  <a href="#GetWeatherTransDelta">GetWeatherTransDelta<sup>13</sup></a><br />
  <a href="#GetWeatherWindSpeed">GetWeatherWindSpeed<sup>13</sup></a><br />
  <a href="#GetWeight">GetWeight</a><br />
  <a href="#RestoreIP">Goto</a><br />
  <a href="#HammerKey">HammerKey</a><br />
  <a href="#HasBeenPickedUp">HasBeenPickedUp<sup>14</sup></a><br />
  <a href="#HasLowLevelProcessing">HasLowLevelProcessing<sup>14</sup></a><br />
  <a href="#HasModel">HasModel<sup>14</sup></a><br />
  <a href="#HasName">HasName<sup>14</sup></a><br />
  <a href="#HasNoPersuasion">HasNoPersuasion<sup>14</sup></a><br />
  <a href="#HasSpell">HasSpell</a><br />
  <a href="#HasVariable">HasVariable</a><sup>15</sup><br />
  <a href="#HoldKey">HoldKey</a><br />
  <a href="#IncrementPlayerSkillUse">IncrementPlayerSkillUse<sup>11</sup></a><br />
  <a href="#InsertInInputText">InsertInInputText</a><sup>16</sup><br />
  <a href="#IsActivatable">IsActivatable<sup>14</sup></a><br />
  <a href="#IsActivator">IsActivator</a><br />
  <a href="#IsActorRespawning">IsActorRespawning<sup>14</sup></a><br />
  <a href="#IsAlchemyItem">IsAlchemyItem</a><br />
  <a href="#IsAmmo">IsAmmo</a><br />
  <a href="#IsAnimGroupPlaying">IsAnimGroupPlaying</a><sup>15</sup><br />
  <a href="#IsApparatus">IsApparatus</a><br />
  <a href="#IsArmor">IsArmor</a><br />
  <a href="#IsAttacking">IsAttacking<sup>15</sup></a><br />
  <a href="#IsBarterMenuActive">IsBarterMenuActive</a><sup>15</sup><br />
  <a href="http://obse.silverlock.org/IsBipedModelPathValid">IsBipedModelPathValid<sup>15</sup></a><br />
  <a href="#IsBipedIconPathValid">IsBipedIconPathValid<sup>15</sup></a><br />
  <a href="#IsBlocking">IsBlocking<sup>15</sup></a><br />
  <a href="#IsAttacking"><sup></sup></a><a href="#IsRecoiling"><sup></sup></a><a href="#IsDodging"><sup></sup></a><a href="#IsBook">IsBook</a><br />
  <a href="#IsCasting">IsCasting<sup>15</sup></a><br />
  <a href="#IsClassAttribute">IsClassAttribute<sup>11</sup><br />
  </a><a href="#IsClassSkill">IsClassSkill</a><br />
  <a href="#IsClonedForm">IsClonedForm</a><br />
  <a href="#IsClothing">IsClothing</a><br />
  <a href="#IsConsoleOpen">IsConsoleOpen</a><sup>16</sup><br />
  <a href="#IsContainer">IsContainer</a><br />
  <a href="#IsControl">IsControl</a><sup>16</sup><br />
  <a href="#IsControlPressed">IsControlPressed<sup>13</sup></a><br />
  <a href="#Creature">IsCreature</a><a href="#Creature"><br />
  </a><a href="#IsCreatureBiped">IsCreatureBiped<sup>14</sup></a><br />
  <a href="#IsDigit">IsDigit</a><sup>16</sup><br />
  <a href="#IsDodging">IsDodging<sup>15</sup></a><br />
  <a href="#IsDoor">IsDoor</a><br />
  <a href="#IsFactionEvil">IsFactionEvil<sup>14</sup></a><br />
  <a href="#IsFactionHidden">IsFactionHidden<sup>14</sup></a><br />
  <a href="#IsFlora">IsFlora</a><sup>16</sup><br />
  <a href="#IsFlying">IsFlying<sup>15</sup></a><br />
  <a href="#IsFood">IsFood</a><br />
  <a href="#IsFormValid">IsFormValid</a><sup>15</sup><br />
  <a href="#IsFurniture">IsFurniture</a><br />
  <a href="#IsGlobalCollisionDisabled">IsGlobalCollisionDisabled<sup>11</sup></a><br />
  <a href="#IsHarvested">IsHarvested<sup>14</sup></a><br />
  <a href="#IsIconPathValid">IsIconPathValid<sup>15</sup></a><br />
  <a href="#IsInAir">IsInAir<sup>15</sup></a><br />
  <a href="#IsJumping"><sup></sup></a><a href="#IsIngredient">IsIngredient</a><br />
  <a href="#IsJumping">IsJumping<sup>15</sup></a><br />
  <a href="#IsKey">IsKey</a><br />
  <a href="#IsKeyPressed">IsKeyPressed</a><br />
  <a href="#IsKeyPressed2">IsKeyPressed2</a><br />
  <a href="#IsKeyPressed3">IsKeyPressed3<sup>13</sup></a><br />
  <a href="#IsLetter">IsLetter</a><sup>16</sup><br />
  <a href="#IsLight">IsLight</a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsLoadDoor%5C">IsLoadDoor<sup>13</sup></a><br />
  <a href="#IsLightCarriable">IsLightCarriable<sup>14</sup></a><br />
  <a href="#IsMagicEffectHostile">IsMagicEffectCanRecover<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectCanRecoverC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectDetrimental<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectDetrimentalC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectForEnchanting<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectForEnchantingC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectMagnitudePercent<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectMagnitudePercentC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectOnSelfAllowed<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectOnSelfAllowedC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectForSpellmaking<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectForSpellmakingC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectHostile</a><br />
  <a href="#IsMagicEffectHostile">IsMagicEffectOnTargetAllowed<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectOnTargetAllowedC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">IsMagicEffectOnTouchAllowed<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  IsMagicEffectOnTouchAllowedC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicItemAutoCalc">IsMagicItemAutoCalc<sup>10</sup></a><br />
  <a href="#IsMapMarkerVisible">IsMapMarkerVisible</a><sup>16</sup><br />
  <a href="#IsModelPathValid">IsModelPathValid</a><sup>15</sup><br />
  <a href="#IsModLoaded">IsModLoaded<sup>14</sup></a><br />
  <a href="#IsMovingBackward">IsMovingBackward<sup>15</sup></a><br />
  <a href="#IsMovingForward">IsMovingForward<sup>15</sup></a><br />
  <a href="#IsMovingBackward"><sup></sup></a><a href="#IsMovingLeft">IsMovingLeft<sup>15</sup></a><br />
  <a href="#IsMovingRight">IsMovingRight<sup>15</sup></a><br />
  <a href="#IsNthEffectItemScripted">IsNthEffectItemScripted<sup>10</sup></a><br />
  <a href="#IsNthEffectItemScriptHostile">IsNthEffectItemScriptHostile<sup>10</sup></a><br />
  <a href="#IsOffLimits">IsOffLimits<sup>14</sup></a><br />
  <a href="#IsOnGround">IsOnGround</a><sup>15</sup><br />
  <a href="#IsPCLevelOffset">IsPCLevelOffset<sup>14</sup></a><br />
  <a href="#IsPersistent">IsPersistent<sup>14</sup></a><br />
  <a href="#IsPlayable">IsPlayable<sup>12</sup></a><br />
  <a href="#IsPlayable2">IsPlayable2</a><sup>15</sup><br />
  <a href="#IsPluginInstalled">IsPluginInstalled<sup>13</sup></a><br />
  <a href="#IsPoison">IsPoison</a><br />
  <a href="#IsPowerAttacking">IsPowerAttacking<sup>15</sup></a><a href="#IsLetter"></a><br />
  <a href="#IsPrintable">IsPrintable<sup>16</sup></a><br />
  <a href="#IsPunctuation">IsPunctuatio<sup>16</sup>n</a><br />
  <a href="#IsQuestItem">IsQuestItem</a><br />
  <a href="#IsRaceBonusSkill">IsRaceBonusSkill<sup>12</sup><br />
  IsRaceBonusSkillC<sup>12</sup></a><br />
  <a href="#IsRecoiling">IsRecoiling<sup>15</sup></a><br />
  <a href="#IsReference">IsReference</a><sup>15</sup><br />
  <a href="#IsRefEssential">IsRefEssential</a><br />
  <a href="#IsScripted">IsScripted<sup>10</sup></a><br />
  <a href="#IsSigilStone">IsSigilStone</a><br />
  <a href="#IsSoulGem">IsSoulGem</a><br />
  <a href="#GetSpellHostile">IsSpellHostile</a><sup>15</sup><br />
  <a href="#IsStaggered">IsStaggered<sup>15</sup></a><br />
  <a href="#IsSummonable">IsSummonable<sup>14</sup></a><br />
  <a href="#IsTextInputInUse">IsTextInputInUse</a><sup>16</sup><br />
  <a href="#IsThirdPerson">IsThirdPerson<sup>10</sup></a><br />
  <a href="#IsTurningLeft">IsTurningLeft<sup>15</sup></a><br />
  <a href="#IsTurningRight">IsTurningRight<sup>15</sup></a><br />
  <a href="#IsUnderWater">IsUnderWater<sup>13</sup></a><br />
  <a href="#IsUpper">IsUpper</a><sup>16</sup><br />
  <a href="#IsWeapon">IsWeapon</a><br />
  <a href="#SaveIP">Label</a><br />
  <a href="#LeftShift">LeftShift<sup>10</sup></a><br />
  <a href="#LoadGameEx">LoadGameEx</a><sup>16</sup><br />
  <a href="#Log">Log</a><br />
  <a href="#Log10">Log10</a><br />
  <a href="#LogicalAnd">LogicalAnd<sup>10</sup></a><br />
  <a href="#LogicalNot">LogicalNot<sup>10</sup></a><br />
  <a href="#LogicalOr">LogicalOr<sup>10</sup></a><br />
  <a href="#LogicalXor">LogicalXor<sup>10</sup></a><br />
  <a href="#IsMagicEffectHostile">MagicEffectFXPersists<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectFXPersistsC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#MagicItemHasEffect">MagicItemHasEffect</a><br />
  <a href="#MagicItemHasEffectCode">MagicItemHasEffectCode</a><br />
  <a href="#MagicItemHasEffectCount">MagicItemHasEffectCount<sup>12</sup></a><br />
  <a href="#MagicItemHasEffectCountCode">MagicItemHasEffectCountCode<sup>12</sup></a><br />
  <a href="#IsMagicEffectHostile">MagicEffectHasNoArea<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectHasNoAreaC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectHasNoDuration<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectHasNoDurationC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectHasNoHitEffect<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectHasNoHitEffectC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectHasNoIngredient<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectHasNoIngredientC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectHasNoMagnitude<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectHasNoMagnitudeC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectUsesAttribute<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesAttributeC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectUsesArmor<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesArmorC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesCreature<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesCreatureC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectUsesOtherActorValue<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesOtherActorValueC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectUsesSkill<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesSkillC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#IsMagicEffectHostile">MagicEffectUsesWeapon<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  MagicEffectUsesWeaponC<sup>10</sup></a><a href="#IsMagicEffectHostile"><br />
  </a><a href="#MagicItemHasEffectItemScript">MagicItemHasEffectItemScript<sup>14</sup></a><br />
  <a href="#MenuHoldKey">MenuHoldKey<sup>10</sup></a><br />
  <a href="#MenuReleaseKey">MenuReleaseKey<sup>10</sup></a><br />
  <a href="#MenuTapKey">MenuTapKey<sup>10</sup></a><br />
  <a href="#MessageBoxEX">MessageBoxEx<sup>14</sup></a><br />
  <a href="#MessageEX">MessageEx<sup>14</sup></a><br />
  <a href="#ModActorValueC">ModActorValueC<sup>14</sup></a><br />
  <a href="#ModActorValue2">ModActorValue2</a><br />
  <a href="#ModArmorAR">ModArmorAR</a><br />
  <a href="#ModAttackDamage">ModAttackDamage</a><br />
  <a href="#ModEnchantmentCharge">ModEnchantmentCharge</a><br />
  <a href="#ModEnchantmentCost">ModEnchantmentCost</a><br />
  <a href="#ModEquippedCurrentCharge">ModEquippedCurrentCharge</a><br />
  <a href="#ModEquippedCurrentHealth">ModEquippedCurrentHealth</a><br />
  <a href="#Wearable">ModFemaleBipedPath<sup>10</sup></a><br />
  <a href="#Wearable">ModFemaleGroundPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">ModFemaleIconPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#ModGoldValue">ModGoldValue</a><br />
  <a href="#Simple">ModIconPath<sup>10</sup></a><a href="#Simple"><br />
  </a><a href="#Wearable">ModMaleBipedPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">ModMaleGroundPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Wearable">ModMaleIconPath<sup>10</sup></a><a href="#Wearable"><br />
  </a><a href="#Simple">ModModelPath<sup>10</sup></a><a href="#Simple"><br />
  </a><a href="#ModName">ModName<sup>11</sup></a><br />
  <a href="#ModNthActiveEffectMagnitude">ModNthActiveEffectMagnitude<sup>13</sup></a><br />
  <a href="#ModNthEffectItemArea">ModNthEffectItemArea</a><br />
  <a href="#ModNthEffectItemDuration">ModNthEffectItemDuration</a><br />
  <a href="#ModNthEffectItemMagnitude">ModNthEffectItemMagnitude</a><br />
  <a href="#ModNthEffectItemScriptName">ModNthEffectItemScriptName<sup>14</sup></a><br />
  <a href="#ModObjectCharge">ModObjectCharge</a><br />
  <a href="#ModObjectHealth">ModObjectHealth</a><br />
  <a href="#ModPCSpellEffectiveness">ModPCSpellEffectiveness</a><sup>16</sup><br />
  <a href="#Apparatus">ModQuality<sup>10</sup></a><a href="#Apparatus"><br />
  </a><a href="#ModSpellMagickaCost">ModSpellMagickaCost</a><br />
  <a href="#ModWeaponReach">ModWeaponReach</a><br />
  <a href="#ModWeaponSpeed">ModWeaponSpeed</a><br />
  <a href="#ModWeight">ModWeight</a><br />
  <a href="#MoveMouseX">MoveMouseX</a><br />
  <a href="#MoveMouseY">MoveMouseY</a><br />
  <a href="#MoveTextInputCursor">MoveTextInputCursor<sup>16</sup></a><br />
  <a href="#OffersXXX">OffersWeapons<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersArmor<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersClothing<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersBooks<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersLights<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersIngredients<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersApparatus<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersMiscItems<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersMagicItems<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersSpells<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersPotions<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersTraining<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersRecharging<sup>15</sup></a><br />
  <a href="#OffersXXX">OffersRepair<sup>15</sup></a><br />
  <a href="#OffersServicesC">OffersServicesC<sup>15</sup></a><br />
  <a href="#OnControlDown">OnControlDown<sup>13</sup></a><a href="#GetActiveEffectCount"><br />
  </a><a href="#OnKeyDown">OnKeyDown<sup>13</sup></a><br />
  <a href="#OpenTextInput">OpenTextInput</a><sup>16</sup><br />
  <a href="#OnControlDown"></a><a href="#ParentCellHasWater">ParentCellHasWater<sup>13</sup></a><a href="#GetParentCellWaterHeight"><br />
  </a><a href="#Pow">Pow</a><br />
  <a href="#PrintToConsole">PrintToConsole</a><br />
  <a href="#Rand">Rand</a><br />
  <a href="#RefreshControlMap">RefreshControlMap<sup>13</sup></a><br />
  <a href="#GetParentCellWaterHeight"></a><a href="#RefreshCurrentClimate">RefreshCurrentClimate<sup>13</sup></a><br />
  <a href="#ReleaseKey">ReleaseKey</a><br />
  <a href="#RemoveAllEffectItems">RemoveAllEffectItems<sup>12</sup></a><br />
  <a href="#RemoveEnchantment">RemoveEnchantment</a><br />
  <a href="#RemoveEquippedWeaponPoison">RemoveEquippedWeaponPoison</a><br />
  <a href="#RemoveFromLeveledList">RemoveFromLeveledList<sup>13</sup></a><br />
  <a href="#Spam_Blocking_Functions">RemoveItemNS</a><sup>15<br />
  </sup><a href="#RemoveLevItemByLevel">RemoveLevItemByLevel</a><sup>15</sup><br />
  <a href="#RemoveNthEffectItem">RemoveNthEffectItem</a><br />
  <a href="#RemoveNthLevItem">RemoveNthLevItem</a><sup>16</sup><br />
  <a href="#RemoveScript">RemoveScript<sup>12</sup></a><br />
  <a href="#Spam_Blocking_Functions">RemoveSpellNS</a><sup>15<br />
  </sup><a href="#ResetAllVariables">ResetAllVariables</a><sup>16</sup><br />
  <a href="#RestoreIP">RestoreIP</a><br />
  <a href="#RightShift">RightShift<sup>10</sup></a><br />
  <a href="#RunBatchScript">RunBatchScript<sup>11</sup></a><br />
  <a href="#RunScriptLine">RunScriptLine</a><sup>16</sup><br />
  <a href="#RunBatchScript"></a><a href="#SaveIP">SaveIP</a><br />
  <a href="#SetActorRespawns">SetActorRespawns<sup>14</sup></a><br />
  <a href="#SetActorValueC">SetActorValueC<sup>14</sup></a><br />
  <a href="http://obse.silverlock.org/SetAltControl">SetAltControl</a><sup>15</sup><br />
  <a href="#Apparatus">SetApparatusType<sup>10</sup></a><a href="#Apparatus"><br />
  </a><a href="#SetArmorAR">SetArmorAR</a><br />
  <a href="#SetArmorType">SetArmorType</a><br />
  <a href="#SetMenuStringValue"></a><ahref="#SetArrowProjectileBowEnchantment">SetArrowProjectileBowEnchantment<sup>16</sup></a><br />
  <a href="#SetArrowProjectileEnchantment">SetArrowProjectileEnchantment<sup>16</sup></a><br />
  <a href="#SetArrowProjectileBowEnchantment"></a><ahref="#SetArrowProjectilePoison">SetArrowProjectilePoison<sup>16</sup></a><br />
  <a href="#SetAttackDamage">SetAttackDamage</a><br />
  <a href="#SetButtonPressed">SetButtonPressed<sup>16</sup></a><br />
  <a href="#SetBaseForm">SetBaseForm<sup>16</sup></a><br />
  <a href="#SetBipedIconPathEX">SetBipedIconPathEX</a><sup>16</sup><br />
  <a href="#SetBipedModelPathEX">SetBipedModelPathEX</a><sup>16</sup><br />
  <a href="#SetBipedSlotMask">SetBipedSlotMask</a><sup>16</sup><br />
  <a href="#Book">SetBookCantBeTaken<sup>10</sup></a><a href="#SetBookCantBeTaken"><br />
  </a><a href="#Book">SetBookIsScroll<sup>10</sup></a><a href="#Book"><br />
  </a><a href="#Book">SetBookSkillTaught<sup>10</sup></a><a href="#Book"><br />
  </a><a href="#SetCanCorpseCheck">SetCanCorpseCheck<sup>14</sup></a><br />
  <a href="#SetCanTravelToMapMarker">SetCanTravelToMapMarker</a><sup>16<br />
  </sup><a href="#SetChanceNone">SetChanceNone</a><sup>16</sup><br />
  <a href="#SetClimateHasMasser">SetClimateHasMasser<sup>13</sup></a><br />
  <a href="#SetClimateHasSecunda">SetClimateHasSecunda<sup>13</sup></a><br />
  <a href="#SetClimateMoonPhaseLength">SetClimateMoonPhaseLength<sup>13</sup></a><br />
  <a href="#SetClimateSunsetBegin">SetClimateSunsetBegin<sup><sub>13</sub></sup></a><br />
  <a href="#SetClimateSunsetEnd">SetClimateSunsetEnd<sup>13</sup></a><br />
  <a href="#SetClimateVolatility">SetClimateVolatility<sup>13</sup></a><br />
  <a href="#SetCloseSound">SetCloseSound</a><sup>15</sup><br />
  <a href="#SetContainerRespawns">SetContainerRespawns<sup>13</sup></a><br />
  <a href="http://obse.silverlock.org/SetControl">SetControl</a><sup>15</sup><br />
  <a href="#SetCurrentSoulLevel">SetCurrentSoulLevel<sup>14</sup></a><br />
  <a href="#SetDebugMode">SetDebugMode</a><sup>16</sup><br />
  <a href="#SetDetectionState">SetDetectionState</a><sup>15</sup><br />
  <a href="#SetDisableGlobalCollision">SetDisableGlobalCollision<sup>11</sup><br />
  </a><a href="#SetEnchantment">SetEnchantment</a><br />
  <a href="#SetEnchantmentCharge">SetEnchantmentCharge</a><br />
  <a href="#SetEnchantmentCost">SetEnchantmentCost</a><br />
  <a href="#SetEnchantmentType">SetEnchantmentType</a><br />
  <a href="#SetEquipmentSlot">SetEquipmentSlot</a><br />
  <a href="#SetEquippedCurrentCharge">SetEquippedCurrentCharge</a><br />
  <a href="#SetEquippedCurrentHealth">SetEquippedCurrentHealth</a><br />
  <a href="#SetEquippedWeaponPoison">SetEquippedWeaponPoison</a><br />
  <a href="#SetEyes">SetEyes<sup>13</sup></a><br />
  <a href="#SetFactionEvil">SetFactionEvil<sup>14</sup></a><br />
  <a href="#SetFactionHidden">SetFactionHidden<sup>14</sup></a><br />
  <a href="#SetFactionSpecialCombat">SetFactionSpecialCombat<sup>14</sup></a><br />
  <a href="#SetFemaleBipedPath">SetFemaleBipedPath</a><br />
  <a href="#SetFemaleGroundPath">SetFemaleGroundPath</a><br />
  <a href="#SetFemaleIconPath">SetFemaleIconPath</a><br />
  <a href="#SetGoldValue">SetGoldValue</a><a href="#SetEyes"><sup></sup></a><a href="#SetHair"><br />
  SetHair<sup>13</sup></a><br />
  <a href="#SetHarvested">SetHarvested<sup>14</sup></a><br />
  <a href="#SetHasBeenPickedUp">SetHasBeenPickedUp</a><sup>15<br />
  </sup><a href="#SetHidesAmulet">SetHidesAmulet<sup>16</sup></a><br />
  <a href="#SetHidesRings">SetHidesRings<sup>16</sup></a><br />
  <a href="#SetHotkeyItem">SetHotKeyItem</a><sup>15</sup><br />
  <a href="#SetIconPath">SetIconPath</a><br />
  <a href="#SetIconPathEX">SetIconPathEX</a><sup>16</sup><br />
  <a href="#SetIgnoresResistance">SetIgnoresResistance</a><br />
  <a href="#SetIngredient">SetIngredient<sup>16</sup></a><br />
  <a href="#SetIngredientChance">SetIngredientChance<sup>16</sup></a><br />
  <a href="#SetIsControl">SetIsControl</a><sup>16</sup><br />
  <a href="#SetIsFood">SetIsFood</a><br />
  <a href="#SetIsPlayable">SetIsPlayable<sup>12</sup></a><br />
  <a href="#SetLightRadius">SetLightRadius<sup>14</sup></a><br />
  <a href="#SetLoopSound">SetLoopSound</a><sup>15</sup><br />
  <a href="#SetLowLevelProcessing">SetLowLevelProcessing<sup>14</sup></a><br />
  <a href="#SetMagicItemAutoCalc">SetMagicItemAutoCalc<sup>10</sup></a><br />
  <a href="#SetMagicProjectileSpell">SetMagicProjectileSpell</a><sup>15</sup><br />
  <a href="#SetMaleBipedPath">SetMaleBipedPath</a><br />
  <a href="#SetMaleGroundPath">SetMaleGroundPath</a><br />
  <a href="#SetMaleIconPath">SetMaleIconPath</a><br />
  <a href="#SetMapMarkerType">SetMapMarkerType<sup>16</sup></a><br />
  <a href="#SetMapMarkerVisible">SetMapMarkerVisible</a><sup>16</sup><br />
  <a href="#SetMenuFloatValue">SetMenuFloatValue<sup>16</sup></a><br />
  <a href="#SetMenuStringValue">SetMenuStringValue</a><sup>16</sup><br />
  <a href="#SetMerchantContainer">SetMerchantContainer<sup>12</sup></a><br />
  <a href="#SetMessageSound">SetMessageSound<sup>15</sup></a><br />
  <a href="#SetMessageIcon">SetMessageIcon<sup>15</sup></a><br />
  <a href="#SetModelPath">SetModelPath</a><br />
  <a href="#SetModelPathEX">SetModelPathEX<sup>16</sup></a><br />
  <a href="#SetBipedModelPathEX"></a><ahref="#SetNthFactionRankNameEX"></a><ahref="#SetNthEffectItemScriptNameEX"></a><a href="#SetMouseSpeedX">SetMouseSpeedX</a><br />
  <a href="#SetMouseSpeedY">SetMouseSpeedY</a><br />
  <a href="#SetName">SetName</a><br />
  <a href="#SetNameEx">SetNameEx</a><sup>15</sup><br />
  <a href="#SetNoPersuasion">SetNoPersuasion<sup>14</sup></a><br />
  <a href="#SetNthActiveEffectMagnitude">SetNthActiveEffectMagnitude<sup>13</sup></a><br />
  <a href="#SetNthEffectItemActorValue">SetNthEffectItemActorValue</a><br />
  <a href="#SetNthEffectItemArea">SetNthEffectItemArea</a><br />
  <a href="#ModNthEffectItemDuration">SetNthEffectItemDuration</a><br />
  <a href="#SetNthEffectItemMagnitude">SetNthEffectItemMagnitude</a><br />
  <a href="#GetNthEffectItemRange">SetNthEffectItemRange</a><br />
  <a href="#SetNthEffectItemScript">SetNthEffectItemScript<sup>12</sup></a><br />
  <a href="#SetNthEffectItemScriptHostile">SetNthEffectItemScriptHostile<sup>11</sup></a><br />
  <a href="#SetNthEffectItemScriptName">SetNthEffectItemScriptName<sup>12</sup></a><br />
  <a href="#SetNthEffectItemScriptNameEX">SetNthEffectItemScriptNameEX<sup>16</sup></a><br />
  <a href="#SetNthEffectItemScriptSchool">SetNthEffectItemScriptSchool<sup>10</sup></a><br />
  <a href="#SetNthEffectItemScriptVisualEffect">SetNthEffectItemScriptVisualEffect<sup>10</sup></a><br />
  <a href="#SetNthEffectItemScriptVisualEffect">SetNthEffectItemScriptVisualEffectC<sup>10</sup></a><br />
  <a href="#SetNthFactionRankNameEX">SetNthFactionRankNameEX</a><sup>16</sup><br />
  <a href="#SetNumericGameSetting">SetNumericGameSetting</a><br />
  <a href="#SetNumericINISetting">SetNumericINISetting</a><br />
  <a href="#SetObjectCharge">SetObjectCharge</a><br />
  <a href="#SetObjectHealth">SetObjectHealth</a><br />
  <a href="#OffersServicesC"><sup></sup></a><a href="#SetOffersXXX">SetOffersWeapons<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersArmor<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersClothing<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersBooks<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersIngredients<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersSpells<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersLights<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersMiscItems<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersMagicItems<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersApparatus<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersPotions<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersTraining<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersRecharging<sup>15</sup></a><br />
  <a href="#SetOffersXXX">SetOffersRepair<sup>15</sup></a><br />
  <a href="#SetOffersServicesC">SetOffersServicesC</a><sup>15</sup><br />
  <a href="#SetOpenKey">SetOpenKey<sup>13</sup></a><br />
  <a href="#SetOpenSound">SetOpenSound</a><sup>15</sup><br />
  <a href="#SetPCAMurderer">SetPCAMurderer<sup>13</sup></a><br />
  <a href="#SetPCMajorSkillUps"><sup></sup></a><a href="#SetPCAttributeBonus">SetPCAttributeBonus<sup>16</sup></a><br />
  <a href="#SetPCLevelOffset">SetPCLevelOffset<sup>14</sup></a><br />
  <a href="#SetPCMajorSkillUps">SetPCMajorSkillUps<sup>16</sup></a><br />
  <a href="#SetPCTrainingSessionsUsed">SetPCTrainingSessionsUsed<sup>16</sup></a><br />
  <a href="#SetPlayerProjectile">SetPlayerProjectile</a><sup>15</sup><br />
  <a href="#SetProjectileSource">SetProjectileSource</a><sup>16</sup><br />
  <a href="#SetProjectileSpeed">SetProjectileSpeed</a><sup>16</sup><br />
  <a href="#Apparatus">SetQuality<sup>10</sup></a><a href="#Apparatus"><br />
  </a><a href="#SetQuestItem">SetQuestItem</a><br />
  <a href="#SetRaceAlias">SetRaceAlias<sup>16</sup></a><br />
  <a href="#SetRacePlayable">SetRacePlayable<sup>16</sup></a><br />
  <a href="#SetRaceVoice">SetRaceVoice</a><sup>16</sup><br />
  <a href="#SetRefCount">SetRefCount</a><sup>15</sup><br />
  <a href="#SetRefEssential">SetRefEssential</a><br />
  <a href="#SetScaleEX">SetScaleEX<sup>14</sup></a><br />
  <a href="#SetScript">SetScript<sup>12</sup></a><br />
  <a href="#SetSkillUseIncrement">SetSkillUseIncrement<sup>11</sup></a><br />
  <a href="#SoulGem">SetSoulGemCapacity<sup>10</sup></a><br />
  <a href="#SoulGem"></a><a href="#SoulGem">SetSoulLevel<sup>10</sup></a><br />
  <a href="#SetSpellExplodesWithNoTarget">SetSpellExplodesWithNoTarget<sup>12</sup></a><br />
  <a href="#SetSpellHostile">SetSpellHostile</a><sup>15</sup><br />
  <a href="#SetSpellMagickaCost">SetSpellMagickaCost</a><br />
  <a href="#SetSpellMasteryLevel">SetSpellMasteryLevel</a><br />
  <a href="#SetSpellType">SetSpellType</a><br />
  <a href="#SetStringGameSettingEX">SetStringGameSettingEX</a><sup>16</sup><br />
  <a href="#SetStringIniSetting">SetStringIniSetting</a><sup>16</sup><br />
  <a href="#SetSummonable">SetSummonable<sup>14</sup></a><br />
  <a href="#SetTrainerLevel">SetTrainerLevel</a><sup>15</sup><br />
  <a href="#SetTrainerSkill">SetTrainerSkill<sup>15</sup></a><br />
  <a href="#SetTravelHorse">SetTravelHorse<sup>13</sup></a><br />
  <a href="#SetWeaponReach">SetWeaponReach</a><br />
  <a href="#SetWeaponSpeed">SetWeaponSpeed</a><br />
  <a href="#SetWeaponType">SetWeaponType</a><br />
  <a href="#SetWeatherCloudSpeedLower">SetWeatherCloudSpeedLower<sup>13</sup></a><br />
  <a href="#SetWeatherCloudSpeedUpper">SetWeatherCloudSpeedUpper<sup>13</sup></a><br />
  <a href="#SetWeatherColor">SetWeatherColor<sup>13</sup></a><br />
  <a href="#SetWeatherFogDayFar">SetWeatherFogDayFar<sup>13</sup></a><br />
  <a href="#SetWeatherFogDayNear">SetWeatherFogDayNear<sup>13</sup></a><br />
  <a href="#SetWeatherFogNightFar">SetWeatherFogNightFar<sup>13</sup></a><br />
  <a href="#SetWeatherFogNightNear">SetWeatherFogNightNear<sup>13</sup></a><br />
  <a href="#SetWeatherHDRValue">SetWeatherHDRValue<sup>13</sup></a><br />
  <a href="#SetWeatherLightningFrequency">SetWeatherLightningFrequency<sup>13</sup></a><br />
  <a href="#SetWeatherSunDamage">SetWeatherSunDamage<sup>13</sup></a><br />
  <a href="#SetWeatherSunGlare">SetWeatherSunGlare<sup>13</sup></a><br />
  <a href="#SetWeatherTransDelta">SetWeatherTransDelta<sup>13</sup></a><br />
  <a href="#SetWeatherWindSpeed">SetWeatherWindSpeed<sup>13</sup></a><br />
  <a href="#SetWeight">SetWeight</a><br />
  <a href="#Sin">Sin</a><br />
  <a href="#Sinh">Sinh</a><br />
  <a href="#SquareRoot">SquareRoot</a><br />
  <a href="#StringToActorValue">StringToActorValue<sup>18</sup></a><br />
  <a href="#sv_Compare">sv_Compare<sup>16</sup></a><br />
  <a href="#sv_Construct">sv_Construct<sup>16</sup></a><br />
  <a href="#sv_Count">sv_Count<sup>16</sup></a><br />
  <a href="#sv_Destruct">sv_Destruct<sup>16</sup></a><br />
  <a href="#sv_Erase">sv_Erase<sup>16</sup></a><br />
  <a href="#sv_Find">sv_Find<sup>16</sup></a><br />
  <a href="#sv_GetChar">sv_GetChar<sup>16</sup></a><br />
  <a href="#sv_Insert">sv_Insert<sup>16</sup></a><br />
  <a href="#sv_Length">sv_Length<sup>16</sup></a><br />
  <a href="#sv_Replace">sv_Replace<sup>16</sup></a><br />
  <a href="#sv_Set">sv_Set</a><sup>16</sup><br />
  <a href="#sv_Substring">sv_Substring<sup>16</sup></a><br />
  <a href="#sv_ToNumeric">sv_ToNumeric<sup>16</sup></a><br />
  <a href="#Tan">Tan</a><br />
  <a href="#Tanh">Tanh</a><br />
  <a href="#TapControl">TapControl<sup>13</sup></a><br />
  <a href="#TapKey">TapKey</a><br />
  <a href="#ToggleCreatureModel">ToggleCreatureModel</a><sup>15</sup><br />
  <a href="#ToggleFirstPerson">ToggleFirstPerson</a><sup>16</sup><br />
  <a href="#ToLower">ToLower<sup>16</sup></a><br />
  <a href="#ToUpper">ToUpper<sup>16</sup></a><br />
  <a href="#Spam_Blocking_Functions">UnequipItemNS</a><sup>15</sup><br />
  <a href="#UnHammerKey">UnHammerKey</a><br />
  <a href="#UpdateTextInput">UpdateTextInput</a><sup>16</sup><br />
  -->
  
  <h2><a id="Deprecated_Functions">Deprecated Functions</a></h2>
  
  <p>These functions should no longer be used.</p><ul>
    <li>GetEquippedCurrentValue - replaced by <a href="#GetEquippedCurrentHealth">GetEquippedCurrentHealth</a>,<a href="#GetEquippedCurrentCharge">GetEquippedCurrentCharge</a> and <a href="#GetEquippedWeaponPoison">GetEquippedWeaponPoison</a></li>
    <li>GetEquippedObjectValue - replaced by <a href="#GetEquippedObject">GetEquippedObject</a> and the appropriate individual value functions</li>
    <li>GetInventoryItemType - renamed <a href="#GetBaseObject">GetBaseObject</a></li>
    <li>GetMagicEffectCodeValue - replaced by the individual <a href="#Magic_Effect_Setting">GetMagicEffectXXXXC</a> functions.</li>
    <li>GetMagicEffectValue - replaced by the individual <a href="#Magic_Effect_Setting">GetMagicEffect</a> functions</li>
    <li>GetMagicItemValue - replaced by the individual <a href="#Magic">MagicItem</a> functions</li>
    <li>GetObjectValue - replaced by the individual value functions</li>
    <li>SetActiveSpell - duplicate of standard <code>SelectPlayerSpell</code> function</li>
    <li>RefreshControlMap - input functions are now in sync with Oblivion control bindings</li>
    <li>GetAltControl - use <a href="#GetAltControl2">GetAltControl2</a> instead</li>
    <li>sv_Substring - use slice notation i.e. <code>let substr := str[a:b]</code></li>
    <li>sv_Set - use assignment operator</li>
    <li>sv_GetChar - use bracket notation i.e. <code>let char := str[pos]</code></li>
    <li>SetIconPathEX - use <a href="#SetTexturePath">SetTexturePath</a></li>
    <li>GetIconPath - use <a href="#GetTexturePath">GetTexturePath</a></li>
    <li>SetModelPathEX - pass a string_var to <code>SetModelPath</code></li>
    <li>GetBaseAV2 (C) - replaced by <a href="#GetBaseAV3">GetBaseAV3 (C)</a></li>
      <li>RefreshControlMap - has no effect</li>
      <li>SetAltControl - doesn't correctly swap bound mouse keys. Use <a href="#SetAltControl2">SetAltControl2</a> instead</li> 
  </ul>
  
  <p><a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a></p></body>
    `

const parseDoc = () => {
  var root = parse(doc);
  var funcs = root.querySelectorAll('p:has(a.f)');

  return funcs;
}

export function getFuncs() {
  return parseDoc();
}

// getFuncs();

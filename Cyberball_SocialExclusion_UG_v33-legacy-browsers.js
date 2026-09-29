/***************************************** 
 * Cyberball_Socialexclusion_Ug_V33 *
 *****************************************/


// store info about the experiment session:
let expName = 'Cyberball_SocialExclusion_UG_v33';  // from the Builder filename that created this script
let expInfo = {
    'participant': 'P001',
    'session': '001',
    'gender': '',
    'age': '',
    'social_context': '1',
    'cue_condition': '1',
    'key_mapping': '1',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-0.75,-0.65,-0.45]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initRoutineBegin());
flowScheduler.add(initRoutineEachFrame());
flowScheduler.add(initRoutineEnd());
flowScheduler.add(cb_introRoutineBegin());
flowScheduler.add(cb_introRoutineEachFrame());
flowScheduler.add(cb_introRoutineEnd());
const cbPracticeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(cbPracticeLoopBegin(cbPracticeLoopScheduler));
flowScheduler.add(cbPracticeLoopScheduler);
flowScheduler.add(cbPracticeLoopEnd);


flowScheduler.add(cb_checkRoutineBegin());
flowScheduler.add(cb_checkRoutineEachFrame());
flowScheduler.add(cb_checkRoutineEnd());
flowScheduler.add(cbm_partner_introRoutineBegin());
flowScheduler.add(cbm_partner_introRoutineEachFrame());
flowScheduler.add(cbm_partner_introRoutineEnd());
flowScheduler.add(cbm_partner_intro_2RoutineBegin());
flowScheduler.add(cbm_partner_intro_2RoutineEachFrame());
flowScheduler.add(cbm_partner_intro_2RoutineEnd());
const cbMainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(cbMainLoopBegin(cbMainLoopScheduler));
flowScheduler.add(cbMainLoopScheduler);
flowScheduler.add(cbMainLoopEnd);


flowScheduler.add(cb_check_2RoutineBegin());
flowScheduler.add(cb_check_2RoutineEachFrame());
flowScheduler.add(cb_check_2RoutineEnd());
flowScheduler.add(ug_introRoutineBegin());
flowScheduler.add(ug_introRoutineEachFrame());
flowScheduler.add(ug_introRoutineEnd());
const ugPracticeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ugPracticeLoopBegin(ugPracticeLoopScheduler));
flowScheduler.add(ugPracticeLoopScheduler);
flowScheduler.add(ugPracticeLoopEnd);




flowScheduler.add(ug_checkRoutineBegin());
flowScheduler.add(ug_checkRoutineEachFrame());
flowScheduler.add(ug_checkRoutineEnd());
flowScheduler.add(partner_introRoutineBegin());
flowScheduler.add(partner_introRoutineEachFrame());
flowScheduler.add(partner_introRoutineEnd());
flowScheduler.add(partner_intro_3RoutineBegin());
flowScheduler.add(partner_intro_3RoutineEachFrame());
flowScheduler.add(partner_intro_3RoutineEnd());
flowScheduler.add(partner_intro_2RoutineBegin());
flowScheduler.add(partner_intro_2RoutineEachFrame());
flowScheduler.add(partner_intro_2RoutineEnd());
const ugBlock1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ugBlock1LoopBegin(ugBlock1LoopScheduler));
flowScheduler.add(ugBlock1LoopScheduler);
flowScheduler.add(ugBlock1LoopEnd);




flowScheduler.add(ug_breakRoutineBegin());
flowScheduler.add(ug_breakRoutineEachFrame());
flowScheduler.add(ug_breakRoutineEnd());
const ugBlock2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ugBlock2LoopBegin(ugBlock2LoopScheduler));
flowScheduler.add(ugBlock2LoopScheduler);
flowScheduler.add(ugBlock2LoopEnd);




flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var initClock;
var CB_TOTAL;
var CB_MODE;
var CB_TRIAL_INDEX;
var CB_SUBJECT_RECEIVE_COUNT;
var CB_CURRENT_HOLDER;
var CB_RECALL_TEXT;
var CB_RECALLED_COUNT;
var UG_MODE;
var UG_TRIAL_INDEX;
var UG_CURRENT_OFFER;
var UG_CURRENT_SELF;
var UG_CURRENT_OTHER;
var UG_FEEDBACK_TEXT;
var UG_MISSED;
var UG_DECISION;
var UG_RT;
var participant_id;
var social_context;
var cue_condition;
var CONDITION_CELL;
var CB_RECEIVE_FLAGS;
var UG_OFFERS;
var cb_introClock;
var cb_intro_title;
var cb_intro_body;
var cb_intro_key;
var cyberballClock;
var img_chen;
var img_li;
var person_chen;
var person_li;
var person_me;
var person_chen_throw;
var person_li_throw;
var person_me_throw_left;
var person_me_throw_right;
var img_ball;
var text_chen;
var text_li;
var text_me;
var text_hint;
var mouse;
var cb_checkClock;
var cb_check_title;
var cb_check_body;
var cb_check_key;
var cbm_partner_introClock;
var cbm_partner_loading_title;
var cbm_partner_name_loading;
var cbm_partner_cue_loading;
var cbm_partner_loading_body;
var cbm_partner_intro_2Clock;
var cbm_partner_result_title;
var cbm_partner_result_photo;
var cbm_partner_result_photo2;
var cbm_partner_result_name;
var cbm_partner_result_cue;
var cbm_partner_result_body;
var cbm_partner_result_key;
var cb_check_2Clock;
var cb_recall_title;
var cb_recall_body;
var cb_recall_key;
var cb_recall_entry;
var ug_introClock;
var ug_title;
var ug_intro_body;
var ug_intro_key;
var ug_fixation_practiceClock;
var ug_fixation_practice_text;
var ug_offerClock;
var ug_partner_photo;
var ug_partner_name;
var ug_offer_title;
var ug_offer_text;
var ug_options;
var ug_resp;
var ug_feedbackClock;
var fb_partner_photo;
var fb_text;
var fb_wait;
var ug_checkClock;
var ug_check_title;
var ug_check_body;
var ug_check_key;
var partner_introClock;
var partner_title;
var partner_photo;
var partner_name;
var partner_cue;
var partner_body;
var partner_key;
var partner_intro_3Clock;
var partner_result_title;
var partner_result_photo;
var partner_result_name;
var partner_result_cue;
var partner_result_body;
var partner_result_key;
var partner_intro_2Clock;
var partner_loading_title;
var partner_photo_loading;
var partner_name_loading;
var partner_cue_loading;
var partner_loading_body;
var partner_loading_key;
var ug_fixation_block1Clock;
var ug_fixation_block1_text;
var ug_breakClock;
var ug_break_title;
var ug_break_body;
var ug_break_key;
var ug_fixation_block2Clock;
var ug_fixation_block2_text;
var endClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "init"
  initClock = new util.Clock();
  // Run 'Begin Experiment' code from init_code
  // ==========================================================
  // GLOBAL INITIALIZATION - ONLINE
  // ==========================================================
  CB_TOTAL = 30;
  CB_MODE = 'practice';
  CB_TRIAL_INDEX = 0;
  CB_SUBJECT_RECEIVE_COUNT = 0;
  CB_CURRENT_HOLDER = 'Chen';
  CB_RECALL_TEXT = '';
  CB_RECALLED_COUNT = '';
  
  UG_MODE = 'practice';
  UG_TRIAL_INDEX = 0;
  UG_CURRENT_OFFER = 5;
  UG_CURRENT_SELF = 5;
  UG_CURRENT_OTHER = 5;
  UG_FEEDBACK_TEXT = '';
  UG_MISSED = 0;
  UG_DECISION = 'miss';
  UG_RT = '';
  
  participant_id = String((typeof expInfo !== 'undefined' && expInfo['participant']) ? expInfo['participant'] : 'P001');
  function participant_hash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h = ((h ^ s.charCodeAt(i)) % 2147483647 + 2147483647) % 2147483647;
      h = (h * 16777619) % 2147483647;
    }
    return h;
  }
  function shuffle_array(a) {
    let arr = a.slice();
    for (let i=arr.length-1;i>0;i--) {
      const j=Math.floor(Math.random()*(i+1));
      const tmp=arr[i]; arr[i]=arr[j]; arr[j]=tmp;
    }
    return arr;
  }
  function make_cb_flags(condition,n=30){
    function pick_early_two(){
      let c=shuffle_array([0,1,2,3,4]);
      for(let i=0;i<c.length;i++) for(let j=i+1;j<c.length;j++) if(Math.abs(c[i]-c[j])>=2) return [Math.min(c[i],c[j]),Math.max(c[i],c[j])];
      return [0,3];
    }
    let flags=new Array(n).fill(false), early=pick_early_two();
    early.forEach(i=>flags[i]=true);
    if(condition==='reject') return flags;
    let selected=early.slice(), pool=Array.from({length:n-5},(_,i)=>i+5);
    for(let attempt=0;attempt<5000 && selected.length<10;attempt++){
      let trial=shuffle_array(pool), added=false;
      for(const c of trial){
        if(selected.every(old=>Math.abs(c-old)>=2)){
          selected.push(c); pool=pool.filter(v=>v!==c); added=true; break;
        }
      }
      if(!added) break;
    }
    if(selected.length<10){
      for(let c=5;c<n && selected.length<10;c++){
        if(!selected.includes(c) && selected.every(old=>Math.abs(c-old)>=2)) selected.push(c);
      }
    }
    selected.slice(0,10).forEach(i=>flags[i]=true);
    return flags;
  }
  function make_ug_sequence(){
    let vals=[...Array(20).fill(5),...Array(20).fill(7),...Array(20).fill(9)];
    for(let a=0;a<5000;a++){ vals=shuffle_array(vals); if(vals.every((v,i)=>i===0 || v!==vals[i-1])) return vals.slice(); }
    return [...Array(20).fill(5),...Array(20).fill(7),...Array(20).fill(9)];
  }
  let social_context=String((typeof expInfo!=='undefined'&&expInfo['social_context'])?expInfo['social_context']:'auto').trim().toLowerCase();
  let cue_condition=String((typeof expInfo!=='undefined'&&expInfo['cue_condition'])?expInfo['cue_condition']:'auto').trim().toLowerCase();
  const group_code=participant_hash(participant_id)%4;
  if(!['accept','reject'].includes(social_context)) social_context=(group_code<2)?'accept':'reject';
  if(!['active','random'].includes(cue_condition)) cue_condition=(group_code%2===0)?'active':'random';
  let key_mapping_setting=String((typeof expInfo!=='undefined'&&expInfo['key_mapping'])?expInfo['key_mapping']:'1').trim().toUpperCase();
  let key_mapping_num=(key_mapping_setting==='2'||key_mapping_setting==='JF')?2:1;
  function update_ug_mapping(){
    const firstHalf=(UG_TRIAL_INDEX<30);
    if(key_mapping_num===1){
      ACCEPT_KEY=firstHalf?'f':'j'; REJECT_KEY=firstHalf?'j':'f';
    } else {
      ACCEPT_KEY=firstHalf?'j':'f'; REJECT_KEY=firstHalf?'f':'j';
    }
    KEY_MAP_LABEL='接受 = '+ACCEPT_KEY.toUpperCase()+'；拒绝 = '+REJECT_KEY.toUpperCase();
  }
  update_ug_mapping();
  CONDITION_CELL=social_context+'_'+cue_condition;
  CB_RECEIVE_FLAGS=make_cb_flags(social_context,CB_TOTAL);
  UG_OFFERS=make_ug_sequence();
  CB_CURRENT_HOLDER=(Math.random()<0.5)?'Chen':'Li';
  
  // Initialize components for Routine "cb_intro"
  cb_introClock = new util.Clock();
  cb_intro_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_intro_title',
    text: '多人传球活动',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.46], draggable: false, height: 0.043,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  cb_intro_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_intro_body',
    text: '欢迎参加本次在线多人传球活动。\n\n接下来，屏幕上会出现你（下方）和另外两名参与者（上方），中间会有一个正在移动的球。\n\n【你需要做的】\n当球传到你手里时，请使用鼠标点击上方任意一位参与者，将球传给对方。\n\n【你不需要做的】\n当球在其他参与者手里时，请耐心等待，不需要点击或操作。\n\n任务没有对错之分，请根据看到的实际情况自然完成。\n\n准备好后，请按"空格键"开始练习。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.029,  wrapWidth: 1.55, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  cb_intro_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cyberball"
  cyberballClock = new util.Clock();
  img_chen = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_chen', units : undefined, 
    image : 'chen.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.34), 0.37], 
    draggable: false,
    size : [0.095, 0.095],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  img_li = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_li', units : undefined, 
    image : 'li.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0.34, 0.37], 
    draggable: false,
    size : [0.095, 0.095],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  person_chen = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_chen', units : undefined, 
    image : 'person_chen.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.34), 0.08], 
    draggable: false,
    size : [0.145, 0.205],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  person_li = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_li', units : undefined, 
    image : 'person_li.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.34, 0.08], 
    draggable: false,
    size : [0.145, 0.205],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  person_me = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_me', units : undefined, 
    image : 'person_me.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.25)], 
    draggable: false,
    size : [0.15, 0.215],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  person_chen_throw = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_chen_throw', units : undefined, 
    image : 'person_chen_throw.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.34), 0.08], 
    draggable: false,
    size : [0.145, 0.205],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  person_li_throw = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_li_throw', units : undefined, 
    image : 'person_li_throw.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.34, 0.08], 
    draggable: false,
    size : [0.145, 0.205],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  person_me_throw_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_me_throw_left', units : undefined, 
    image : 'person_me_throw_left.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.25)], 
    draggable: false,
    size : [0.15, 0.215],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  person_me_throw_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'person_me_throw_right', units : undefined, 
    image : 'person_me_throw_right.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.25)], 
    draggable: false,
    size : [0.15, 0.215],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  img_ball = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_ball', units : undefined, 
    image : 'ball.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.28)], 
    draggable: false,
    size : [0.045, 0.045],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  text_chen = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_chen',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [(- 0.34), 0.305], draggable: false, height: 0.016,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -10.0 
  });
  
  text_li = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_li',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0.34, 0.305], draggable: false, height: 0.016,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -11.0 
  });
  
  text_me = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_me',
    text: '我',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.405)], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -12.0 
  });
  
  text_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hint',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.02)], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -13.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "cb_check"
  cb_checkClock = new util.Clock();
  cb_check_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_check_title',
    text: '传球练习结束',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  cb_check_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_check_body',
    text: '刚才的练习已经结束。接下来将进入正式的传球活动。\n\n操作方式保持不变：球传到你手里时，请用鼠标选择上方一位参与者，把球传给对方；其他时候请等待当前传球自然完成。\n\n准备好后，请按"空格键"继续。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.0], draggable: false, height: 0.028,  wrapWidth: 1.55, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  cb_check_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cbm_partner_intro"
  cbm_partner_introClock = new util.Clock();
  cbm_partner_loading_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_loading_title',
    text: '正在匹配本轮传球参与者',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.04,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  cbm_partner_name_loading = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_name_loading',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0.64, 0.23], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -1.0 
  });
  
  cbm_partner_cue_loading = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_cue_loading',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.07], draggable: false, height: 0.034,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -2.0 
  });
  
  cbm_partner_loading_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_loading_body',
    text: '正在确认本轮参与安排，请稍候',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.03,  wrapWidth: 1.55, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "cbm_partner_intro_2"
  cbm_partner_intro_2Clock = new util.Clock();
  cbm_partner_result_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_result_title',
    text: '本轮传球参与者已匹配',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.04,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  cbm_partner_result_photo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cbm_partner_result_photo', units : undefined, 
    image : 'chen.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.22), 0.2], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cbm_partner_result_photo2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cbm_partner_result_photo2', units : undefined, 
    image : 'li.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.2], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  cbm_partner_result_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_result_name',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -3.0 
  });
  
  cbm_partner_result_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_result_cue',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.06)], draggable: false, height: 0.025,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -4.0 
  });
  
  cbm_partner_result_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'cbm_partner_result_body',
    text: '请阅读完上面的信息。\n准备好后，请按"空格键"开始正式传球。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.22)], draggable: false, height: 0.024,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -5.0 
  });
  
  cbm_partner_result_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cb_check_2"
  cb_check_2Clock = new util.Clock();
  cb_recall_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_recall_title',
    text: '传球任务结束',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.34], draggable: false, height: 0.043,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  cb_recall_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_recall_body',
    text: '刚才的传球任务已经结束。\n请根据你刚才的实际体验回忆一下：\n\n你认为自己大约接到了多少次球？\n\n请使用键盘输入一个数字（0–30），然后按 Enter 确认。这个问题没有对错，我们只记录你的回忆。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.028,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  cb_recall_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cb_recall_entry = new visual.TextStim({
    win: psychoJS.window,
    name: 'cb_recall_entry',
    text: '【  】',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -4.0 
  });
  
  // Initialize components for Routine "ug_intro"
  ug_introClock = new util.Clock();
  ug_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_title',
    text: '分配任务说明',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.46], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  ug_intro_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_intro_body',
    text: '接下来你将完成一项分配任务。\n\n每一轮，一位互动对象会提出一个如何分配10元的方案。你负责对方案作出回应。\n\n屏幕上会显示对方获得多少元，以及你获得多少元。\n\n看到方案后，请按键作出选择：\n接受 → 按照方案分配10元，你和对方分别获得屏幕显示的金额。\n拒绝 → 本轮双方均获得0元。\n\n请根据你的真实想法自然作答，没有对错之分。\n阅读完毕后，请按【空格键】进入练习。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.015], draggable: false, height: 0.0265,  wrapWidth: 1.55, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  ug_intro_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ug_fixation_practice"
  ug_fixation_practiceClock = new util.Clock();
  ug_fixation_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_fixation_practice_text',
    text: '+',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ug_offer"
  ug_offerClock = new util.Clock();
  ug_partner_photo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ug_partner_photo', units : undefined, 
    image : 'partner_new.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.43], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ug_partner_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_partner_name',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  ug_offer_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_offer_title',
    text: '本轮分配方案',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.03,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -2.0 
  });
  
  ug_offer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_offer_text',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.01)], draggable: false, height: 0.048,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -3.0 
  });
  
  ug_options = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_options',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.24)], draggable: false, height: 0.027,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -4.0 
  });
  
  ug_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ug_feedback"
  ug_feedbackClock = new util.Clock();
  fb_partner_photo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fb_partner_photo', units : undefined, 
    image : 'partner_new.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.34], 
    draggable: false,
    size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  fb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_text',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.08], draggable: false, height: 0.034,  wrapWidth: 1.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  fb_wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_wait',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.15)], draggable: false, height: 0.025,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ug_check"
  ug_checkClock = new util.Clock();
  ug_check_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_check_title',
    text: '练习结束',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  ug_check_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_check_body',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.02], draggable: false, height: 0.0265,  wrapWidth: 1.55, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  ug_check_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "partner_intro"
  partner_introClock = new util.Clock();
  partner_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_title',
    text: '正在匹配新的互动对象',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.46], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  partner_photo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'partner_photo', units : undefined, 
    image : 'partner_new.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0.64, 0.34], 
    draggable: false,
    size : [0.13, 0.13],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  partner_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_name',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0.64, 0.23], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -2.0 
  });
  
  partner_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_cue',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.07], draggable: false, height: 0.034,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -3.0 
  });
  
  partner_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_body',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.028,  wrapWidth: 1.55, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -4.0 
  });
  
  partner_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "partner_intro_3"
  partner_intro_3Clock = new util.Clock();
  partner_result_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_result_title',
    text: '匹配结果',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.46], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  partner_result_photo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'partner_result_photo', units : undefined, 
    image : 'partner_new.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.14], 
    draggable: false,
    size : [0.17, 0.17],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  partner_result_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_result_name',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.08], draggable: false, height: 0.028,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -2.0 
  });
  
  partner_result_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_result_cue',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.08)], draggable: false, height: 0.031,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -3.0 
  });
  
  partner_result_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_result_body',
    text: '请认真阅读上面的匹配结果。\n明白后请按"空格键"继续。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.026,  wrapWidth: 1.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -4.0 
  });
  
  partner_result_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "partner_intro_2"
  partner_intro_2Clock = new util.Clock();
  partner_loading_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_loading_title',
    text: '正在建立互动连接',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.46], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  partner_photo_loading = new visual.ImageStim({
    win : psychoJS.window,
    name : 'partner_photo_loading', units : undefined, 
    image : 'partner_new.jpg', mask : 'circle',
    anchor : 'center',
    ori : 0.0, 
    pos : [0.64, 0.34], 
    draggable: false,
    size : [0.13, 0.13],
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  partner_name_loading = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_name_loading',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0.64, 0.23], draggable: false, height: 0.02,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -2.0 
  });
  
  partner_cue_loading = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_cue_loading',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.07], draggable: false, height: 0.034,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 0.0,
    depth: -3.0 
  });
  
  partner_loading_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'partner_loading_body',
    text: '',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.034,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -4.0 
  });
  
  partner_loading_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ug_fixation_block1"
  ug_fixation_block1Clock = new util.Clock();
  ug_fixation_block1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_fixation_block1_text',
    text: '+',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ug_break"
  ug_breakClock = new util.Clock();
  ug_break_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_break_title',
    text: '可以休息一下',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.045,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  ug_break_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_break_body',
    text: '【规则变更提醒】\n接下来，F 键和 J 键对应的“接受/拒绝”功能将互换。\n注意：F 键始终在左侧，J 键始终在右侧。\n准备好后，请按"空格键"继续。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, (- 0.02)], draggable: false, height: 0.03,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: -1.0 
  });
  
  ug_break_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ug_fixation_block2"
  ug_fixation_block2Clock = new util.Clock();
  ug_fixation_block2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ug_fixation_block2_text',
    text: '+',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '本次任务已经完成。\n感谢你的参与。',
    font: 'Microsoft YaHei',
    units: undefined, 
    pos: [0, 0.08], draggable: false, height: 0.043,  wrapWidth: 1.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1,1,1]),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var initMaxDurationReached;
var initMaxDuration;
var initComponents;
function initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    initClock.reset();
    routineTimer.reset();
    initMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('init.started', globalClock.getTime());
    initMaxDuration = null
    // keep track of which components have finished
    initComponents = [];
    
    initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init' ---
    // get current time
    t = initClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init' ---
    initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('init.stopped', globalClock.getTime());
    // the Routine "init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cb_introMaxDurationReached;
var _cb_intro_key_allKeys;
var cb_introMaxDuration;
var cb_introComponents;
function cb_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cb_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cb_introClock.reset();
    routineTimer.reset();
    cb_introMaxDurationReached = false;
    // update component parameters for each repeat
    cb_intro_key.keys = undefined;
    cb_intro_key.rt = undefined;
    _cb_intro_key_allKeys = [];
    psychoJS.experiment.addData('cb_intro.started', globalClock.getTime());
    cb_introMaxDuration = null
    // keep track of which components have finished
    cb_introComponents = [];
    cb_introComponents.push(cb_intro_title);
    cb_introComponents.push(cb_intro_body);
    cb_introComponents.push(cb_intro_key);
    
    cb_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function cb_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cb_intro' ---
    // get current time
    t = cb_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cb_intro_title* updates
    if (t >= 0 && cb_intro_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cb_intro_title.tStart = t;  // (not accounting for frame time here)
      cb_intro_title.frameNStart = frameN;  // exact frame index
      
      cb_intro_title.setAutoDraw(true);
    }
    
    
    // if cb_intro_title is active this frame...
    if (cb_intro_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *cb_intro_body* updates
    if (t >= 0 && cb_intro_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cb_intro_body.tStart = t;  // (not accounting for frame time here)
      cb_intro_body.frameNStart = frameN;  // exact frame index
      
      cb_intro_body.setAutoDraw(true);
    }
    
    
    // if cb_intro_body is active this frame...
    if (cb_intro_body.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *cb_intro_key* updates
    if (t >= 0.0 && cb_intro_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cb_intro_key.tStart = t;  // (not accounting for frame time here)
      cb_intro_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { cb_intro_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { cb_intro_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { cb_intro_key.clearEvents(); });
    }
    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cb_intro_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cb_intro_key.tStop = t;  // not accounting for scr refresh
      cb_intro_key.frameNStop = frameN;  // exact frame index
      // update status
      cb_intro_key.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (cb_intro_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        cb_intro_key.tStop = t;  // not accounting for scr refresh
        cb_intro_key.frameNStop = frameN;  // exact frame index
        // update status
        cb_intro_key.status = PsychoJS.Status.FINISHED;
        cb_intro_key.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if cb_intro_key is active this frame...
      if (cb_intro_key.status === PsychoJS.Status.STARTED) {
        let theseKeys = cb_intro_key.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _cb_intro_key_allKeys = _cb_intro_key_allKeys.concat(theseKeys);
        if (_cb_intro_key_allKeys.length > 0) {
          cb_intro_key.keys = _cb_intro_key_allKeys[_cb_intro_key_allKeys.length - 1].name;  // just the last key pressed
          cb_intro_key.rt = _cb_intro_key_allKeys[_cb_intro_key_allKeys.length - 1].rt;
          cb_intro_key.duration = _cb_intro_key_allKeys[_cb_intro_key_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      cb_introComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function cb_introRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'cb_intro' ---
      cb_introComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('cb_intro.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(cb_intro_key.corr, level);
      }
      psychoJS.experiment.addData('cb_intro_key.keys', cb_intro_key.keys);
      if (typeof cb_intro_key.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('cb_intro_key.rt', cb_intro_key.rt);
          psychoJS.experiment.addData('cb_intro_key.duration', cb_intro_key.duration);
          routineTimer.reset();
          }
      
      cb_intro_key.stop();
      // the Routine "cb_intro" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var cbPractice;
function cbPracticeLoopBegin(cbPracticeLoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      cbPractice = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'cbPractice'
      });
      psychoJS.experiment.addLoop(cbPractice); // add the loop to the experiment
      currentLoop = cbPractice;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      cbPractice.forEach(function() {
        snapshot = cbPractice.getSnapshot();
      
        cbPracticeLoopScheduler.add(importConditions(snapshot));
        cbPracticeLoopScheduler.add(cyberballRoutineBegin(snapshot));
        cbPracticeLoopScheduler.add(cyberballRoutineEachFrame());
        cbPracticeLoopScheduler.add(cyberballRoutineEnd(snapshot));
        cbPracticeLoopScheduler.add(cbPracticeLoopEndIteration(cbPracticeLoopScheduler, snapshot));
      });
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function cbPracticeLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(cbPractice);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function cbPracticeLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var cbMain;
function cbMainLoopBegin(cbMainLoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      cbMain = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'cbMain'
      });
      psychoJS.experiment.addLoop(cbMain); // add the loop to the experiment
      currentLoop = cbMain;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      cbMain.forEach(function() {
        snapshot = cbMain.getSnapshot();
      
        cbMainLoopScheduler.add(importConditions(snapshot));
        cbMainLoopScheduler.add(cyberballRoutineBegin(snapshot));
        cbMainLoopScheduler.add(cyberballRoutineEachFrame());
        cbMainLoopScheduler.add(cyberballRoutineEnd(snapshot));
        cbMainLoopScheduler.add(cbMainLoopEndIteration(cbMainLoopScheduler, snapshot));
      });
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function cbMainLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(cbMain);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function cbMainLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var ugPractice;
function ugPracticeLoopBegin(ugPracticeLoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      ugPractice = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'ugPractice'
      });
      psychoJS.experiment.addLoop(ugPractice); // add the loop to the experiment
      currentLoop = ugPractice;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      ugPractice.forEach(function() {
        snapshot = ugPractice.getSnapshot();
      
        ugPracticeLoopScheduler.add(importConditions(snapshot));
        ugPracticeLoopScheduler.add(ug_fixation_practiceRoutineBegin(snapshot));
        ugPracticeLoopScheduler.add(ug_fixation_practiceRoutineEachFrame());
        ugPracticeLoopScheduler.add(ug_fixation_practiceRoutineEnd(snapshot));
        ugPracticeLoopScheduler.add(ug_offerRoutineBegin(snapshot));
        ugPracticeLoopScheduler.add(ug_offerRoutineEachFrame());
        ugPracticeLoopScheduler.add(ug_offerRoutineEnd(snapshot));
        ugPracticeLoopScheduler.add(ug_feedbackRoutineBegin(snapshot));
        ugPracticeLoopScheduler.add(ug_feedbackRoutineEachFrame());
        ugPracticeLoopScheduler.add(ug_feedbackRoutineEnd(snapshot));
        ugPracticeLoopScheduler.add(ugPracticeLoopEndIteration(ugPracticeLoopScheduler, snapshot));
      });
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function ugPracticeLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(ugPractice);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function ugPracticeLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var ugBlock1;
function ugBlock1LoopBegin(ugBlock1LoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      ugBlock1 = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'ugBlock1'
      });
      psychoJS.experiment.addLoop(ugBlock1); // add the loop to the experiment
      currentLoop = ugBlock1;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      ugBlock1.forEach(function() {
        snapshot = ugBlock1.getSnapshot();
      
        ugBlock1LoopScheduler.add(importConditions(snapshot));
        ugBlock1LoopScheduler.add(ug_fixation_block1RoutineBegin(snapshot));
        ugBlock1LoopScheduler.add(ug_fixation_block1RoutineEachFrame());
        ugBlock1LoopScheduler.add(ug_fixation_block1RoutineEnd(snapshot));
        ugBlock1LoopScheduler.add(ug_offerRoutineBegin(snapshot));
        ugBlock1LoopScheduler.add(ug_offerRoutineEachFrame());
        ugBlock1LoopScheduler.add(ug_offerRoutineEnd(snapshot));
        ugBlock1LoopScheduler.add(ug_feedbackRoutineBegin(snapshot));
        ugBlock1LoopScheduler.add(ug_feedbackRoutineEachFrame());
        ugBlock1LoopScheduler.add(ug_feedbackRoutineEnd(snapshot));
        ugBlock1LoopScheduler.add(ugBlock1LoopEndIteration(ugBlock1LoopScheduler, snapshot));
      });
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function ugBlock1LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(ugBlock1);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function ugBlock1LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var ugBlock2;
function ugBlock2LoopBegin(ugBlock2LoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      ugBlock2 = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
        extraInfo: expInfo, originPath: undefined,
        trialList: undefined,
        seed: undefined, name: 'ugBlock2'
      });
      psychoJS.experiment.addLoop(ugBlock2); // add the loop to the experiment
      currentLoop = ugBlock2;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      ugBlock2.forEach(function() {
        snapshot = ugBlock2.getSnapshot();
      
        ugBlock2LoopScheduler.add(importConditions(snapshot));
        ugBlock2LoopScheduler.add(ug_fixation_block2RoutineBegin(snapshot));
        ugBlock2LoopScheduler.add(ug_fixation_block2RoutineEachFrame());
        ugBlock2LoopScheduler.add(ug_fixation_block2RoutineEnd(snapshot));
        ugBlock2LoopScheduler.add(ug_offerRoutineBegin(snapshot));
        ugBlock2LoopScheduler.add(ug_offerRoutineEachFrame());
        ugBlock2LoopScheduler.add(ug_offerRoutineEnd(snapshot));
        ugBlock2LoopScheduler.add(ug_feedbackRoutineBegin(snapshot));
        ugBlock2LoopScheduler.add(ug_feedbackRoutineEachFrame());
        ugBlock2LoopScheduler.add(ug_feedbackRoutineEnd(snapshot));
        ugBlock2LoopScheduler.add(ugBlock2LoopEndIteration(ugBlock2LoopScheduler, snapshot));
      });
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function ugBlock2LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(ugBlock2);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function ugBlock2LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var cyberballMaxDurationReached;
var gotValidClick;
var move_clock;
var target;
var move_start_time;
var throw_pose_start;
var cyberballMaxDuration;
var cyberballComponents;
function cyberballRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'cyberball' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      cyberballClock.reset();
      routineTimer.reset();
      cyberballMaxDurationReached = false;
      // update component parameters for each repeat
      // setup some python lists for storing info about the mouse
      gotValidClick = false; // until a click is received
      // Run 'Begin Routine' code from cb_code
      move_clock = new util.Clock(); mouse.clickReset();
      const practice_targets=[true,false,true,false,true];
      const hand_pos={'Chen':[-0.285,-0.005],'Li':[0.285,-0.005],'MeCenter':[0,-0.18],'MeLeft':[-0.060,-0.185],'MeRight':[0.060,-0.185]};
      const pass_from=CB_CURRENT_HOLDER;
      const planned_subject_receive=(CB_MODE==='practice')?Boolean(practice_targets[Math.min(CB_TRIAL_INDEX,practice_targets.length-1)]):Boolean(CB_RECEIVE_FLAGS[CB_TRIAL_INDEX]);
      let target=null; if(planned_subject_receive) target='Me'; else if(pass_from==='Me') target=(Math.random()<0.5)?'Chen':'Li'; else target=(pass_from==='Chen')?'Li':'Chen';
      let target_pos=(target==='Me')?hand_pos['MeCenter']:hand_pos[target]; let pass_start=(pass_from==='Me')?hand_pos['MeCenter']:hand_pos[pass_from];
      let moved=false, waiting_for_subject=false, can_accept_click=false; let mouse_clicked=0, click_target='', click_x='', click_y='', rt='';
      let now=0.0, move_start_time=0.0, receive_start_time=0.0; let move_duration=(CB_MODE==='main')?(0.50+Math.random()*0.18):(0.50+Math.random()*0.12); let virtual_hold_time=(CB_MODE==='main')?(1.20+Math.random()*1.20):(0.90+Math.random()*0.60); const THROW_POSE_TIME=0.20; let throw_pose_start=0.0; let phase=(pass_from==='Me')?'moving':'virtual_hold';
      [person_chen,person_li,person_me].forEach(s=>s.setOpacity(1)); [person_chen_throw,person_li_throw,person_me_throw_left,person_me_throw_right].forEach(s=>s.setOpacity(0));
      if(CB_MODE==='practice'){img_chen.setOpacity(0);img_li.setOpacity(0);text_chen.setOpacity(0);text_li.setOpacity(0);}else{img_chen.setOpacity(1);img_li.setOpacity(1);text_chen.setOpacity(1);text_li.setOpacity(1);} text_me.setOpacity(1); text_hint.setOpacity(0); img_ball.setPos(pass_start); move_start_time=move_clock.getTime(); throw_pose_start=move_start_time;
      
      psychoJS.experiment.addData('cyberball.started', globalClock.getTime());
      cyberballMaxDuration = null
      // keep track of which components have finished
      cyberballComponents = [];
      cyberballComponents.push(img_chen);
      cyberballComponents.push(img_li);
      cyberballComponents.push(person_chen);
      cyberballComponents.push(person_li);
      cyberballComponents.push(person_me);
      cyberballComponents.push(person_chen_throw);
      cyberballComponents.push(person_li_throw);
      cyberballComponents.push(person_me_throw_left);
      cyberballComponents.push(person_me_throw_right);
      cyberballComponents.push(img_ball);
      cyberballComponents.push(text_chen);
      cyberballComponents.push(text_li);
      cyberballComponents.push(text_me);
      cyberballComponents.push(text_hint);
      cyberballComponents.push(mouse);
      
      cyberballComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
var now;
var phase;
var moved;
var waiting_for_subject;
var can_accept_click;
var receive_start_time;
var chosen;
var mouse_clicked;
var click_target;
var click_x;
var click_y;
var rt;
var pass_from;
var target_pos;
var pass_start;
function cyberballRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'cyberball' ---
      // get current time
      t = cyberballClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *img_chen* updates
      if (t >= 0 && img_chen.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        img_chen.tStart = t;  // (not accounting for frame time here)
        img_chen.frameNStart = frameN;  // exact frame index
        
        img_chen.setAutoDraw(true);
      }
      
      
      // if img_chen is active this frame...
      if (img_chen.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *img_li* updates
      if (t >= 0 && img_li.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        img_li.tStart = t;  // (not accounting for frame time here)
        img_li.frameNStart = frameN;  // exact frame index
        
        img_li.setAutoDraw(true);
      }
      
      
      // if img_li is active this frame...
      if (img_li.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_chen* updates
      if (t >= 0 && person_chen.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_chen.tStart = t;  // (not accounting for frame time here)
        person_chen.frameNStart = frameN;  // exact frame index
        
        person_chen.setAutoDraw(true);
      }
      
      
      // if person_chen is active this frame...
      if (person_chen.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_li* updates
      if (t >= 0 && person_li.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_li.tStart = t;  // (not accounting for frame time here)
        person_li.frameNStart = frameN;  // exact frame index
        
        person_li.setAutoDraw(true);
      }
      
      
      // if person_li is active this frame...
      if (person_li.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_me* updates
      if (t >= 0 && person_me.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_me.tStart = t;  // (not accounting for frame time here)
        person_me.frameNStart = frameN;  // exact frame index
        
        person_me.setAutoDraw(true);
      }
      
      
      // if person_me is active this frame...
      if (person_me.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_chen_throw* updates
      if (t >= 0 && person_chen_throw.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_chen_throw.tStart = t;  // (not accounting for frame time here)
        person_chen_throw.frameNStart = frameN;  // exact frame index
        
        person_chen_throw.setAutoDraw(true);
      }
      
      
      // if person_chen_throw is active this frame...
      if (person_chen_throw.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_li_throw* updates
      if (t >= 0 && person_li_throw.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_li_throw.tStart = t;  // (not accounting for frame time here)
        person_li_throw.frameNStart = frameN;  // exact frame index
        
        person_li_throw.setAutoDraw(true);
      }
      
      
      // if person_li_throw is active this frame...
      if (person_li_throw.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_me_throw_left* updates
      if (t >= 0 && person_me_throw_left.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_me_throw_left.tStart = t;  // (not accounting for frame time here)
        person_me_throw_left.frameNStart = frameN;  // exact frame index
        
        person_me_throw_left.setAutoDraw(true);
      }
      
      
      // if person_me_throw_left is active this frame...
      if (person_me_throw_left.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *person_me_throw_right* updates
      if (t >= 0 && person_me_throw_right.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        person_me_throw_right.tStart = t;  // (not accounting for frame time here)
        person_me_throw_right.frameNStart = frameN;  // exact frame index
        
        person_me_throw_right.setAutoDraw(true);
      }
      
      
      // if person_me_throw_right is active this frame...
      if (person_me_throw_right.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *img_ball* updates
      if (t >= 0 && img_ball.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        img_ball.tStart = t;  // (not accounting for frame time here)
        img_ball.frameNStart = frameN;  // exact frame index
        
        img_ball.setAutoDraw(true);
      }
      
      
      // if img_ball is active this frame...
      if (img_ball.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_chen* updates
      if (t >= 0 && text_chen.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_chen.tStart = t;  // (not accounting for frame time here)
        text_chen.frameNStart = frameN;  // exact frame index
        
        text_chen.setAutoDraw(true);
      }
      
      
      // if text_chen is active this frame...
      if (text_chen.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_li* updates
      if (t >= 0 && text_li.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_li.tStart = t;  // (not accounting for frame time here)
        text_li.frameNStart = frameN;  // exact frame index
        
        text_li.setAutoDraw(true);
      }
      
      
      // if text_li is active this frame...
      if (text_li.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_me* updates
      if (t >= 0 && text_me.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_me.tStart = t;  // (not accounting for frame time here)
        text_me.frameNStart = frameN;  // exact frame index
        
        text_me.setAutoDraw(true);
      }
      
      
      // if text_me is active this frame...
      if (text_me.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_hint* updates
      if (t >= 0 && text_hint.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_hint.tStart = t;  // (not accounting for frame time here)
        text_hint.frameNStart = frameN;  // exact frame index
        
        text_hint.setAutoDraw(true);
      }
      
      
      // if text_hint is active this frame...
      if (text_hint.status === PsychoJS.Status.STARTED) {
      }
      
      // Run 'Each Frame' code from cb_code
      now=move_clock.getTime();
      if(phase==='virtual_hold'&&now-move_start_time>=virtual_hold_time){phase='throw_pose';throw_pose_start=now;if(pass_from==='Chen'){person_chen.setOpacity(0);person_chen_throw.setOpacity(1);}else if(pass_from==='Li'){person_li.setOpacity(0);person_li_throw.setOpacity(1);}}
      if(phase==='subject_throw_pose'&&now-throw_pose_start>=THROW_POSE_TIME){phase='moving';move_start_time=now;}
      if(phase==='throw_pose'&&now-throw_pose_start>=THROW_POSE_TIME){phase='moving';move_start_time=now;}
      if(phase==='moving'&&!moved&&!waiting_for_subject){const elapsed=now-move_start_time;const progress=Math.min(elapsed/move_duration,1.0);const smooth=progress*progress*(3.0-2.0*progress);let x=pass_start[0]+(target_pos[0]-pass_start[0])*smooth;let y=pass_start[1]+(target_pos[1]-pass_start[1])*smooth;y+=0.16*progress*(1.0-progress);img_ball.setPos([x,y]);if(progress>=1.0){img_ball.setPos(target_pos);moved=true;if(target==='Me'){CB_SUBJECT_RECEIVE_COUNT+=1;waiting_for_subject=true;can_accept_click=false;receive_start_time=now;text_hint.setText('请点击上方任意一位参与者，将球传给对方');text_hint.setOpacity(1);}else{continueRoutine=false;}}}
      if(waiting_for_subject){const buttons=mouse.getPressed();const mouse_down=Boolean(buttons[0]);if(!mouse_down)can_accept_click=true;if(can_accept_click&&mouse_down){const mp=mouse.getPos();const mx=mp[0],my=mp[1];let chosen=null;if(img_chen.contains(mouse)||person_chen.contains(mouse)){chosen='Chen';}else if(img_li.contains(mouse)||person_li.contains(mouse)){chosen='Li';}if(chosen!==null){mouse_clicked=1;click_target=chosen;click_x=mx;click_y=my;rt=now-receive_start_time;pass_from='Me';target=chosen;target_pos=hand_pos[target];pass_start=(chosen==='Chen')?hand_pos['MeLeft']:hand_pos['MeRight'];moved=false;waiting_for_subject=false;can_accept_click=false;text_hint.setOpacity(0);CB_CURRENT_HOLDER=chosen;person_me.setOpacity(0);if(chosen==='Chen'){person_me_throw_left.setOpacity(1);person_me_throw_right.setOpacity(0);}else{person_me_throw_left.setOpacity(0);person_me_throw_right.setOpacity(1);}phase='subject_throw_pose';throw_pose_start=now;}}}
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      cyberballComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function cyberballRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'cyberball' ---
      cyberballComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('cyberball.stopped', globalClock.getTime());
      // store data for psychoJS.experiment (ExperimentHandler)
      // Run 'End Routine' code from cb_code
      CB_CURRENT_HOLDER=(target!==null)?target:CB_CURRENT_HOLDER;
      psychoJS.experiment.addData('Part','Cyberball');
      psychoJS.experiment.addData('Practice',(CB_MODE==='practice')?1:0);
      psychoJS.experiment.addData('CB_Trial',CB_TRIAL_INDEX+1);
      psychoJS.experiment.addData('Condition',social_context);
      psychoJS.experiment.addData('CueCondition',cue_condition);
      psychoJS.experiment.addData('Condition_Cell',CONDITION_CELL);
      psychoJS.experiment.addData('Pass_From',pass_from);
      psychoJS.experiment.addData('Pass_To',target);
      psychoJS.experiment.addData('Planned_Subject_Receive',planned_subject_receive?1:0);
      psychoJS.experiment.addData('Received_By_Subject',(target==='Me')?1:0);
      psychoJS.experiment.addData('Was_Subject_Passer',(pass_from==='Me')?1:0);
      psychoJS.experiment.addData('Mouse_Clicked',mouse_clicked);
      psychoJS.experiment.addData('Click_Target',click_target);
      psychoJS.experiment.addData('Click_X',click_x);
      psychoJS.experiment.addData('Click_Y',click_y);
      psychoJS.experiment.addData('CB_RT',rt);
      psychoJS.experiment.addData('CB_Subject_Receive_Count',CB_SUBJECT_RECEIVE_COUNT);
      psychoJS.experiment.addData('CB_Move_Duration',move_duration);
      psychoJS.experiment.addData('CB_Virtual_Hold_Time',virtual_hold_time);
      CB_TRIAL_INDEX+=1;
      
      // the Routine "cyberball" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var cb_checkMaxDurationReached;
var _cb_check_key_allKeys;
var cb_checkMaxDuration;
var cb_checkComponents;
function cb_checkRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'cb_check' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      cb_checkClock.reset();
      routineTimer.reset();
      cb_checkMaxDurationReached = false;
      // update component parameters for each repeat
      cb_check_key.keys = undefined;
      cb_check_key.rt = undefined;
      _cb_check_key_allKeys = [];
      psychoJS.experiment.addData('cb_check.started', globalClock.getTime());
      cb_checkMaxDuration = null
      // keep track of which components have finished
      cb_checkComponents = [];
      cb_checkComponents.push(cb_check_title);
      cb_checkComponents.push(cb_check_body);
      cb_checkComponents.push(cb_check_key);
      
      cb_checkComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function cb_checkRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'cb_check' ---
      // get current time
      t = cb_checkClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *cb_check_title* updates
      if (t >= 0 && cb_check_title.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        cb_check_title.tStart = t;  // (not accounting for frame time here)
        cb_check_title.frameNStart = frameN;  // exact frame index
        
        cb_check_title.setAutoDraw(true);
      }
      
      
      // if cb_check_title is active this frame...
      if (cb_check_title.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *cb_check_body* updates
      if (t >= 0 && cb_check_body.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        cb_check_body.tStart = t;  // (not accounting for frame time here)
        cb_check_body.frameNStart = frameN;  // exact frame index
        
        cb_check_body.setAutoDraw(true);
      }
      
      
      // if cb_check_body is active this frame...
      if (cb_check_body.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *cb_check_key* updates
      if (t >= 0.0 && cb_check_key.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        cb_check_key.tStart = t;  // (not accounting for frame time here)
        cb_check_key.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { cb_check_key.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { cb_check_key.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { cb_check_key.clearEvents(); });
      }
      frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (cb_check_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        cb_check_key.tStop = t;  // not accounting for scr refresh
        cb_check_key.frameNStop = frameN;  // exact frame index
        // update status
        cb_check_key.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (cb_check_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          cb_check_key.tStop = t;  // not accounting for scr refresh
          cb_check_key.frameNStop = frameN;  // exact frame index
          // update status
          cb_check_key.status = PsychoJS.Status.FINISHED;
          cb_check_key.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if cb_check_key is active this frame...
        if (cb_check_key.status === PsychoJS.Status.STARTED) {
          let theseKeys = cb_check_key.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _cb_check_key_allKeys = _cb_check_key_allKeys.concat(theseKeys);
          if (_cb_check_key_allKeys.length > 0) {
            cb_check_key.keys = _cb_check_key_allKeys[_cb_check_key_allKeys.length - 1].name;  // just the last key pressed
            cb_check_key.rt = _cb_check_key_allKeys[_cb_check_key_allKeys.length - 1].rt;
            cb_check_key.duration = _cb_check_key_allKeys[_cb_check_key_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        cb_checkComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function cb_checkRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'cb_check' ---
        cb_checkComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('cb_check.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(cb_check_key.corr, level);
        }
        psychoJS.experiment.addData('cb_check_key.keys', cb_check_key.keys);
        if (typeof cb_check_key.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('cb_check_key.rt', cb_check_key.rt);
            psychoJS.experiment.addData('cb_check_key.duration', cb_check_key.duration);
            routineTimer.reset();
            }
        
        cb_check_key.stop();
        // Run 'End Routine' code from cb_check_code
        CB_MODE='main'; CB_TRIAL_INDEX=0; CB_SUBJECT_RECEIVE_COUNT=0; CB_CURRENT_HOLDER=(Math.random()<0.5)?'Chen':'Li';
        // the Routine "cb_check" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var cbm_partner_introMaxDurationReached;
var cbm_partner_introMaxDuration;
var cbm_partner_introComponents;
function cbm_partner_introRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'cbm_partner_intro' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        cbm_partner_introClock.reset();
        routineTimer.reset();
        cbm_partner_introMaxDurationReached = false;
        // update component parameters for each repeat
        cbm_partner_cue_loading.setText('');
        // Run 'Begin Routine' code from cbm_loading_code
        move_clock = new util.Clock(); mouse.clickReset();
        const practice_targets=[true,false,true,false,true];
        const hand_pos={'Chen':[-0.285,-0.005],'Li':[0.285,-0.005],'MeCenter':[0,-0.18],'MeLeft':[-0.060,-0.185],'MeRight':[0.060,-0.185]};
        const pass_from=CB_CURRENT_HOLDER;
        const planned_subject_receive=(CB_MODE==='practice')?Boolean(practice_targets[Math.min(CB_TRIAL_INDEX,practice_targets.length-1)]):Boolean(CB_RECEIVE_FLAGS[CB_TRIAL_INDEX]);
        let target=null; if(planned_subject_receive) target='Me'; else if(pass_from==='Me') target=(Math.random()<0.5)?'Chen':'Li'; else target=(pass_from==='Chen')?'Li':'Chen';
        let target_pos=(target==='Me')?hand_pos['MeCenter']:hand_pos[target]; let pass_start=(pass_from==='Me')?hand_pos['MeCenter']:hand_pos[pass_from];
        let moved=false, waiting_for_subject=false, can_accept_click=false; let mouse_clicked=0, click_target='', click_x='', click_y='', rt='';
        let now=0.0, move_start_time=0.0, receive_start_time=0.0; let move_duration=(CB_MODE==='main')?(0.50+Math.random()*0.18):(0.50+Math.random()*0.12); let virtual_hold_time=(CB_MODE==='main')?(1.20+Math.random()*1.20):(0.90+Math.random()*0.60); const THROW_POSE_TIME=0.20; let throw_pose_start=0.0; let phase=(pass_from==='Me')?'moving':'virtual_hold';
        [person_chen,person_li,person_me].forEach(s=>s.setOpacity(1)); [person_chen_throw,person_li_throw,person_me_throw_left,person_me_throw_right].forEach(s=>s.setOpacity(0));
        if(CB_MODE==='practice'){img_chen.setOpacity(0);img_li.setOpacity(0);text_chen.setOpacity(0);text_li.setOpacity(0);}else{img_chen.setOpacity(1);img_li.setOpacity(1);text_chen.setOpacity(1);text_li.setOpacity(1);} text_me.setOpacity(1); text_hint.setOpacity(0); img_ball.setPos(pass_start); move_start_time=move_clock.getTime(); throw_pose_start=move_start_time;
        
        psychoJS.experiment.addData('cbm_partner_intro.started', globalClock.getTime());
        cbm_partner_introMaxDuration = 2.8
        // keep track of which components have finished
        cbm_partner_introComponents = [];
        cbm_partner_introComponents.push(cbm_partner_loading_title);
        cbm_partner_introComponents.push(cbm_partner_name_loading);
        cbm_partner_introComponents.push(cbm_partner_cue_loading);
        cbm_partner_introComponents.push(cbm_partner_loading_body);
        
        cbm_partner_introComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function cbm_partner_introRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'cbm_partner_intro' ---
        // get current time
        t = cbm_partner_introClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        // is it time to end the Routine? (based on local clock)
        if (t > cbm_partner_introMaxDuration) {
            cbm_partner_introMaxDurationReached = true
            continueRoutine = false
        }
        
        // *cbm_partner_loading_title* updates
        if (t >= 0 && cbm_partner_loading_title.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_loading_title.tStart = t;  // (not accounting for frame time here)
          cbm_partner_loading_title.frameNStart = frameN;  // exact frame index
          
          cbm_partner_loading_title.setAutoDraw(true);
        }
        
        
        // if cbm_partner_loading_title is active this frame...
        if (cbm_partner_loading_title.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_name_loading* updates
        if (t >= 0 && cbm_partner_name_loading.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_name_loading.tStart = t;  // (not accounting for frame time here)
          cbm_partner_name_loading.frameNStart = frameN;  // exact frame index
          
          cbm_partner_name_loading.setAutoDraw(true);
        }
        
        
        // if cbm_partner_name_loading is active this frame...
        if (cbm_partner_name_loading.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_cue_loading* updates
        if (t >= 0 && cbm_partner_cue_loading.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_cue_loading.tStart = t;  // (not accounting for frame time here)
          cbm_partner_cue_loading.frameNStart = frameN;  // exact frame index
          
          cbm_partner_cue_loading.setAutoDraw(true);
        }
        
        
        // if cbm_partner_cue_loading is active this frame...
        if (cbm_partner_cue_loading.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_loading_body* updates
        if (t >= 0 && cbm_partner_loading_body.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_loading_body.tStart = t;  // (not accounting for frame time here)
          cbm_partner_loading_body.frameNStart = frameN;  // exact frame index
          
          cbm_partner_loading_body.setAutoDraw(true);
        }
        
        
        // if cbm_partner_loading_body is active this frame...
        if (cbm_partner_loading_body.status === PsychoJS.Status.STARTED) {
        }
        
        // Run 'Each Frame' code from cbm_loading_code
        now=move_clock.getTime();
        if(phase==='virtual_hold'&&now-move_start_time>=virtual_hold_time){phase='throw_pose';throw_pose_start=now;if(pass_from==='Chen'){person_chen.setOpacity(0);person_chen_throw.setOpacity(1);}else if(pass_from==='Li'){person_li.setOpacity(0);person_li_throw.setOpacity(1);}}
        if(phase==='subject_throw_pose'&&now-throw_pose_start>=THROW_POSE_TIME){phase='moving';move_start_time=now;}
        if(phase==='throw_pose'&&now-throw_pose_start>=THROW_POSE_TIME){phase='moving';move_start_time=now;}
        if(phase==='moving'&&!moved&&!waiting_for_subject){const elapsed=now-move_start_time;const progress=Math.min(elapsed/move_duration,1.0);const smooth=progress*progress*(3.0-2.0*progress);let x=pass_start[0]+(target_pos[0]-pass_start[0])*smooth;let y=pass_start[1]+(target_pos[1]-pass_start[1])*smooth;y+=0.16*progress*(1.0-progress);img_ball.setPos([x,y]);if(progress>=1.0){img_ball.setPos(target_pos);moved=true;if(target==='Me'){CB_SUBJECT_RECEIVE_COUNT+=1;waiting_for_subject=true;can_accept_click=false;receive_start_time=now;text_hint.setText('请点击上方任意一位参与者，将球传给对方');text_hint.setOpacity(1);}else{continueRoutine=false;}}}
        if(waiting_for_subject){const buttons=mouse.getPressed();const mouse_down=Boolean(buttons[0]);if(!mouse_down)can_accept_click=true;if(can_accept_click&&mouse_down){const mp=mouse.getPos();const mx=mp[0],my=mp[1];let chosen=null;if(img_chen.contains(mouse)||person_chen.contains(mouse)){chosen='Chen';}else if(img_li.contains(mouse)||person_li.contains(mouse)){chosen='Li';}if(chosen!==null){mouse_clicked=1;click_target=chosen;click_x=mx;click_y=my;rt=now-receive_start_time;pass_from='Me';target=chosen;target_pos=hand_pos[target];pass_start=(chosen==='Chen')?hand_pos['MeLeft']:hand_pos['MeRight'];moved=false;waiting_for_subject=false;can_accept_click=false;text_hint.setOpacity(0);CB_CURRENT_HOLDER=chosen;person_me.setOpacity(0);if(chosen==='Chen'){person_me_throw_left.setOpacity(1);person_me_throw_right.setOpacity(0);}else{person_me_throw_left.setOpacity(0);person_me_throw_right.setOpacity(1);}phase='subject_throw_pose';throw_pose_start=now;}}}
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        cbm_partner_introComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function cbm_partner_introRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'cbm_partner_intro' ---
        cbm_partner_introComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('cbm_partner_intro.stopped', globalClock.getTime());
        CB_CURRENT_HOLDER=(target!==null)?target:CB_CURRENT_HOLDER;
        psychoJS.experiment.addData('Part','Cyberball');
        psychoJS.experiment.addData('Practice',(CB_MODE==='practice')?1:0);
        psychoJS.experiment.addData('CB_Trial',CB_TRIAL_INDEX+1);
        psychoJS.experiment.addData('Condition',social_context);
        psychoJS.experiment.addData('CueCondition',cue_condition);
        psychoJS.experiment.addData('Condition_Cell',CONDITION_CELL);
        psychoJS.experiment.addData('Pass_From',pass_from);
        psychoJS.experiment.addData('Pass_To',target);
        psychoJS.experiment.addData('Planned_Subject_Receive',planned_subject_receive?1:0);
        psychoJS.experiment.addData('Received_By_Subject',(target==='Me')?1:0);
        psychoJS.experiment.addData('Was_Subject_Passer',(pass_from==='Me')?1:0);
        psychoJS.experiment.addData('Mouse_Clicked',mouse_clicked);
        psychoJS.experiment.addData('Click_Target',click_target);
        psychoJS.experiment.addData('Click_X',click_x);
        psychoJS.experiment.addData('Click_Y',click_y);
        psychoJS.experiment.addData('CB_RT',rt);
        psychoJS.experiment.addData('CB_Subject_Receive_Count',CB_SUBJECT_RECEIVE_COUNT);
        psychoJS.experiment.addData('CB_Move_Duration',move_duration);
        psychoJS.experiment.addData('CB_Virtual_Hold_Time',virtual_hold_time);
        CB_TRIAL_INDEX+=1;
        
        // the Routine "cbm_partner_intro" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var cbm_partner_intro_2MaxDurationReached;
var _cbm_partner_result_key_allKeys;
var cbm_partner_intro_2MaxDuration;
var cbm_partner_intro_2Components;
function cbm_partner_intro_2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'cbm_partner_intro_2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        cbm_partner_intro_2Clock.reset();
        routineTimer.reset();
        cbm_partner_intro_2MaxDurationReached = false;
        // update component parameters for each repeat
        cbm_partner_result_cue.setText('接下来你将与这两位参与者共同完成传球。');
        cbm_partner_result_key.keys = undefined;
        cbm_partner_result_key.rt = undefined;
        _cbm_partner_result_key_allKeys = [];
        psychoJS.experiment.addData('cbm_partner_intro_2.started', globalClock.getTime());
        cbm_partner_intro_2MaxDuration = null
        // keep track of which components have finished
        cbm_partner_intro_2Components = [];
        cbm_partner_intro_2Components.push(cbm_partner_result_title);
        cbm_partner_intro_2Components.push(cbm_partner_result_photo);
        cbm_partner_intro_2Components.push(cbm_partner_result_photo2);
        cbm_partner_intro_2Components.push(cbm_partner_result_name);
        cbm_partner_intro_2Components.push(cbm_partner_result_cue);
        cbm_partner_intro_2Components.push(cbm_partner_result_body);
        cbm_partner_intro_2Components.push(cbm_partner_result_key);
        
        cbm_partner_intro_2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function cbm_partner_intro_2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'cbm_partner_intro_2' ---
        // get current time
        t = cbm_partner_intro_2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *cbm_partner_result_title* updates
        if (t >= 0 && cbm_partner_result_title.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_title.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_title.frameNStart = frameN;  // exact frame index
          
          cbm_partner_result_title.setAutoDraw(true);
        }
        
        
        // if cbm_partner_result_title is active this frame...
        if (cbm_partner_result_title.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_result_photo* updates
        if (t >= 0 && cbm_partner_result_photo.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_photo.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_photo.frameNStart = frameN;  // exact frame index
          
          cbm_partner_result_photo.setAutoDraw(true);
        }
        
        
        // if cbm_partner_result_photo is active this frame...
        if (cbm_partner_result_photo.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_result_photo2* updates
        if (t >= 0 && cbm_partner_result_photo2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_photo2.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_photo2.frameNStart = frameN;  // exact frame index
          
          cbm_partner_result_photo2.setAutoDraw(true);
        }
        
        
        // if cbm_partner_result_photo2 is active this frame...
        if (cbm_partner_result_photo2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_result_name* updates
        if (t >= 0 && cbm_partner_result_name.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_name.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_name.frameNStart = frameN;  // exact frame index
          
          cbm_partner_result_name.setAutoDraw(true);
        }
        
        
        // if cbm_partner_result_name is active this frame...
        if (cbm_partner_result_name.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_result_cue* updates
        if (t >= 0 && cbm_partner_result_cue.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_cue.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_cue.frameNStart = frameN;  // exact frame index
          
          cbm_partner_result_cue.setAutoDraw(true);
        }
        
        
        // if cbm_partner_result_cue is active this frame...
        if (cbm_partner_result_cue.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_result_body* updates
        if (t >= 0 && cbm_partner_result_body.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_body.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_body.frameNStart = frameN;  // exact frame index
          
          cbm_partner_result_body.setAutoDraw(true);
        }
        
        
        // if cbm_partner_result_body is active this frame...
        if (cbm_partner_result_body.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *cbm_partner_result_key* updates
        if (t >= 0.0 && cbm_partner_result_key.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          cbm_partner_result_key.tStart = t;  // (not accounting for frame time here)
          cbm_partner_result_key.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { cbm_partner_result_key.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { cbm_partner_result_key.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { cbm_partner_result_key.clearEvents(); });
        }
        frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (cbm_partner_result_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          cbm_partner_result_key.tStop = t;  // not accounting for scr refresh
          cbm_partner_result_key.frameNStop = frameN;  // exact frame index
          // update status
          cbm_partner_result_key.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (cbm_partner_result_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            cbm_partner_result_key.tStop = t;  // not accounting for scr refresh
            cbm_partner_result_key.frameNStop = frameN;  // exact frame index
            // update status
            cbm_partner_result_key.status = PsychoJS.Status.FINISHED;
            cbm_partner_result_key.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if cbm_partner_result_key is active this frame...
          if (cbm_partner_result_key.status === PsychoJS.Status.STARTED) {
            let theseKeys = cbm_partner_result_key.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _cbm_partner_result_key_allKeys = _cbm_partner_result_key_allKeys.concat(theseKeys);
            if (_cbm_partner_result_key_allKeys.length > 0) {
              cbm_partner_result_key.keys = _cbm_partner_result_key_allKeys[_cbm_partner_result_key_allKeys.length - 1].name;  // just the last key pressed
              cbm_partner_result_key.rt = _cbm_partner_result_key_allKeys[_cbm_partner_result_key_allKeys.length - 1].rt;
              cbm_partner_result_key.duration = _cbm_partner_result_key_allKeys[_cbm_partner_result_key_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          cbm_partner_intro_2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
            }
          });
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function cbm_partner_intro_2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'cbm_partner_intro_2' ---
          cbm_partner_intro_2Components.forEach( function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          });
          psychoJS.experiment.addData('cbm_partner_intro_2.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(cbm_partner_result_key.corr, level);
          }
          psychoJS.experiment.addData('cbm_partner_result_key.keys', cbm_partner_result_key.keys);
          if (typeof cbm_partner_result_key.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('cbm_partner_result_key.rt', cbm_partner_result_key.rt);
              psychoJS.experiment.addData('cbm_partner_result_key.duration', cbm_partner_result_key.duration);
              routineTimer.reset();
              }
          
          cbm_partner_result_key.stop();
          // the Routine "cbm_partner_intro_2" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var cb_check_2MaxDurationReached;
var _cb_recall_key_allKeys;
var cb_check_2MaxDuration;
var cb_check_2Components;
function cb_check_2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'cb_check_2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          cb_check_2Clock.reset();
          routineTimer.reset();
          cb_check_2MaxDurationReached = false;
          // update component parameters for each repeat
          cb_recall_key.keys = undefined;
          cb_recall_key.rt = undefined;
          _cb_recall_key_allKeys = [];
          // Run 'Begin Routine' code from cb_recall_code
          CB_RECALL_TEXT=''; CB_RECALLED_COUNT='';
          
          psychoJS.experiment.addData('cb_check_2.started', globalClock.getTime());
          cb_check_2MaxDuration = null
          // keep track of which components have finished
          cb_check_2Components = [];
          cb_check_2Components.push(cb_recall_title);
          cb_check_2Components.push(cb_recall_body);
          cb_check_2Components.push(cb_recall_key);
          cb_check_2Components.push(cb_recall_entry);
          
          cb_check_2Components.forEach( function(thisComponent) {
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
             });
          return Scheduler.Event.NEXT;
        }
      }
      
      
function cb_check_2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'cb_check_2' ---
          // get current time
          t = cb_check_2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *cb_recall_title* updates
          if (t >= 0 && cb_recall_title.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            cb_recall_title.tStart = t;  // (not accounting for frame time here)
            cb_recall_title.frameNStart = frameN;  // exact frame index
            
            cb_recall_title.setAutoDraw(true);
          }
          
          
          // if cb_recall_title is active this frame...
          if (cb_recall_title.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *cb_recall_body* updates
          if (t >= 0 && cb_recall_body.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            cb_recall_body.tStart = t;  // (not accounting for frame time here)
            cb_recall_body.frameNStart = frameN;  // exact frame index
            
            cb_recall_body.setAutoDraw(true);
          }
          
          
          // if cb_recall_body is active this frame...
          if (cb_recall_body.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *cb_recall_key* updates
          if (t >= 0.0 && cb_recall_key.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            cb_recall_key.tStart = t;  // (not accounting for frame time here)
            cb_recall_key.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { cb_recall_key.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { cb_recall_key.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { cb_recall_key.clearEvents(); });
          }
          frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (cb_recall_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            cb_recall_key.tStop = t;  // not accounting for scr refresh
            cb_recall_key.frameNStop = frameN;  // exact frame index
            // update status
            cb_recall_key.status = PsychoJS.Status.FINISHED;
            frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (cb_recall_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              cb_recall_key.tStop = t;  // not accounting for scr refresh
              cb_recall_key.frameNStop = frameN;  // exact frame index
              // update status
              cb_recall_key.status = PsychoJS.Status.FINISHED;
              cb_recall_key.status = PsychoJS.Status.FINISHED;
                }
              
            }
            
            // if cb_recall_key is active this frame...
            if (cb_recall_key.status === PsychoJS.Status.STARTED) {
              let theseKeys = cb_recall_key.getKeys({
                keyList: typeof ['0','1','2','3','4','5','6','7','8','9','backspace','return'] === 'string' ? [['0','1','2','3','4','5','6','7','8','9','backspace','return']] : ['0','1','2','3','4','5','6','7','8','9','backspace','return'], 
                waitRelease: false
              });
              _cb_recall_key_allKeys = _cb_recall_key_allKeys.concat(theseKeys);
              if (_cb_recall_key_allKeys.length > 0) {
                cb_recall_key.keys = _cb_recall_key_allKeys[_cb_recall_key_allKeys.length - 1].name;  // just the last key pressed
                cb_recall_key.rt = _cb_recall_key_allKeys[_cb_recall_key_allKeys.length - 1].rt;
                cb_recall_key.duration = _cb_recall_key_allKeys[_cb_recall_key_allKeys.length - 1].duration;
              }
            }
            
            // Run 'Each Frame' code from cb_recall_code
            const keys=cb_recall_key.getKeys();
            for(const kp of keys){
              const k=(kp&&kp.name!==undefined)?kp.name:String(kp);
              if(['0','1','2','3','4','5','6','7','8','9'].includes(k)){if(CB_RECALL_TEXT.length<2)CB_RECALL_TEXT+=k;}
              else if(k==='backspace'){CB_RECALL_TEXT=CB_RECALL_TEXT.slice(0,-1);}
              else if(k==='return'&&CB_RECALL_TEXT!==''){const value=parseInt(CB_RECALL_TEXT,10);if(value>=0&&value<=30){CB_RECALLED_COUNT=value;continueRoutine=false;}}
            }
            cb_recall_entry.setText('【 '+CB_RECALL_TEXT+' 】');
            
            
            // *cb_recall_entry* updates
            if (t >= 0 && cb_recall_entry.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              cb_recall_entry.tStart = t;  // (not accounting for frame time here)
              cb_recall_entry.frameNStart = frameN;  // exact frame index
              
              cb_recall_entry.setAutoDraw(true);
            }
            
            
            // if cb_recall_entry is active this frame...
            if (cb_recall_entry.status === PsychoJS.Status.STARTED) {
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            cb_check_2Components.forEach( function(thisComponent) {
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
              }
            });
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function cb_check_2RoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'cb_check_2' ---
            cb_check_2Components.forEach( function(thisComponent) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            });
            psychoJS.experiment.addData('cb_check_2.stopped', globalClock.getTime());
            cb_recall_key.stop();
            // Run 'End Routine' code from cb_recall_code
            psychoJS.experiment.addData('CB_Recalled_Receive_Count',CB_RECALLED_COUNT); psychoJS.experiment.addData('CB_Actual_Receive_Count',CB_SUBJECT_RECEIVE_COUNT);
            
            // the Routine "cb_check_2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var ug_introMaxDurationReached;
var _ug_intro_key_allKeys;
var ug_introMaxDuration;
var ug_introComponents;
function ug_introRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'ug_intro' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            ug_introClock.reset();
            routineTimer.reset();
            ug_introMaxDurationReached = false;
            // update component parameters for each repeat
            ug_intro_key.keys = undefined;
            ug_intro_key.rt = undefined;
            _ug_intro_key_allKeys = [];
            psychoJS.experiment.addData('ug_intro.started', globalClock.getTime());
            ug_introMaxDuration = null
            // keep track of which components have finished
            ug_introComponents = [];
            ug_introComponents.push(ug_title);
            ug_introComponents.push(ug_intro_body);
            ug_introComponents.push(ug_intro_key);
            
            ug_introComponents.forEach( function(thisComponent) {
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
               });
            return Scheduler.Event.NEXT;
          }
        }
        
        
function ug_introRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'ug_intro' ---
            // get current time
            t = ug_introClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *ug_title* updates
            if (t >= 0 && ug_title.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              ug_title.tStart = t;  // (not accounting for frame time here)
              ug_title.frameNStart = frameN;  // exact frame index
              
              ug_title.setAutoDraw(true);
            }
            
            
            // if ug_title is active this frame...
            if (ug_title.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *ug_intro_body* updates
            if (t >= 0 && ug_intro_body.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              ug_intro_body.tStart = t;  // (not accounting for frame time here)
              ug_intro_body.frameNStart = frameN;  // exact frame index
              
              ug_intro_body.setAutoDraw(true);
            }
            
            
            // if ug_intro_body is active this frame...
            if (ug_intro_body.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *ug_intro_key* updates
            if (t >= 0.0 && ug_intro_key.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              ug_intro_key.tStart = t;  // (not accounting for frame time here)
              ug_intro_key.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { ug_intro_key.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { ug_intro_key.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { ug_intro_key.clearEvents(); });
            }
            frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (ug_intro_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              ug_intro_key.tStop = t;  // not accounting for scr refresh
              ug_intro_key.frameNStop = frameN;  // exact frame index
              // update status
              ug_intro_key.status = PsychoJS.Status.FINISHED;
              frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (ug_intro_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                ug_intro_key.tStop = t;  // not accounting for scr refresh
                ug_intro_key.frameNStop = frameN;  // exact frame index
                // update status
                ug_intro_key.status = PsychoJS.Status.FINISHED;
                ug_intro_key.status = PsychoJS.Status.FINISHED;
                  }
                
              }
              
              // if ug_intro_key is active this frame...
              if (ug_intro_key.status === PsychoJS.Status.STARTED) {
                let theseKeys = ug_intro_key.getKeys({
                  keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                  waitRelease: false
                });
                _ug_intro_key_allKeys = _ug_intro_key_allKeys.concat(theseKeys);
                if (_ug_intro_key_allKeys.length > 0) {
                  ug_intro_key.keys = _ug_intro_key_allKeys[_ug_intro_key_allKeys.length - 1].name;  // just the last key pressed
                  ug_intro_key.rt = _ug_intro_key_allKeys[_ug_intro_key_allKeys.length - 1].rt;
                  ug_intro_key.duration = _ug_intro_key_allKeys[_ug_intro_key_allKeys.length - 1].duration;
                  // a response ends the routine
                  continueRoutine = false;
                }
              }
              
              // check for quit (typically the Esc key)
              if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
              }
              
              // check if the Routine should terminate
              if (!continueRoutine) {  // a component has requested a forced-end of Routine
                routineForceEnded = true;
                return Scheduler.Event.NEXT;
              }
              
              continueRoutine = false;  // reverts to True if at least one component still running
              ug_introComponents.forEach( function(thisComponent) {
                if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                  continueRoutine = true;
                }
              });
              
              // refresh the screen if continuing
              if (continueRoutine) {
                return Scheduler.Event.FLIP_REPEAT;
              } else {
                return Scheduler.Event.NEXT;
              }
            };
          }
          
          
function ug_introRoutineEnd(snapshot) {
            return async function () {
              //--- Ending Routine 'ug_intro' ---
              ug_introComponents.forEach( function(thisComponent) {
                if (typeof thisComponent.setAutoDraw === 'function') {
                  thisComponent.setAutoDraw(false);
                }
              });
              psychoJS.experiment.addData('ug_intro.stopped', globalClock.getTime());
              // update the trial handler
              if (currentLoop instanceof MultiStairHandler) {
                currentLoop.addResponse(ug_intro_key.corr, level);
              }
              psychoJS.experiment.addData('ug_intro_key.keys', ug_intro_key.keys);
              if (typeof ug_intro_key.keys !== 'undefined') {  // we had a response
                  psychoJS.experiment.addData('ug_intro_key.rt', ug_intro_key.rt);
                  psychoJS.experiment.addData('ug_intro_key.duration', ug_intro_key.duration);
                  routineTimer.reset();
                  }
              
              ug_intro_key.stop();
              // the Routine "ug_intro" was not non-slip safe, so reset the non-slip timer
              routineTimer.reset();
              
              // Routines running outside a loop should always advance the datafile row
              if (currentLoop === psychoJS.experiment) {
                psychoJS.experiment.nextEntry(snapshot);
              }
              return Scheduler.Event.NEXT;
            }
          }
          
          
var ug_fixation_practiceMaxDurationReached;
var ug_fixation_practiceMaxDuration;
var ug_fixation_practiceComponents;
function ug_fixation_practiceRoutineBegin(snapshot) {
            return async function () {
              TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
              
              //--- Prepare to start Routine 'ug_fixation_practice' ---
              t = 0;
              frameN = -1;
              continueRoutine = true; // until we're told otherwise
              // keep track of whether this Routine was forcibly ended
              routineForceEnded = false;
              ug_fixation_practiceClock.reset(routineTimer.getTime());
              routineTimer.add(0.500000);
              ug_fixation_practiceMaxDurationReached = false;
              // update component parameters for each repeat
              psychoJS.experiment.addData('ug_fixation_practice.started', globalClock.getTime());
              ug_fixation_practiceMaxDuration = 0.5
              // keep track of which components have finished
              ug_fixation_practiceComponents = [];
              ug_fixation_practiceComponents.push(ug_fixation_practice_text);
              
              ug_fixation_practiceComponents.forEach( function(thisComponent) {
                if ('status' in thisComponent)
                  thisComponent.status = PsychoJS.Status.NOT_STARTED;
                 });
              return Scheduler.Event.NEXT;
            }
          }
          
          
function ug_fixation_practiceRoutineEachFrame() {
            return async function () {
              //--- Loop for each frame of Routine 'ug_fixation_practice' ---
              // get current time
              t = ug_fixation_practiceClock.getTime();
              frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
              // update/draw components on each frame
              // is it time to end the Routine? (based on local clock)
              if (t > ug_fixation_practiceMaxDuration) {
                  ug_fixation_practiceMaxDurationReached = true
                  continueRoutine = false
              }
              
              // *ug_fixation_practice_text* updates
              if (t >= 0 && ug_fixation_practice_text.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_fixation_practice_text.tStart = t;  // (not accounting for frame time here)
                ug_fixation_practice_text.frameNStart = frameN;  // exact frame index
                
                ug_fixation_practice_text.setAutoDraw(true);
              }
              
              
              // if ug_fixation_practice_text is active this frame...
              if (ug_fixation_practice_text.status === PsychoJS.Status.STARTED) {
              }
              
              frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (ug_fixation_practice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                ug_fixation_practice_text.tStop = t;  // not accounting for scr refresh
                ug_fixation_practice_text.frameNStop = frameN;  // exact frame index
                // update status
                ug_fixation_practice_text.status = PsychoJS.Status.FINISHED;
                ug_fixation_practice_text.setAutoDraw(false);
              }
              
              // check for quit (typically the Esc key)
              if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
              }
              
              // check if the Routine should terminate
              if (!continueRoutine) {  // a component has requested a forced-end of Routine
                routineForceEnded = true;
                return Scheduler.Event.NEXT;
              }
              
              continueRoutine = false;  // reverts to True if at least one component still running
              ug_fixation_practiceComponents.forEach( function(thisComponent) {
                if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                  continueRoutine = true;
                }
              });
              
              // refresh the screen if continuing
              if (continueRoutine && routineTimer.getTime() > 0) {
                return Scheduler.Event.FLIP_REPEAT;
              } else {
                return Scheduler.Event.NEXT;
              }
            };
          }
          
          
function ug_fixation_practiceRoutineEnd(snapshot) {
            return async function () {
              //--- Ending Routine 'ug_fixation_practice' ---
              ug_fixation_practiceComponents.forEach( function(thisComponent) {
                if (typeof thisComponent.setAutoDraw === 'function') {
                  thisComponent.setAutoDraw(false);
                }
              });
              psychoJS.experiment.addData('ug_fixation_practice.stopped', globalClock.getTime());
              if (routineForceEnded) {
                  routineTimer.reset();} else if (ug_fixation_practiceMaxDurationReached) {
                  ug_fixation_practiceClock.add(ug_fixation_practiceMaxDuration);
              } else {
                  ug_fixation_practiceClock.add(0.500000);
              }
              // Routines running outside a loop should always advance the datafile row
              if (currentLoop === psychoJS.experiment) {
                psychoJS.experiment.nextEntry(snapshot);
              }
              return Scheduler.Event.NEXT;
            }
          }
          
          
var ug_offerMaxDurationReached;
var _ug_resp_allKeys;
var UG_CHOICE_KEY;
var UG_N_KEYS;
var ug_offerMaxDuration;
var ug_offerComponents;
function ug_offerRoutineBegin(snapshot) {
            return async function () {
              TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
              
              //--- Prepare to start Routine 'ug_offer' ---
              t = 0;
              frameN = -1;
              continueRoutine = true; // until we're told otherwise
              // keep track of whether this Routine was forcibly ended
              routineForceEnded = false;
              ug_offerClock.reset();
              routineTimer.reset();
              ug_offerMaxDurationReached = false;
              // update component parameters for each repeat
              ug_offer_text.setText('');
              ug_options.setText('');
              ug_resp.keys = undefined;
              ug_resp.rt = undefined;
              _ug_resp_allKeys = [];
              // Run 'Begin Routine' code from ug_offer_code
              update_ug_mapping();UG_CURRENT_OFFER=(UG_MODE==='practice')?[5,7,9,5,7,9][UG_TRIAL_INDEX%6]:UG_OFFERS[UG_TRIAL_INDEX];UG_CURRENT_OTHER=UG_CURRENT_OFFER;UG_CURRENT_SELF=10-UG_CURRENT_OFFER;ug_offer_text.setText('对方获得 '+UG_CURRENT_OTHER+' 元\n你获得 '+UG_CURRENT_SELF+' 元');ug_options.setText('F 键：'+(ACCEPT_KEY==='f'?'接受':'拒绝')+'        J 键：'+(ACCEPT_KEY==='j'?'接受':'拒绝'));if(UG_MODE==='practice'){ug_partner_photo.setOpacity(0);ug_partner_name.setOpacity(0);}else{ug_partner_photo.setOpacity(1);ug_partner_name.setOpacity(1);}UG_DECISION='miss';UG_MISSED=0;UG_RT='';UG_CHOICE_KEY='';UG_N_KEYS=0;
              
              psychoJS.experiment.addData('ug_offer.started', globalClock.getTime());
              ug_offerMaxDuration = null
              // keep track of which components have finished
              ug_offerComponents = [];
              ug_offerComponents.push(ug_partner_photo);
              ug_offerComponents.push(ug_partner_name);
              ug_offerComponents.push(ug_offer_title);
              ug_offerComponents.push(ug_offer_text);
              ug_offerComponents.push(ug_options);
              ug_offerComponents.push(ug_resp);
              
              ug_offerComponents.forEach( function(thisComponent) {
                if ('status' in thisComponent)
                  thisComponent.status = PsychoJS.Status.NOT_STARTED;
                 });
              return Scheduler.Event.NEXT;
            }
          }
          
          
function ug_offerRoutineEachFrame() {
            return async function () {
              //--- Loop for each frame of Routine 'ug_offer' ---
              // get current time
              t = ug_offerClock.getTime();
              frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
              // update/draw components on each frame
              
              // *ug_partner_photo* updates
              if (t >= 0 && ug_partner_photo.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_partner_photo.tStart = t;  // (not accounting for frame time here)
                ug_partner_photo.frameNStart = frameN;  // exact frame index
                
                ug_partner_photo.setAutoDraw(true);
              }
              
              
              // if ug_partner_photo is active this frame...
              if (ug_partner_photo.status === PsychoJS.Status.STARTED) {
              }
              
              
              // *ug_partner_name* updates
              if (t >= 0 && ug_partner_name.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_partner_name.tStart = t;  // (not accounting for frame time here)
                ug_partner_name.frameNStart = frameN;  // exact frame index
                
                ug_partner_name.setAutoDraw(true);
              }
              
              
              // if ug_partner_name is active this frame...
              if (ug_partner_name.status === PsychoJS.Status.STARTED) {
              }
              
              
              // *ug_offer_title* updates
              if (t >= 0 && ug_offer_title.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_offer_title.tStart = t;  // (not accounting for frame time here)
                ug_offer_title.frameNStart = frameN;  // exact frame index
                
                ug_offer_title.setAutoDraw(true);
              }
              
              
              // if ug_offer_title is active this frame...
              if (ug_offer_title.status === PsychoJS.Status.STARTED) {
              }
              
              
              // *ug_offer_text* updates
              if (t >= 0 && ug_offer_text.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_offer_text.tStart = t;  // (not accounting for frame time here)
                ug_offer_text.frameNStart = frameN;  // exact frame index
                
                ug_offer_text.setAutoDraw(true);
              }
              
              
              // if ug_offer_text is active this frame...
              if (ug_offer_text.status === PsychoJS.Status.STARTED) {
              }
              
              
              // *ug_options* updates
              if (t >= 0 && ug_options.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_options.tStart = t;  // (not accounting for frame time here)
                ug_options.frameNStart = frameN;  // exact frame index
                
                ug_options.setAutoDraw(true);
              }
              
              
              // if ug_options is active this frame...
              if (ug_options.status === PsychoJS.Status.STARTED) {
              }
              
              
              // *ug_resp* updates
              if (t >= 0.0 && ug_resp.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                ug_resp.tStart = t;  // (not accounting for frame time here)
                ug_resp.frameNStart = frameN;  // exact frame index
                
                // keyboard checking is just starting
                psychoJS.window.callOnFlip(function() { ug_resp.clock.reset(); });  // t=0 on next screen flip
                psychoJS.window.callOnFlip(function() { ug_resp.start(); }); // start on screen flip
                psychoJS.window.callOnFlip(function() { ug_resp.clearEvents(); });
              }
              frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (ug_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                ug_resp.tStop = t;  // not accounting for scr refresh
                ug_resp.frameNStop = frameN;  // exact frame index
                // update status
                ug_resp.status = PsychoJS.Status.FINISHED;
                frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                if (ug_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                  // keep track of stop time/frame for later
                  ug_resp.tStop = t;  // not accounting for scr refresh
                  ug_resp.frameNStop = frameN;  // exact frame index
                  // update status
                  ug_resp.status = PsychoJS.Status.FINISHED;
                  ug_resp.status = PsychoJS.Status.FINISHED;
                    }
                  
                }
                
                // if ug_resp is active this frame...
                if (ug_resp.status === PsychoJS.Status.STARTED) {
                  let theseKeys = ug_resp.getKeys({
                    keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
                    waitRelease: false
                  });
                  _ug_resp_allKeys = _ug_resp_allKeys.concat(theseKeys);
                  if (_ug_resp_allKeys.length > 0) {
                    ug_resp.keys = _ug_resp_allKeys[0].name;  // just the first key pressed
                    ug_resp.rt = _ug_resp_allKeys[0].rt;
                    ug_resp.duration = _ug_resp_allKeys[0].duration;
                    // a response ends the routine
                    continueRoutine = false;
                  }
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                ug_offerComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                  }
                });
                
                // refresh the screen if continuing
                if (continueRoutine) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
var choice;
function ug_offerRoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'ug_offer' ---
                ug_offerComponents.forEach( function(thisComponent) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                });
                psychoJS.experiment.addData('ug_offer.stopped', globalClock.getTime());
                // update the trial handler
                if (currentLoop instanceof MultiStairHandler) {
                  currentLoop.addResponse(ug_resp.corr, level);
                }
                psychoJS.experiment.addData('ug_resp.keys', ug_resp.keys);
                if (typeof ug_resp.keys !== 'undefined') {  // we had a response
                    psychoJS.experiment.addData('ug_resp.rt', ug_resp.rt);
                    psychoJS.experiment.addData('ug_resp.duration', ug_resp.duration);
                    routineTimer.reset();
                    }
                
                ug_resp.stop();
                // Run 'End Routine' code from ug_offer_code
                let choice = ug_resp.keys;
                if (Array.isArray(choice)) {
                    choice = choice.length > 0 ? choice[0] : '';
                }
                if (choice !== undefined && choice !== null && choice !== '') {
                    UG_CHOICE_KEY = choice;
                    UG_RT = ug_resp.rt;
                    if (UG_CHOICE_KEY === ACCEPT_KEY) {
                        UG_DECISION='accept';
                        UG_MISSED=0;
                    } else if (UG_CHOICE_KEY === REJECT_KEY) {
                        UG_DECISION='reject';
                        UG_MISSED=0;
                    } else {
                        UG_DECISION='miss';
                        UG_MISSED=1;
                    }
                } else {
                    UG_DECISION='miss';
                    UG_MISSED=1;
                }
                // the Routine "ug_offer" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset();
                
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
var ug_feedbackMaxDurationReached;
var ug_feedbackMaxDuration;
var ug_feedbackComponents;
function ug_feedbackRoutineBegin(snapshot) {
              return async function () {
                TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                
                //--- Prepare to start Routine 'ug_feedback' ---
                t = 0;
                frameN = -1;
                continueRoutine = true; // until we're told otherwise
                // keep track of whether this Routine was forcibly ended
                routineForceEnded = false;
                ug_feedbackClock.reset();
                routineTimer.reset();
                ug_feedbackMaxDurationReached = false;
                // update component parameters for each repeat
                fb_text.setText('');
                // Run 'Begin Routine' code from ug_feedback_code
                if(UG_DECISION==='accept')UG_FEEDBACK_TEXT='你选择了：接受\n本轮你获得 '+UG_CURRENT_SELF+' 元，对方获得 '+UG_CURRENT_OTHER+' 元';else if(UG_DECISION==='reject')UG_FEEDBACK_TEXT='你选择了：拒绝\n本轮双方均获得 0 元';else UG_FEEDBACK_TEXT='本轮未作出有效反应';fb_text.setText(UG_FEEDBACK_TEXT);if(UG_MODE==='practice')fb_partner_photo.setOpacity(0);else fb_partner_photo.setOpacity(1);
                psychoJS.experiment.addData('ug_feedback.started', globalClock.getTime());
                ug_feedbackMaxDuration = 0.8
                // keep track of which components have finished
                ug_feedbackComponents = [];
                ug_feedbackComponents.push(fb_partner_photo);
                ug_feedbackComponents.push(fb_text);
                ug_feedbackComponents.push(fb_wait);
                
                ug_feedbackComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent)
                    thisComponent.status = PsychoJS.Status.NOT_STARTED;
                   });
                return Scheduler.Event.NEXT;
              }
            }
            
            
function ug_feedbackRoutineEachFrame() {
              return async function () {
                //--- Loop for each frame of Routine 'ug_feedback' ---
                // get current time
                t = ug_feedbackClock.getTime();
                frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                // update/draw components on each frame
                // is it time to end the Routine? (based on local clock)
                if (t > ug_feedbackMaxDuration) {
                    ug_feedbackMaxDurationReached = true
                    continueRoutine = false
                }
                
                // *fb_partner_photo* updates
                if (t >= 0 && fb_partner_photo.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  fb_partner_photo.tStart = t;  // (not accounting for frame time here)
                  fb_partner_photo.frameNStart = frameN;  // exact frame index
                  
                  fb_partner_photo.setAutoDraw(true);
                }
                
                
                // if fb_partner_photo is active this frame...
                if (fb_partner_photo.status === PsychoJS.Status.STARTED) {
                }
                
                
                // *fb_text* updates
                if (t >= 0 && fb_text.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  fb_text.tStart = t;  // (not accounting for frame time here)
                  fb_text.frameNStart = frameN;  // exact frame index
                  
                  fb_text.setAutoDraw(true);
                }
                
                
                // if fb_text is active this frame...
                if (fb_text.status === PsychoJS.Status.STARTED) {
                }
                
                
                // *fb_wait* updates
                if (t >= 0 && fb_wait.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  fb_wait.tStart = t;  // (not accounting for frame time here)
                  fb_wait.frameNStart = frameN;  // exact frame index
                  
                  fb_wait.setAutoDraw(true);
                }
                
                
                // if fb_wait is active this frame...
                if (fb_wait.status === PsychoJS.Status.STARTED) {
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                ug_feedbackComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                  }
                });
                
                // refresh the screen if continuing
                if (continueRoutine) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
function ug_feedbackRoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'ug_feedback' ---
                ug_feedbackComponents.forEach( function(thisComponent) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                });
                psychoJS.experiment.addData('ug_feedback.stopped', globalClock.getTime());
                // Run 'End Routine' code from ug_feedback_code
                psychoJS.experiment.addData('Part','UG'); psychoJS.experiment.addData('Practice',(UG_MODE==='practice')?1:0); psychoJS.experiment.addData('UG_Block',(UG_TRIAL_INDEX<30)?1:2); psychoJS.experiment.addData('UG_Trial',UG_TRIAL_INDEX+1); psychoJS.experiment.addData('Condition',social_context); psychoJS.experiment.addData('CueCondition',cue_condition); psychoJS.experiment.addData('Condition_Cell',CONDITION_CELL); psychoJS.experiment.addData('Proposer','林然'); psychoJS.experiment.addData('Fairness',String(UG_CURRENT_OTHER)+':'+String(UG_CURRENT_SELF)); psychoJS.experiment.addData('Offer_Other',UG_CURRENT_OTHER); psychoJS.experiment.addData('Offer_Self',UG_CURRENT_SELF); psychoJS.experiment.addData('Decision',UG_DECISION); psychoJS.experiment.addData('Accepted',(UG_DECISION==='accept')?1:0); psychoJS.experiment.addData('Rejected',(UG_DECISION==='reject')?1:0); psychoJS.experiment.addData('Missed',UG_MISSED); psychoJS.experiment.addData('UG_RT',UG_RT); psychoJS.experiment.addData('Accept_Key',ACCEPT_KEY); psychoJS.experiment.addData('Reject_Key',REJECT_KEY); psychoJS.experiment.addData('Key_Mapping',KEY_MAP_LABEL); UG_TRIAL_INDEX+=1;
                
                // the Routine "ug_feedback" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset();
                
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
var ug_checkMaxDurationReached;
var _ug_check_key_allKeys;
var ug_check_dynamic;
var ug_checkMaxDuration;
var ug_checkComponents;
function ug_checkRoutineBegin(snapshot) {
              return async function () {
                TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                
                //--- Prepare to start Routine 'ug_check' ---
                t = 0;
                frameN = -1;
                continueRoutine = true; // until we're told otherwise
                // keep track of whether this Routine was forcibly ended
                routineForceEnded = false;
                ug_checkClock.reset();
                routineTimer.reset();
                ug_checkMaxDurationReached = false;
                // update component parameters for each repeat
                ug_check_body.setText('练习已经结束。接下来系统将为你匹配本轮互动对象，并显示匹配结果。\n\n请认真阅读匹配信息。准备好后，请按"空格键"继续。');
                ug_check_key.keys = undefined;
                ug_check_key.rt = undefined;
                _ug_check_key_allKeys = [];
                // Run 'Begin Routine' code from ug_check_code
                ug_check_dynamic='请确认你已经明白：你是接受者，需要对'+KEY_MAP_LABEL+'中的方案作出选择。\n\n明白后请按空格键开始正式任务.';
                
                psychoJS.experiment.addData('ug_check.started', globalClock.getTime());
                ug_checkMaxDuration = null
                // keep track of which components have finished
                ug_checkComponents = [];
                ug_checkComponents.push(ug_check_title);
                ug_checkComponents.push(ug_check_body);
                ug_checkComponents.push(ug_check_key);
                
                ug_checkComponents.forEach( function(thisComponent) {
                  if ('status' in thisComponent)
                    thisComponent.status = PsychoJS.Status.NOT_STARTED;
                   });
                return Scheduler.Event.NEXT;
              }
            }
            
            
function ug_checkRoutineEachFrame() {
              return async function () {
                //--- Loop for each frame of Routine 'ug_check' ---
                // get current time
                t = ug_checkClock.getTime();
                frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                // update/draw components on each frame
                
                // *ug_check_title* updates
                if (t >= 0 && ug_check_title.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  ug_check_title.tStart = t;  // (not accounting for frame time here)
                  ug_check_title.frameNStart = frameN;  // exact frame index
                  
                  ug_check_title.setAutoDraw(true);
                }
                
                
                // if ug_check_title is active this frame...
                if (ug_check_title.status === PsychoJS.Status.STARTED) {
                }
                
                
                // *ug_check_body* updates
                if (t >= 0 && ug_check_body.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  ug_check_body.tStart = t;  // (not accounting for frame time here)
                  ug_check_body.frameNStart = frameN;  // exact frame index
                  
                  ug_check_body.setAutoDraw(true);
                }
                
                
                // if ug_check_body is active this frame...
                if (ug_check_body.status === PsychoJS.Status.STARTED) {
                }
                
                
                // *ug_check_key* updates
                if (t >= 0.0 && ug_check_key.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  ug_check_key.tStart = t;  // (not accounting for frame time here)
                  ug_check_key.frameNStart = frameN;  // exact frame index
                  
                  // keyboard checking is just starting
                  psychoJS.window.callOnFlip(function() { ug_check_key.clock.reset(); });  // t=0 on next screen flip
                  psychoJS.window.callOnFlip(function() { ug_check_key.start(); }); // start on screen flip
                  psychoJS.window.callOnFlip(function() { ug_check_key.clearEvents(); });
                }
                frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                if (ug_check_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                  // keep track of stop time/frame for later
                  ug_check_key.tStop = t;  // not accounting for scr refresh
                  ug_check_key.frameNStop = frameN;  // exact frame index
                  // update status
                  ug_check_key.status = PsychoJS.Status.FINISHED;
                  frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                  if (ug_check_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                    // keep track of stop time/frame for later
                    ug_check_key.tStop = t;  // not accounting for scr refresh
                    ug_check_key.frameNStop = frameN;  // exact frame index
                    // update status
                    ug_check_key.status = PsychoJS.Status.FINISHED;
                    ug_check_key.status = PsychoJS.Status.FINISHED;
                      }
                    
                  }
                  
                  // if ug_check_key is active this frame...
                  if (ug_check_key.status === PsychoJS.Status.STARTED) {
                    let theseKeys = ug_check_key.getKeys({
                      keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                      waitRelease: false
                    });
                    _ug_check_key_allKeys = _ug_check_key_allKeys.concat(theseKeys);
                    if (_ug_check_key_allKeys.length > 0) {
                      ug_check_key.keys = _ug_check_key_allKeys[_ug_check_key_allKeys.length - 1].name;  // just the last key pressed
                      ug_check_key.rt = _ug_check_key_allKeys[_ug_check_key_allKeys.length - 1].rt;
                      ug_check_key.duration = _ug_check_key_allKeys[_ug_check_key_allKeys.length - 1].duration;
                      // a response ends the routine
                      continueRoutine = false;
                    }
                  }
                  
                  // check for quit (typically the Esc key)
                  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                  }
                  
                  // check if the Routine should terminate
                  if (!continueRoutine) {  // a component has requested a forced-end of Routine
                    routineForceEnded = true;
                    return Scheduler.Event.NEXT;
                  }
                  
                  continueRoutine = false;  // reverts to True if at least one component still running
                  ug_checkComponents.forEach( function(thisComponent) {
                    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                      continueRoutine = true;
                    }
                  });
                  
                  // refresh the screen if continuing
                  if (continueRoutine) {
                    return Scheduler.Event.FLIP_REPEAT;
                  } else {
                    return Scheduler.Event.NEXT;
                  }
                };
              }
              
              
function ug_checkRoutineEnd(snapshot) {
                return async function () {
                  //--- Ending Routine 'ug_check' ---
                  ug_checkComponents.forEach( function(thisComponent) {
                    if (typeof thisComponent.setAutoDraw === 'function') {
                      thisComponent.setAutoDraw(false);
                    }
                  });
                  psychoJS.experiment.addData('ug_check.stopped', globalClock.getTime());
                  // update the trial handler
                  if (currentLoop instanceof MultiStairHandler) {
                    currentLoop.addResponse(ug_check_key.corr, level);
                  }
                  psychoJS.experiment.addData('ug_check_key.keys', ug_check_key.keys);
                  if (typeof ug_check_key.keys !== 'undefined') {  // we had a response
                      psychoJS.experiment.addData('ug_check_key.rt', ug_check_key.rt);
                      psychoJS.experiment.addData('ug_check_key.duration', ug_check_key.duration);
                      routineTimer.reset();
                      }
                  
                  ug_check_key.stop();
                  // Run 'End Routine' code from ug_check_code
                  UG_MODE='main'; UG_TRIAL_INDEX=0;
                  
                  // the Routine "ug_check" was not non-slip safe, so reset the non-slip timer
                  routineTimer.reset();
                  
                  // Routines running outside a loop should always advance the datafile row
                  if (currentLoop === psychoJS.experiment) {
                    psychoJS.experiment.nextEntry(snapshot);
                  }
                  return Scheduler.Event.NEXT;
                }
              }
              
              
var partner_introMaxDurationReached;
var _partner_key_allKeys;
var partner_introMaxDuration;
var partner_introComponents;
function partner_introRoutineBegin(snapshot) {
                return async function () {
                  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                  
                  //--- Prepare to start Routine 'partner_intro' ---
                  t = 0;
                  frameN = -1;
                  continueRoutine = true; // until we're told otherwise
                  // keep track of whether this Routine was forcibly ended
                  routineForceEnded = false;
                  partner_introClock.reset();
                  routineTimer.reset();
                  partner_introMaxDurationReached = false;
                  // update component parameters for each repeat
                  partner_cue.setText('');
                  partner_key.keys = undefined;
                  partner_key.rt = undefined;
                  _partner_key_allKeys = [];
                  psychoJS.experiment.addData('partner_intro.started', globalClock.getTime());
                  partner_introMaxDuration = 5.2
                  // keep track of which components have finished
                  partner_introComponents = [];
                  partner_introComponents.push(partner_title);
                  partner_introComponents.push(partner_photo);
                  partner_introComponents.push(partner_name);
                  partner_introComponents.push(partner_cue);
                  partner_introComponents.push(partner_body);
                  partner_introComponents.push(partner_key);
                  
                  partner_introComponents.forEach( function(thisComponent) {
                    if ('status' in thisComponent)
                      thisComponent.status = PsychoJS.Status.NOT_STARTED;
                     });
                  return Scheduler.Event.NEXT;
                }
              }
              
              
function partner_introRoutineEachFrame() {
                return async function () {
                  //--- Loop for each frame of Routine 'partner_intro' ---
                  // get current time
                  t = partner_introClock.getTime();
                  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                  // update/draw components on each frame
                  // is it time to end the Routine? (based on local clock)
                  if (t > partner_introMaxDuration) {
                      partner_introMaxDurationReached = true
                      continueRoutine = false
                  }
                  
                  // *partner_title* updates
                  if (t >= 0 && partner_title.status === PsychoJS.Status.NOT_STARTED) {
                    // keep track of start time/frame for later
                    partner_title.tStart = t;  // (not accounting for frame time here)
                    partner_title.frameNStart = frameN;  // exact frame index
                    
                    partner_title.setAutoDraw(true);
                  }
                  
                  
                  // if partner_title is active this frame...
                  if (partner_title.status === PsychoJS.Status.STARTED) {
                  }
                  
                  
                  // *partner_photo* updates
                  if (t >= 0 && partner_photo.status === PsychoJS.Status.NOT_STARTED) {
                    // keep track of start time/frame for later
                    partner_photo.tStart = t;  // (not accounting for frame time here)
                    partner_photo.frameNStart = frameN;  // exact frame index
                    
                    partner_photo.setAutoDraw(true);
                  }
                  
                  
                  // if partner_photo is active this frame...
                  if (partner_photo.status === PsychoJS.Status.STARTED) {
                  }
                  
                  
                  // *partner_name* updates
                  if (t >= 0 && partner_name.status === PsychoJS.Status.NOT_STARTED) {
                    // keep track of start time/frame for later
                    partner_name.tStart = t;  // (not accounting for frame time here)
                    partner_name.frameNStart = frameN;  // exact frame index
                    
                    partner_name.setAutoDraw(true);
                  }
                  
                  
                  // if partner_name is active this frame...
                  if (partner_name.status === PsychoJS.Status.STARTED) {
                  }
                  
                  
                  // *partner_cue* updates
                  if (t >= 0 && partner_cue.status === PsychoJS.Status.NOT_STARTED) {
                    // keep track of start time/frame for later
                    partner_cue.tStart = t;  // (not accounting for frame time here)
                    partner_cue.frameNStart = frameN;  // exact frame index
                    
                    partner_cue.setAutoDraw(true);
                  }
                  
                  
                  // if partner_cue is active this frame...
                  if (partner_cue.status === PsychoJS.Status.STARTED) {
                  }
                  
                  
                  // *partner_body* updates
                  if (t >= 0 && partner_body.status === PsychoJS.Status.NOT_STARTED) {
                    // keep track of start time/frame for later
                    partner_body.tStart = t;  // (not accounting for frame time here)
                    partner_body.frameNStart = frameN;  // exact frame index
                    
                    partner_body.setAutoDraw(true);
                  }
                  
                  
                  // if partner_body is active this frame...
                  if (partner_body.status === PsychoJS.Status.STARTED) {
                  }
                  
                  
                  // *partner_key* updates
                  if (t >= 0.0 && partner_key.status === PsychoJS.Status.NOT_STARTED) {
                    // keep track of start time/frame for later
                    partner_key.tStart = t;  // (not accounting for frame time here)
                    partner_key.frameNStart = frameN;  // exact frame index
                    
                    // keyboard checking is just starting
                    psychoJS.window.callOnFlip(function() { partner_key.clock.reset(); });  // t=0 on next screen flip
                    psychoJS.window.callOnFlip(function() { partner_key.start(); }); // start on screen flip
                    psychoJS.window.callOnFlip(function() { partner_key.clearEvents(); });
                  }
                  frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                  if (partner_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                    // keep track of stop time/frame for later
                    partner_key.tStop = t;  // not accounting for scr refresh
                    partner_key.frameNStop = frameN;  // exact frame index
                    // update status
                    partner_key.status = PsychoJS.Status.FINISHED;
                    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                    if (partner_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                      // keep track of stop time/frame for later
                      partner_key.tStop = t;  // not accounting for scr refresh
                      partner_key.frameNStop = frameN;  // exact frame index
                      // update status
                      partner_key.status = PsychoJS.Status.FINISHED;
                      partner_key.status = PsychoJS.Status.FINISHED;
                        }
                      
                    }
                    
                    // if partner_key is active this frame...
                    if (partner_key.status === PsychoJS.Status.STARTED) {
                      let theseKeys = partner_key.getKeys({
                        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                        waitRelease: false
                      });
                      _partner_key_allKeys = _partner_key_allKeys.concat(theseKeys);
                      if (_partner_key_allKeys.length > 0) {
                        partner_key.keys = _partner_key_allKeys[_partner_key_allKeys.length - 1].name;  // just the last key pressed
                        partner_key.rt = _partner_key_allKeys[_partner_key_allKeys.length - 1].rt;
                        partner_key.duration = _partner_key_allKeys[_partner_key_allKeys.length - 1].duration;
                        // a response ends the routine
                        continueRoutine = false;
                      }
                    }
                    
                    // check for quit (typically the Esc key)
                    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                    }
                    
                    // check if the Routine should terminate
                    if (!continueRoutine) {  // a component has requested a forced-end of Routine
                      routineForceEnded = true;
                      return Scheduler.Event.NEXT;
                    }
                    
                    continueRoutine = false;  // reverts to True if at least one component still running
                    partner_introComponents.forEach( function(thisComponent) {
                      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                        continueRoutine = true;
                      }
                    });
                    
                    // refresh the screen if continuing
                    if (continueRoutine) {
                      return Scheduler.Event.FLIP_REPEAT;
                    } else {
                      return Scheduler.Event.NEXT;
                    }
                  };
                }
                
                
function partner_introRoutineEnd(snapshot) {
                  return async function () {
                    //--- Ending Routine 'partner_intro' ---
                    partner_introComponents.forEach( function(thisComponent) {
                      if (typeof thisComponent.setAutoDraw === 'function') {
                        thisComponent.setAutoDraw(false);
                      }
                    });
                    psychoJS.experiment.addData('partner_intro.stopped', globalClock.getTime());
                    // update the trial handler
                    if (currentLoop instanceof MultiStairHandler) {
                      currentLoop.addResponse(partner_key.corr, level);
                    }
                    psychoJS.experiment.addData('partner_key.keys', partner_key.keys);
                    if (typeof partner_key.keys !== 'undefined') {  // we had a response
                        psychoJS.experiment.addData('partner_key.rt', partner_key.rt);
                        psychoJS.experiment.addData('partner_key.duration', partner_key.duration);
                        routineTimer.reset();
                        }
                    
                    partner_key.stop();
                    // the Routine "partner_intro" was not non-slip safe, so reset the non-slip timer
                    routineTimer.reset();
                    
                    // Routines running outside a loop should always advance the datafile row
                    if (currentLoop === psychoJS.experiment) {
                      psychoJS.experiment.nextEntry(snapshot);
                    }
                    return Scheduler.Event.NEXT;
                  }
                }
                
                
var partner_intro_3MaxDurationReached;
var _partner_result_key_allKeys;
var partner_intro_3MaxDuration;
var partner_intro_3Components;
function partner_intro_3RoutineBegin(snapshot) {
                  return async function () {
                    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                    
                    //--- Prepare to start Routine 'partner_intro_3' ---
                    t = 0;
                    frameN = -1;
                    continueRoutine = true; // until we're told otherwise
                    // keep track of whether this Routine was forcibly ended
                    routineForceEnded = false;
                    partner_intro_3Clock.reset();
                    routineTimer.reset();
                    partner_intro_3MaxDurationReached = false;
                    // update component parameters for each repeat
                    partner_result_cue.setText('');
                    partner_result_key.keys = undefined;
                    partner_result_key.rt = undefined;
                    _partner_result_key_allKeys = [];
                    // Run 'Begin Routine' code from partner_result_code
                    if(cue_condition==='active'){partner_result_cue.setText('对方选择了你作为本轮互动对象。');}else{partner_result_cue.setText('系统为本轮随机分配了一位互动对象。');}
                    
                    psychoJS.experiment.addData('partner_intro_3.started', globalClock.getTime());
                    partner_intro_3MaxDuration = null
                    // keep track of which components have finished
                    partner_intro_3Components = [];
                    partner_intro_3Components.push(partner_result_title);
                    partner_intro_3Components.push(partner_result_photo);
                    partner_intro_3Components.push(partner_result_name);
                    partner_intro_3Components.push(partner_result_cue);
                    partner_intro_3Components.push(partner_result_body);
                    partner_intro_3Components.push(partner_result_key);
                    
                    partner_intro_3Components.forEach( function(thisComponent) {
                      if ('status' in thisComponent)
                        thisComponent.status = PsychoJS.Status.NOT_STARTED;
                       });
                    return Scheduler.Event.NEXT;
                  }
                }
                
                
function partner_intro_3RoutineEachFrame() {
                  return async function () {
                    //--- Loop for each frame of Routine 'partner_intro_3' ---
                    // get current time
                    t = partner_intro_3Clock.getTime();
                    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                    // update/draw components on each frame
                    
                    // *partner_result_title* updates
                    if (t >= 0 && partner_result_title.status === PsychoJS.Status.NOT_STARTED) {
                      // keep track of start time/frame for later
                      partner_result_title.tStart = t;  // (not accounting for frame time here)
                      partner_result_title.frameNStart = frameN;  // exact frame index
                      
                      partner_result_title.setAutoDraw(true);
                    }
                    
                    
                    // if partner_result_title is active this frame...
                    if (partner_result_title.status === PsychoJS.Status.STARTED) {
                    }
                    
                    
                    // *partner_result_photo* updates
                    if (t >= 0 && partner_result_photo.status === PsychoJS.Status.NOT_STARTED) {
                      // keep track of start time/frame for later
                      partner_result_photo.tStart = t;  // (not accounting for frame time here)
                      partner_result_photo.frameNStart = frameN;  // exact frame index
                      
                      partner_result_photo.setAutoDraw(true);
                    }
                    
                    
                    // if partner_result_photo is active this frame...
                    if (partner_result_photo.status === PsychoJS.Status.STARTED) {
                    }
                    
                    
                    // *partner_result_name* updates
                    if (t >= 0 && partner_result_name.status === PsychoJS.Status.NOT_STARTED) {
                      // keep track of start time/frame for later
                      partner_result_name.tStart = t;  // (not accounting for frame time here)
                      partner_result_name.frameNStart = frameN;  // exact frame index
                      
                      partner_result_name.setAutoDraw(true);
                    }
                    
                    
                    // if partner_result_name is active this frame...
                    if (partner_result_name.status === PsychoJS.Status.STARTED) {
                    }
                    
                    
                    // *partner_result_cue* updates
                    if (t >= 0 && partner_result_cue.status === PsychoJS.Status.NOT_STARTED) {
                      // keep track of start time/frame for later
                      partner_result_cue.tStart = t;  // (not accounting for frame time here)
                      partner_result_cue.frameNStart = frameN;  // exact frame index
                      
                      partner_result_cue.setAutoDraw(true);
                    }
                    
                    
                    // if partner_result_cue is active this frame...
                    if (partner_result_cue.status === PsychoJS.Status.STARTED) {
                    }
                    
                    
                    // *partner_result_body* updates
                    if (t >= 0 && partner_result_body.status === PsychoJS.Status.NOT_STARTED) {
                      // keep track of start time/frame for later
                      partner_result_body.tStart = t;  // (not accounting for frame time here)
                      partner_result_body.frameNStart = frameN;  // exact frame index
                      
                      partner_result_body.setAutoDraw(true);
                    }
                    
                    
                    // if partner_result_body is active this frame...
                    if (partner_result_body.status === PsychoJS.Status.STARTED) {
                    }
                    
                    
                    // *partner_result_key* updates
                    if (t >= 0.0 && partner_result_key.status === PsychoJS.Status.NOT_STARTED) {
                      // keep track of start time/frame for later
                      partner_result_key.tStart = t;  // (not accounting for frame time here)
                      partner_result_key.frameNStart = frameN;  // exact frame index
                      
                      // keyboard checking is just starting
                      psychoJS.window.callOnFlip(function() { partner_result_key.clock.reset(); });  // t=0 on next screen flip
                      psychoJS.window.callOnFlip(function() { partner_result_key.start(); }); // start on screen flip
                      psychoJS.window.callOnFlip(function() { partner_result_key.clearEvents(); });
                    }
                    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                    if (partner_result_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                      // keep track of stop time/frame for later
                      partner_result_key.tStop = t;  // not accounting for scr refresh
                      partner_result_key.frameNStop = frameN;  // exact frame index
                      // update status
                      partner_result_key.status = PsychoJS.Status.FINISHED;
                      frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                      if (partner_result_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                        // keep track of stop time/frame for later
                        partner_result_key.tStop = t;  // not accounting for scr refresh
                        partner_result_key.frameNStop = frameN;  // exact frame index
                        // update status
                        partner_result_key.status = PsychoJS.Status.FINISHED;
                        partner_result_key.status = PsychoJS.Status.FINISHED;
                          }
                        
                      }
                      
                      // if partner_result_key is active this frame...
                      if (partner_result_key.status === PsychoJS.Status.STARTED) {
                        let theseKeys = partner_result_key.getKeys({
                          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                          waitRelease: false
                        });
                        _partner_result_key_allKeys = _partner_result_key_allKeys.concat(theseKeys);
                        if (_partner_result_key_allKeys.length > 0) {
                          partner_result_key.keys = _partner_result_key_allKeys[_partner_result_key_allKeys.length - 1].name;  // just the last key pressed
                          partner_result_key.rt = _partner_result_key_allKeys[_partner_result_key_allKeys.length - 1].rt;
                          partner_result_key.duration = _partner_result_key_allKeys[_partner_result_key_allKeys.length - 1].duration;
                          // a response ends the routine
                          continueRoutine = false;
                        }
                      }
                      
                      // check for quit (typically the Esc key)
                      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                      }
                      
                      // check if the Routine should terminate
                      if (!continueRoutine) {  // a component has requested a forced-end of Routine
                        routineForceEnded = true;
                        return Scheduler.Event.NEXT;
                      }
                      
                      continueRoutine = false;  // reverts to True if at least one component still running
                      partner_intro_3Components.forEach( function(thisComponent) {
                        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                          continueRoutine = true;
                        }
                      });
                      
                      // refresh the screen if continuing
                      if (continueRoutine) {
                        return Scheduler.Event.FLIP_REPEAT;
                      } else {
                        return Scheduler.Event.NEXT;
                      }
                    };
                  }
                  
                  
function partner_intro_3RoutineEnd(snapshot) {
                    return async function () {
                      //--- Ending Routine 'partner_intro_3' ---
                      partner_intro_3Components.forEach( function(thisComponent) {
                        if (typeof thisComponent.setAutoDraw === 'function') {
                          thisComponent.setAutoDraw(false);
                        }
                      });
                      psychoJS.experiment.addData('partner_intro_3.stopped', globalClock.getTime());
                      // update the trial handler
                      if (currentLoop instanceof MultiStairHandler) {
                        currentLoop.addResponse(partner_result_key.corr, level);
                      }
                      psychoJS.experiment.addData('partner_result_key.keys', partner_result_key.keys);
                      if (typeof partner_result_key.keys !== 'undefined') {  // we had a response
                          psychoJS.experiment.addData('partner_result_key.rt', partner_result_key.rt);
                          psychoJS.experiment.addData('partner_result_key.duration', partner_result_key.duration);
                          routineTimer.reset();
                          }
                      
                      partner_result_key.stop();
                      // the Routine "partner_intro_3" was not non-slip safe, so reset the non-slip timer
                      routineTimer.reset();
                      
                      // Routines running outside a loop should always advance the datafile row
                      if (currentLoop === psychoJS.experiment) {
                        psychoJS.experiment.nextEntry(snapshot);
                      }
                      return Scheduler.Event.NEXT;
                    }
                  }
                  
                  
var partner_intro_2MaxDurationReached;
var _partner_loading_key_allKeys;
var loading_start;
var partner_intro_2MaxDuration;
var partner_intro_2Components;
function partner_intro_2RoutineBegin(snapshot) {
                    return async function () {
                      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                      
                      //--- Prepare to start Routine 'partner_intro_2' ---
                      t = 0;
                      frameN = -1;
                      continueRoutine = true; // until we're told otherwise
                      // keep track of whether this Routine was forcibly ended
                      routineForceEnded = false;
                      partner_intro_2Clock.reset();
                      routineTimer.reset();
                      partner_intro_2MaxDurationReached = false;
                      // update component parameters for each repeat
                      partner_cue_loading.setText('');
                      partner_loading_key.keys = undefined;
                      partner_loading_key.rt = undefined;
                      _partner_loading_key_allKeys = [];
                      // Run 'Begin Routine' code from partner_loading_code
                      loading_start = new util.Clock();
                      
                      psychoJS.experiment.addData('partner_intro_2.started', globalClock.getTime());
                      partner_intro_2MaxDuration = 4.5
                      // keep track of which components have finished
                      partner_intro_2Components = [];
                      partner_intro_2Components.push(partner_loading_title);
                      partner_intro_2Components.push(partner_photo_loading);
                      partner_intro_2Components.push(partner_name_loading);
                      partner_intro_2Components.push(partner_cue_loading);
                      partner_intro_2Components.push(partner_loading_body);
                      partner_intro_2Components.push(partner_loading_key);
                      
                      partner_intro_2Components.forEach( function(thisComponent) {
                        if ('status' in thisComponent)
                          thisComponent.status = PsychoJS.Status.NOT_STARTED;
                         });
                      return Scheduler.Event.NEXT;
                    }
                  }
                  
                  
function partner_intro_2RoutineEachFrame() {
                    return async function () {
                      //--- Loop for each frame of Routine 'partner_intro_2' ---
                      // get current time
                      t = partner_intro_2Clock.getTime();
                      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                      // update/draw components on each frame
                      // is it time to end the Routine? (based on local clock)
                      if (t > partner_intro_2MaxDuration) {
                          partner_intro_2MaxDurationReached = true
                          continueRoutine = false
                      }
                      
                      // *partner_loading_title* updates
                      if (t >= 0 && partner_loading_title.status === PsychoJS.Status.NOT_STARTED) {
                        // keep track of start time/frame for later
                        partner_loading_title.tStart = t;  // (not accounting for frame time here)
                        partner_loading_title.frameNStart = frameN;  // exact frame index
                        
                        partner_loading_title.setAutoDraw(true);
                      }
                      
                      
                      // if partner_loading_title is active this frame...
                      if (partner_loading_title.status === PsychoJS.Status.STARTED) {
                      }
                      
                      
                      // *partner_photo_loading* updates
                      if (t >= 0 && partner_photo_loading.status === PsychoJS.Status.NOT_STARTED) {
                        // keep track of start time/frame for later
                        partner_photo_loading.tStart = t;  // (not accounting for frame time here)
                        partner_photo_loading.frameNStart = frameN;  // exact frame index
                        
                        partner_photo_loading.setAutoDraw(true);
                      }
                      
                      
                      // if partner_photo_loading is active this frame...
                      if (partner_photo_loading.status === PsychoJS.Status.STARTED) {
                      }
                      
                      
                      // *partner_name_loading* updates
                      if (t >= 0 && partner_name_loading.status === PsychoJS.Status.NOT_STARTED) {
                        // keep track of start time/frame for later
                        partner_name_loading.tStart = t;  // (not accounting for frame time here)
                        partner_name_loading.frameNStart = frameN;  // exact frame index
                        
                        partner_name_loading.setAutoDraw(true);
                      }
                      
                      
                      // if partner_name_loading is active this frame...
                      if (partner_name_loading.status === PsychoJS.Status.STARTED) {
                      }
                      
                      
                      // *partner_cue_loading* updates
                      if (t >= 0 && partner_cue_loading.status === PsychoJS.Status.NOT_STARTED) {
                        // keep track of start time/frame for later
                        partner_cue_loading.tStart = t;  // (not accounting for frame time here)
                        partner_cue_loading.frameNStart = frameN;  // exact frame index
                        
                        partner_cue_loading.setAutoDraw(true);
                      }
                      
                      
                      // if partner_cue_loading is active this frame...
                      if (partner_cue_loading.status === PsychoJS.Status.STARTED) {
                      }
                      
                      
                      // *partner_loading_body* updates
                      if (t >= 0 && partner_loading_body.status === PsychoJS.Status.NOT_STARTED) {
                        // keep track of start time/frame for later
                        partner_loading_body.tStart = t;  // (not accounting for frame time here)
                        partner_loading_body.frameNStart = frameN;  // exact frame index
                        
                        partner_loading_body.setAutoDraw(true);
                      }
                      
                      
                      // if partner_loading_body is active this frame...
                      if (partner_loading_body.status === PsychoJS.Status.STARTED) {
                      }
                      
                      
                      // *partner_loading_key* updates
                      if (t >= 0.0 && partner_loading_key.status === PsychoJS.Status.NOT_STARTED) {
                        // keep track of start time/frame for later
                        partner_loading_key.tStart = t;  // (not accounting for frame time here)
                        partner_loading_key.frameNStart = frameN;  // exact frame index
                        
                        // keyboard checking is just starting
                        psychoJS.window.callOnFlip(function() { partner_loading_key.clock.reset(); });  // t=0 on next screen flip
                        psychoJS.window.callOnFlip(function() { partner_loading_key.start(); }); // start on screen flip
                        psychoJS.window.callOnFlip(function() { partner_loading_key.clearEvents(); });
                      }
                      frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                      if (partner_loading_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                        // keep track of stop time/frame for later
                        partner_loading_key.tStop = t;  // not accounting for scr refresh
                        partner_loading_key.frameNStop = frameN;  // exact frame index
                        // update status
                        partner_loading_key.status = PsychoJS.Status.FINISHED;
                        frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                        if (partner_loading_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                          // keep track of stop time/frame for later
                          partner_loading_key.tStop = t;  // not accounting for scr refresh
                          partner_loading_key.frameNStop = frameN;  // exact frame index
                          // update status
                          partner_loading_key.status = PsychoJS.Status.FINISHED;
                          partner_loading_key.status = PsychoJS.Status.FINISHED;
                            }
                          
                        }
                        
                        // if partner_loading_key is active this frame...
                        if (partner_loading_key.status === PsychoJS.Status.STARTED) {
                          let theseKeys = partner_loading_key.getKeys({
                            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                            waitRelease: false
                          });
                          _partner_loading_key_allKeys = _partner_loading_key_allKeys.concat(theseKeys);
                          if (_partner_loading_key_allKeys.length > 0) {
                            partner_loading_key.keys = _partner_loading_key_allKeys[_partner_loading_key_allKeys.length - 1].name;  // just the last key pressed
                            partner_loading_key.rt = _partner_loading_key_allKeys[_partner_loading_key_allKeys.length - 1].rt;
                            partner_loading_key.duration = _partner_loading_key_allKeys[_partner_loading_key_allKeys.length - 1].duration;
                          }
                        }
                        
                        // Run 'Each Frame' code from partner_loading_code
                        let elapsed=loading_start.getTime(); let dots='.'.repeat(Math.floor(elapsed/0.45)%4); partner_loading_body.setText('正在确认本轮互动安排，请稍候'+dots);
                        
                        // check for quit (typically the Esc key)
                        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                        }
                        
                        // check if the Routine should terminate
                        if (!continueRoutine) {  // a component has requested a forced-end of Routine
                          routineForceEnded = true;
                          return Scheduler.Event.NEXT;
                        }
                        
                        continueRoutine = false;  // reverts to True if at least one component still running
                        partner_intro_2Components.forEach( function(thisComponent) {
                          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                            continueRoutine = true;
                          }
                        });
                        
                        // refresh the screen if continuing
                        if (continueRoutine) {
                          return Scheduler.Event.FLIP_REPEAT;
                        } else {
                          return Scheduler.Event.NEXT;
                        }
                      };
                    }
                    
                    
function partner_intro_2RoutineEnd(snapshot) {
                      return async function () {
                        //--- Ending Routine 'partner_intro_2' ---
                        partner_intro_2Components.forEach( function(thisComponent) {
                          if (typeof thisComponent.setAutoDraw === 'function') {
                            thisComponent.setAutoDraw(false);
                          }
                        });
                        psychoJS.experiment.addData('partner_intro_2.stopped', globalClock.getTime());
                        // update the trial handler
                        if (currentLoop instanceof MultiStairHandler) {
                          currentLoop.addResponse(partner_loading_key.corr, level);
                        }
                        psychoJS.experiment.addData('partner_loading_key.keys', partner_loading_key.keys);
                        if (typeof partner_loading_key.keys !== 'undefined') {  // we had a response
                            psychoJS.experiment.addData('partner_loading_key.rt', partner_loading_key.rt);
                            psychoJS.experiment.addData('partner_loading_key.duration', partner_loading_key.duration);
                            }
                        
                        partner_loading_key.stop();
                        // the Routine "partner_intro_2" was not non-slip safe, so reset the non-slip timer
                        routineTimer.reset();
                        
                        // Routines running outside a loop should always advance the datafile row
                        if (currentLoop === psychoJS.experiment) {
                          psychoJS.experiment.nextEntry(snapshot);
                        }
                        return Scheduler.Event.NEXT;
                      }
                    }
                    
                    
var ug_fixation_block1MaxDurationReached;
var ug_fixation_block1MaxDuration;
var ug_fixation_block1Components;
function ug_fixation_block1RoutineBegin(snapshot) {
                      return async function () {
                        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                        
                        //--- Prepare to start Routine 'ug_fixation_block1' ---
                        t = 0;
                        frameN = -1;
                        continueRoutine = true; // until we're told otherwise
                        // keep track of whether this Routine was forcibly ended
                        routineForceEnded = false;
                        ug_fixation_block1Clock.reset(routineTimer.getTime());
                        routineTimer.add(0.500000);
                        ug_fixation_block1MaxDurationReached = false;
                        // update component parameters for each repeat
                        psychoJS.experiment.addData('ug_fixation_block1.started', globalClock.getTime());
                        ug_fixation_block1MaxDuration = 0.5
                        // keep track of which components have finished
                        ug_fixation_block1Components = [];
                        ug_fixation_block1Components.push(ug_fixation_block1_text);
                        
                        ug_fixation_block1Components.forEach( function(thisComponent) {
                          if ('status' in thisComponent)
                            thisComponent.status = PsychoJS.Status.NOT_STARTED;
                           });
                        return Scheduler.Event.NEXT;
                      }
                    }
                    
                    
function ug_fixation_block1RoutineEachFrame() {
                      return async function () {
                        //--- Loop for each frame of Routine 'ug_fixation_block1' ---
                        // get current time
                        t = ug_fixation_block1Clock.getTime();
                        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                        // update/draw components on each frame
                        // is it time to end the Routine? (based on local clock)
                        if (t > ug_fixation_block1MaxDuration) {
                            ug_fixation_block1MaxDurationReached = true
                            continueRoutine = false
                        }
                        
                        // *ug_fixation_block1_text* updates
                        if (t >= 0 && ug_fixation_block1_text.status === PsychoJS.Status.NOT_STARTED) {
                          // keep track of start time/frame for later
                          ug_fixation_block1_text.tStart = t;  // (not accounting for frame time here)
                          ug_fixation_block1_text.frameNStart = frameN;  // exact frame index
                          
                          ug_fixation_block1_text.setAutoDraw(true);
                        }
                        
                        
                        // if ug_fixation_block1_text is active this frame...
                        if (ug_fixation_block1_text.status === PsychoJS.Status.STARTED) {
                        }
                        
                        frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                        if (ug_fixation_block1_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                          // keep track of stop time/frame for later
                          ug_fixation_block1_text.tStop = t;  // not accounting for scr refresh
                          ug_fixation_block1_text.frameNStop = frameN;  // exact frame index
                          // update status
                          ug_fixation_block1_text.status = PsychoJS.Status.FINISHED;
                          ug_fixation_block1_text.setAutoDraw(false);
                        }
                        
                        // check for quit (typically the Esc key)
                        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                        }
                        
                        // check if the Routine should terminate
                        if (!continueRoutine) {  // a component has requested a forced-end of Routine
                          routineForceEnded = true;
                          return Scheduler.Event.NEXT;
                        }
                        
                        continueRoutine = false;  // reverts to True if at least one component still running
                        ug_fixation_block1Components.forEach( function(thisComponent) {
                          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                            continueRoutine = true;
                          }
                        });
                        
                        // refresh the screen if continuing
                        if (continueRoutine && routineTimer.getTime() > 0) {
                          return Scheduler.Event.FLIP_REPEAT;
                        } else {
                          return Scheduler.Event.NEXT;
                        }
                      };
                    }
                    
                    
function ug_fixation_block1RoutineEnd(snapshot) {
                      return async function () {
                        //--- Ending Routine 'ug_fixation_block1' ---
                        ug_fixation_block1Components.forEach( function(thisComponent) {
                          if (typeof thisComponent.setAutoDraw === 'function') {
                            thisComponent.setAutoDraw(false);
                          }
                        });
                        psychoJS.experiment.addData('ug_fixation_block1.stopped', globalClock.getTime());
                        if (routineForceEnded) {
                            routineTimer.reset();} else if (ug_fixation_block1MaxDurationReached) {
                            ug_fixation_block1Clock.add(ug_fixation_block1MaxDuration);
                        } else {
                            ug_fixation_block1Clock.add(0.500000);
                        }
                        // Routines running outside a loop should always advance the datafile row
                        if (currentLoop === psychoJS.experiment) {
                          psychoJS.experiment.nextEntry(snapshot);
                        }
                        return Scheduler.Event.NEXT;
                      }
                    }
                    
                    
var ug_breakMaxDurationReached;
var _ug_break_key_allKeys;
var ug_breakMaxDuration;
var ug_breakComponents;
function ug_breakRoutineBegin(snapshot) {
                      return async function () {
                        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                        
                        //--- Prepare to start Routine 'ug_break' ---
                        t = 0;
                        frameN = -1;
                        continueRoutine = true; // until we're told otherwise
                        // keep track of whether this Routine was forcibly ended
                        routineForceEnded = false;
                        ug_breakClock.reset();
                        routineTimer.reset();
                        ug_breakMaxDurationReached = false;
                        // update component parameters for each repeat
                        ug_break_key.keys = undefined;
                        ug_break_key.rt = undefined;
                        _ug_break_key_allKeys = [];
                        psychoJS.experiment.addData('ug_break.started', globalClock.getTime());
                        ug_breakMaxDuration = null
                        // keep track of which components have finished
                        ug_breakComponents = [];
                        ug_breakComponents.push(ug_break_title);
                        ug_breakComponents.push(ug_break_body);
                        ug_breakComponents.push(ug_break_key);
                        
                        ug_breakComponents.forEach( function(thisComponent) {
                          if ('status' in thisComponent)
                            thisComponent.status = PsychoJS.Status.NOT_STARTED;
                           });
                        return Scheduler.Event.NEXT;
                      }
                    }
                    
                    
function ug_breakRoutineEachFrame() {
                      return async function () {
                        //--- Loop for each frame of Routine 'ug_break' ---
                        // get current time
                        t = ug_breakClock.getTime();
                        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                        // update/draw components on each frame
                        
                        // *ug_break_title* updates
                        if (t >= 0 && ug_break_title.status === PsychoJS.Status.NOT_STARTED) {
                          // keep track of start time/frame for later
                          ug_break_title.tStart = t;  // (not accounting for frame time here)
                          ug_break_title.frameNStart = frameN;  // exact frame index
                          
                          ug_break_title.setAutoDraw(true);
                        }
                        
                        
                        // if ug_break_title is active this frame...
                        if (ug_break_title.status === PsychoJS.Status.STARTED) {
                        }
                        
                        
                        // *ug_break_body* updates
                        if (t >= 0 && ug_break_body.status === PsychoJS.Status.NOT_STARTED) {
                          // keep track of start time/frame for later
                          ug_break_body.tStart = t;  // (not accounting for frame time here)
                          ug_break_body.frameNStart = frameN;  // exact frame index
                          
                          ug_break_body.setAutoDraw(true);
                        }
                        
                        
                        // if ug_break_body is active this frame...
                        if (ug_break_body.status === PsychoJS.Status.STARTED) {
                        }
                        
                        
                        // *ug_break_key* updates
                        if (t >= 0.0 && ug_break_key.status === PsychoJS.Status.NOT_STARTED) {
                          // keep track of start time/frame for later
                          ug_break_key.tStart = t;  // (not accounting for frame time here)
                          ug_break_key.frameNStart = frameN;  // exact frame index
                          
                          // keyboard checking is just starting
                          psychoJS.window.callOnFlip(function() { ug_break_key.clock.reset(); });  // t=0 on next screen flip
                          psychoJS.window.callOnFlip(function() { ug_break_key.start(); }); // start on screen flip
                          psychoJS.window.callOnFlip(function() { ug_break_key.clearEvents(); });
                        }
                        frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                        if (ug_break_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                          // keep track of stop time/frame for later
                          ug_break_key.tStop = t;  // not accounting for scr refresh
                          ug_break_key.frameNStop = frameN;  // exact frame index
                          // update status
                          ug_break_key.status = PsychoJS.Status.FINISHED;
                          frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                          if (ug_break_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                            // keep track of stop time/frame for later
                            ug_break_key.tStop = t;  // not accounting for scr refresh
                            ug_break_key.frameNStop = frameN;  // exact frame index
                            // update status
                            ug_break_key.status = PsychoJS.Status.FINISHED;
                            ug_break_key.status = PsychoJS.Status.FINISHED;
                              }
                            
                          }
                          
                          // if ug_break_key is active this frame...
                          if (ug_break_key.status === PsychoJS.Status.STARTED) {
                            let theseKeys = ug_break_key.getKeys({
                              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                              waitRelease: false
                            });
                            _ug_break_key_allKeys = _ug_break_key_allKeys.concat(theseKeys);
                            if (_ug_break_key_allKeys.length > 0) {
                              ug_break_key.keys = _ug_break_key_allKeys[_ug_break_key_allKeys.length - 1].name;  // just the last key pressed
                              ug_break_key.rt = _ug_break_key_allKeys[_ug_break_key_allKeys.length - 1].rt;
                              ug_break_key.duration = _ug_break_key_allKeys[_ug_break_key_allKeys.length - 1].duration;
                              // a response ends the routine
                              continueRoutine = false;
                            }
                          }
                          
                          // check for quit (typically the Esc key)
                          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                          }
                          
                          // check if the Routine should terminate
                          if (!continueRoutine) {  // a component has requested a forced-end of Routine
                            routineForceEnded = true;
                            return Scheduler.Event.NEXT;
                          }
                          
                          continueRoutine = false;  // reverts to True if at least one component still running
                          ug_breakComponents.forEach( function(thisComponent) {
                            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                              continueRoutine = true;
                            }
                          });
                          
                          // refresh the screen if continuing
                          if (continueRoutine) {
                            return Scheduler.Event.FLIP_REPEAT;
                          } else {
                            return Scheduler.Event.NEXT;
                          }
                        };
                      }
                      
                      
function ug_breakRoutineEnd(snapshot) {
                        return async function () {
                          //--- Ending Routine 'ug_break' ---
                          ug_breakComponents.forEach( function(thisComponent) {
                            if (typeof thisComponent.setAutoDraw === 'function') {
                              thisComponent.setAutoDraw(false);
                            }
                          });
                          psychoJS.experiment.addData('ug_break.stopped', globalClock.getTime());
                          // update the trial handler
                          if (currentLoop instanceof MultiStairHandler) {
                            currentLoop.addResponse(ug_break_key.corr, level);
                          }
                          psychoJS.experiment.addData('ug_break_key.keys', ug_break_key.keys);
                          if (typeof ug_break_key.keys !== 'undefined') {  // we had a response
                              psychoJS.experiment.addData('ug_break_key.rt', ug_break_key.rt);
                              psychoJS.experiment.addData('ug_break_key.duration', ug_break_key.duration);
                              routineTimer.reset();
                              }
                          
                          ug_break_key.stop();
                          // the Routine "ug_break" was not non-slip safe, so reset the non-slip timer
                          routineTimer.reset();
                          
                          // Routines running outside a loop should always advance the datafile row
                          if (currentLoop === psychoJS.experiment) {
                            psychoJS.experiment.nextEntry(snapshot);
                          }
                          return Scheduler.Event.NEXT;
                        }
                      }
                      
                      
var ug_fixation_block2MaxDurationReached;
var ug_fixation_block2MaxDuration;
var ug_fixation_block2Components;
function ug_fixation_block2RoutineBegin(snapshot) {
                        return async function () {
                          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                          
                          //--- Prepare to start Routine 'ug_fixation_block2' ---
                          t = 0;
                          frameN = -1;
                          continueRoutine = true; // until we're told otherwise
                          // keep track of whether this Routine was forcibly ended
                          routineForceEnded = false;
                          ug_fixation_block2Clock.reset(routineTimer.getTime());
                          routineTimer.add(0.500000);
                          ug_fixation_block2MaxDurationReached = false;
                          // update component parameters for each repeat
                          psychoJS.experiment.addData('ug_fixation_block2.started', globalClock.getTime());
                          ug_fixation_block2MaxDuration = 0.5
                          // keep track of which components have finished
                          ug_fixation_block2Components = [];
                          ug_fixation_block2Components.push(ug_fixation_block2_text);
                          
                          ug_fixation_block2Components.forEach( function(thisComponent) {
                            if ('status' in thisComponent)
                              thisComponent.status = PsychoJS.Status.NOT_STARTED;
                             });
                          return Scheduler.Event.NEXT;
                        }
                      }
                      
                      
function ug_fixation_block2RoutineEachFrame() {
                        return async function () {
                          //--- Loop for each frame of Routine 'ug_fixation_block2' ---
                          // get current time
                          t = ug_fixation_block2Clock.getTime();
                          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                          // update/draw components on each frame
                          // is it time to end the Routine? (based on local clock)
                          if (t > ug_fixation_block2MaxDuration) {
                              ug_fixation_block2MaxDurationReached = true
                              continueRoutine = false
                          }
                          
                          // *ug_fixation_block2_text* updates
                          if (t >= 0 && ug_fixation_block2_text.status === PsychoJS.Status.NOT_STARTED) {
                            // keep track of start time/frame for later
                            ug_fixation_block2_text.tStart = t;  // (not accounting for frame time here)
                            ug_fixation_block2_text.frameNStart = frameN;  // exact frame index
                            
                            ug_fixation_block2_text.setAutoDraw(true);
                          }
                          
                          
                          // if ug_fixation_block2_text is active this frame...
                          if (ug_fixation_block2_text.status === PsychoJS.Status.STARTED) {
                          }
                          
                          frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                          if (ug_fixation_block2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                            // keep track of stop time/frame for later
                            ug_fixation_block2_text.tStop = t;  // not accounting for scr refresh
                            ug_fixation_block2_text.frameNStop = frameN;  // exact frame index
                            // update status
                            ug_fixation_block2_text.status = PsychoJS.Status.FINISHED;
                            ug_fixation_block2_text.setAutoDraw(false);
                          }
                          
                          // check for quit (typically the Esc key)
                          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                          }
                          
                          // check if the Routine should terminate
                          if (!continueRoutine) {  // a component has requested a forced-end of Routine
                            routineForceEnded = true;
                            return Scheduler.Event.NEXT;
                          }
                          
                          continueRoutine = false;  // reverts to True if at least one component still running
                          ug_fixation_block2Components.forEach( function(thisComponent) {
                            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                              continueRoutine = true;
                            }
                          });
                          
                          // refresh the screen if continuing
                          if (continueRoutine && routineTimer.getTime() > 0) {
                            return Scheduler.Event.FLIP_REPEAT;
                          } else {
                            return Scheduler.Event.NEXT;
                          }
                        };
                      }
                      
                      
function ug_fixation_block2RoutineEnd(snapshot) {
                        return async function () {
                          //--- Ending Routine 'ug_fixation_block2' ---
                          ug_fixation_block2Components.forEach( function(thisComponent) {
                            if (typeof thisComponent.setAutoDraw === 'function') {
                              thisComponent.setAutoDraw(false);
                            }
                          });
                          psychoJS.experiment.addData('ug_fixation_block2.stopped', globalClock.getTime());
                          if (routineForceEnded) {
                              routineTimer.reset();} else if (ug_fixation_block2MaxDurationReached) {
                              ug_fixation_block2Clock.add(ug_fixation_block2MaxDuration);
                          } else {
                              ug_fixation_block2Clock.add(0.500000);
                          }
                          // Routines running outside a loop should always advance the datafile row
                          if (currentLoop === psychoJS.experiment) {
                            psychoJS.experiment.nextEntry(snapshot);
                          }
                          return Scheduler.Event.NEXT;
                        }
                      }
                      
                      
var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
                        return async function () {
                          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                          
                          //--- Prepare to start Routine 'end' ---
                          t = 0;
                          frameN = -1;
                          continueRoutine = true; // until we're told otherwise
                          // keep track of whether this Routine was forcibly ended
                          routineForceEnded = false;
                          endClock.reset(routineTimer.getTime());
                          routineTimer.add(3.000000);
                          endMaxDurationReached = false;
                          // update component parameters for each repeat
                          psychoJS.experiment.addData('end.started', globalClock.getTime());
                          endMaxDuration = 3
                          // keep track of which components have finished
                          endComponents = [];
                          endComponents.push(end_text);
                          
                          endComponents.forEach( function(thisComponent) {
                            if ('status' in thisComponent)
                              thisComponent.status = PsychoJS.Status.NOT_STARTED;
                             });
                          return Scheduler.Event.NEXT;
                        }
                      }
                      
                      
function endRoutineEachFrame() {
                        return async function () {
                          //--- Loop for each frame of Routine 'end' ---
                          // get current time
                          t = endClock.getTime();
                          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                          // update/draw components on each frame
                          // is it time to end the Routine? (based on local clock)
                          if (t > endMaxDuration) {
                              endMaxDurationReached = true
                              continueRoutine = false
                          }
                          
                          // *end_text* updates
                          if (t >= 0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
                            // keep track of start time/frame for later
                            end_text.tStart = t;  // (not accounting for frame time here)
                            end_text.frameNStart = frameN;  // exact frame index
                            
                            end_text.setAutoDraw(true);
                          }
                          
                          
                          // if end_text is active this frame...
                          if (end_text.status === PsychoJS.Status.STARTED) {
                          }
                          
                          frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                          if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                            // keep track of stop time/frame for later
                            end_text.tStop = t;  // not accounting for scr refresh
                            end_text.frameNStop = frameN;  // exact frame index
                            // update status
                            end_text.status = PsychoJS.Status.FINISHED;
                            end_text.setAutoDraw(false);
                          }
                          
                          // check for quit (typically the Esc key)
                          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                          }
                          
                          // check if the Routine should terminate
                          if (!continueRoutine) {  // a component has requested a forced-end of Routine
                            routineForceEnded = true;
                            return Scheduler.Event.NEXT;
                          }
                          
                          continueRoutine = false;  // reverts to True if at least one component still running
                          endComponents.forEach( function(thisComponent) {
                            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                              continueRoutine = true;
                            }
                          });
                          
                          // refresh the screen if continuing
                          if (continueRoutine && routineTimer.getTime() > 0) {
                            return Scheduler.Event.FLIP_REPEAT;
                          } else {
                            return Scheduler.Event.NEXT;
                          }
                        };
                      }
                      
                      
function endRoutineEnd(snapshot) {
                        return async function () {
                          //--- Ending Routine 'end' ---
                          endComponents.forEach( function(thisComponent) {
                            if (typeof thisComponent.setAutoDraw === 'function') {
                              thisComponent.setAutoDraw(false);
                            }
                          });
                          psychoJS.experiment.addData('end.stopped', globalClock.getTime());
                          if (routineForceEnded) {
                              routineTimer.reset();} else if (endMaxDurationReached) {
                              endClock.add(endMaxDuration);
                          } else {
                              endClock.add(3.000000);
                          }
                          // Routines running outside a loop should always advance the datafile row
                          if (currentLoop === psychoJS.experiment) {
                            psychoJS.experiment.nextEntry(snapshot);
                          }
                          return Scheduler.Event.NEXT;
                        }
                      }
                      
                      
function importConditions(currentLoop) {
                        return async function () {
                          psychoJS.importAttributes(currentLoop.getCurrentTrial());
                          return Scheduler.Event.NEXT;
                          };
                      }
                      
                      
async function quitPsychoJS(message, isCompleted) {
                        // Check for and save orphaned data
                        if (psychoJS.experiment.isEntryEmpty()) {
                          psychoJS.experiment.nextEntry();
                        }
                        psychoJS.window.close();
                        psychoJS.quit({message: message, isCompleted: isCompleted});
                        
                        return Scheduler.Event.QUIT;
                      }

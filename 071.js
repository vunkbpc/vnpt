qa['examinethestructureofthecustomerstable:(choosetwo.)custnoistheprimarykey.youmustdetermineifanycustomersdetailshavebeenenteredmorethanonceusingadifferentcustno,bylistingallduplicatenames.whichtwomethodscanyouusetogettherequiredresult?']=['self-join','subquery']
qa['youmustcreateatableemployeesinwhichthevaluesinthecolumnsemployees_idandlogin_idmustbeuniqueandnotnull.whichtwosqlstatementswouldcreatetherequiredtable?(choosetwo.)']=['createtableemployees(employee_idnumber,login_idnumber,employee_namevarchar2(25),hire_datedate,constraintemp_id_pkprimarykey(employee_id,login_id));','createtableemployees(employee_idnumberconstraintemp_id_nnnotnull,login_idnumberconstraintlogin_id_nnnotnull,employee_namevarchar2(100),hire_datedate,constraintemp_num_id_ukunique(employee_id,login_id));']
qa['whichthreestatementsaretrueaboutperformingdatamanipulationlanguage(dml)operationsonaviewinanoracledatabase?']=['viewscannotbeusedtoqueryrowsfromanunderlyingtableifthetablehasaprimarykeyandtheprimarykeycolumnsarenotreferencedinthedefiningqueryoftheview.','thewithcheckclausehasnoeffectwhendeletingrowsfromtheunderlyingtablethroughtheview.','viewscannotbeusedtoaddormodifyrowsinanunderlyingtableifthedefiningqueryoftheviewcontainsaggregatingfunctions.']
qa['youneedtodisplaythedate11-oct-2007inwordsaseleventhofoctober,twothousandseven.whichsqlstatementwouldgivetherequiredresult?']=['selectto_char(to_date(11-oct-2007),fmddthspofmonth,year)fromdual']
qa['viewtheexhibitandexaminethestructureoftheemployeesandjob_historytables.examinethisquerywhichmustselecttheemployeeidsofalltheemployeeswhohaveheldthejobsa_manatanytimeduringtheiremployment.selectemployee_idfromemployeeswherejob_id=sa_man;selectemployee_idfromjob_historywherejob_id=sa_man;choosetwocorrectsetoperatorswhichwouldcausethequerytoreturnthedesiredresult.']=['union','intersect']
qa['viewtheexhibitsandexamineproductsandsalestables.exhibit1exhibit2youissuethefollowingquerytodisplayproductnamethenumberoftimestheproducthasbeensold:whathappenswhentheabovestatementisexecuted?']=['thestatementexecutessuccessfullyandproducestherequiredoutput.']
qa['youwanttodisplaythedateforthefirstmondayofthenextmonthandissuethefollowingcommand:sql>selectto_char(next_day(last_day(sysdate),mon),ddisthefirstmondayforfmmonthrrrr)fromdual;whatistheoutcome?']=['ingeneratesanerrorbecauseto_charshouldbereplacedwithto_date.']
qa['viewtheexhibitandexaminethedatainempanddepttables.inthedepttable,deptnoistheprimarykey.intheemptable,empnoistheprimarykeyanddeptnoistheforeignkeyreferencingthedeptnocolumninthedepttable.whatwouldbetheoutcomeofthefollowingstatementsexecutedinthegivensequence?droptableemp;flashbacktableemptobeforedrop;insertintoempvalues(2,scott,10);insertintoempvalues(3,king,55);']=['onlythefirstinsertstatementwouldsucceedbecauseallconstraintsexcepttheprimarykeyconstraintareautomaticallyretrievedafteratableisflashedback.']
qa['whichstatementistrueregardingtheintersectoperator?']=['reversingtheorderoftheintersectedtablesalterstheresult.']
qa['whichthreestatementsindicatetheendofatransaction?(choosethree.)']=['afteracreatestatementisissued','afteraselectstatementisissued','afteracommitisissued']
qa['youneedtoallowuserandrewto:1.modifythetitleandaddresscolumnsofyourcustomerstable.2.grantthatpermissiontootherusers.whichstatementwilldothis?']=['grantupdate(title,address)oncustomerstoandrewwithgrantoption;']
qa['whichthreearetrueaboutmultitableinsertstatements?']=['theycanbeperformedonexternaltablesusingsql*loader.','theycaninserteachcomputedrowintomorethanonetable.','theycanbeperformedonrelationaltables.']
qa['examinethestructureoftheprogramstable:whichtwosqlstatementswouldexecutesuccessfully?']=['selectnvl(months_between(start_date,end_date),ongoing)fromprograms;','selectto_date(nvl(sysdate-end_date,sysdate))fromprograms;']
qa['viewtheexhibitandexaminethestructureoftheproductstable.youmustdisplaythecategorywiththemaximumnumberofitems.youissuethisquery:whatistheresult?']=['itexecutessuccessfullyandgivesthecorrectoutput.']
qa['whichstatementistrueabouttheoraclesql,deleteandtruncatestatements?']=['deletebutnottruncatestatementcanbeusedtoremovedatafromselectivecolumnsandrowsofatable.']
qa['theorderstablehasaprimarykeyconstraintontheorder_idcolumn.theorder_itemstablehasaforeignkeyconstraintontheorder_idcolumn,referencingtheprimarykeyoftheorderstable.theconstraintisdefinedwithondeletecascade.therearerowsintheorderstablewithanorder_totaloflessthan1000.whichthreedeletestatementsexecutesuccessfully?']=['deleteorder_idfromorderswhereorder_total<1000;','delete*fromorderswhereorder_total<1000;']
qa['whichtaskcanbeperformedbyusingasingledatamanipulationlanguage(dml)statement?']=['removingalldataonlyfromasinglecolumnonwhichaprimarykeyconstraintisdefined']
qa['whichthreeactionscanyouperformonlywithsystemprivileges?']=['queryanytableinadatabase.','usethewithgrantoptionclause.','logintoadatabase.']
qa['examinethedescriptionofthesalestable:thesalestablehas55,000rows.examinethisstatement:whichtwostatementsaretrue?']=['sales1hasnotnullconstraintsonanyselectedcolumnswhichhadthoseconstraintsinthesalestable.','sales1hasprimarykeyanduniqueconstraintsonanyselectedcolumnswhichhadthoseconstraintsinthesalestable.']
qa['anon-correlatedsubquerycanbedefinedas__________.(choosethebestanswer.)']=['asetofoneormoresequentialqueriesinwhichgenerallytheresultoftheinnerqueryisusedasthesearchvalueintheouterquery.']
qa['viewtheexhibitandexaminethestructureofordersandcustomerstables.(choosethebestanswer.)youexecutedthisupdatestatement:whichstatementistrueregardingtheexecution?']=['itwouldnotexecutebecauseaselectstatementcannotbeusedinplaceofatablename.']
qa['viewtheexhibitandexaminethedetailsofproduct_informationtable.youhavetherequirementtodisplayproduct_namefromthetablewherethecategory_idcolumnhasvalues12or13,andthesupplier_idcolumnhasthevalue102088.youexecutedthefollowingsqlstatement:selectproduct_namefromproduct_informationwhere(category_id=12andcategory_id=13)andsupplier_id=102088;whichstatementistrueregardingtheexecutionofthequery?']=['itwouldexecuteandtheoutputwoulddisplaythedesiredresult.']
qa['whichthreestatementsaretrueregardingthedatatypes?(choosethree.)']=['thevalueforachardatatypecolumnisblank-paddedtothemaximumdefinedcolumnwidth.','onlyonelongcolumncanbeusedpertable.','theminimumcolumnwidththatcanbespecifiedforavarchar2datatypecolumnisone.']
qa['theemployeestablecontainscolumnsemp_idofdatatypenumberandhire_dateofdatatypedate.youwanttodisplaythedateofthefirstmondayafterthecompletionofsixmonthsincehiring.thenls_territoryparameterissettoamericainthesessionand,therefore,sundayisthefirstdayoftheweek.whichquerycanbeused?']=['selectemp_id,next_day(add_months(hire_date,6),monday)fromemployees;']
qa['evaluatethefollowingcreatetablecommands:create_tableorders(ord_nonumber(2)constraintord_pkprimarykey,ord_datedate,cust_idnumber(4));createtableord_items(ord_nonumber(2),item_nonumber(3),qtynumber(3)check(qtybetweeen100and200),expiry_datedatecheck(expiry_date>sysdate),constraintit_pkprimarykey(ord_no,item_no),constaraintord_fkforeignkey(ord_no)referencesorders(ord_no));whywouldtheord_itemstablenotgetcreated?']=['sysdatecannotbeusedwiththecheckconstraint.']
qa['whichstatementistrueabouttruncateanddelete?']=['forlargetablestruncateisfasterthandelete.']
qa['examinethestructureofthebooks_transactionstable:examinethesqlstatement:whichstatementistrueabouttheoutcome?']=['itdisplaysdetailsforonlymembersa101anda102whohaveborrowedbeforetodaywithrmtransaction_type.']
qa['evaluatethefollowingsqlcommands:thecommandtocreateatablefails.identifythereasonforthesqlstatementfailure.']=['youcannotusethenextvalsequencevalueasadefaultvalueforacolumn.']
qa['seetheexhibitandexaminethestructureofthepromotionstable:usingthepromotionstable,youneedtofindouttheaveragecostforallpromosintherange$0-2000and$2000-5000incategorya.youissuethefollowingsqlstatements:whatwouldbetheoutcome?']=['itexecutessuccessfullyandgivestherequiredresult.']
qa['examinethestructureproposedforthetransactionstable:whichtwostatementsaretrueregardingthestorageofdataintheabovetablestructure?(choosetwo.)']=['thecust_credit_valuecolumnwouldallowstorageofpositiveandnegativeintegers.','thetrans_validitycolumnwouldallowstorageofatimeintervalindays,hours,minutes,andseconds.']
qa['youhavetheprivilegestocreateanytypeofsynonym.whichstatementwillcreateasynonymcalledempforthehcm.employee_recordstablethatisaccessibletoallusers?']=['createpublicsynonimempforhcm.employee_records;']
qa['whichtwostatementaretrueregardingtablejoinsavailableintheoracledatabaseserver?(choosetwo.)']=['youcanusetheonclausetospecifymultipleconditionswhilejoiningtables.','youcanusethejoinclausetojoinonlytwotables.']
qa['viewtheexhibitandexaminethestructureinthedepartmentstables.(choosetwo.)examinethissqlstatement:selectdepartment_iddept_id,department_name,bfromdepartmentswheredepartments_id=90unionselectdepartment_id,department_namedept_name,afromdepartmentswheredepartment_id=10whichtwoorderbyclausescanbeusedtosorttheoutput?']=['orderbydept_id;','orderbyb;']
qa['styouneedtocalculatethenumberofdaysfrom1january2019untiltoday.datesarestoredinthedefaultformatofdd-mon-rr.whichtwoqueriesgivetherequiredoutput?']=['selectto_char(sysdate,dd-mon-yyyy)01-jan-2019fromdual;']
qa['whichtwostatementsaretrueaboutoraclesynonyms?']=['anyusercancreateapublicsynonym.','allprivatesynonymnamesmustbeuniqueinthedatabase.']
qa['viewtheexhibitandexaminethestructureofordersandorder_itemstables.order_idistheprimarykeyintheorderstable.itisalsotheforeignkeyintheorder_itemstablewhereinitiscreatedwiththeondeletecascadeoption.whichdeletestatementwouldexecutesuccessfully?']=['deleteorder_idfromorderswhereorder_total<1000;']
qa['whichtwostatementsaretrueaboutsubstitutionvariables?(choosetwo.)']=['asubstitutionvariablecanbeusedonlyinaselectstatement','asubstitutionvariableusedtopromptforacolumnnamemustbeenclosedinasinglequotationmarks']
qa['whichthreestatementsaretrueaboutmultiplerowsubqueries?']=['theycanreturnmultiplecolumns.','theycancontaingroupbyclauses.','theycancontainhavingclauses.']
qa['whichthreestatementsaretrueaboutviewsinanoracledatabase?']=['viewshavenosegment.','viewscanjointablesonlyiftheybelongtothesameschema.','aviewcanbecreatedthatreferstoanon-existenttableinitsdefiningquery.']
qa['whichtwoaretrueaboutthedatadictionary?']=['thesysuserownsallbasetablesanduser-accessibleviewsinthedatadictionary.','basetablesinthedatadictionaryhavetheprefixdba_.']

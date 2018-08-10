import { get, post, APIURL } from './config'

export const apiUploadUrl = 'http://192.168.100.19/'

export const uploadUrl = APIURL() + '/file/imgupload'

/**
 * 获取登录验证码
 * @param  {Object}
 */
export const getLoginCode = data => get('validatecode/getcode', data, 'blob')

/**
 *  登录
 */
export const login = data => post('login', data)

export const loginOut = data => post('out', data)

/**
 *  菜单权限
 */
// export const getMenu = data => post('index', data)

/**
 * 注销
 */
export const logout = data => post('login/logout', data)

/**
 * 用户管理
 */
export const getUserInfo = data => post('index', data)

export const getUserList = data => post('user/getlist', data)

export const addUser = data => post('user/save', data)

export const modifyUser = data => post('user/modify', data)

export const removeUser = data => post('user/remove', data)

// 账户归属
export const getAccountOwner = data => post('user/getAccountOwnershipTree', data)

/**
 * 功能管理
 */
export const getFuncTree = data => post('function/getlisttree', data)

export const getFuncList = data => post('function/getlist', data)

export const addFunc = data => post('function/save', data)

export const modifyFunc = data => post('function/modify', data)

export const removeFunc = data => post('function/remove', data)

export const modifyFuncOrder = data => post('function/modifyOrderIds', data)

/**
 * 角色管理
 */
export const getRoleList = data => post('authrole/getlist', data)

export const getRoleUserList = data => post('user/role/getlist', data)

export const getRoleFuncList = data => post('authrole/getfunctions', data)

export const modifyRole = data => post('authrole/modify', data)

export const addRole = data => post('authrole/save', data)

export const updateRoleFunc = data => post('authrole/setfunction', data)

export const updateRoleUser = data => post('user/addusertorole', data)

export const removeRole = data => post('authrole/remove', data)

/**
 * 字典管理
 */
export const getDictList = data => get('dict/getlist', data)

export const addDict = data => post('dict/save', data)

export const modifyDict = data => post('dict/modify', data)

export const removeDict = data => post('dict/remove', data)

/**
 * 文章分类
 */
export const getArtClassify = data => post('classify/getlisttree', data)

export const addArtClassify = data => post('classify/save', data)

export const modifyArtClassify = data => post('classify/modify', data)

export const removeArtClassify = data => post('classify/remove', data)

export const sortArtClassify = data => post('classify/modifysortnum', data)

/**
 * 文章管理
 */
export const getArtList = data => post('insuranceArticle/getlist', data)

export const getArtById = data => post('insuranceArticle/get', data)

export const addArt = data => post('insuranceArticle/save', data)
export const artStick = data => post('insuranceArticle/stick', data)

export const modifyArt = data => post('insuranceArticle/modify', data)

export const updateArt = data => post('insuranceArticle/update', data)

export const removeArt = data => post('insuranceArticle/remove', data)
export const deleteArt = data => post('insuranceArticle/delete', data)

/**
 * 保险管理
 */
export const getInsuranceList = data => post('insurance/getlist', data)

export const getInsuranceById = data => post('insurance/get', data)

export const removeInsurance = data => post('insurance/remove', data)

export const addInsurance = data => post('insurance/save', data)

export const modifyInsurance = data => post('insurance/modify', data)
// 消费类型radio
export const getDictRadioList = data => post('dict/radio/getlist', data)
// 保险经理人
export const getManagerList = data => post('insuranceManagerInfo/guarantee/getlist', data)

/**
 * 保险险种管理
 */
export const getInsuranceType = data => post('insuranceSpecies/getlist', data)

export const getInsuranceTypeById = data => post('insuranceSpecies/get', data)

export const addInsuranceType = data => post('insuranceSpecies/save', data)

export const modifyInsuranceType = data => post('insuranceSpecies/modify', data)

export const removeInsuranceType = data => post('insuranceSpecies/remove', data)

export const sortInsuranceType = data => post('insuranceSpecies/sort', data)

/**
 * 保险公司管理
 */
export const getInsuranceComp = data => post('insuranceComp/getlist', data)

export const getInsuranceCompById = data => post('insuranceComp/get', data)

export const addInsuranceComp = data => post('insuranceComp/save', data)

export const modifyInsuranceComp = data => post('insuranceComp/modify', data)

export const removeInsuranceComp = data => post('insuranceComp/remove', data)

export const sortInsuranceComp = data => post('insuranceComp/sort', data)

/**
 * 车险产品
 */
export const getInsuranceCar = data => post('insurance/car/getlist', data)

export const getInsuranceCarById = data => post('insurance/car/get', data)

export const getInsuranceCarBase = data => post('insurance/car/base/getlist', data)

export const addInsuranceCar = data => post('insurance/car/save', data)

export const modifyInsuranceCar = data => post('insurance/car/modify', data)

export const removeInsuranceCar = data => post('insurance/car/remove', data)

export const sortInsuranceCar = data => post('insurance/car/sort', data)

/**
 * 轮播图管理
 */
export const getSlideImg = data => post('slideshow/getlist', data)

export const addSlideImg = data => post('slideshow/save', data)

export const modifySlideImg = data => post('slideshow/modify', data)

export const removeSlideImg = data => post('slideshow/remove', data)

/**
 *  会员管理
 */
export const getMemberList = data => post('brokerinfo/getlist', data)

export const getMemberById = data => post('brokerinfo/get', data)

export const modifyMember = data => post('brokerinfo/modify', data)

/**
 * 会员等级
 */
export const getMemberLevel = data => post('memberLevel/getlist', data)

export const getMemberLevelById = data => post('memberLevel/get', data)

export const addMemberLevel = data => post('memberLevel/save', data)

export const modifyMemberLevel = data => post('memberLevel/modify', data)

export const removeMemberLevel = data => post('memberLevel/remove', data)

export const sortMemberLevel = data => post('memberLevel/sort', data)

/**
 * 公告管理
 */
export const getNoticeList = data => post('notice/getlist', data)

export const getNoticeById = data => post('notice/get', data)

export const addNotice = data => post('notice/save', data)

export const modifyNotice = data => post('notice/modify', data)

export const removeNotice = data => post('notice/remove', data)

/**
 * 意见反馈
 */
export const getFeedback = data => post('insuranceBrokerFeedback/getlist', data)

export const getFeedBackById = data => post('insuranceBrokerFeedback/get', data)

/**
 * 订单管理
 */
export const getInsuranceOrderList = data => get('insuranceOrder/insured/getlist', data)

export const getInsuranceCarOrderList = data => get('insuranceOrder/carinsured/getlist', data)
// 确认打款
export const updateInsuranceOrderEnsure = data => post('insuranceOrder/modify/ensure', data)
// 确认发放
export const updateInsuranceOrderReview = data => post('insuranceOrder/modify/review', data)
// 确认报价
export const updateInsuranceOrderPrice = data => post('insuranceOrder/modify/price', data)

export const updateInsuranceOrderClose = data => post('insuranceOrder/modify/close', data)

export const getInsuranceOrderById = data => post('insuranceOrder/get', data)

export const getInsuranceRecycle = data => get('insuranceOrder/recycled/getlist', data)

export const insuranceOrderRevent = data => post('insuranceOrder/recycled/revert', data)

export const removeOrder = data => post('insuranceOrder/remove', data)
// 后台订单
export const getSystemOrder = data => post('backInsuranceOrder/getlist', data)

/**
 * 运营中心
 */
export const insuranceOperationList = data => get('insuranceOperationInfo/getlist', data)
export const insuranceOperationRemove = data => post('insuranceOperationInfo/remove', data)
export const insuranceOperationSave = data => post('insuranceOperationInfo/save', data)
export const insuranceOperationModify = data => post('insuranceOperationInfo/modify', data)

/**
 * 代理商
 */
export const insuranceAgentList = data => get('insuranceAgentInfo/getlist', data)
export const insuranceAgentRemove = data => post('insuranceAgentInfo/remove', data)
export const insuranceAgentSave = data => post('insuranceAgentInfo/save', data)
export const insuranceAgentModify = data => post('insuranceAgentInfo/modify', data)

/**
 * 保险经理人
 */
export const insuranceManagerList = data => get('insuranceManagerInfo/getlist', data)
export const insuranceManagerRemove = data => post('insuranceManagerInfo/remove', data)
export const insuranceManagerSave = data => post('insuranceManagerInfo/save', data)
export const insuranceManagerModify = data => post('insuranceManagerInfo/modify', data)
/**
 * 经纪人分润模板
 */
export const insuranceOrderRateList = data => post('insuranceOrderRate/getlist', data)
export const insuranceOrderRateRemove = data => post('insuranceOrderRate/remove', data)
export const insuranceOrderRateSave = data => post('insuranceOrderRate/save', data)
export const insuranceOrderRateModify = data => post('insuranceOrderRate/modify', data)

/**
 * 经纪人分润明细
 */
export const insuranceAllRuleUpdateList = data => post('insuranceAllRuleUpdate/getlist', data)
export const insuranceAllRuleUpdateRemove = data => post('insuranceAllRuleUpdate/remove', data)
export const insuranceAllRuleUpdateSave = data => post('insuranceAllRuleUpdate/save', data)
export const insuranceAllRuleUpdateModify = data => post('insuranceAllRuleUpdate/modify', data)

/**
 * 字典组件
 */
export const getDictCom = data => get('dict/radio/' + data)

/**
 * 提现申请
 */
export const getInsuranceWithdrawal = data => post('insuranceWithdrawal/getlist', data)

export const getInsuranceWithdrawalDetails = data => post('insuranceWithdrawal/get', data)
// 提现审核
export const insuranceWithdrawalAudit = data => post('insuranceWithdrawal/audit', data)
// 提现打款
export const insuranceWithdrawalRemit = data => post('insuranceWithdrawal/remit', data)
// 查询企业提现账户
export const getInsuranceCompanyAccount = data => post('insuranceCompanyAccount/getbycompany', data)
// 新增业提现账户
export const addInsuranceCompanyAccount = data => post('insuranceCompanyAccount/save', data)
// 修改企业提现账户
export const modifyInsuranceCompanyAccount = data => post('insuranceCompanyAccount/modify', data)
// 新增企业提现申请
export const addInsuranceWithdrawal = data => post('insuranceCompanyWithdrawal/save', data)

/**
 * 获取在线客服配置
 */
export const getKefuConfig = data => post('tlssig/getusersig', data)

/**
 * 企业提现申请
 */
export const getInsuranceWithdrawalComp = data => post('insuranceCompanyWithdrawal/getlist', data)

export const getInsuranceWithdrawalCompById = data => post('insuranceCompanyWithdrawal/get', data)

export const getInsuranceWithdrawalCompDetails = data => post('insuranceCompanyWithdrawal/get', data)
// 提现审核，打款
export const insuranceWithdrawalCompOperate = data => post('insuranceCompanyWithdrawal/modify', data)

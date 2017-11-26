import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * 设置别名的参数
 */
export interface AliasOptions {
    sequence: number;
    alias: string;
}
/**
 * IOS Action
 *
 * @export
 * @interface Action
 */
export interface Action {
    /**
     * 必填，标题
     *
     * @type {string}
     * @memberof Action
     */
    title: string;
    /**
     * 必填，标识，获取 APNS 推送内容的时候可以通过该字段判断点击的是推送条目还是某项操作。
     *
     * @type {string}
     * @memberof Action
     */
    identifier: string;
    /**
     * 必填 取值如下：
  UNNotificationActionOptionNone = 0
  UNNotificationActionOptionAuthenticationRequired = (1 << 0), Whether this action should require unlocking before being performed.
  UNNotificationActionOptionDestructive = (1 << 1), Whether this action should be indicated as destructive.
  UNNotificationActionOptionForeground = (1 << 2), Whether this action should cause the application to launch in the foreground.
     *
     * @type {number}
     * @memberof Action
     */
    option: number;
    /**
     * 可选，值为 "textInput" 时，会创建一个可快速回复的操作
     *
     * @type {string}
     * @memberof Action
     */
    type: string;
    /**
     * 可选，快捷回复的回复按键标题
     *
     * @type {string}
     * @memberof Action
     */
    textInputButtonTitle: string;
    /**
     * 可选，快捷回复输入框占位符
     *
     * @type {string}
     * @memberof Action
     */
    textInputPlaceholder: string;
}
/**
 * 周一到周日
 * @export
 * @enum {number}
 */
export declare enum Days {
    Mon = 0,
    Tue = 1,
    Wed = 2,
    Thu = 3,
    Fri = 4,
    Sat = 5,
    Sun = 6,
}
/**
 * 24小时
 * @export
 * @enum {number}
 */
export declare enum Hours {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12,
    Thirteen = 13,
    Fourteen = 14,
    Fifteen = 15,
    Sixteen = 16,
    Seventeen = 17,
    Eighteen = 18,
    Nineteen = 19,
    Twenty = 20,
    TwentyOne = 21,
    TwentyTwo = 22,
    TwentyThree = 23,
}
/**
 * @name J Push
 * @description
 * 极光推送ionic3封装
 *
 * @usage
 * ```typescript
 * import { JPush } from '@ionic-native/j-push';
 *
 *
 * constructor(private jPush: JPush) { }
 *
 * ...
 *
 *
 * this.jPush.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class JPush extends IonicNativePlugin {
    /**
     * 调用此 API，用来开启 JPush SDK 提供的推送服务。
     */
    init(): void;
    /**
     * 停止推送服务
     */
    stopPush(): void;
    /**
     * 恢复推送服务
     */
    resumePush(): void;
    /**
     * 用来检查 Push Service 是否已经被停止(Android)
     * 平台检查推送服务是否注册(IOS)
     * @returns {Promise<number>}
     */
    isPushStopped(): Promise<number>;
    /**
     * 用于开启 Debug 模式，显示更多的日志信息
     * @param isDebug 是否开启调试模式
     */
    setDebugMode(isDebug: boolean): void;
    /**
     * 获取RegistrationID
     * @returns {Promise<any>}
     */
    getRegistrationID(): Promise<any>;
    /**
     * 设置别名
     *
     * @param {AliasOptions} alias
     * @returns {Promise<AliasOptions>}
     * @memberof JPush
     */
    setAlias(alias: AliasOptions): Promise<AliasOptions>;
    /**
     * 删除别名
     * @param {{ sequence: number }} alias
     * @returns {Promise<{ sequence: number }>}
     * @memberof JPush
     */
    deleteAlias(alias: {
        sequence: number;
    }): Promise<{
        sequence: number;
    }>;
    /**
     * 查询别名
     *
     * @param {{ sequence: number }} alias
     * @returns {Promise<AliasOptions>}
     * @memberof JPush
     */
    getAlias(alias: {
        sequence: number;
    }): Promise<AliasOptions>;
    /**
     * 设置标签
     *
     * @param {{ sequence: number, tags: string[] }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    setTags(params: {
        sequence: number;
        tags: string[];
    }): Promise<{
        sequence: number;
        tags: string[];
    }>;
    /**
     * 添加标签
     *
     * @param {{ sequence: number, tags: string[] }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    addTags(params: {
        sequence: number;
        tags: string[];
    }): Promise<{
        sequence: number;
        tags: string[];
    }>;
    /**
     * 删除指定标签
     *
     * @param {{ sequence: number, tags: string[] }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    deleteTags(params: {
        sequence: number;
        tags: string[];
    }): Promise<{
        sequence: number;
        tags: string[];
    }>;
    /**
     * 删除所有标签
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<{ sequence: number }>}
     * @memberof JPush
     */
    cleanTags(params: {
        sequence: number;
    }): Promise<{
        sequence: number;
    }>;
    /**
     * 获取当前绑定的所有的标签
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    getAllTags(params: {
        sequence: number;
    }): Promise<{
        sequence: number;
        tags: string[];
    }>;
    /**
     * 查询指定tag与当前用户绑定的状态
     *
     * @param {{ sequence: number, tag: string }} params
     * @returns {Promise<{ sequence: number }>}
     * @memberof JPush
     */
    checkTagBindState(params: {
        sequence: number;
        tag: string;
    }): Promise<{
        sequence: number;
    }>;
    /**
     * 判断系统设置中是否允许当前应用推送
     *
     * @returns {Promise<number>}
     * @memberof JPush
     */
    getUserNotificationSettings(): Promise<number>;
    /**
     * 点击通知进入应用程序时触发
     * 获取推送内容后，通过获取到的 __JPUSHNotificationKey 字段（本地通知 设置的 notificationID）来判断是本地通知，并处理
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    onOpenNotification(): Observable<any>;
    /**
     * 收到通知时触发
     * 获取推送内容后，通过获取到的 __JPUSHNotificationKey 字段（本地通知 设置的 notificationID）来判断是本地通知，并处理
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    onReceiveNotification(): Observable<any>;
    /**
     * 收到自定义消息时触发，推荐使用事件的方式传递
     */
    onReceiveMessage(): Observable<any>;
    /**
     * 集成了 JPush SDK 的应用程序在第一次成功注册到 JPush 服务器时，JPush 服务器会给客户端返回一个唯一的该设备的标识 - Registration ID。 此时就会触发这个事件（注意只有第一次会触发该事件，之后如果想要取到 Registration Id，可以直接调用 getRegistrationID 方法）
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    onReceiveRegistrationId(): Observable<any>;
    /**
     * 清除所有 JPush 展现的通知
     * @memberof JPush
     */
    clearAllNotification(): void;
    /**
     * 根据通知 Id 清除通知（包括本地通知
     * @param {number} notificationId
     * @memberof JPush
     */
    clearNotificationById(notificationId: number): void;
    setPushTime(days: Days, startHour: Hours, endHour: Hours): void;
    /**
     * 设置通知静默时间
     * @param {Hours} startHour
     * @param {number} startMinute
     * @param {Hours} endHour
     * @param {number} endMinute
     * @memberof JPush
     */
    setSilenceTime(startHour: Hours, startMinute: number, endHour: Hours, endMinute: number): void;
    /**
     * Basic 用于定制 Android Notification 里的 defaults / flags / icon 等基础样式（行为）
     * @memberof JPush
     */
    setBasicPushNotificationBuilder(): void;
    /**
     * 继承 Basic 进一步让开发者定制 Notification Layout
     * @memberof JPush
     */
    setCustomPushNotificationBuilder(): void;
    /**
     * 设置保留最近通知条数
     * @param {number} num 保留的条数
     * @memberof JPush
     */
    addLocalNotification(builderId: number, content: string, title: string, notificationID: number, broadcastTime: number, extras: any): void;
    /**
     * 移除一个本地通知
     *
     * @param {number} notificationID 通知的id
     * @memberof JPush
     */
    removeLocalNotification(notificationID: number): void;
    /**
     * 清除所有的本地通知,同时适用于 iOS
     * @memberof JPush
     */
    clearLocalNotifications(): void;
    /**
    * 注册苹果通知服务，并启动 JPush SDK
    * @memberof JPush
    */
    startJPushSDK(): void;
    /**
     * 应用程序处于后台时收到推送会触发该事件，可以在后台执行一段代码
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    onBackgroundNotification(): Observable<any>;
    /**
     * 上传 badge 值至 JPush 服务器，由 JPush 后台帮助管理每个用户所对应的推送 badge 值，简化了设置推送 badge 的操作
     * 本接口不会直接改变应用本地的角标值. 要修改本地 badge 值，使用 setApplicationIconBadgeNumber
     *
     * @param {number} value
     * @memberof JPush
     */
    setBadge(value: number): void;
    /**
     * resetBadge 相当于 setBadge(0)
     *
     * @memberof JPush
     */
    resetBadge(): void;
    /**
     * 本接口直接改变应用本地的角标值，设置 iOS 的角标，当设置 badge ＝ 0 时为清除角标
     *
     * @memberof JPush
     */
    setApplicationIconBadgeNumber(): void;
    /**
     * 获取 iOS 的角标值
     *
     * @returns {Promise<number>}
     * @memberof JPush
     */
    getApplicationIconBadgeNumber(): Promise<number>;
    /**
     * 注册本地通知，最多支持64个
     *
     * @param {(number | string)} delayTime: 本地推送延迟多长时间后显示，数值类型或纯数字的字符型均可。
     * @param {string} content: 本地推送需要显示的内容。
     * @param {number} badge: 角标的数字。如果不需要改变角标传-1。数值类型或纯数字的字符型均可。
     * @param {string} notificationID: 本地推送标识符,字符串。
     * @param {*} extras: 自定义参数，可以用来标识推送和增加附加信息。字典类型。
     * @memberof JPush
     */
    addLocalNotificationForIOS(delayTime: number | string, content: string, badge: number, notificationID: string, extras: any): void;
    /**
     * 删除本地推送定义
     *
     * @param {stinrg} notificationID
     * @memberof JPush
     */
    deleteLocalNotificationWithIdentifierKeyInIOS(notificationID: string): void;
    /**
     * 清除所有本地推送对象
     *
     * @memberof JPush
     */
    clearAllLocalNotifications(): void;
    /**
     * iOS 10 before 收到本地通知
     * 「App 在后台时点击通知横幅」或「App 在前台时收到」均会触发该事件。
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    onReceiveLocalNotification(): Observable<any>;
    /**
     * 用于区分 iOS, Android 平台，以便不同设置
     *
     * @memberof JPush
     */
    isPlatformIOS(): void;
    /**
     * 添加通知操作，是展示在锁屏推送侧滑界面、通知中心推送侧滑界面、推送横幅下拉界面（iPhone 6s before）的按钮操作。
  一条推送最多只能展示 2 个操作（在锁屏推送侧滑界面、通知中心推送侧滑界面会额外自动展示一个「清除」操作），超出的操作不会被展示。
  建议在 App 初次启动时立刻调用本 API。
     *
     * @param {Action[]} actions 包含最多 2 个字典的数组，多余的字典无效
     * @param {string} categoryId category id，用于标记这一组操作，推送时的 payload 添加 category 字段（在极光控制台 - 发送通知 - 可选设置 - category ），即可展示相应的这一组操作。例：id1 对应 [操作A，操作B]，id2 对应 [操作A, 操作C]。
     * @memberof JPush
     */
    addDismissActions(actions: Action[], categoryId: string): void;
    /**
     * 轻触推送横幅，展示的更多操作。
  iPhone 6s 及以后设备且 iOS 9 以后系统支持 3d-touch。
  建议在 App 初次启动时立刻调用本 API
     *
     * @param {Action[]} actions 包含最多 2 个字典的数组，多余的字典无效
     * @param {string} categoryId category id，用于标记这一组操作，推送时的 payload 添加 category 字段（在极光控制台 - 发送通知 - 可选设置 - category ），即可展示相应的这一组操作。例：id1 对应 [操作A，操作B]，id2 对应 [操作A, 操作C]。
     * @memberof JPush
     */
    addNotificationActions(actions: Action[], categoryId: string): void;
}

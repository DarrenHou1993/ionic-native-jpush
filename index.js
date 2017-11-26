var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * 周一到周日
 * @export
 * @enum {number}
 */
export var Days;
(function (Days) {
    Days[Days["Mon"] = 0] = "Mon";
    Days[Days["Tue"] = 1] = "Tue";
    Days[Days["Wed"] = 2] = "Wed";
    Days[Days["Thu"] = 3] = "Thu";
    Days[Days["Fri"] = 4] = "Fri";
    Days[Days["Sat"] = 5] = "Sat";
    Days[Days["Sun"] = 6] = "Sun";
})(Days || (Days = {}));
/**
 * 24小时
 * @export
 * @enum {number}
 */
export var Hours;
(function (Hours) {
    Hours[Hours["Zero"] = 0] = "Zero";
    Hours[Hours["One"] = 1] = "One";
    Hours[Hours["Two"] = 2] = "Two";
    Hours[Hours["Three"] = 3] = "Three";
    Hours[Hours["Four"] = 4] = "Four";
    Hours[Hours["Five"] = 5] = "Five";
    Hours[Hours["Six"] = 6] = "Six";
    Hours[Hours["Seven"] = 7] = "Seven";
    Hours[Hours["Eight"] = 8] = "Eight";
    Hours[Hours["Nine"] = 9] = "Nine";
    Hours[Hours["Ten"] = 10] = "Ten";
    Hours[Hours["Eleven"] = 11] = "Eleven";
    Hours[Hours["Twelve"] = 12] = "Twelve";
    Hours[Hours["Thirteen"] = 13] = "Thirteen";
    Hours[Hours["Fourteen"] = 14] = "Fourteen";
    Hours[Hours["Fifteen"] = 15] = "Fifteen";
    Hours[Hours["Sixteen"] = 16] = "Sixteen";
    Hours[Hours["Seventeen"] = 17] = "Seventeen";
    Hours[Hours["Eighteen"] = 18] = "Eighteen";
    Hours[Hours["Nineteen"] = 19] = "Nineteen";
    Hours[Hours["Twenty"] = 20] = "Twenty";
    Hours[Hours["TwentyOne"] = 21] = "TwentyOne";
    Hours[Hours["TwentyTwo"] = 22] = "TwentyTwo";
    Hours[Hours["TwentyThree"] = 23] = "TwentyThree";
})(Hours || (Hours = {}));
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
var JPush = (function (_super) {
    __extends(JPush, _super);
    function JPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 调用此 API，用来开启 JPush SDK 提供的推送服务。
     */
    JPush.prototype.init = function () { };
    /**
     * 停止推送服务
     */
    JPush.prototype.stopPush = function () { };
    /**
     * 恢复推送服务
     */
    JPush.prototype.resumePush = function () { };
    /**
     * 用来检查 Push Service 是否已经被停止(Android)
     * 平台检查推送服务是否注册(IOS)
     * @returns {Promise<number>}
     */
    JPush.prototype.isPushStopped = function () { return; };
    /**
     * 用于开启 Debug 模式，显示更多的日志信息
     * @param isDebug 是否开启调试模式
     */
    JPush.prototype.setDebugMode = function (isDebug) { };
    /**
     * 获取RegistrationID
     * @returns {Promise<any>}
     */
    JPush.prototype.getRegistrationID = function () { return; };
    /**
     * 设置别名
     *
     * @param {AliasOptions} alias
     * @returns {Promise<AliasOptions>}
     * @memberof JPush
     */
    JPush.prototype.setAlias = function (alias) { return; };
    /**
     * 删除别名
     * @param {{ sequence: number }} alias
     * @returns {Promise<{ sequence: number }>}
     * @memberof JPush
     */
    JPush.prototype.deleteAlias = function (alias) { return; };
    /**
     * 查询别名
     *
     * @param {{ sequence: number }} alias
     * @returns {Promise<AliasOptions>}
     * @memberof JPush
     */
    JPush.prototype.getAlias = function (alias) { return; };
    /**
     * 设置标签
     *
     * @param {{ sequence: number, tags: string[] }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    JPush.prototype.setTags = function (params) { return; };
    /**
     * 添加标签
     *
     * @param {{ sequence: number, tags: string[] }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    JPush.prototype.addTags = function (params) { return; };
    /**
     * 删除指定标签
     *
     * @param {{ sequence: number, tags: string[] }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    JPush.prototype.deleteTags = function (params) { return; };
    /**
     * 删除所有标签
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<{ sequence: number }>}
     * @memberof JPush
     */
    JPush.prototype.cleanTags = function (params) { return; };
    /**
     * 获取当前绑定的所有的标签
     *
     * @param {{ sequence: number }} params
     * @returns {Promise<{ sequence: number, tags: string[] }>}
     * @memberof JPush
     */
    JPush.prototype.getAllTags = function (params) { return; };
    /**
     * 查询指定tag与当前用户绑定的状态
     *
     * @param {{ sequence: number, tag: string }} params
     * @returns {Promise<{ sequence: number }>}
     * @memberof JPush
     */
    JPush.prototype.checkTagBindState = function (params) { return; };
    /**
     * 判断系统设置中是否允许当前应用推送
     *
     * @returns {Promise<number>}
     * @memberof JPush
     */
    JPush.prototype.getUserNotificationSettings = function () { return; };
    /**
     * 点击通知进入应用程序时触发
     * 获取推送内容后，通过获取到的 __JPUSHNotificationKey 字段（本地通知 设置的 notificationID）来判断是本地通知，并处理
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    JPush.prototype.onOpenNotification = function () { return; };
    /**
     * 收到通知时触发
     * 获取推送内容后，通过获取到的 __JPUSHNotificationKey 字段（本地通知 设置的 notificationID）来判断是本地通知，并处理
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    JPush.prototype.onReceiveNotification = function () { return; };
    /**
     * 收到自定义消息时触发，推荐使用事件的方式传递
     */
    JPush.prototype.onReceiveMessage = function () { return; };
    /**
     * 集成了 JPush SDK 的应用程序在第一次成功注册到 JPush 服务器时，JPush 服务器会给客户端返回一个唯一的该设备的标识 - Registration ID。 此时就会触发这个事件（注意只有第一次会触发该事件，之后如果想要取到 Registration Id，可以直接调用 getRegistrationID 方法）
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    JPush.prototype.onReceiveRegistrationId = function () { return; };
    /**
     * 清除所有 JPush 展现的通知
     * @memberof JPush
     */
    JPush.prototype.clearAllNotification = function () { };
    /**
     * 根据通知 Id 清除通知（包括本地通知
     * @param {number} notificationId
     * @memberof JPush
     */
    JPush.prototype.clearNotificationById = function (notificationId) { };
    JPush.prototype.setPushTime = function (days, startHour, endHour) { };
    /**
     * 设置通知静默时间
     * @param {Hours} startHour
     * @param {number} startMinute
     * @param {Hours} endHour
     * @param {number} endMinute
     * @memberof JPush
     */
    JPush.prototype.setSilenceTime = function (startHour, startMinute, endHour, endMinute) { };
    /**
     * Basic 用于定制 Android Notification 里的 defaults / flags / icon 等基础样式（行为）
     * @memberof JPush
     */
    JPush.prototype.setBasicPushNotificationBuilder = function () { };
    /**
     * 继承 Basic 进一步让开发者定制 Notification Layout
     * @memberof JPush
     */
    JPush.prototype.setCustomPushNotificationBuilder = function () { };
    /**
     * 设置保留最近通知条数
     * @param {number} num 保留的条数
     * @memberof JPush
     */
    JPush.prototype.addLocalNotification = function (builderId, content, title, notificationID, broadcastTime, extras) { };
    /**
     * 移除一个本地通知
     *
     * @param {number} notificationID 通知的id
     * @memberof JPush
     */
    JPush.prototype.removeLocalNotification = function (notificationID) { };
    /**
     * 清除所有的本地通知,同时适用于 iOS
     * @memberof JPush
     */
    JPush.prototype.clearLocalNotifications = function () { };
    /**
    * 注册苹果通知服务，并启动 JPush SDK
    * @memberof JPush
    */
    JPush.prototype.startJPushSDK = function () { };
    /**
     * 应用程序处于后台时收到推送会触发该事件，可以在后台执行一段代码
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    JPush.prototype.onBackgroundNotification = function () { return; };
    /**
     * 上传 badge 值至 JPush 服务器，由 JPush 后台帮助管理每个用户所对应的推送 badge 值，简化了设置推送 badge 的操作
     * 本接口不会直接改变应用本地的角标值. 要修改本地 badge 值，使用 setApplicationIconBadgeNumber
     *
     * @param {number} value
     * @memberof JPush
     */
    JPush.prototype.setBadge = function (value) { };
    /**
     * resetBadge 相当于 setBadge(0)
     *
     * @memberof JPush
     */
    JPush.prototype.resetBadge = function () { };
    /**
     * 本接口直接改变应用本地的角标值，设置 iOS 的角标，当设置 badge ＝ 0 时为清除角标
     *
     * @memberof JPush
     */
    JPush.prototype.setApplicationIconBadgeNumber = function () { };
    /**
     * 获取 iOS 的角标值
     *
     * @returns {Promise<number>}
     * @memberof JPush
     */
    JPush.prototype.getApplicationIconBadgeNumber = function () { return; };
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
    JPush.prototype.addLocalNotificationForIOS = function (delayTime, content, badge, notificationID, extras) { };
    /**
     * 删除本地推送定义
     *
     * @param {stinrg} notificationID
     * @memberof JPush
     */
    JPush.prototype.deleteLocalNotificationWithIdentifierKeyInIOS = function (notificationID) { };
    /**
     * 清除所有本地推送对象
     *
     * @memberof JPush
     */
    JPush.prototype.clearAllLocalNotifications = function () { };
    /**
     * iOS 10 before 收到本地通知
     * 「App 在后台时点击通知横幅」或「App 在前台时收到」均会触发该事件。
     *
     * @returns {Observable<any>}
     * @memberof JPush
     */
    JPush.prototype.onReceiveLocalNotification = function () { return; };
    /**
     * 用于区分 iOS, Android 平台，以便不同设置
     *
     * @memberof JPush
     */
    JPush.prototype.isPlatformIOS = function () { };
    /**
     * 添加通知操作，是展示在锁屏推送侧滑界面、通知中心推送侧滑界面、推送横幅下拉界面（iPhone 6s before）的按钮操作。
  一条推送最多只能展示 2 个操作（在锁屏推送侧滑界面、通知中心推送侧滑界面会额外自动展示一个「清除」操作），超出的操作不会被展示。
  建议在 App 初次启动时立刻调用本 API。
     *
     * @param {Action[]} actions 包含最多 2 个字典的数组，多余的字典无效
     * @param {string} categoryId category id，用于标记这一组操作，推送时的 payload 添加 category 字段（在极光控制台 - 发送通知 - 可选设置 - category ），即可展示相应的这一组操作。例：id1 对应 [操作A，操作B]，id2 对应 [操作A, 操作C]。
     * @memberof JPush
     */
    JPush.prototype.addDismissActions = function (actions, categoryId) { };
    /**
     * 轻触推送横幅，展示的更多操作。
  iPhone 6s 及以后设备且 iOS 9 以后系统支持 3d-touch。
  建议在 App 初次启动时立刻调用本 API
     *
     * @param {Action[]} actions 包含最多 2 个字典的数组，多余的字典无效
     * @param {string} categoryId category id，用于标记这一组操作，推送时的 payload 添加 category 字段（在极光控制台 - 发送通知 - 可选设置 - category ），即可展示相应的这一组操作。例：id1 对应 [操作A，操作B]，id2 对应 [操作A, 操作C]。
     * @memberof JPush
     */
    JPush.prototype.addNotificationActions = function (actions, categoryId) { };
    // 页面的统计、日志的等级设置、地理位置上报暂无
    JPush.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JPush.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "init", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "stopPush", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "resumePush", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "isPushStopped", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setDebugMode", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "getRegistrationID", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "setAlias", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "deleteAlias", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "getAlias", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "setTags", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "addTags", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "deleteTags", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "cleanTags", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "getAllTags", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "checkTagBindState", null);
    __decorate([
        Cordova({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "getUserNotificationSettings", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.openNotification',
            element: document,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], JPush.prototype, "onOpenNotification", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.receiveNotification',
            element: document,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], JPush.prototype, "onReceiveNotification", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.receiveMessage',
            element: document,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], JPush.prototype, "onReceiveMessage", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.receiveRegistrationId',
            element: document,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], JPush.prototype, "onReceiveRegistrationId", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "clearAllNotification", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "clearNotificationById", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setPushTime", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setSilenceTime", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setBasicPushNotificationBuilder", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setCustomPushNotificationBuilder", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        })
        /**
         * 添加一个本地通知
         * @param {number} builderId  设置本地通知样式。
         * @param {string} content  设置本地通知的 content。
         * @param {string} title  设置本地通知的 title。
         * @param {number} notificationID  设置本地通知的 ID（不要为 0）。
         * @param {number} broadcastTime  设置本地通知触发时间，为距离当前时间的数值，单位是毫秒。
         * @param {*} extras  设置额外的数据信息 extras 为 json 字符串。
         * @memberof JPush
         */
        ,
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String, String, Number, Number, Object]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "addLocalNotification", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "removeLocalNotification", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "clearLocalNotifications", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "startJPushSDK", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.backgroundNotification',
            element: document,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], JPush.prototype, "onBackgroundNotification", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setBadge", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "resetBadge", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "setApplicationIconBadgeNumber", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JPush.prototype, "getApplicationIconBadgeNumber", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Number, String, Object]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "addLocalNotificationForIOS", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "deleteLocalNotificationWithIdentifierKeyInIOS", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "clearAllLocalNotifications", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'jpush.receiveLocalNotification',
            element: document,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], JPush.prototype, "onReceiveLocalNotification", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "isPlatformIOS", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "addDismissActions", null);
    __decorate([
        Cordova({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String]),
        __metadata("design:returntype", void 0)
    ], JPush.prototype, "addNotificationActions", null);
    JPush = __decorate([
        Plugin({
            pluginName: 'JPush',
            plugin: 'jpush-phonegap-plugin',
            pluginRef: 'window.JPush',
            repo: 'https://github.com/jpush/jpush-phonegap-plugin',
            install: 'cordova plugin add jpush-phonegap-plugin',
            installVariables: ['APP_KEY'],
            platforms: ['Android', 'iOS']
        })
    ], JPush);
    return JPush;
}(IonicNativePlugin));
export { JPush };
//# sourceMappingURL=index.js.map
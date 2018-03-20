import {InjectionToken} from '@angular/core';

export const ECHARTS_DEF_ID = new InjectionToken('图表定义id');
export const ALTERNATIVES = new InjectionToken('主页可配置项');

/**
 * 这个token的意义同PANEL_ID
 * @deprecated use PANEL_ID instead
 */
export const FORWARD_PARAMS = new InjectionToken('');


export const PANEL_ID = new InjectionToken('组件定义id');
export const GENERAL_INFO = new InjectionToken('');

export const TURNOVER_POSITIVE = new InjectionToken('TurnOver正面');
export const TURNOVER_NEGATIVE = new InjectionToken('TurnOver反面');

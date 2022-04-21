/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { task } from './Models/Task';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Home:undefined;
  HomeDrawer: undefined;
  ProfileDrawer: undefined;
  Taskdrawer: undefined;
  SettingDrawer: undefined;
  LoginScreen:undefined;
};


export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;

};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type HomeParamlist={
  HOME:undefined
}

export type ProfileParamlist={
  Profile:undefined
}

export type TaskParamlist={
  Task:undefined
  AddTask:undefined
  EditTask:{
  task:task;
  index:number;
  }
}

export type SettingParamlist={
  Setting:undefined
}

export  type AddTaskParamlist={
  Addtask:undefined
}
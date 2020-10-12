function main()
clear;clc;
[Voice,Fs]=VoiceMix('音频1.wav','音频2.mp3');
sound(Voice, Fs)
 
function [Voice,Fs]=VoiceMix(FileName1,FileName2)
% 建议：
% FileName1为较长的音频文件，即10s的那个音频文件
% FileName2为较短的音频文件，即如汽笛，打雷等的噪声文件
% Output
% Voice   混合后的音频时域信号
% Fs      混合后的音频时域信号采样频率
[y,Fs] = audioread(FileName1);
[y2,Fs2] = audioread(FileName2);
 
% 有的音频可能是多通道，统一取一通道
ft = y(:,1);
ft2=y2(:,1);
 
% 将y2转换成和y一样采用频率的音频
% resample函数将采样频率从Fs2调整到Fs
y3=resample(ft2,Fs,Fs2);
 
Length=length(y(:,1));
Length2=length(y3(:,1));
 
if Length>=Length2
    % 随机取得一个长度，将短的音频插入到长的音频中去
    Start=floor(rand*abs(Length-Length2));
    % 音频混合
    Voice=y;
    Voice(Start+1:Start+Length2)=y3+ft(Start+1:Start+Length2);
else
    % 随机取得一个长度，将短的音频插入到长的音频中去
    Start=floor(rand*abs(Length2-Length));
    % 音频混合
    Voice=y3;
    Voice(Start+1:Start+Length)=ft+y3(Start+1:Start+Length);
end

% Step 1 : Play Chirp Signal
%   yi = chirp1();
% % Step 2 : Read Audio Files

signal1path = "C:\Users\zhans\Desktop\Auidio\dry\5\190329_0202.wav";
[s1,Fs] = audioread(signal1path);
s1 = s1(:,2);
signal2path = "C:\Users\zhans\Desktop\Auidio\dry\5\190329_0203.wav";
[s2,Fs] = audioread(signal2path);
s2 = s2(:,2);
signal3path = "C:\Users\zhans\Desktop\Auidio\half\5\190329_0231.wav";
[s3,Fs] = audioread(signal3path);
s3 = s3(:,2);
signal4path = "C:\Users\zhans\Desktop\Auidio\half\5\190329_0232.wav";
[s4,Fs] = audioread(signal4path);
s4 = s4(:,2);






% 
% plotfr(signal1path)
% 
% 
% Step 3 : To Align two signals in the same length
[s1, yi] = delay(s1, yi);
[s2, yi] = delay(s2, yi);
[s3, yi] = delay(s3, yi);
[s4, yi] = delay(s4, yi);
[s5, yi] = delay(s5, yi);
[s6, yi] = delay(s6, yi);

% Step 4 : To use xcorr to Analyze
% xorr 的部分
%   [c,lags] = xcorr(wet,yi);
%  stem(lags,c)




function[x] = plotfr(aa)
string1 = aa; %你的文件名
[x1,Fs1] = audioread(string1); %matlab自带音频采集函数
y1 = x1(:,2);
subplot(221);
plot(0:1:length(y1)-1,y1);
title('Original signal'); %显示你采集的声音信号

%下面是DFT
N=length(y1);
k=-N/2:N/2-1;
w=2*pi/N*k;
freq=w*Fs1/2/pi;
y1_fft=fft(y1,N);%快速傅里叶变换
subplot(212);
x = abs(fftshift(y1_fft));
plot(freq,x);
title('Frequency Response');
xlabel('Frequency');
ylabel('DB');
axis([0 10000 0 5000]);%这个用上可以显示你想要的范围，看情况。


end

function [y] = chirp1()
% 
% tv = 1/(fs)
% t = 0:tv:2;              % 2 secs @ 10kHz sample rate
% y = 0.1*chirp(t,0,1,f);       % Start @ DC, cross 1500Hz at t=1 sec
% z = y*0;
% specgram(y,256,1e6,256,250) % Display the spectrogram
% song = [y z y z y];
% correctsong = transpose(song);
% sound (song, fs)
% %plot(y)
fs = 44100;
tv = 1/fs
t = 0:tv:2;             
y = chirp(t,10,2,10000, 'Linear', pi/2);  

pspectrum(y,fs,'spectrogram','TimeResolution',0.1, ...
    'OverlapPercent',99,'Leakage',0.85)

sound(y,fs)
end


% To Align two signals
function [c, a] = delay(a,b)
tdelay = finddelay(a,b);
if tdelay < 0           %% promise tdelay is positive number if not switch a and b
    d = a;
    a = b;
    b = d;
    tdelay = finddelay(a,b);
end
% ax(1) = subplot(3,1,1);
% plot(a)
% ylabel('s_1')
% 
% ax(2) = subplot(3,1,2);
% plot(b)
% ylabel('s_2')
% 
% 
% xlabel('Samples')
% 
% linkaxes(ax,'x')
% t21 = finddelay(a,b);


% axes(ax(1))
% plot(b(t21+1:end))

% axes(ax(2))
% plot(a)


c = b(tdelay+1:end);
    if length(c) > length(a)
        c = c(1:length(a));
    elseif length(c) < length(a)
        a = a(1:length(c));

    end    
end

% Another function to Align two signals (may not use)
% function [] = delay1(a,b)
% [c, d] = alignsignals(a, b);
% ax(1) = subplot(3,1,1);
% plot(c)
% ylabel('s_1')
% 
% ax(2) = subplot(3,1,2);
% plot(d)
% ylabel('s_2')
% 
% 
% xlabel('Samples')
% 
% linkaxes(ax,'x')
% 
% end %another way to find delay

% 截取函数
% b = b(1:length(a))
% 声道控制
% yo1500(:,1)


%第二种画法频谱
% [y,fs]=audioread(signal1path);
% y = y(:,2);
% sound(y, Fs);
% F = fftshift(abs(fft(y)));
% f = linspace(-Fs/2, Fs/2, numel(y)+1);
% f(end) = [];    
% plot(f, F);


% Plot spectrum
%  aa =  plotfr(signal1path);

%Get spectrum from signal tool box
% x = psd(spectrum.periodogram,dry,'Fs',Fs,'NFFT',length(dry));
% data = x.Data;
% plot(data)





% CORR 的部分
% w = 10;                               % w是滑动窗口的大小3
% l = length(a);                     % len表示矩阵长度
% e = [];
% d=1;
%     for i =  1:w:l - w + 1
%         R = corrcoef(a(i :(i+w)-1), b(i :(i+w)-1));
%         e(d) = R(1,2) ;
%         d = d+1;
%     end  
% e = transpose(e);
% e = e(1:201)
% plot(e)
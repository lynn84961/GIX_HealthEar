
% Step 1 : Play Chirp Signal
%  yi = chirp1(5000);

% Step 2 : Read Audio Files
 signal1path = "C:\Users\zhans\Desktop\Auidio\10KHz\190317_0085.wav";
 [yo10KhzInear,Fs] = audioread(signal1path);
 signal2path = "C:\Users\zhans\Desktop\Auidio\10KHz\10KHzInEar.wav";
 [yo10KhzInearnowater,Fs] = audioread(signal2path);
  signal2path = "C:\Users\zhans\Desktop\Auidio\10KHz\10KHzNotInEar.wav";
 [yo10KhzNotInEar,Fs] = audioread(signal2path);

% Step 3 : To Align two signals
[yof, yif] = delay(yo10KhzInear(:,2), yo10KhzNotInEar(:,2));
diff = yof - yif;



% [output4500B, e] = delay(yo10KhzNotInEar(:,2), yi);

% Step 4 : To use xcorr to Analyze
% xorr 的部分
% [c,lags] = xcorr(yi,yo10KhzInear_2);
% stem(lags,c)

% Plot Original signal
 plotfr(signal1path);
 
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


% Original function to make Chirp signal
% function [correctsong] = chirp150()
% fs = 44100;
% 
% t = 0:0.001:2;              % 2 secs @ 1kHz sample rate
% y = 0.1*chirp(t,0,1,150);       % Start @ DC, cross 150Hz at t=1 sec
% z = y*0;
% 
% specgram(y,256,1e3,256,250) % Display the spectrogram
% 
% song = [y z z y z z y z z];
% correctsong = transpose(song);
% sound (y, fs)
% % plot(y)
% end

function[] = plotfr(aa)
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
plot(freq,abs(fftshift(y1_fft)));
title('Frequency Response');
xlabel('Frequency');
ylabel('DB');
axis([0 10000 0 5000]);%这个用上可以显示你想要的范围，看情况。


end

function [correctsong] = chirp1(f)
fs = 44100;
tv = 0.1/(f*2)
t = 0:tv:2;              % 2 secs @ 10kHz sample rate
y = 0.1*chirp(t,0,1,f);       % Start @ DC, cross 1500Hz at t=1 sec
z = y*0;
 specgram(y,256,1e6,256,250) % Display the spectrogram
song = [y];
correctsong = transpose(song);
sound (song, fs)
%plot(y)
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




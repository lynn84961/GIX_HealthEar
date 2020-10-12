
%   [yod150,Fs] = audioread("E:\MUSIC\190105_0057.wav");
%   [yod1500,Fs] = audioread("E:\MUSIC\190105_0059.wav");
%   [yod15000,Fs] = audioread("E:\MUSIC\190105_0060.wav");
%    yid150 = chirp150();
%    yi1500 = chirp1500();
%    yi15000 = chirp15000();
%   [yod150,Fs] = audioread("E:\MUSIC\190105_0057.wav");
%   [a, b] = delay(yo1500, yod1500);
% 
%    [a, b] = delay(yo150_com , yi150_com); 
% sound (chirp(), fs)
% plot(chirp())
%[a,Fs] = audioread("C:\Users\zhans\Desktop\Signal processing\Voice source\In ear\4500\leftear.wav");
%[b,Fs] = audioread("C:\Users\zhans\Desktop\Signal processing\Voice source\In ear\4500\rightear.wav");
%[c,Fs] = audioread("C:\Users\zhans\Desktop\Signal processing\Voice source\Not in ear\4500.wav");
% input4500 = chirp4500();
% [outputNotinear, b] = delay(c(:,2), input4500);
% input4500 = chirp4500();
% [output4500B, e] = delay(b(:,2), input4500);
% input4500 = chirp4500();
% [outputNotinear, f] = delay(c(:,2), input4500);

% [yo150,Fs] = audioread("C:\Users\zhans\Desktop\Signal processing\Voice source\In ear\190104_0056.wav");



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
% xorr 的部分
% [c,lags] = xcorr(a,b);
% stem(lags,c)
function [correctsong] = chirp150()
fs = 44100;

t = 0:0.001:2;              % 2 secs @ 1kHz sample rate
y = 0.1*chirp(t,0,1,150);       % Start @ DC, cross 150Hz at t=1 sec
z = y*0;

specgram(y,256,1e3,256,250) % Display the spectrogram

song = [y z z y z z y z z];
correctsong = transpose(song);
sound (y, fs)
% plot(y)
end

function [correctsong] = chirp1500()
fs = 44100;
t = 0:0.0001:2;              % 2 secs @ 10kHz sample rate
y = 0.1*chirp(t,0,1,1500);       % Start @ DC, cross 1500Hz at t=1 sec
z = y*0;
 specgram(y,256,1e4,256,250) % Display the spectrogram
song = [y z z y z z y z z];
correctsong = transpose(song);
sound (song, fs)
%plot(y)
end

function [correctsong] = chirp15000()
f = 15000;
fs = 44100;
t = 0:0.001/(f/150):2;              % 2 secs @ 100kHz sample rate
y = 0.1*chirp(t,0,1,f);       % Start @ DC, cross 15000Hz at t=1 sec
z = y*0;
specgram(y,256,1e5,256,250) % Display the spectrogram
song = [y z z y z z y z z];
correctsong = transpose(song);
sound (y, fs)
end

function [correctsong] = chirp4500()
fs = 44100;

t = 0:0.001/15:2;              % 2 secs @ 1kHz sample rate
y = 0.1*chirp(t,0,1,4500);       % Start @ DC, cross 150Hz at t=1 sec
z = y*0;

% specgram(y,256,1e3/15,256,250) % Display the spectrogram

song = [y z z y z z y z z];
correctsong = transpose(song);
sound (song, fs)
plot(correctsong)
end

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

function [] = delay1(a,b)
[c, d] = alignsignals(a, b);
ax(1) = subplot(3,1,1);
plot(c)
ylabel('s_1')

ax(2) = subplot(3,1,2);
plot(d)
ylabel('s_2')


xlabel('Samples')

linkaxes(ax,'x')

end %another way to find delay

% 截取函数
% b = b(1:length(a))
% 声道控制
% yo1500(:,1)




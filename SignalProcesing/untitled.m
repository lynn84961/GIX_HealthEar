wetDry = "dry";
% folderNum = 1;
% sampleNum = 1;
signalTable = {40, 40};
labelTable = {40, 40};
strArr = (40);
% yi = chirp1();
% fs = 44.1e3;
fs = 4100;

ind = 1;
for x = 1:2
    if x == 1
        wetDry = "dry";
    elseif x == 2
        wetDry = "full";
    end
    for folderNum = 1:5
        for sampleNum = 1:4

            signalPath = "/Users/robinyang/Desktop/voice 2/" + wetDry + "/" + folderNum + "/" + sampleNum + ".wav";
%             disp(1);
%             [s1,Fs] = audioread(signalPath);
%             s1 = s1(:,2);

%             [s1, yi] = delay(s1, yi);
%             s1 = extractM(s1);
%             s1 = transpose(s1);
            signalTable{ind} = signalPath;
        
            labelTable{ind} = wetDry;
            strArr(1, ind) = wetDry;

            ind = ind + 1;

        end
    end
end
signalTable = transpose(signalTable);
labelTable = transpose(labelTable);
T = table('Paths', signalTable, 'Labels', labelTable);


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

function [c, a] = delay(a,b)
tdelay = finddelay(a,b);
if tdelay < 0           %% promise tdelay is positive number if not switch a and b
    d = a;
    a = b;
    b = d;
    tdelay = finddelay(a,b);
end
ax(1) = subplot(3,1,1);
plot(a)
ylabel('s_1')

ax(2) = subplot(3,1,2);
plot(b)
ylabel('s_2')


xlabel('Samples')

linkaxes(ax,'x')
t21 = finddelay(a,b);


axes(ax(1))
plot(b(t21+1:end))

axes(ax(2))
plot(a)


c = b(tdelay+1:end);
    if length(c) > length(a)
        c = c(1:length(a));
    elseif length(c) < length(a)
        a = a(1:length(c));

    end    
end

function[output] = extractM(input)
indexa = 45000
indexb = 58623
output = input(indexa:indexb);
end
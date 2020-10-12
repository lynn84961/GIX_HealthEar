
figure(1)
filename = 'mygif.gif';
t = 0:0.001:4;
x = myfun1(t)
for n = 1:1:length(t)
      plot(t(1:n),x(1:n))
      axis([min(t) max(t) min(x) max(x)]) ;
      plot(t(1:n),x(1:n))
      
      drawnow
      frame = getframe(1);
      im = frame2im(frame);
      [imind,cm] = rgb2ind(im,256);
      if n == 1;
          imwrite(imind,cm,filename,'gif', 'Loopcount',inf);
      else
          imwrite(imind,cm,filename,'gif','WriteMode','append');
      end
end


function y=myfun1(x)
y=1*chirp(x,0,1,1500).*(x>=0 & x<2)+0*x.*(x>2);
end
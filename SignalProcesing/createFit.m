function [fitresult, gof] = createFit(yi150_com, yo150_com)
%CREATEFIT(YI150_COM,YO150_COM)
%  Create a fit.
%
%  Data for 'untitled fit 1' fit:
%      X Input : yi150_com
%      Y Output: yo150_com
%  Output:
%      fitresult : a fit object representing the fit.
%      gof : structure with goodness-of fit info.
%
%  另请参阅 FIT, CFIT, SFIT.

%  由 MATLAB 于 07-Aug-2020 15:19:47 自动生成


%% Fit: 'untitled fit 1'.
[xData, yData] = prepareCurveData( yi150_com, yo150_com );

% Set up fittype and options.
ft = fittype( 'smoothingspline' );

% Fit model to data.
[fitresult, gof] = fit( xData, yData, ft );

% Plot fit with data.
figure( 'Name', 'untitled fit 1' );
h = plot( fitresult, xData, yData );
legend( h, 'yo150_com vs. yi150_com', 'untitled fit 1', 'Location', 'NorthEast', 'Interpreter', 'none' );
% Label axes
xlabel( 'yi150_com', 'Interpreter', 'none' );
ylabel( 'yo150_com', 'Interpreter', 'none' );
grid on



/*
TritemHub
Watch this tutorial () how to do it, all links inside tutorial
*/
var RunnerInstance = Runner.instance_;
function SetRunnerSpeed(changespeed_true_or_false,ohnumber_blank_if_no) {
    if (changespeed_true_or_false==true) {
        RunnerInstance.setSpeed(ohnumber_blank_if_no);
    }
}
function Invisiblicity_speeling_is_kinda_weird(true_or_false) {
    if (true_or_false==true) {
        RunnerInstance.gameOver = () => {}
    }
}
function FreezeingAutomaticFarming(true_or_false_again) {
    if (true_or_false_again==true) {
        RunnerInstance.playingIntro = true;
    }
}
function FullyAutofarm(EnableFreezeFarm,Inviciblicity,ChangeRunnerSpeed,RunnerSpeedIfYouLikeToChangeIt) {
    if (EnableFreezeFarm==true) {
        FreezeingAutomaticFarming(true);
    }
    if (Inviciblicity==true) {
        Invisiblicity_speeling_is_kinda_weird(true);
    }
    if (ChangeRunnerSpeed==true) {
        SetRunnerSpeed(true,RunnerSpeedIfYouLikeToChangeIt);
    }
}

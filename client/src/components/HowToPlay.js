
function HowToPlay(){

  return(
    <div className='home-body'>
      <br/><h2>How To Play</h2>
      <div className='howtoplay'>
        <p>Your goal is to mash up some avocados and make the most guacamole anyone's ever seen! But be careful, these avocados fight back!</p>
        ---
        <p>To attack an avocado, either click on it or use the corresponding button on your numpad (numpad is recommended for faster play). If you don't have a numpad or would like to use different buttons, you can change the button mapping within the Settings.</p>
        ---
        <p>When an avocado appears, you'll see its attack and health values (for example, "3/4" represents 3 attack and 4 health). Each time you attack an avocado, you'll deal damage to it equal to your attack value. </p>
        ---
        <p>The avocado will hit you back at the same time, dealing damage to you as well. You'll take damage equal to the avocado's attack minus your defense (for example, if you strike a 3/4 avocado while your defense is 1, you'll take just 2 damage per hit instead of 3).</p>
        ---
        <p>Every 20 seconds, a new wave of avocados will start to appear. Each new wave will be harder to defeat than the ones that came before, but you could earn even more coins by defeating them.</p>
        ---
        <p>Make sure you don't attack any empty holes - there's a 5 second penalty every time you make that mistake.</p>
        ---
        <p>For every avocado you defeat, you'll have a chance to earn coins, health, and more time on the clock. If your health or the clock reach zero, the game ends.</p>
        ---
        <p>In between playthroughs, be sure to check out the items. The coins you earn can be exchanged for better items that will help you progress further in the game and dominate the leaderboard!</p>
      </div>
    </div>
  )
}

export default HowToPlay;
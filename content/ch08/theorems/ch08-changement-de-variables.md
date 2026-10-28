---
id: ch08-changement-de-variables
type: proposition
chapter: 8
title: "Changement de variables dans l'équation d'Euler-Lagrange : $L_1(u,q_1,v_1)=L(u,\phi(q_1),d\phi_{q_1}(v_1))$"
ref: "Question 10, p. 145 (non numérotée, section VIII)"
page: 145
importance: 2
depends: [ch05-composition-differentielles, ch05-differentielles-partielles, ch05-lemme-schwarz, ch05-formule-leibniz, ch05-inversion-c-infini, ch08-euler-lagrange, ch08-lhat-c1-differentielle, ch08-ouverture-courbes-confinees]
tags: [euler-lagrange, changement-de-variables, coordonnees-polaires, covariance, difféomorphisme]
---
## Intuition

> 💡 L'équation d'Euler-Lagrange ne dépend pas des coordonnées choisies. Si l'on décrit la position non plus par $q\in\mathcal U$ mais par de nouvelles coordonnées $q_1$ avec $q=\phi(q_1)$ (par exemple les coordonnées polaires $(r,\theta)$), il suffit d'exprimer le Lagrangien dans ces coordonnées et d'écrire (E.L) pour le nouveau Lagrangien $L_1$ : les solutions se correspondent par $\phi$.

Le point clé est la façon dont se transforment les **vitesses** : si $\beta(t)=\phi(\gamma(t))$, la règle de la chaîne donne $\beta'(t)=d\phi_{\gamma(t)}(\gamma'(t))$. C'est pourquoi on pose $L_1(u,q_1,v_1)=L(u,\phi(q_1),d\phi_{q_1}(v_1))$ : ainsi $L_1(t,\gamma(t),\gamma'(t))=L(t,\beta(t),\beta'(t))$, et les deux actions coïncident, $\hat L_1(\gamma)=\hat L(\phi\circ\gamma)$.

Vocabulaire : un **difféomorphisme** $\phi:\mathcal V\to\mathcal U$ entre deux ouverts est une bijection de classe $C^1$ dont la réciproque est de classe $C^1$ ; « au moins $C^2$ » signifie que $\phi$ est de classe $C^2$. La **différentielle seconde** $d^2\phi_{q}(k,\ell)=\big(d(d\phi)_q(k)\big)(\ell)$ est bilinéaire symétrique (lemme de Schwarz, [[ch05-lemme-schwarz]]). Équation (E.L) : [[ch08-euler-lagrange]] ; Lagrangien défini sur un ouvert : [[ch08-ouverture-courbes-confinees]].

## Énoncé

**Proposition (poly, Question 10, p. 145).** Soit $L$ un Lagrangien de classe $C^1$ défini sur $I\times\mathcal U\times V$, où $\mathcal U$ est un ouvert de $V$, et soit $\phi:\mathcal V\to\mathcal U$ un difféomorphisme (au moins $C^2$) d'un ouvert $\mathcal V$ de $V$ sur $\mathcal U$. Posons
$$
L_1:I\times\mathcal V\times V\to\R,\qquad (u,q_1,v_1)\mapsto L\big(u,\phi(q_1),d\phi_{q_1}(v_1)\big).
$$
Si $\beta=\phi\circ\gamma$ vérifie l'équation d'Euler-Lagrange pour $L$, où $\gamma:[0;1]\to\mathcal V$ est de classe $C^1$, alors $\gamma$ vérifie l'équation d'Euler-Lagrange pour $L_1$ : la fonction $t\mapsto\frac{\partial L_1}{\partial v_1}(t,\gamma(t),\gamma'(t))$ est dérivable et, pour tout $t\in[0;1]$,
$$
\frac{d}{dt}\Big[t\mapsto\frac{\partial L_1}{\partial v_1}\big(t,\gamma(t),\gamma'(t)\big)\Big]=\frac{\partial L_1}{\partial q_1}\big(t,\gamma(t),\gamma'(t)\big).
$$

*Complément (réciproque).* Comme $\phi$ est un difféomorphisme, la réciproque est vraie : $\gamma$ vérifie (E.L) pour $L_1$ si et seulement si $\phi\circ\gamma$ vérifie (E.L) pour $L$.

## Hypothèses

### H1 — $L$ de classe $C^1$

**Rôle.** Elle donne un sens à (E.L) pour $L$ et permet d'appliquer la règle de la chaîne ([[ch05-composition-differentielles]]) à $L_1=L\circ\Psi$ avec $\Psi(u,q_1,v_1)=(u,\phi(q_1),d\phi_{q_1}(v_1))$.

**Si on la retire.** Les différentielles partielles de $L$ peuvent ne pas exister (par exemple $L=\abs q$ en $q=0$, voir [[ch08-euler-lagrange]]) : ni (E.L) pour $L$ ni (E.L) pour $L_1$ n'ont de sens. C'est une hypothèse de cadre.

### H2 — $\phi$ de classe $C^2$

**Rôle.** La différentielle partielle de $L_1$ par rapport à $q_1$ fait intervenir $d^2\phi$ (le terme $d\phi_{q_1}(v_1)$ dépend de $q_1$) : il faut $d\phi$ de classe $C^1$ pour que $\Psi$, donc $L_1$, soit de classe $C^1$. On utilise aussi le lemme de Schwarz pour $\phi$.

**Si on la retire.** Prenons $V=\R$, $L(u,q,v)=\tfrac12v^2$ et $\phi(x)=x+\tfrac14x\abs x$ : $\phi'(x)=1+\tfrac12\abs x\ge1$ est continue, $\phi$ est strictement croissante et tend vers $\pm\infty$ en $\pm\infty$, donc $\phi$ est un $C^1$-difféomorphisme de $\R$ sur $\R$, mais $\phi'$ n'est pas dérivable en $0$. Alors $L_1(u,q_1,v_1)=\tfrac12\big(1+\tfrac12\abs{q_1}\big)^2v_1^2=\tfrac12\big(1+\abs{q_1}+\tfrac14q_1^2\big)v_1^2$ n'est pas dérivable par rapport à $q_1$ en $q_1=0$ dès que $v_1\ne0$. La droite $\beta(t)=t-\tfrac12$ vérifie (E.L) pour $L$ ($\beta''=0$), mais $\gamma=\phi^{-1}\circ\beta$ vérifie $\gamma(\tfrac12)=0$ et $\gamma'(\tfrac12)=\beta'(\tfrac12)/\phi'(0)=1\neq0$ : $\frac{\partial L_1}{\partial q_1}(\tfrac12,\gamma(\tfrac12),\gamma'(\tfrac12))$ n'existe pas, et (E.L) pour $L_1$ n'a pas de sens en $t=\tfrac12$.

### H3 — $\phi$ est un difféomorphisme (bijectif, d'inverse $C^1$)

**Rôle.** Pour le sens direct demandé par le poly, c'est une hypothèse **de confort** : la preuve ci-dessous n'utilise que le fait que $\phi:\mathcal V\to\mathcal U$ est de classe $C^2$. Elle sert pour la **réciproque** (complément), qu'on obtient en appliquant le sens direct à $\phi^{-1}$.

**Si on la retire.** Le sens direct reste vrai (même preuve), par exemple pour les coordonnées polaires $\phi(r,\theta)=(r\cos\theta,r\sin\theta)$ sur $\R^2$ tout entier, qui ne sont pas injectives. Ce qui peut changer est la réciproque, qui repose sur l'inversibilité de $d\phi$ ; nous n'affirmons rien de plus ici.

## Idée de la preuve

Calcul direct par la règle de la chaîne : $\frac{\partial L_1}{\partial v_1}(t,\gamma,\gamma')=\frac{\partial L}{\partial v}(t,\beta,\beta')\circ d\phi_{\gamma}$ et $\frac{\partial L_1}{\partial q_1}(t,\gamma,\gamma')=\frac{\partial L}{\partial q}(t,\beta,\beta')\circ d\phi_\gamma+\frac{\partial L}{\partial v}(t,\beta,\beta')\circ d^2\phi_\gamma(\cdot,\gamma')$. On dérive le premier par Leibniz, on utilise (E.L) pour $L$ et la symétrie de $d^2\phi$ (Schwarz).

## Preuve

On travaille avec des formes linéaires : (E.L) est une égalité dans $\mathcal L(V;\R)$. Notons, pour $t\in[0;1]$,
$$
P(t)=\big(t,\beta(t),\beta'(t)\big),\qquad A(t)=\frac{\partial L}{\partial q}(P(t)),\qquad B(t)=\frac{\partial L}{\partial v}(P(t)),\qquad M(t)=d\phi_{\gamma(t)}\in\mathcal L(V;V).
$$

*Étape 0 : $\beta$ et $P(t)$.* Comme $\phi$ et $\gamma$ sont $C^1$, $\beta=\phi\circ\gamma$ est dérivable avec $\beta'(t)=d\phi_{\gamma(t)}(\gamma'(t))=M(t)\gamma'(t)$ ([[ch05-composition-differentielles]]), continue : $\beta$ est $C^1$ à valeurs dans $\mathcal U$. Donc $P(t)=\Psi(t,\gamma(t),\gamma'(t))$ où $\Psi(u,q_1,v_1)=(u,\phi(q_1),d\phi_{q_1}(v_1))$, et $L_1=L\circ\Psi$.

*Étape 1 : $L_1$ est $C^1$ et ses différentielles partielles.* L'application $(q_1,v_1)\mapsto d\phi_{q_1}(v_1)$ est la composée de $(q_1,v_1)\mapsto(d\phi_{q_1},v_1)$, de classe $C^1$ car $d\phi$ l'est ($\phi$ est $C^2$), et de l'application bilinéaire continue $\mathcal L(V;V)\times V\to V$, $(T,w)\mapsto T(w)$. Donc $\Psi$ est $C^1$, et $L_1=L\circ\Psi$ aussi. Ses différentielles partielles se calculent par la règle de la chaîne ([[ch05-composition-differentielles]], [[ch05-differentielles-partielles]]) : pour $k,\ell\in V$,
$$
\frac{\partial\Psi}{\partial q_1}(u,q_1,v_1)\cdot k=\big(0,\ d\phi_{q_1}(k),\ d^2\phi_{q_1}(k,v_1)\big),\qquad \frac{\partial\Psi}{\partial v_1}(u,q_1,v_1)\cdot\ell=\big(0,\ 0,\ d\phi_{q_1}(\ell)\big),
$$
d'où, en notant $Q=\Psi(u,q_1,v_1)$,
$$
\frac{\partial L_1}{\partial q_1}(u,q_1,v_1)\cdot k=\frac{\partial L}{\partial q}(Q)\cdot d\phi_{q_1}(k)+\frac{\partial L}{\partial v}(Q)\cdot d^2\phi_{q_1}(k,v_1),\qquad \frac{\partial L_1}{\partial v_1}(u,q_1,v_1)\cdot\ell=\frac{\partial L}{\partial v}(Q)\cdot d\phi_{q_1}(\ell).
$$
Le long de $\gamma$ ($Q=P(t)$), on obtient
$$
B_1(t):=\frac{\partial L_1}{\partial v_1}\big(t,\gamma(t),\gamma'(t)\big)=B(t)\circ M(t),\qquad A_1(t):=\frac{\partial L_1}{\partial q_1}\big(t,\gamma(t),\gamma'(t)\big)=A(t)\circ M(t)+B(t)\circ d^2\phi_{\gamma(t)}(\cdot,\gamma'(t)).
$$

*Étape 2 : dérivation de $B_1$.* Par hypothèse ((E.L) pour $L$ le long de $\beta$), $B$ est dérivable et $B'=A$. L'application $M=d\phi\circ\gamma$ est dérivable (composée de $d\phi$, de classe $C^1$, et de $\gamma$, de classe $C^1$), et $M'(t)=d(d\phi)_{\gamma(t)}(\gamma'(t))$, c'est-à-dire $M'(t)\ell=d^2\phi_{\gamma(t)}(\gamma'(t),\ell)$. L'application $(\lambda,T)\mapsto\lambda\circ T$ de $\mathcal L(V;\R)\times\mathcal L(V;V)$ dans $\mathcal L(V;\R)$ est bilinéaire continue ; par la formule de Leibniz ([[ch05-formule-leibniz]]), $B_1=B\circ M$ est dérivable et
$$
B_1'(t)\cdot\ell=B'(t)\cdot M(t)\ell+B(t)\cdot M'(t)\ell=A(t)\cdot d\phi_{\gamma(t)}(\ell)+B(t)\cdot d^2\phi_{\gamma(t)}(\gamma'(t),\ell).
$$

*Étape 3 : Schwarz.* $\phi$ étant de classe $C^2$, $d^2\phi_{\gamma(t)}$ est symétrique ([[ch05-lemme-schwarz]]) : $d^2\phi_{\gamma(t)}(\gamma'(t),\ell)=d^2\phi_{\gamma(t)}(\ell,\gamma'(t))$. Donc $B_1'(t)\cdot\ell=A_1(t)\cdot\ell$ pour tout $\ell\in V$, i.e. $B_1'(t)=A_1(t)$ pour tout $t\in[0;1]$ : c'est (E.L) pour $L_1$ le long de $\gamma$. $\square$

*Réciproque.* $\phi^{-1}:\mathcal U\to\mathcal V$ est aussi $C^2$ : $d(\phi^{-1})_q=\big(d\phi_{\phi^{-1}(q)}\big)^{-1}$ est la composée de $\phi^{-1}$ ($C^1$), de $d\phi$ ($C^1$) et de l'inversion $T\mapsto T^{-1}$ ($C^\infty$, [[ch05-inversion-c-infini]]), donc est $C^1$. Le Lagrangien construit à partir de $L_1$ et de $\phi^{-1}$ est $(u,q,v)\mapsto L_1\big(u,\phi^{-1}(q),d(\phi^{-1})_q(v)\big)=L\big(u,q,d\phi_{\phi^{-1}(q)}\circ d(\phi^{-1})_q(v)\big)=L(u,q,v)$. Le sens direct appliqué à $(L_1,\phi^{-1})$ et à la courbe $\phi\circ\gamma$ donne : si $\gamma=\phi^{-1}\circ(\phi\circ\gamma)$ vérifie (E.L) pour $L_1$, alors $\phi\circ\gamma$ vérifie (E.L) pour $L$.

*Remarque (preuve « conceptuelle », esquisse).* On a $\hat L_1(\gamma)=\hat L(\phi\circ\gamma)$. Si l'on admet que $\gamma\mapsto\phi\circ\gamma$ est différentiable (ce qui demande une preuve, non faite ici), la règle de la chaîne transporte les points critiques ; combinée à l'équivalence « (E.L) $\Leftrightarrow$ point critique » ([[ch08-euler-lagrange]], complément), elle redonne le résultat. Le calcul direct ci-dessus évite cette étape.

## Preuve à trous

Notons $B(t)=\frac{\partial L}{\partial v}(t,\beta,\beta')$, $A(t)=\frac{\partial L}{\partial q}(t,\beta,\beta')$, $M(t)=d\phi_{\gamma(t)}$. D'abord $\beta'(t)=$ <trou indice="règle de la chaîne">$d\phi_{\gamma(t)}(\gamma'(t))$</trou>, donc $L_1(t,\gamma,\gamma')=L(t,\beta,\beta')$. La règle de la chaîne appliquée à $L_1=L\circ\Psi$ donne le long de $\gamma$ :
$$
\frac{\partial L_1}{\partial v_1}(t,\gamma,\gamma')=B(t)\circ M(t),
$$
et <trou indice="la vitesse d phi_{q_1}(v_1) dépend aussi de q_1">$\frac{\partial L_1}{\partial q_1}(t,\gamma,\gamma')\cdot k=A(t)\cdot d\phi_{\gamma(t)}(k)+B(t)\cdot d^2\phi_{\gamma(t)}(k,\gamma'(t))$</trou>.
Comme $B'=A$ par (E.L) pour $L$ et $M'(t)\ell=d^2\phi_{\gamma(t)}(\gamma'(t),\ell)$, <trou indice="dérivée d'un produit bilinéaire">la formule de Leibniz donne $(B\circ M)'(t)\cdot\ell=A(t)\cdot d\phi_{\gamma(t)}(\ell)+B(t)\cdot d^2\phi_{\gamma(t)}(\gamma'(t),\ell)$</trou>. Enfin <trou indice="pourquoi peut-on échanger les deux arguments de d^2 phi ?">par le lemme de Schwarz ($\phi$ de classe $C^2$), $d^2\phi_{\gamma(t)}(\gamma'(t),\ell)=d^2\phi_{\gamma(t)}(\ell,\gamma'(t))$</trou>, ce qui donne $\frac{d}{dt}\frac{\partial L_1}{\partial v_1}(t,\gamma,\gamma')=\frac{\partial L_1}{\partial q_1}(t,\gamma,\gamma')$. $\square$

## Exemples

* **Coordonnées polaires et loi des aires.** $V=\R^2$, $\mathcal U=\R^2\setminus\big(]-\infty,0]\times\{0\}\big)$, $\mathcal V=]0,+\infty[\times]-\pi,\pi[$, $\phi(r,\theta)=(r\cos\theta,r\sin\theta)$ ($C^\infty$-difféomorphisme de $\mathcal V$ sur $\mathcal U$). On a $d\phi_{(r,\theta)}(\dot r,\dot\theta)=(\dot r\cos\theta-r\dot\theta\sin\theta,\ \dot r\sin\theta+r\dot\theta\cos\theta)$, de norme au carré $\dot r^2+r^2\dot\theta^2$. Pour $L(u,q,v)=\tfrac12\norm v^2-W(\norm q)$ (potentiel central, $W$ de classe $C^1$ sur $]0,+\infty[$) :
$$
L_1\big(u,(r,\theta),(\dot r,\dot\theta)\big)=\tfrac12\big(\dot r^2+r^2\dot\theta^2\big)-W(r).
$$
Ici $\frac{\partial L_1}{\partial v_1}=(\dot r,\ r^2\dot\theta)$ et $\frac{\partial L_1}{\partial q_1}=(r\dot\theta^2-W'(r),\ 0)$, d'où (E.L) pour $\gamma=(r,\theta)$ : $r''=r\theta'^2-W'(r)$ et $(r^2\theta')'=0$. La seconde équation est la **loi des aires** ($r^2\theta'$ constant), lisible directement en polaires et bien plus pénible à obtenir en cartésiennes. Pour une orbite circulaire $r\equiv R$, $\theta'=\omega$ : $0=R\omega^2-W'(R)$ ; avec $W(r)=-\frac1r$, $W'(R)=\frac1{R^2}$ et l'on retrouve $\omega^2R^3=1$.
* **Changement linéaire.** $\phi(q_1)=Aq_1$ avec $A\in\GL(V)$, $L=\tfrac12\norm v^2-U(q)$. Alors $L_1=\tfrac12\langle A^*Av_1,v_1\rangle-U(Aq_1)$ ($A^*$ adjoint), $\frac{\partial L_1}{\partial v_1}\simeq A^*Av_1$, $\frac{\partial L_1}{\partial q_1}\simeq-A^*\nabla U(Aq_1)$, et (E.L) pour $L_1$ s'écrit $A^*A\gamma''=-A^*\nabla U(A\gamma)$, soit (en simplifiant par $A^*$ inversible) $(A\gamma)''=-\nabla U(A\gamma)$ : c'est l'équation de Newton pour $\beta=A\gamma$, comme prévu.

## Pièges

* > ⚠️ Les vitesses se transforment par la **différentielle** : $L_1(u,q_1,v_1)=L(u,\phi(q_1),d\phi_{q_1}(v_1))$, et non $L(u,\phi(q_1),\phi(v_1))$ ni $L(u,\phi(q_1),v_1)$.
* > ⚠️ $\frac{\partial L_1}{\partial q_1}$ contient le terme $\frac{\partial L}{\partial v}\cdot d^2\phi(\cdot,v_1)$ (en polaires, c'est lui qui produit le terme centrifuge $r\theta'^2$) : l'oublier fausse tout.
* Ce qui est covariant, c'est la forme « $\frac{d}{dt}\frac{\partial L}{\partial v}=\frac{\partial L}{\partial q}$ », pas la forme « Newton » : en polaires, l'équation n'est **pas** $\gamma''=-\nabla_{(r,\theta)}(W\circ\phi)$.
* Avec l'identification $V\simeq\mathcal L(V;\R)$, $\frac{\partial L_1}{\partial v_1}\simeq(d\phi_{q_1})^*\frac{\partial L}{\partial v}$ (adjoint, « transposée »), et non $(d\phi_{q_1})^{-1}\frac{\partial L}{\partial v}$.
* Il faut $\phi$ de classe $C^2$ (H2), pas seulement $C^1$.

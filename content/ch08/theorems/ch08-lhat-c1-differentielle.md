---
id: ch08-lhat-c1-differentielle
type: proposition
chapter: 8
title: "$\hat L$ est de classe $C^1$ ; formule de $d\hat L_\gamma$"
ref: "Question 2, p. 143 (non numérotée, section VIII)"
page: 143
importance: 3
depends: [ch08-cadre-espace-courbes, ch08-lagrangien-fonctionnelle, ch05-differentielles-partielles, ch05-theoreme-fondamental, ch05-composition-differentielles, ch05-differentielle-def, ch05-integrale-fonctions-reglees]
tags: [action, differentielle, fonctionnelle-integrale, calcul-des-variations, premiere-variation]
---
## Intuition

> 💡 Si l'on déforme un peu la courbe $\gamma$ en $\gamma+h$, le coût instantané $L(t,\gamma(t),\gamma'(t))$ change de deux façons : parce que la **position** bouge de $h(t)$, et parce que la **vitesse** bouge de $h'(t)$. Au premier ordre, chaque changement est mesuré par la dérivée partielle correspondante de $L$ : $\frac{\partial L}{\partial q}\cdot h(t)+\frac{\partial L}{\partial v}\cdot h'(t)$. On additionne sur $t\in[0;1]$ : c'est $d\hat L_\gamma(h)$, appelée en physique la **première variation** de l'action.

C'est le calcul différentiel du chapitre V appliqué « point par point en $t$ », puis intégré. La seule difficulté est de montrer que les restes, petits pour chaque $t$, sont petits **uniformément en $t$** : c'est là que servent la compacité et la continuité uniforme des dérivées partielles de $L$.

Rappels : $E=C^1([0;1];V)$ avec la norme $\norm\gamma_E=\sup_t\norm{\gamma(t)}_V+\sup_t\norm{\gamma'(t)}_V$ ([[ch08-cadre-espace-courbes]]) ; $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$ ([[ch08-lagrangien-fonctionnelle]]) ; $\frac{\partial L}{\partial q}$, $\frac{\partial L}{\partial v}$ sont les différentielles partielles de $L$ par rapport à ses deuxième et troisième variables ([[ch05-differentielles-partielles]]), formes linéaires sur $V$ identifiées à des vecteurs de $V$ par le produit scalaire ; « $\hat L$ de classe $C^1$ » signifie que $\hat L$ est différentiable en tout point de $E$ et que $\gamma\mapsto d\hat L_\gamma$ est continue de $E$ dans $L(E;\R)$ ([[ch05-differentielle-def]]).

## Énoncé

**Proposition (poly, Question 2, p. 143).** Soient $(V,\langle\cdot,\cdot\rangle)$ un espace de Hilbert de dimension finie, $E=C^1([0;1];V)$ muni de $\norm\cdot_E$, $I$ un intervalle ouvert contenant $[0,1]$, $L:I\times V\times V\to\R$ de classe $C^1$, et $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$. Alors $\hat L:E\to\R$ est de classe $C^1$ et, pour tous $\gamma\in E$ et $h\in E$,
$$
d\hat L_\gamma(h)=\int_0^1\Big(\Big\langle\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big),h(t)\Big\rangle+\Big\langle\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big),h'(t)\Big\rangle\Big)\,dt .
$$

## Hypothèses

### H1 — $L$ est de classe $C^1$

**Rôle.** Elle fournit des différentielles partielles $\frac{\partial L}{\partial q}$, $\frac{\partial L}{\partial v}$ **continues** sur $I\times V\times V$, donc uniformément continues sur tout compact (théorème de Heine) ; c'est ce qui rend le reste $o(\norm h_E)$ uniformément en $t$, puis $\gamma\mapsto d\hat L_\gamma$ continue.

**Si on la retire.** Pour $V=\R$ et $L(u,q,v)=|q|$ (continue, non différentiable en $q=0$), $\hat L(\gamma)=\int_0^1|\gamma(t)|\,dt$. Pour la courbe constante $h=1$, $\hat L(0+sh)=|s|$. Si $\hat L$ était différentiable en $0$, la composée $s\mapsto\hat L(sh)$ serait dérivable en $0$ (règle de la chaîne, [[ch05-composition-differentielles]]) ; or $s\mapsto|s|$ ne l'est pas. Donc $\hat L$ n'est pas différentiable en $0$.

### H2 — La norme $C^1$ sur $E$

**Rôle.** Le terme $\frac{\partial L}{\partial v}\cdot h'(t)$ n'est contrôlé que si $\sup_t\norm{h'(t)}_V\le\norm h_E$ ; sans ce contrôle, une variation $h$ uniformément petite peut avoir une dérivée énorme.

**Si on la retire.** Munissons $E$ de la seule norme $\norm\gamma_\infty=\sup_t\norm{\gamma(t)}_V$ et prenons $L(u,q,v)=\frac12\norm v_V^2$. Pour $e\in V$ unitaire, $\gamma_n(t)=\frac1n\sin(n^2t)\,e$ vérifie $\norm{\gamma_n}_\infty\le\frac1n\to0$, mais $\hat L(\gamma_n)=\frac{n^2}2\int_0^1\cos^2(n^2t)\,dt=\frac{n^2}4+\frac{\sin(2n^2)}8\to+\infty\neq\hat L(0)=0$. $\hat L$ n'est pas continue en $0$ pour $\norm\cdot_\infty$, a fortiori pas différentiable.

### H3 — $V$ de dimension finie

**Rôle.** Les boules fermées de $V$ sont compactes, donc le pavé $C=[0;1]\times\bar B_V(0,R)\times\bar B_V(0,R)$ utilisé dans la preuve est compact.

**Si on la retire.** La conclusion reste vraie dans un espace de Hilbert quelconque, mais la preuve change : on remplace $C$ par le compact $K=\{(t,\gamma(t),\gamma'(t)) : t\in[0;1]\}$ (image continue de $[0;1]$, compact en toute dimension) et l'on utilise la « continuité uniforme au voisinage d'un compact » : pour toute fonction $g$ continue sur un espace métrique et tout compact $K$, pour tout $\eps>0$ il existe $\eta>0$ tel que $d(P,P_0)<\eta$ et $P_0\in K$ entraînent $\norm{g(P)-g(P_0)}<\eps$ (pour chaque $P_0\in K$, choisir $\eta_{P_0}>0$ tel que $\norm{g(P)-g(P_0)}<\eps/2$ sur $B(P_0,2\eta_{P_0})$ ; extraire de $K\subset\bigcup_{P_0\in K}B(P_0,\eta_{P_0})$ un recouvrement fini par des boules $B(P_i,\eta_i)$ et prendre $\eta=\min_i\eta_i$ : si $P_0\in B(P_i,\eta_i)$ et $d(P,P_0)<\eta$, alors $P,P_0\in B(P_i,2\eta_i)$ et $\norm{g(P)-g(P_0)}<\eps$). L'identification $V\simeq L(V;\R)$ reste fournie par le théorème de Riesz.

## Idée de la preuve

Pour chaque $t$, le théorème fondamental du calcul différentiel écrit l'accroissement $L(t,\gamma+h,\gamma'+h')-L(t,\gamma,\gamma')$ comme une intégrale des dérivées partielles le long du segment ; on compare au terme linéaire grâce à la continuité uniforme des dérivées partielles de $L$ sur un compact, ce qui donne un reste $\le\omega(\norm h_E)\norm h_E$ uniforme en $t$. La même majoration donne la continuité de $\gamma\mapsto d\hat L_\gamma$.

## Preuve

*Notations.* Pour $P=(u,q,v)\in I\times V\times V$, notons $\frac{\partial L}{\partial q}(P)$ et $\frac{\partial L}{\partial v}(P)$ les différentielles partielles de $L$ en $P$, et, pour $\gamma\in E$ et $t\in[0;1]$,
$$
A_\gamma(t)=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big),\qquad B_\gamma(t)=\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big),
$$
vus comme vecteurs de $V$. L'identification $L(V;\R)\simeq V$ est une isométrie (Cauchy-Schwarz, [[ch08-cadre-espace-courbes]]) : $|\langle w,k\rangle|\le\norm w_V\norm k_V$.

*Étape 0 : les dérivées partielles sont continues.* $L$ étant différentiable sur l'ouvert $I\times V\times V$, ses différentielles partielles existent ([[ch05-differentielles-partielles]]) : $\frac{\partial L}{\partial q}(P)=dL_P\circ\iota_2$ et $\frac{\partial L}{\partial v}(P)=dL_P\circ\iota_3$, où $\iota_2(k)=(0,k,0)$ et $\iota_3(w)=(0,0,w)$ sont les injections canoniques, et la formule (V.3.3) donne $dL_P(0,k,w)=\frac{\partial L}{\partial q}(P)(k)+\frac{\partial L}{\partial v}(P)(w)$. Comme $P\mapsto dL_P$ est continue ($L$ est $C^1$) et que $\norm{dL_P\circ\iota_i-dL_{P'}\circ\iota_i}\le\norm{dL_P-dL_{P'}}\,\norm{\iota_i}$, les applications $P\mapsto\frac{\partial L}{\partial q}(P)$ et $P\mapsto\frac{\partial L}{\partial v}(P)$ sont continues. En composant avec $t\mapsto(t,\gamma(t),\gamma'(t))$, continue, on obtient que $A_\gamma$ et $B_\gamma$ sont continues sur $[0;1]$ ; de même $t\mapsto L(t,\gamma(t),\gamma'(t))$ est continue, donc $\hat L(\gamma)$ est bien défini.

*Étape 1 : le candidat est une forme linéaire continue.* Posons $\ell_\gamma(h)=\int_0^1\big(\langle A_\gamma(t),h(t)\rangle+\langle B_\gamma(t),h'(t)\rangle\big)dt$ pour $h\in E$. L'intégrande est continue, $\ell_\gamma$ est linéaire, et
$$
|\ell_\gamma(h)|\le\Big(\sup_t\norm{A_\gamma(t)}_V+\sup_t\norm{B_\gamma(t)}_V\Big)\norm h_E ,
$$
donc $\ell_\gamma\in L(E;\R)$.

*Étape 2 : un compact et un module de continuité.* Fixons $\gamma\in E$, posons $R=\norm\gamma_E+1$ et
$$
C=[0;1]\times\bar B_V(0,R)\times\bar B_V(0,R)\subset I\times V\times V .
$$
$C$ est compact (produit de compacts : $V$ est de dimension finie). Les dérivées partielles étant continues, elles sont uniformément continues sur $C$ (Heine). Donc la quantité
$$
\omega(\delta)=\sup\Big\{\Big\|\frac{\partial L}{\partial q}(t,q,v)-\frac{\partial L}{\partial q}(t,\tilde q,\tilde v)\Big\|+\Big\|\frac{\partial L}{\partial v}(t,q,v)-\frac{\partial L}{\partial v}(t,\tilde q,\tilde v)\Big\| \ :\ (t,q,v),(t,\tilde q,\tilde v)\in C,\ \norm{q-\tilde q}_V\le\delta,\ \norm{v-\tilde v}_V\le\delta\Big\}
$$
tend vers $0$ quand $\delta\to0^+$.

*Étape 3 : différentiabilité en $\gamma$.* Soit $h\in E$ avec $\norm h_E\le1$, et $t\in[0;1]$. L'application $\Lambda_t:V\times V\to\R$, $(q,v)\mapsto L(t,q,v)$, est de classe $C^1$ sur l'ouvert $V\times V$ (composée de $L$ et de l'application affine $(q,v)\mapsto(t,q,v)$, [[ch05-composition-differentielles]]) et $d(\Lambda_t)_{(q,v)}(k,w)=\frac{\partial L}{\partial q}(t,q,v)(k)+\frac{\partial L}{\partial v}(t,q,v)(w)$. Le théorème fondamental du calcul différentiel ([[ch05-theoreme-fondamental]]) appliqué à $\Lambda_t$ entre $x=(\gamma(t),\gamma'(t))$ et $x+y$, $y=(h(t),h'(t))$, donne
$$
L\big(t,\gamma(t)+h(t),\gamma'(t)+h'(t)\big)-L\big(t,\gamma(t),\gamma'(t)\big)=\int_0^1\Big(\big\langle A^s(t),h(t)\big\rangle+\big\langle B^s(t),h'(t)\big\rangle\Big)ds,
$$
où $A^s(t)=\frac{\partial L}{\partial q}\big(t,\gamma(t)+sh(t),\gamma'(t)+sh'(t)\big)$ et $B^s(t)=\frac{\partial L}{\partial v}\big(t,\gamma(t)+sh(t),\gamma'(t)+sh'(t)\big)$. Le reste
$$
r(t)=L\big(t,\gamma(t)+h(t),\gamma'(t)+h'(t)\big)-L\big(t,\gamma(t),\gamma'(t)\big)-\langle A_\gamma(t),h(t)\rangle-\langle B_\gamma(t),h'(t)\rangle
$$
vaut donc $\int_0^1\big(\langle A^s(t)-A_\gamma(t),h(t)\rangle+\langle B^s(t)-B_\gamma(t),h'(t)\rangle\big)ds$. Pour $s\in[0;1]$, les points $(t,\gamma(t)+sh(t),\gamma'(t)+sh'(t))$ et $(t,\gamma(t),\gamma'(t))$ sont dans $C$ (leurs composantes dans $V$ ont une norme $\le\norm\gamma_E+\norm h_E\le R$) et diffèrent de $sh(t)$, $sh'(t)$, de normes $\le\norm h_E$. Par Cauchy-Schwarz,
$$
|r(t)|\le\sup_{s\in[0;1]}\Big(\norm{A^s(t)-A_\gamma(t)}_V\,\norm{h(t)}_V+\norm{B^s(t)-B_\gamma(t)}_V\,\norm{h'(t)}_V\Big)\le\omega(\norm h_E)\,\norm h_E .
$$
La fonction $r$ est continue ; en intégrant sur $[0;1]$ ([[ch05-integrale-fonctions-reglees]]),
$$
\big|\hat L(\gamma+h)-\hat L(\gamma)-\ell_\gamma(h)\big|=\Big|\int_0^1r(t)\,dt\Big|\le\omega(\norm h_E)\,\norm h_E=o(\norm h_E).
$$
Donc $\hat L$ est différentiable en $\gamma$ et $d\hat L_\gamma=\ell_\gamma$, ce qui est la formule annoncée.

*Étape 4 : continuité de $\gamma\mapsto d\hat L_\gamma$.* Soit $\tilde\gamma\in E$ avec $\delta=\norm{\tilde\gamma-\gamma}_E\le1$. Les points $(t,\tilde\gamma(t),\tilde\gamma'(t))$ sont dans $C$ et diffèrent de $(t,\gamma(t),\gamma'(t))$ d'au plus $\delta$ en chaque composante. Pour tout $h\in E$,
$$
\big|d\hat L_{\tilde\gamma}(h)-d\hat L_\gamma(h)\big|\le\int_0^1\Big(\norm{A_{\tilde\gamma}(t)-A_\gamma(t)}_V\norm{h(t)}_V+\norm{B_{\tilde\gamma}(t)-B_\gamma(t)}_V\norm{h'(t)}_V\Big)dt\le\omega(\delta)\,\norm h_E ,
$$
donc $\norm{d\hat L_{\tilde\gamma}-d\hat L_\gamma}_{L(E;\R)}\le\omega(\norm{\tilde\gamma-\gamma}_E)\to0$ quand $\tilde\gamma\to\gamma$. Ainsi $\hat L$ est de classe $C^1$. $\square$

## Preuve à trous

Fixons $\gamma\in E$ et notons $A_\gamma(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$, $B_\gamma(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$, continues car $L$ est $C^1$. Avec $R=\norm\gamma_E+1$, on introduit <trou indice="où vivent tous les points (t, γ+sh, γ'+sh') quand ‖h‖ ≤ 1 ?">le compact $C=[0;1]\times\bar B_V(0,R)\times\bar B_V(0,R)$, sur lequel les dérivées partielles de $L$ sont uniformément continues (Heine), de module $\omega(\delta)\to0$</trou>.

Pour $\norm h_E\le1$ et $t$ fixé, le théorème fondamental appliqué à $(q,v)\mapsto L(t,q,v)$ donne <trou indice="intégrale de la différentielle le long du segment">$L(t,\gamma+h,\gamma'+h')-L(t,\gamma,\gamma')=\int_0^1\big(\langle A^s(t),h(t)\rangle+\langle B^s(t),h'(t)\rangle\big)ds$, avec les dérivées partielles évaluées en $(t,\gamma(t)+sh(t),\gamma'(t)+sh'(t))$</trou>. En retranchant $\langle A_\gamma(t),h(t)\rangle+\langle B_\gamma(t),h'(t)\rangle$, Cauchy-Schwarz donne pour le reste <trou>$|r(t)|\le\omega(\norm h_E)\,\norm h_E$, uniformément en $t$, car $\norm{h(t)}_V$, $\norm{h'(t)}_V\le\norm h_E$</trou>. En intégrant : $\hat L(\gamma+h)-\hat L(\gamma)-\int_0^1(\langle A_\gamma,h\rangle+\langle B_\gamma,h'\rangle)=o(\norm h_E)$, d'où la formule de $d\hat L_\gamma$.

Enfin, pour $\norm{\tilde\gamma-\gamma}_E\le1$, <trou indice="même module de continuité, appliqué entre γ et γ̃">$\norm{d\hat L_{\tilde\gamma}-d\hat L_\gamma}\le\omega(\norm{\tilde\gamma-\gamma}_E)\to0$</trou> : $\hat L$ est $C^1$. $\square$

## Exemples

* **Énergie cinétique, calcul exact.** $L=\frac12\norm v_V^2$ : $\frac{\partial L}{\partial q}=0$, $\frac{\partial L}{\partial v}(u,q,v)\simeq v$, donc $d\hat L_\gamma(h)=\int_0^1\langle\gamma'(t),h'(t)\rangle\,dt$. Ici on peut tout calculer : $\hat L(\gamma+h)=\hat L(\gamma)+\int_0^1\langle\gamma',h'\rangle\,dt+\frac12\int_0^1\norm{h'}_V^2\,dt$, et le reste vérifie $0\le\frac12\int_0^1\norm{h'}^2\le\frac12\norm h_E^2=o(\norm h_E)$.
* **Vérification sur un exemple numérique.** $V=\R$, $L(u,q,v)=uq+v^2$, $\gamma(t)=t$, $h(t)=t(1-t)$. On a $\frac{\partial L}{\partial q}=u$, $\frac{\partial L}{\partial v}=2v$, donc la formule donne $d\hat L_\gamma(h)=\int_0^1\big(t\cdot t(1-t)+2\cdot(1-2t)\big)dt=\big(\tfrac13-\tfrac14\big)+0=\tfrac1{12}$. Calcul direct : $\hat L(\gamma+sh)=\int_0^1\big(t^2+st^2(1-t)+(1+s(1-2t))^2\big)dt=\tfrac43+\tfrac s{12}+\tfrac{s^2}3$ (car $\int_0^1(1-2t)\,dt=0$ et $\int_0^1(1-2t)^2dt=\frac13$), de dérivée $\frac1{12}$ en $s=0$. ✓
* **Mécanique.** $V=\R$, $L=\frac12v^2-U(q)$ avec $U$ de classe $C^1$ : $d\hat L_\gamma(h)=\int_0^1\big(\gamma'(t)h'(t)-U'(\gamma(t))h(t)\big)dt$. Pour $h\in E_{0,0}$ et $\gamma$ de classe $C^2$, une intégration par parties donne $d\hat L_\gamma(h)=-\int_0^1\big(\gamma''+U'(\gamma)\big)h\,dt$ : on voit apparaître l'équation de Newton ([[ch08-equation-newton]]).

## Pièges

* > ⚠️ Ne pas oublier le terme en $h'(t)$ : $\hat L$ dépend de $\gamma'$, donc la variation de $\gamma$ induit une variation de la vitesse. C'est ce terme qui produit la dérivée $\frac{d}{dt}$ dans l'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]).
* > ⚠️ La formule vaut pour **tout** $h\in E$ ; on ne peut intégrer par parties pour faire disparaître $h'$ que si $t\mapsto\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ est dérivable (ce qui n'est pas acquis pour $\gamma$ seulement $C^1$ : c'est tout l'intérêt de [[ch08-du-bois-reymond-derivee]]), et un terme de bord $\big[\langle B_\gamma,h\rangle\big]_0^1$ apparaît si $h\notin E_{0,0}$.
* « Calculer $d\hat L_\gamma$ » en dérivant $s\mapsto\hat L(\gamma+sh)$ en $s=0$ donne seulement la **dérivée directionnelle** ; elle identifie la différentielle si l'on sait déjà que $\hat L$ est différentiable, mais ne prouve pas la différentiabilité (encore moins le caractère $C^1$) : il faut le contrôle uniforme du reste.
* Les dérivées partielles sont prises par rapport aux variables $q$ et $v$ de $L$, puis évaluées en $(t,\gamma(t),\gamma'(t))$ ; il n'y a pas de terme en $\frac{\partial L}{\partial u}$, car la variation $h$ ne touche pas au temps.
* La continuité de $\gamma\mapsto d\hat L_\gamma$ s'entend pour la norme d'opérateur sur $L(E;\R)$, pas seulement « $d\hat L_\gamma(h)$ continu en $\gamma$ pour chaque $h$ ».

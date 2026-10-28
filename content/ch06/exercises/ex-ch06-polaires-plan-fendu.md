---
id: ex-ch06-polaires-plan-fendu
type: exercise
chapters: [6]
title: Coordonnées polaires, difféomorphisme local et global
source: "Classique (coordonnées polaires, exemple standard d'inversion locale ou globale) ; questions 3 et 4 rédigées pour ce site"
difficulty: 2
time: 20
tools: [ch06-inversion-locale, ch06-inversion-globale, ch06-diffeomorphisme-def, ch05-matrice-jacobienne, ch05-composition-differentielles]
---
## Énoncé

On considère l'application « coordonnées polaires »
$$
P:\ ]0,+\infty[\times\R\to\R^2,\qquad P(r,\theta)=(r\cos\theta,\ r\sin\theta),
$$
et l'on note $\mathcal D=\R^2\setminus\big(\,]-\infty,0]\times\{0\}\big)$ le plan privé de la demi-droite fermée des réels négatifs.

1. Montrer que $P$ est de classe $C^\infty$ et que, pour tout $(r_0,\theta_0)\in\,]0,+\infty[\times\R$, il existe un voisinage ouvert $U_0$ de $(r_0,\theta_0)$ et un voisinage ouvert $V_0$ de $(x_0,y_0)=P(r_0,\theta_0)$ tels que $P$ induise un $C^\infty$-difféomorphisme de $U_0$ sur $V_0$. Exprimer la matrice jacobienne de la réciproque locale au point $(x_0,y_0)$ en fonction de $x_0$ et $y_0$ seulement.
2. $P$ est-elle un $C^\infty$-difféomorphisme de $]0,+\infty[\times\R$ sur son image ?
3. Soit $\Omega=\,]0,+\infty[\times]-\pi,\pi[$. Montrer que $P$ induit un $C^\infty$-difféomorphisme de $\Omega$ sur $\mathcal D$. En déduire qu'il existe une unique fonction $\Theta:\mathcal D\to\,]-\pi,\pi[$ telle que
$$
(x,y)=\sqrt{x^2+y^2}\,\big(\cos\Theta(x,y),\ \sin\Theta(x,y)\big)\qquad\big((x,y)\in\mathcal D\big),
$$
que $\Theta$ est de classe $C^\infty$, et calculer $\dfrac{\partial\Theta}{\partial x}$ et $\dfrac{\partial\Theta}{\partial y}$.
4. Justifier la formule $\Theta(x,y)=2\arctan\dfrac{y}{x+\sqrt{x^2+y^2}}$ sur $\mathcal D$ et vérifier sur elle le résultat de la question 3.

## Indices

### Indice 1
Question 1 : la conclusion demandée est mot pour mot celle d'un théorème du cours ; il suffit d'en vérifier l'hypothèse sur la différentielle. Questions 2 et 3 : passer du local au global demande une hypothèse de plus. Laquelle ?

### Indice 2
Le jacobien de $P$ vaut $r$, qui ne s'annule pas. Le théorème d'inversion locale ([[ch06-inversion-locale]]) donne alors la question 1. Le théorème d'inversion globale ([[ch06-inversion-globale]]) demande en plus que $P$ soit **injective** : c'est faux sur $]0,+\infty[\times\R$ (périodicité en $\theta$), et vrai sur $\Omega$.

### Indice 3
Pour la jacobienne de la réciproque, dériver $P^{-1}\circ P=\id$ : on trouve $\big(dP_{(r_0,\theta_0)}\big)^{-1}$. Inverser la matrice $2\times2$, puis remplacer $\cos\theta_0=x_0/r_0$, $\sin\theta_0=y_0/r_0$ et $r_0=\sqrt{x_0^2+y_0^2}$. Pour 4., utiliser $\tan(\theta/2)=\sin\theta/(1+\cos\theta)$.

## Corrigé

**1.** Les composantes $(r,\theta)\mapsto r\cos\theta$ et $(r,\theta)\mapsto r\sin\theta$ ont des dérivées partielles de tous ordres continues : $P$ est $C^\infty$ sur l'ouvert $]0,+\infty[\times\R$. Sa matrice jacobienne ([[ch05-matrice-jacobienne]]) est
$$
\mathrm{Jac}\,P(r,\theta)=\begin{pmatrix}\cos\theta & -r\sin\theta\\ \sin\theta & r\cos\theta\end{pmatrix},\qquad \det \mathrm{Jac}\,P(r,\theta)=r\cos^2\theta+r\sin^2\theta=r .
$$
Comme $r>0$, $dP_{(r_0,\theta_0)}$ est un isomorphisme de $\R^2$ sur $\R^2$ ; en dimension finie, une application linéaire est continue ainsi que son inverse, donc c'est un isomorphisme bicontinu. Hypothèses du théorème d'inversion locale ([[ch06-inversion-locale]], poly Théorème VI.3.2, p. 120) : $\R^2$ est un espace de Banach réel, $P$ est de classe $C^k$ pour tout $k$, et $dP_{(r_0,\theta_0)}$ est un isomorphisme bicontinu. On obtient $U_0$, $V_0$ et un $C^\infty$-difféomorphisme $P|_{U_0}:U_0\to V_0$ ([[ch06-diffeomorphisme-def]]).

Notons $Q=(P|_{U_0})^{-1}:V_0\to U_0$. En différentiant $Q\circ P=\id_{U_0}$ en $(r_0,\theta_0)$ (règle de la chaîne, [[ch05-composition-differentielles]]) : $dQ_{(x_0,y_0)}\circ dP_{(r_0,\theta_0)}=\id$, donc
$$
\mathrm{Jac}\,Q(x_0,y_0)=\big(\mathrm{Jac}\,P(r_0,\theta_0)\big)^{-1}=\frac1{r_0}\begin{pmatrix} r_0\cos\theta_0 & r_0\sin\theta_0\\ -\sin\theta_0 & \cos\theta_0\end{pmatrix}
=\begin{pmatrix} \dfrac{x_0}{\rho_0} & \dfrac{y_0}{\rho_0}\\ -\dfrac{y_0}{\rho_0^2} & \dfrac{x_0}{\rho_0^2}\end{pmatrix},\qquad \rho_0=\sqrt{x_0^2+y_0^2},
$$
car $r_0=\rho_0$ (module de $P(r_0,\theta_0)$), $\cos\theta_0=x_0/\rho_0$ et $\sin\theta_0=y_0/\rho_0$. On vérifie le produit : la première ligne fois la première colonne de $\mathrm{Jac}\,P$ donne $\cos^2\theta_0+\sin^2\theta_0=1$, etc.

**2.** Non : $P(r,\theta+2\pi)=P(r,\theta)$, donc $P$ n'est pas injective, et un difféomorphisme est en particulier une bijection. Ainsi $P$ est un difféomorphisme **local** au voisinage de chaque point (question 1) sans être un difféomorphisme sur son image. L'inversion locale ne donne aucune information globale.

**3.** *Injectivité sur $\Omega$ et image.* Soit $(x,y)\in\R^2$ et $(r,\theta)\in\Omega$ avec $P(r,\theta)=(x,y)$. Alors nécessairement $r=\sqrt{x^2+y^2}$, donc $(x,y)\neq(0,0)$, et $(\cos\theta,\sin\theta)=(x/r,y/r)$. Or l'application $\theta\mapsto(\cos\theta,\sin\theta)$ est une bijection de $]-\pi,\pi]$ sur le cercle unité. Elle envoie $\pi$ sur $(-1,0)$, donc $]-\pi,\pi[$ est envoyé bijectivement sur le cercle privé de $(-1,0)$. Par conséquent :
* si $(x,y)\in\mathcal D$, alors $(x,y)\ne(0,0)$ et $(x/r,y/r)\neq(-1,0)$ (sinon $y=0$ et $x=-r<0$), et il existe un **unique** $(r,\theta)\in\Omega$ tel que $P(r,\theta)=(x,y)$ ;
* si $(x,y)\notin\mathcal D$, c'est-à-dire $y=0$ et $x\le0$, il n'y en a aucun ($x=0$ forcerait $r=0$, et $x<0$ forcerait $\theta\equiv\pi \pmod{2\pi}$).

Donc $P|_\Omega$ est injective et $P(\Omega)=\mathcal D$.

*Inversion globale.* $\Omega$ est un ouvert de $\R^2$, $P|_\Omega$ est $C^\infty$ et injective, et $dP_{(r,\theta)}$ est un isomorphisme bicontinu en tout point (question 1). Le théorème d'inversion globale ([[ch06-inversion-globale]], poly Corollaire VI.3.3, p. 120) appliqué pour tout $k$ montre que $P(\Omega)=\mathcal D$ est ouvert (ce qu'on voit aussi directement) et que la réciproque $P|_\Omega^{-1}:\mathcal D\to\Omega$ est de classe $C^k$ pour tout $k$. Donc $P|_\Omega$ est un $C^\infty$-difféomorphisme de $\Omega$ sur $\mathcal D$.

*La fonction $\Theta$.* La relation demandée équivaut à $P\big(\sqrt{x^2+y^2},\Theta(x,y)\big)=(x,y)$ avec $\big(\sqrt{x^2+y^2},\Theta(x,y)\big)\in\Omega$. Par l'injectivité ci-dessus, $\Theta$ existe, est unique et vaut la seconde composante de $P|_\Omega^{-1}$. Elle est donc $C^\infty$, et ses dérivées partielles forment la seconde ligne de la jacobienne de la réciproque, calculée en 1. :
$$
\frac{\partial\Theta}{\partial x}(x,y)=-\frac{y}{x^2+y^2},\qquad \frac{\partial\Theta}{\partial y}(x,y)=\frac{x}{x^2+y^2}.
$$

**4.** Soit $(x,y)\in\mathcal D$, $\rho=\sqrt{x^2+y^2}$ et $\theta=\Theta(x,y)\in\,]-\pi,\pi[$. Alors $\theta/2\in\,]-\pi/2,\pi/2[$, $1+\cos\theta>0$, et
$$
\tan\frac\theta2=\frac{\sin\theta}{1+\cos\theta}=\frac{y/\rho}{1+x/\rho}=\frac{y}{x+\rho}.
$$
Le dénominateur est $>0$ sur $\mathcal D$ : $\rho\ge|x|$, avec $x+\rho=0$ seulement si $y=0$ et $x\le0$. Comme $\arctan$ est la réciproque de $\tan$ sur $]-\pi/2,\pi/2[$, on a $\Theta=2\arctan q$ avec $q=y/(x+\rho)$. Calculons, en utilisant $\partial_x\rho=x/\rho$, $\partial_y\rho=y/\rho$ et $\rho^2-y^2=x^2$ :
$$
\partial_y q=\frac{(x+\rho)-y^2/\rho}{(x+\rho)^2}=\frac{x(x+\rho)}{\rho(x+\rho)^2}=\frac{x}{\rho(x+\rho)},\qquad
\partial_x q=-\frac{y(1+x/\rho)}{(x+\rho)^2}=-\frac{y}{\rho(x+\rho)},
$$
$$
1+q^2=\frac{(x+\rho)^2+y^2}{(x+\rho)^2}=\frac{2\rho(x+\rho)}{(x+\rho)^2}=\frac{2\rho}{x+\rho}.
$$
D'où $\partial_y\Theta=\dfrac{2\,\partial_yq}{1+q^2}=\dfrac{x}{\rho^2}$ et $\partial_x\Theta=\dfrac{2\,\partial_xq}{1+q^2}=-\dfrac{y}{\rho^2}$, ce qui est conforme à la question 3.

## Pièges et variantes

* > ⚠️ « $dP$ inversible en tout point » ne suffit pas pour un difféomorphisme global : il faut en plus l'**injectivité** (question 2). C'est exactement la différence entre [[ch06-inversion-locale]] et [[ch06-inversion-globale]].
* Ne pas oublier de **déterminer l'image** : le théorème d'inversion globale dit que $P(\Omega)$ est ouvert, mais pas ce qu'elle vaut. Il faut la calculer à la main (ici $\mathcal D$).
* La jacobienne de la réciproque se lit en $(x_0,y_0)=P(r_0,\theta_0)$ : c'est l'inverse de $\mathrm{Jac}\,P$ **au point antécédent**, pas au point $(x_0,y_0)$.
* Régularité $C^\infty$ : si l'on applique le théorème avec $k=1$ seulement, on obtient $Q$ de classe $C^1$ avec $dQ_y=(dP_{Q(y)})^{-1}$. Comme $L\mapsto L^{-1}$ est $C^\infty$ ([[ch05-inversion-c-infini]]), une récurrence donne $Q$ de classe $C^k$ pour tout $k$.
* Variante : coordonnées sphériques $(r,\theta,\varphi)\mapsto(r\cos\theta\cos\varphi,\,r\sin\theta\cos\varphi,\,r\sin\varphi)$. Le jacobien vaut $r^2\cos\varphi$. Le difféomorphisme global est obtenu sur $]0,+\infty[\times]-\pi,\pi[\times]-\pi/2,\pi/2[$, vers $\R^3$ privé du demi-plan fermé $\{y=0,\ x\le0\}$.
* Variante complexe : $\exp:\C\to\C^\times$ est $P$ composée avec $(s,\theta)\mapsto(e^s,\theta)$. La fonction $\Theta$ est la partie imaginaire de la détermination principale du logarithme ([[ch02-logarithme-determination-principale-def]]).

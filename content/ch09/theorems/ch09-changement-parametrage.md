---
id: ch09-changement-parametrage
type: proposition
chapter: 9
title: Le changement de paramétrage est un $C^k$-difféomorphisme
ref: Proposition IX.6.1
page: 158
importance: 3
depends: [ch09-redressement-local, ch06-inversion-locale, ch09-sous-variete-def, ch05-composition-differentielles]
tags: [sous-variete, changement-de-parametrage, diffeomorphisme, carte, redressement]
---
## Intuition

> 💡 Deux géographes cartographient la même région de la Terre avec deux cartes différentes (par exemple latitude/longitude et projection stéréographique). Le **changement de carte** dit : « le point de coordonnées $(u,v)$ sur ma carte a pour coordonnées $\theta(u,v)$ sur la tienne ». Le résultat : $\theta$ est toujours **lisse, bijectif, d'inverse lisse**. C'est ce qui permet de définir la différentiabilité sur une sous-variété « dans une carte » sans que la réponse dépende de la carte choisie.

Rappels ([[ch09-sous-variete-def]]) : un **paramétrage local** de $S$ (sous-variété de dimension $m$) est une application $x:U\to\R^N$, $U$ ouvert de $\R^m$, de classe $C^k$, immersive ($dx_q$ injective), qui est un homéomorphisme de $U$ sur $V\cap S$ ($V$ ouvert de $\R^N$) ; son inverse est la **carte** $x^{-1}$. Un **$C^k$-difféomorphisme** entre ouverts de $\R^m$ est une bijection $C^k$ d'inverse $C^k$ ([[ch06-diffeomorphisme-def]]).

La difficulté : $\theta=x_1^{-1}\circ x_2$ fait intervenir la carte $x_1^{-1}$, définie sur un morceau de $S$ seulement, où « différentiable » n'a encore **aucun sens**. On contourne en prolongeant $x_1^{-1}$ à un ouvert de $\R^N$ grâce au redressement ([[ch09-redressement-local]]).

## Énoncé

**Proposition (poly, Proposition IX.6.1, p. 158).** Soit $p$ un point d'une sous-variété $S$ de dimension $m$ de $\R^N$ et soient
$$
x_1:U_1\to S,\qquad x_2:U_2\to S
$$
deux paramétrages de $S$ au voisinage de $p$. Notons $W=x_1(U_1)\cap x_2(U_2)$. C'est un voisinage de $p$ dans $S$, et le **changement de paramétrage**
$$
\theta=x_1^{-1}\circ x_2:\ x_2^{-1}(W)\longrightarrow x_1^{-1}(W)
$$
est un homéomorphisme. Si les deux paramétrages sont de classe $C^k$, $k\ge1$, le changement de paramétrage est un $C^k$-difféomorphisme.

## Hypothèses

### H1 — $x_1$ et $x_2$ sont des immersions (condition de régularité)

**Rôle.** C'est l'injectivité de $d(x_1)_{q_1}$ qui permet de construire le redressement $F(u,t)=x_1(u)+\varphi(t)$ et de l'inverser localement ; elle sert symétriquement pour $x_2$ (régularité de $\theta^{-1}$).

**Si on la retire.** $S=\R$ (sous-variété de dimension $1$ de $\R$), $x_2(t)=t$ et $x_1(t)=t^3$ sur $U_1=U_2=\R$ : $x_1$ est $C^\infty$, homéomorphisme de $\R$ sur $S$, mais $x_1'(0)=0$. Le « changement de paramétrage » $\theta(t)=x_1^{-1}(x_2(t))=t^{1/3}$ est un homéomorphisme non dérivable en $0$.

### H2 — $x_1$, $x_2$ sont des homéomorphismes sur des ouverts de $S$

**Rôle.** Elle donne un sens à $x_1^{-1}$, rend $W$ ouvert dans $S$ et $\theta$ continu, et sert dans le point clé de la preuve : pour $q$ proche de $q_2$, $x_2(q)$ tombe dans $x_1(U')$ (ouvert de $S$), donc **sur la bonne nappe**.

**Si on la retire.** Sans injectivité, $x_1^{-1}$ n'existe pas : $x_1(t)=(\cos t,\sin t)$ sur $\R$ est une immersion $C^\infty$ à valeurs dans $\mathbb S^1$, mais un point de $\mathbb S^1$ a une infinité d'antécédents et $\theta$ n'est pas défini. (En revanche, pour une immersion $C^k$ **injective** d'un ouvert de $\R^m$ à valeurs dans $S$, de même dimension $m$, la propriété d'homéomorphisme sur un ouvert de $S$ est automatique : en composant avec un redressement $\Psi$ de $S$, on obtient $\Psi\circ x_1=(g,0)$ avec $dg$ inversible, et l'inversion locale montre que $x_1$ est ouverte dans $S$.)

### H3 — classe $C^k$, $k\ge1$, des deux paramétrages

**Rôle.** Elle donne la classe du redressement $\Phi$ (inversion locale $C^k$) et de $x_2$, donc de $\theta=p_1\circ\Phi\circ x_2$.

**Si on la retire.** La classe de $\theta$ est la plus petite des deux classes, pas mieux : $S=\R$, $x_1(t)=t$ ($C^\infty$) et $x_2(t)=t+t|t|$, de dérivée $1+2|t|\ge1$ continue : $x_2$ est un paramétrage $C^1$ (immersion, bijection strictement croissante de $\R$ sur $\R$, donc homéomorphisme). Alors $\theta=x_2$ est un $C^1$-difféomorphisme, mais pas $C^2$ ($\theta'(t)=1+2|t|$ n'est pas dérivable en $0$). Sans aucune différentiabilité, il ne reste que la première conclusion : $\theta$ est un homéomorphisme.

## Idée de la preuve

$\theta$ est un homéomorphisme comme composée d'homéomorphismes. Pour la régularité, on prolonge la carte $x_1^{-1}$ en l'application $p_1\circ\Phi$, définie sur un ouvert de $\R^N$ et $C^k$, où $\Phi$ est l'inverse du redressement $F(u,t)=x_1(u)+\varphi(t)$ ; alors $\theta=p_1\circ\Phi\circ x_2$ localement, et on échange les rôles pour $\theta^{-1}$.

## Preuve

**$W$ est un voisinage de $p$ dans $S$ et $\theta$ est un homéomorphisme.** Par définition, $x_i(U_i)=V_i\cap S$ avec $V_i$ ouvert de $\R^N$ : c'est un ouvert de $S$ contenant $p$, donc $W=x_1(U_1)\cap x_2(U_2)$ est un ouvert de $S$ contenant $p$. Comme $x_i$ est un homéomorphisme de $U_i$ sur $x_i(U_i)$, $x_i^{-1}(W)$ est un ouvert de $U_i$ et $x_i$ se restreint en un homéomorphisme de $x_i^{-1}(W)$ sur $W$. Donc $\theta=x_1^{-1}\circ x_2:x_2^{-1}(W)\to x_1^{-1}(W)$ est un homéomorphisme, d'inverse $\theta^{-1}=x_2^{-1}\circ x_1:x_1^{-1}(W)\to x_2^{-1}(W)$.

**Réduction.** Supposons $x_1,x_2$ de classe $C^k$. Comme $\theta$ est bijective, il suffit de montrer que $\theta$ est de classe $C^k$ au voisinage de chaque point de $x_2^{-1}(W)$ : en échangeant les rôles de $x_1$ et $x_2$, on obtiendra que $\theta^{-1}=x_2^{-1}\circ x_1$ est aussi $C^k$, donc que $\theta$ est un $C^k$-difféomorphisme.

**Le redressement de $x_1$.** Soit $p'\in W$ (le poly le fait en $p$, mais $x_1,x_2$ sont aussi des paramétrages au voisinage de $p'$), $q_1=x_1^{-1}(p')$, $q_2=x_2^{-1}(p')$. Reprenons la preuve de [[ch09-redressement-local]] : soit $H$ un supplémentaire de $d(x_1)_{q_1}(\R^m)$ dans $\R^N$ et $\varphi:\R^{N-m}\to H$ un isomorphisme linéaire ; on pose
$$
F:U_1\times\R^{N-m}\to\R^N,\qquad F(u,t)=x_1(u)+\varphi(t).
$$
$F$ est $C^k$ et $dF_{(q_1,0)}(h,w)=d(x_1)_{q_1}(h)+\varphi(w)$ est un isomorphisme. Par le théorème d'inversion locale ([[ch06-inversion-locale]]), il existe des ouverts $U'\subset U_1$ contenant $q_1$, $Y\subset\R^{N-m}$ contenant $0$, et $V'\subset\R^N$ contenant $p'$ tels que $F:U'\times Y\to V'$ soit un $C^k$-difféomorphisme. Notons $\Phi=F^{-1}:V'\to U'\times Y$ et $p_1:\R^m\times\R^{N-m}\to\R^m$, $p_1(u,t)=u$.

**Le point clé : $\theta=p_1\circ\Phi\circ x_2$ près de $q_2$.** $x_1(U')$ est un ouvert de $S$ (image de l'ouvert $U'$ par l'homéomorphisme $x_1$), contenu dans $W$... pas forcément, mais $x_1(U')\cap W\cap V'$ est un ouvert de $S$ contenant $p'$. Par continuité de $x_2$, l'ensemble
$$
O=x_2^{-1}\big(x_1(U')\cap W\cap V'\big)
$$
est un ouvert de $U_2$ contenant $q_2$, inclus dans $x_2^{-1}(W)$. Soit $q\in O$. Alors $x_2(q)\in x_1(U')$ : il existe un unique $u\in U'$ avec $x_2(q)=x_1(u)$, et $u=x_1^{-1}(x_2(q))=\theta(q)$. De plus $x_2(q)=x_1(u)+\varphi(0)=F(u,0)$ avec $(u,0)\in U'\times Y$, et $x_2(q)\in V'$ ; comme $F$ est une bijection de $U'\times Y$ sur $V'$, $\Phi(x_2(q))=(u,0)$. Donc
$$
\theta(q)=p_1\big(\Phi(x_2(q))\big)\qquad\text{pour tout } q\in O.
$$
Sur $O$, $\theta$ est la composée de $x_2|_O:O\to V'$ ($C^k$), de $\Phi$ ($C^k$) et de $p_1$ (linéaire) : elle est $C^k$ sur $O$ ([[ch05-composition-differentielles]], itérée).

**Conclusion.** $\theta$ est $C^k$ au voisinage de tout point de $x_2^{-1}(W)$, donc sur $x_2^{-1}(W)$ ; par symétrie $\theta^{-1}$ est $C^k$ sur $x_1^{-1}(W)$ : $\theta$ est un $C^k$-difféomorphisme. $\square$

*Pourquoi on ne peut pas conclure directement :* $\theta=x_1^{-1}\circ x_2$ est une composée, mais $x_1^{-1}$ n'est définie que sur la partie $W$ de $S$, qui n'est pas un ouvert de $\R^N$ ; la règle de la chaîne ne s'applique pas. L'application $p_1\circ\Phi$, elle, est définie sur l'ouvert $V'$ de $\R^N$ et **coïncide avec $x_1^{-1}$ sur $x_1(U')\cap V'$** : c'est un prolongement $C^k$ de la carte.

## Preuve à trous

$W=x_1(U_1)\cap x_2(U_2)$ est un ouvert de $S$ contenant $p$, et $\theta=x_1^{-1}\circ x_2$ est un homéomorphisme comme <trou>composée des homéomorphismes $x_2:x_2^{-1}(W)\to W$ et $x_1^{-1}:W\to x_1^{-1}(W)$</trou>. Il suffit de montrer que $\theta$ est $C^k$ près de chaque point, <trou indice="que donne l'échange des rôles de x_1 et x_2 ?">puis d'échanger $x_1$ et $x_2$ pour obtenir que $\theta^{-1}$ est $C^k$</trou>.

Soit $p'\in W$, $q_i=x_i^{-1}(p')$. On pose $F(u,t)=x_1(u)+\varphi(t)$, où $\varphi$ est un isomorphisme de $\R^{N-m}$ sur un supplémentaire de $d(x_1)_{q_1}(\R^m)$ ; $dF_{(q_1,0)}$ est inversible, donc <trou indice="quel théorème ?">par inversion locale, $F$ est un $C^k$-difféomorphisme de $U'\times Y\ni(q_1,0)$ sur un ouvert $V'\ni p'$, d'inverse $\Phi$</trou>.

Pour $q$ dans l'ouvert $O=x_2^{-1}(x_1(U')\cap W\cap V')\ni q_2$, on a $x_2(q)=x_1(\theta(q))=F(\theta(q),0)$, donc <trou indice="exprimer θ sans utiliser la carte x_1^{-1}">$\theta(q)=p_1(\Phi(x_2(q)))$, composée d'applications $C^k$ définies sur des ouverts</trou>. Ainsi $\theta$ est $C^k$ sur $O$, ce qui conclut. $\square$

## Exemples

* **Cercle : angle contre abscisse.** $x_1(t)=(\cos t,\sin t)$, $t\in U_1=]0,\pi[$, et $x_2(u)=(u,\sqrt{1-u^2})$, $u\in U_2=]-1,1[$, paramètrent tous deux le demi-cercle supérieur $W$. Le changement de paramétrage est $\theta(u)=x_1^{-1}(x_2(u))=\arccos u$, de $]-1,1[$ sur $]0,\pi[$ : $C^\infty$, de dérivée $-1/\sqrt{1-u^2}\neq0$, d'inverse $t\mapsto\cos t$ : c'est bien un $C^\infty$-difféomorphisme.
* **Sphère : coordonnées sphériques contre graphe.** $x_1(\theta,\varphi)=(\cos\theta\cos\varphi,\sin\theta\cos\varphi,\sin\varphi)$ sur $]-\frac\pi2,\frac\pi2[^2$ et $x_2(a,b)=(\sqrt{1-a^2-b^2},a,b)$ sur $\{a^2+b^2<1\}$ paramètrent tous deux l'hémisphère $\{X>0\}$. Ici $x_2^{-1}\circ x_1(\theta,\varphi)=(\sin\theta\cos\varphi,\ \sin\varphi)$, de jacobien $\det\begin{pmatrix}\cos\theta\cos\varphi&-\sin\theta\sin\varphi\\0&\cos\varphi\end{pmatrix}=\cos\theta\cos^2\varphi>0$, et $x_1^{-1}\circ x_2(a,b)=\big(\arcsin\frac{a}{\sqrt{1-b^2}},\ \arcsin b\big)$ : deux applications $C^\infty$ inverses l'une de l'autre.
* **Ce que le résultat permet.** Une propriété de $f\circ x$ invariante par composition à droite par un $C^k$-difféomorphisme (être différentiable, être $C^r$ avec $r\le k$, avoir une différentielle nulle, de rang donné...) ne dépend pas du paramétrage $x$ : c'est la base des définitions [[ch09-fonction-differentiable-sur-sous-variete-def]], [[ch09-remarque-un-parametrage-suffit]], [[ch09-application-cr-entre-sous-varietes-def]].

## Pièges

* > ⚠️ On ne peut pas écrire « $\theta=x_1^{-1}\circ x_2$ est $C^k$ comme composée » : $x_1^{-1}$ n'est définie que sur une partie de $S$, où la différentiabilité n'a pas (encore) de sens. Tout l'intérêt de la preuve est de remplacer $x_1^{-1}$ par $p_1\circ\Phi$, défini sur un ouvert de $\R^N$.
* > ⚠️ La condition d'immersion est indispensable : $t\mapsto t^3$ est un homéomorphisme $C^\infty$ de $\R$ sur $\R$ mais pas un paramétrage, et le « changement » $t\mapsto t^{1/3}$ n'est pas différentiable.
* $\theta$ est défini sur $x_2^{-1}(W)$, pas sur tout $U_2$ ; il faut toujours restreindre aux points dont l'image est couverte par les deux paramétrages.
* Le difféomorphisme $\theta$ relie deux ouverts de $\R^m$ : on ne compare jamais $U_1$ et $U_2$ tout entiers. Et $d\theta_{q_2}$ est inversible, donc $d(x_2)_{q_2}=d(x_1)_{q_1}\circ d\theta_{q_2}$ et $d(x_1)_{q_1}$ ont la même image (ce sera l'espace tangent, [[ch09-espace-tangent-image-dx]]).

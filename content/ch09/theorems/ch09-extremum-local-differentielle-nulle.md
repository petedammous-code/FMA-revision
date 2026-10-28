---
id: ch09-extremum-local-differentielle-nulle
type: theorem
chapter: 9
title: "Condition nécessaire d'extremum local : $df_p=0$ sur $T_pS$"
ref: Théorème IX.7.31
page: 168
importance: 3
depends: [ch09-fonction-differentiable-sur-sous-variete-def, ch09-differentielle-entre-sous-varietes-def, ch09-espace-tangent-image-dx]
tags: [extremum, point-critique, sous-variete, espace-tangent, optimisation, condition-necessaire]
---
## Intuition

> 💡 Au sommet d'une colline (maximum de l'altitude), le sol est « plat » dans **toutes les directions où l'on peut marcher** : si une direction tangente faisait monter l'altitude au premier ordre, on pourrait monter encore en avançant, et si elle la faisait descendre, on monterait en reculant. Sur une sous-variété, les directions permises sont exactement les vecteurs de l'espace tangent $T_pS$ : la différentielle doit s'y annuler. Rien n'est demandé dans les directions **normales**, où l'on ne peut pas se déplacer.

Vocabulaire : $p$ est un **point d'extremum local** de $f:S\to\R$ s'il existe un voisinage $W$ de $p$ **dans $S$** (topologie induite) tel que $f(p')\le f(p)$ pour tout $p'\in W$ (maximum local) ou $f(p')\ge f(p)$ pour tout $p'\in W$ (minimum local). $f$ **différentiable** sur $S$ : $f\circ x$ est différentiable pour tout paramétrage local $x$ ([[ch09-fonction-differentiable-sur-sous-variete-def]]) ; $df_p:T_pS\to\R$ est sa différentielle ([[ch09-differentielle-entre-sous-varietes-def]]).

## Énoncé

**Théorème (poly, Théorème IX.7.31, p. 168).** Soit $S$ une sous-variété de dimension $m$ de $\R^N$ et soit $f : S\to\R$ une fonction différentiable de $S$ à valeurs réelles. Si $p$ est un point d'extremum local de $f$, alors $df_p=0$ sur $T_pS$.

Autrement dit, tout extremum local de $f$ est un **point critique** de $f$ ([[ch09-point-critique-sous-variete-def]]).

## Hypothèses

### H1 — $f$ différentiable (au moins en $p$)

**Rôle.** Elle donne un sens à $df_p$, et rend $f\circ x$ différentiable en $q=x^{-1}(p)$, ce qui permet d'appliquer la condition du premier ordre sur l'ouvert $U$.

**Si on la retire.** $S=\R$ (ouvert, donc sous-variété), $f(t)=|t|$ : minimum en $0$, mais $f$ n'est pas dérivable en $0$, et il n'y a pas de « $df_0$ » à annuler. Sur la sphère : $f(p)=\norm{p-e_3}$ sur $\mathbb S^2$ a un minimum en $e_3$ où elle n'est pas différentiable (le long du méridien $\alpha(t)=(\sin t,0,\cos t)$, $f(\alpha(t))=2|\sin(t/2)|$, qui a un point anguleux en $t=0$) ; c'est pourquoi l'Exemple IX.7.22 demande $p_0\notin S$.

### H2 — $S$ est une sous-variété (sans bord), extremum pour la topologie de $S$

**Rôle.** Autour de $q=x^{-1}(p)$, l'ensemble de départ $U$ est un **ouvert** de $\R^m$ : on peut aller dans toutes les directions $\pm w$, c'est ce qui force la dérivée à s'annuler des deux côtés.

**Si on la retire.** $A=[0,+\infty[$ n'est pas une sous-variété ([[ch09-contre-ex-demi-droite]]) : la fonction $f(t)=t$ y a un minimum en $0$, alors que $f'(0)=1\neq0$. La condition échoue parce que l'on ne peut se déplacer que d'un seul côté à partir du « bord » $0$.

### Remarque — condition nécessaire, pas suffisante

La réciproque est fausse : $f(t)=t^3$ sur $S=\R$ a $f'(0)=0$ sans extremum en $0$ ; sur un tore, la fonction hauteur a des **cols** qui sont des points critiques sans être des extrema (voir les exemples).

## Idée de la preuve

On lit $f$ dans un paramétrage $x$ : $q=x^{-1}(p)$ est un extremum local de $f\circ x$ sur l'ouvert $U$, donc $d(f\circ x)_q=0$ (cas classique, en dérivant $t\mapsto f\circ x(q+tw)$). Comme $T_pS=dx_q(\R^m)$ et $df_p(dx_q(w))=d(f\circ x)_q(w)$, on a $df_p=0$.

## Preuve

Le poly n'écrit pas la preuve (elle « découle aisément » du cas d'un ouvert de $\R^m$) ; la voici. Supposons que $p$ soit un maximum local (pour un minimum, remplacer $f$ par $-f$) : il existe un voisinage $W$ de $p$ dans $S$ tel que $f\le f(p)$ sur $W$.

**Étape 1 : passage dans un paramétrage.** Soit $x:U\to S$ un paramétrage local en $p$, $x(q)=p$. Comme $x$ est continue, $U'=x^{-1}(W\cap x(U))$ est un voisinage de $q$ dans $U$, et pour $u\in U'$, $(f\circ x)(u)\le f(p)=(f\circ x)(q)$ : $q$ est un maximum local de $G=f\circ x$, fonction définie sur l'ouvert $U$ de $\R^m$ et différentiable en $q$ (Définition IX.7.1).

**Étape 2 : condition du premier ordre sur un ouvert.** Soit $w\in\R^m$. Pour $|t|$ assez petit, $q+tw\in U'$ ; la fonction $\gamma(t)=G(q+tw)$ est dérivable en $0$ de dérivée $\gamma'(0)=dG_q(w)$ (règle de la chaîne), et $\gamma(t)\le\gamma(0)$. Donc $\dfrac{\gamma(t)-\gamma(0)}{t}\le0$ pour $t>0$ et $\ge0$ pour $t<0$ ; en passant à la limite $t\to0^\pm$, $\gamma'(0)\le0$ et $\gamma'(0)\ge0$, d'où $dG_q(w)=0$. Ainsi $d(f\circ x)_q=0$.

**Étape 3 : retour sur $S$.** Soit $v\in T_pS$. Par la Proposition IX.7.9 ([[ch09-espace-tangent-image-dx]]), $v=dx_q(w)$ pour un $w\in\R^m$, et par la propriété 1 de la Définition IX.7.15 ([[ch09-differentielle-entre-sous-varietes-def]]),
$$
df_p(v)=d(f\circ x)_q(w)=0 .
$$
Donc $df_p=0$ sur $T_pS$. $\square$

*Variante par les courbes :* si $v=\alpha'(0)$ avec $\alpha:I\to S$ de classe $C^1$, $\alpha(0)=p$, alors $t\mapsto f(\alpha(t))$ a un extremum local en $t=0$ (point intérieur de $I$), donc $0=(f\circ\alpha)'(0)=df_p(v)$ (propriété 2 de la Définition IX.7.15).

## Preuve à trous

Supposons $p$ maximum local de $f$, et soit $x:U\to S$ un paramétrage en $p=x(q)$. Par continuité de $x$, <trou indice="que devient l'hypothèse dans la carte ?">$q$ est un maximum local de $f\circ x$ sur l'ouvert $U$</trou>. Pour $w\in\R^m$, la fonction $\gamma(t)=(f\circ x)(q+tw)$ est définie pour $|t|$ petit, dérivable en $0$ de dérivée $d(f\circ x)_q(w)$, et maximale en $0$ ; les taux d'accroissement sont <trou indice="regarder t>0 et t<0">$\le0$ à droite et $\ge0$ à gauche, donc $\gamma'(0)=0$</trou>. Ainsi $d(f\circ x)_q=0$. Enfin tout $v\in T_pS$ s'écrit <trou indice="description de T_pS par un paramétrage">$v=dx_q(w)$, $w\in\R^m$</trou>, et $df_p(v)=d(f\circ x)_q(w)=0$. $\square$

## Exemples

* **Altitude sur la sphère.** $f(x,y,z)=z$ sur $\mathbb S^2$ ; $df_p(v)=v_3=\langle v,e_3\rangle$ ([[ch09-ex-fonction-hauteur]]) et $T_p\mathbb S^2=p^\perp$. Donc $df_p=0\iff e_3\perp p^\perp\iff e_3\in\R p\iff p=\pm e_3$. Comme $\mathbb S^2$ est compacte et $f$ continue, $f$ atteint son maximum et son minimum ; ce sont des points critiques, donc $\max f=f(e_3)=1$ et $\min f=f(-e_3)=-1$. Remarquer que la différentielle du prolongement $g(x,y,z)=z$ **ne** s'annule **jamais** sur $\R^3$ : seule sa restriction à $T_p\mathbb S^2$ s'annule.
* **Vecteur propre d'une matrice symétrique** (poly, Exercice IX.7.36). Soit $A$ symétrique réelle et $f(v)=\langle Av,v\rangle$ sur $\mathbb S^{N-1}$. Alors $df_v(w)=\langle Aw,v\rangle+\langle Av,w\rangle=2\langle Av,w\rangle$, et $T_v\mathbb S^{N-1}=v^\perp$. Au point $v_0$ où $f$ atteint son maximum (compacité), $\langle Av_0,w\rangle=0$ pour tout $w\perp v_0$, donc $Av_0\in(v_0^\perp)^\perp=\R v_0$ : $v_0$ est un **vecteur propre**, de valeur propre $\langle Av_0,v_0\rangle=\max f$.
* **Cols du tore.** Tore $x(\theta,\varphi)=\big((a+r\cos\varphi)\cos\theta,(a+r\cos\varphi)\sin\theta,r\sin\varphi\big)$, $0<r<a$, et $f=$ première coordonnée (« hauteur » quand le tore est posé debout). $f\circ x=(a+r\cos\varphi)\cos\theta$ ; $\partial_\theta(f\circ x)=-(a+r\cos\varphi)\sin\theta$ et $\partial_\varphi(f\circ x)=-r\sin\varphi\cos\theta$. Comme $a+r\cos\varphi\ge a-r>0$, les points critiques sont $\sin\theta=0$ et $\sin\varphi=0$ : quatre points, de valeurs $a+r$ (max), $-(a+r)$ (min), et $\pm(a-r)$. En $(\theta,\varphi)=(0,\pi+s)$, $f\circ x=(a-r\cos s)\cos\theta\approx(a-r)+\tfrac r2s^2-\tfrac{a-r}2\theta^2$ : c'est un **col**, point critique qui n'est pas un extremum.

## Pièges

* > ⚠️ Il faut $df_p=0$ **sur $T_pS$ seulement**. Si $f=g|_S$, la bonne condition est $dg_p(T_pS)=0$ ([[ch09-ex-point-critique-restriction]]), pas $dg_p=0$ ; en coordonnées, c'est la condition de Lagrange ([[ch09-multiplicateurs-lagrange]]).
* > ⚠️ Condition **nécessaire** seulement : un point critique peut être un col. Pour conclure à un maximum, il faut un argument de plus (compacité + comparaison des valeurs aux points critiques, ou signe de la hessienne : [[ch09-hessienne-def]]).
* L'extremum est **local pour la topologie de $S$** : on compare $f(p)$ aux valeurs en des points de $S$ proches de $p$, pas en des points de $\R^N$.
* Pour obtenir l'existence d'un extremum, on utilise en général la **compacité** de $S$ (fermée bornée dans $\R^N$) et la continuité de $f$ ; une sous-variété non compacte peut n'avoir aucun extremum (exemple : $f(x,y)=x$ sur la droite $y=0$).
